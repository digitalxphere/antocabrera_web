import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchDialog } from "@/components/search-dialog";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/sobre-antonia-cabrera-psicologa" },
  { name: "FAQ", href: "/preguntas-frecuentes" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSchedule = () => {
    // TODO: Integrate with Calendly/Cal.com
    window.open("https://calendly.com/paula-cabrera", "_blank");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'translate-y-0 header-glass' 
        : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <div className="block">
              <h2 className="text-base sm:text-lg font-semibold text-white">Antonia Cabrera</h2>
              <p className="text-xs sm:text-sm text-white/90 font-medium">Psicóloga • Arteterapia</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-white/80 transition-colors ${
                  location === item.href ? "text-white font-medium underline" : ""
                }`}
                data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              className="text-white hover:text-white/80 hover:bg-white/10"
              data-testid="button-search"
            >
              <Search className="w-5 h-5" />
            </Button>
            
            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="md:hidden"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium transition-colors p-2 rounded-lg ${
                        location === item.href 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground hover:text-primary hover:bg-muted"
                      }`}
                      data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t border-border space-y-3">
                    <Button
                      onClick={() => {
                        setSearchOpen(true);
                        setMobileMenuOpen(false);
                      }}
                      variant="outline"
                      className="w-full"
                      data-testid="button-search-mobile"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Buscar
                    </Button>
                    <Button
                      onClick={() => {
                        handleWhatsApp();
                        setMobileMenuOpen(false);
                      }}
                      variant="outline"
                      className="w-full"
                      data-testid="button-whatsapp-mobile"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  );
}
