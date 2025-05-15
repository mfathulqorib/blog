"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { StaticImageData } from "next/image";

interface ThemeAwareImageProps {
  lightSrc: StaticImageData;
  darkSrc: StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ThemeAwareImage({
  lightSrc,
  darkSrc,
  alt,
  className,
  priority = false,
}: ThemeAwareImageProps) {
  const { resolvedTheme } = useTheme();
  
  return (
    <Image 
      alt={alt}
      src={resolvedTheme === "light" ? lightSrc : darkSrc}
      className={className}
      priority={priority}
    />
  );
}
