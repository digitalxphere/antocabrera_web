import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Info } from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Selecciona un tipo de servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  privacy: z.boolean().refine(val => val === true, "Debes aceptar la política de privacidad"),
  website: z.string().optional(), // Honeypot field
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const serviceOptions = [
  { value: "individual", label: "Psicoterapia Individual" },
  { value: "family", label: "Familia y Pareja" },
  { value: "psychoeducation", label: "Psicoeducación para Padres" },
  { value: "workshop", label: "Talleres de Arteterapia" },
];

export function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
      privacy: false,
      website: "", // Honeypot
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Check honeypot
      if (data.website) {
        throw new Error("Spam detected");
      }
      
      const { privacy, website, ...submitData } = data;
      return apiRequest("POST", "/api/contact", submitData);
    },
    onSuccess: () => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por tu mensaje. Te contactaremos pronto.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Hubo un error al enviar el mensaje. Intenta nuevamente.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data);
  };

  return (
    <Card className="bg-card border border-border rounded-3xl" data-testid="contact-form-card">
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold text-foreground mb-6">Solicitar Información</h3>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
            {/* Honeypot field */}
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <input 
                  {...field} 
                  type="text" 
                  style={{ display: "none" }} 
                  tabIndex={-1} 
                  autoComplete="off" 
                />
              )}
            />
            
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-input border border-border rounded-xl"
                        data-testid="input-first-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-input border border-border rounded-xl"
                        data-testid="input-last-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico *</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="email" 
                      className="bg-input border border-border rounded-xl"
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="tel" 
                      className="bg-input border border-border rounded-xl"
                      data-testid="input-phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Servicio *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-input border border-border rounded-xl" data-testid="select-service-type">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} data-testid={`service-option-${option.value}`}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje *</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field}
                      rows={4}
                      placeholder="Cuéntame un poco sobre tu situación y cómo puedo ayudarte..."
                      className="bg-input border border-border rounded-xl resize-none"
                      data-testid="textarea-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1"
                      data-testid="checkbox-privacy"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-muted-foreground">
                      Acepto la{" "}
                      <a href="/politica-privacidad" className="text-primary hover:underline">
                        política de privacidad
                      </a>{" "}
                      y autorizo el tratamiento de mis datos personales *
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={submitMutation.isPending}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors"
              data-testid="button-submit-contact"
            >
              {submitMutation.isPending ? "Enviando..." : "Enviar Solicitud"}
            </Button>
          </form>
        </Form>
        
        <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-xl">
          <p className="text-sm text-accent-foreground/80">
            <Info className="w-4 h-4 inline mr-2" />
            <strong>Importante:</strong> Este formulario no es para consultas de urgencia. 
            En caso de emergencia, contacta servicios de salud mental de urgencia.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
