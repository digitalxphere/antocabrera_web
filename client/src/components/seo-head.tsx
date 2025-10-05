import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object | object[];
}

const defaultProps = {
  title: "Psicóloga Paula Cabrera Fuentes especialista en jóvenes y adolescentes - Concón - Viña del Mar",
  description: "Atención psicológica presencial y online para jóvenes y adolescentes en Concón y Viña del Mar. Evaluaciones, psicoterapia y talleres.",
  keywords: "psicóloga Concón, psicóloga Viña del Mar, psicoterapia adolescentes, TEA autismo, neurodiversidad, arteterapia, psicoterapia online, psicóloga juvenil, terapia familiar, Paula Cabrera Fuentes",
  ogImage: "https://paulacabrerapsicologa.cl/og-image.png",
  canonical: "https://paulacabrerapsicologa.cl"
};

export function SEOHead({ 
  title = defaultProps.title,
  description = defaultProps.description,
  keywords = defaultProps.keywords,
  ogImage = defaultProps.ogImage,
  canonical = defaultProps.canonical,
  structuredData
}: SEOHeadProps) {
  
  // Asegurar que la imagen OG use el dominio de producción
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `https://paulacabrerapsicologa.cl${ogImage}`;
  
  return (
    <Helmet>
      {/* Basic SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Paula Cabrera Fuentes" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="language" content="es-CL" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="CL-VS" />
      <meta name="geo.placename" content="Concón, Viña del Mar" />
      <meta name="geo.position" content="-32.9278;-71.5279" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="es-cl" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Paula Cabrera Fuentes - Psicóloga especialista en TEA y adolescentes" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Paula Cabrera Fuentes - Psicóloga Especialista en Jóvenes y Adolescentes" />
      <meta property="og:locale" content="es_CL" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:image:alt" content="Paula Cabrera Fuentes - Psicóloga especialista en TEA" />
      
      {/* Additional Meta Tags */}
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.creator" content="Paula Cabrera Fuentes" />
      <meta name="DC.subject" content="Psicoterapia, TEA, Adolescentes, Neurodiversidad" />
      <meta name="DC.language" content="es-CL" />
      
      {/* Google Analytics and Tag Manager - Only add if not already present */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P9GCXVFL');
        `}
      </script>
      
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-WPREMLSC7V"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WPREMLSC7V');
        `}
      </script>
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}