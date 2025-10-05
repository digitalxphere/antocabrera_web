import { useEffect } from "react";

interface ImagePreloaderProps {
  images: string[];
}

/**
 * ImagePreloader - Componente para precargar imágenes críticas
 * 
 * Este componente se encarga de agregar <link rel="preload"> para imágenes críticas
 * mejorando el tiempo de carga inicial de la página
 */
export function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    const preloadLinks: HTMLLinkElement[] = [];

    images.forEach((imageSrc, index) => {
      // Verificar si ya existe un preload para esta imagen
      const existingPreload = document.querySelector(`link[rel="preload"][href="${imageSrc}"]`);
      
      if (!existingPreload) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = imageSrc;
        link.crossOrigin = "anonymous";
        link.dataset.preloadId = `image-preload-${index}`;
        
        document.head.appendChild(link);
        preloadLinks.push(link);
      }
    });

    // Cleanup function para remover los preloads cuando el componente se desmonte
    return () => {
      preloadLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [images]);

  return null;
}