import { MapPin, Calendar, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

const serviceLinks = [
  { name: "Psicoterapia Individual", href: "/servicios#individual" },
  { name: "Familia y Pareja", href: "/servicios#family" },
  { name: "Psicoeducación Padres", href: "/servicios#psychoeducation" },
  { name: "Talleres Arteterapia", href: "/talleres" },
];

const legalLinks = [
  { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
  { name: "Política de Privacidad", href: "/politica-privacidad" },
  { name: "Términos de Servicio", href: "/terminos" },
];

export function Footer() {

  return (
    <footer className="py-16" style={{backgroundColor: '#D97706', color: '#FFFFFF'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/attached_assets/Paula_cabrera_psicologa_logo_1756657755055.webp" 
                alt="Antonia Cabrera - Psicóloga" 
                className="w-12 h-12 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">Antonia Cabrera</h3>
                <p className="text-sm text-white">Psicóloga</p>
              </div>
            </div>
            <p className="text-white text-sm">
              Especialista en arteterapia y terapia de juego con adolescentes.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2 text-sm text-white">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-primary transition-colors"
                    data-testid={`footer-service-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info (NAP) */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contacto</h3>
            <div className="space-y-3 text-sm text-white">
              <div className="flex items-center gap-2" data-testid="contact-location">
                <MapPin className="w-5 h-5 text-white" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2" data-testid="contact-phone">
                <FaWhatsapp className="w-4 h-4 text-white" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2" data-testid="contact-email">
                <Mail className="w-4 h-4 text-white" />
                <a 
                  href="mailto:paula.cabrera.f@gmail.com" 
                  className="text-white hover:text-white/80 transition-colors"
                >
                  paula.cabrera.f@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2" data-testid="contact-hours">
                <Calendar className="w-4 h-4 text-white" />
                <div>
                  {CONTACT_INFO.hours.map((hour, index) => (
                    <div key={index}>{hour}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-white">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-primary transition-colors"
                    data-testid={`footer-legal-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div>
              <p className="text-sm text-white">
                © 2025 Antonia Cabrera. Todos los derechos reservados.
              </p>
              <p className="text-xs text-white/80 mt-2">
                75908 Registro Ministerio de Salud
              </p>
              <p className="text-xs text-white/80">
                Folio 80884 Secretaría Ministerial de Educación
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-white/80">
              MAI Smart by <a href="https://www.digitalxphere.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 underline">www.digitalxphere.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
