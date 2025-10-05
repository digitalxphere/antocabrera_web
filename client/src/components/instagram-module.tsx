import { Instagram, ExternalLink, Heart, MessageCircle, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InstagramModule() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/paula_cabrera_psicologa/', '_blank');
  };

  // Contenido basado en posts reales de Paula con imágenes
  const recentPosts = [
    {
      id: 1,
      type: "personal",
      description: "Farolitos del lugar seguro pendientes de exponer 🌻. Días de informes y trabajo con papás. Mi hijo: 'no todos tienen la suerte de trabajar en lo que aman' 🔆",
      color: "from-amber-400 to-orange-500",
      image: "/attached_assets/Paula cabrera _1757027847931.jpeg"
    },
    {
      id: 2,
      type: "art",
      description: "Ejercicio de arteterapia con materiales sensoriales para desarrollar habilidades emocionales",
      color: "from-green-400 to-blue-500",
      image: "/attached_assets/WhatsApp Image 2025-08-31 at 12.02.00_1757027867932.jpeg"
    },
    {
      id: 3,
      type: "education",
      description: "Psicoeducación para padres sobre neurodiversidad y estrategias de apoyo",
      color: "from-orange-400 to-pink-500"
    },
    {
      id: 4,
      type: "workshop",
      description: "Taller de arte y expresión emocional para adolescentes",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-orange-50/50" data-testid="instagram-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="instagram-title">
            Sígueme en mis redes
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-white border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" data-testid="instagram-card">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Perfil de Instagram */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-full p-1 mx-auto lg:mx-0 mb-4">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="/attached_assets/WhatsApp Image 2025-08-31 at 11.56.26_1757113012080.jpeg"
                      alt="Paula Cabrera Fuentes - Psicóloga"
                      className="w-20 h-20 rounded-full object-cover"
                      style={{ objectPosition: '50% 35%' }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1" data-testid="instagram-handle">
                  @paula_cabrera_psicologa
                </h3>
                <p className="text-sm text-muted-foreground mb-4" data-testid="instagram-bio">
                  Psicóloga • Arteterapia
                </p>
                <Button 
                  onClick={handleInstagramClick}
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300"
                  data-testid="button-follow-instagram"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Seguir
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </div>

              {/* Grid de publicaciones recientes */}
              <div className="flex-grow">
                <h4 className="text-lg font-semibold text-foreground mb-4 text-center lg:text-left">Publicaciones Recientes</h4>
                <div className="grid grid-cols-2 gap-4">
                  {recentPosts.slice(0, 2).map((post) => (
                    <div 
                      key={post.id}
                      onClick={handleInstagramClick}
                      className={`aspect-square rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden`}
                      data-testid={`instagram-post-${post.id}`}
                    >
                      {post.image ? (
                        <>
                          <img 
                            src={post.image} 
                            alt={post.description}
                            className="w-full h-full object-contain bg-gray-50"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-black/20 p-4 flex flex-col justify-between">
                            <div className="flex justify-between items-start hidden sm:flex">
                              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                {post.type === "personal" && <Heart className="w-4 h-4 text-white" />}
                                {post.type === "art" && <Palette className="w-4 h-4 text-white" />}
                                {post.type === "education" && <MessageCircle className="w-4 h-4 text-white" />}
                                {post.type === "workshop" && <div className="w-3 h-3 bg-white rounded-full" />}
                              </div>
                              <Instagram className="w-4 h-4 text-white/70" />
                            </div>
                            <div className="text-white text-xs leading-relaxed hidden sm:block font-medium">
                              {post.description}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${post.color} p-4 flex flex-col justify-between`}>
                          <div className="flex justify-between items-start hidden sm:flex">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                              {post.type === "personal" && <Heart className="w-4 h-4 text-white" />}
                              {post.type === "art" && <Palette className="w-4 h-4 text-white" />}
                              {post.type === "education" && <MessageCircle className="w-4 h-4 text-white" />}
                              {post.type === "workshop" && <div className="w-3 h-3 bg-white rounded-full" />}
                            </div>
                            <Instagram className="w-4 h-4 text-white/70" />
                          </div>
                          <div className="text-white text-xs leading-relaxed hidden sm:block">
                            {post.description}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <button
                    onClick={handleInstagramClick}
                    className="text-pink-600 hover:text-pink-700 text-sm font-medium transition-colors"
                    data-testid="button-view-more-posts"
                  >
                    Ver más publicaciones →
                  </button>
                </div>
              </div>
            </div>

          </Card>
        </div>

        {/* Call to action adicional */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Únete a nuestra comunidad de familias y profesionales comprometidos con la neurodiversidad
          </p>
        </div>
      </div>
    </section>
  );
}