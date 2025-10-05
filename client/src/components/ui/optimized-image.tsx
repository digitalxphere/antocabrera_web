import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface OptimizedImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
  sizes?: string;
  responsive?: boolean;
  width?: number | string;
  height?: number | string;
}

/**
 * OptimizedImage - Componente de imagen optimizado para rendimiento
 * 
 * Características:
 * - Lazy loading automático para imágenes no críticas
 * - Decodificación asíncrona para mejor rendimiento
 * - Soporte para imágenes críticas (priority=true)
 * - Clases de utilidad para object-fit
 * - Completamente accesible con alt text requerido
 */
export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  objectFit = "cover",
  sizes,
  responsive = true,
  width,
  height,
  ...props
}: OptimizedImageProps) {
  const imageClasses = cn(
    "transition-opacity duration-300",
    objectFit === "cover" && "object-cover",
    objectFit === "contain" && "object-contain",
    objectFit === "fill" && "object-fill",
    objectFit === "scale-down" && "object-scale-down",
    objectFit === "none" && "object-none",
    responsive && "w-full h-auto",
    className
  );

  return (
    <img
      src={src}
      alt={alt}
      className={imageClasses}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      sizes={sizes}
      width={width}
      height={height}
      {...props}
    />
  );
}