import { Instagram, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InstagramModule() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/ps.antoniapaz/', '_blank');
  };

  const recentPosts = [
    {
      id: 1,
      image: "/attached_assets/instagram_post_taller_musica.webp"
    },
    {
      id: 2,
      image: "/attached_assets/instagram_post_avistamiento.webp"
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
                      src="/attached_assets/instagram_profile.webp"
                      alt="Antonia Cabrera - Psicóloga"
                      className="w-20 h-20 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1" data-testid="instagram-handle">
                  @ps.antoniapaz
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
                  {recentPosts.map((post) => (
                    <div 
                      key={post.id}
                      onClick={handleInstagramClick}
                      className="aspect-square rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                      data-testid={`instagram-post-${post.id}`}
                    >
                      <img 
                        src={post.image} 
                        alt="Publicación de Instagram"
                        className="w-full h-full object-cover bg-gray-50"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
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