import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  onClick,
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      fill
      sizes="(max-width: 280px) 100vw"
      priority
    />
  );
}
