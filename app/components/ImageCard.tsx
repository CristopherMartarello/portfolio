"use client";

import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";

type ImageCardProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectFit?: "fit" | "cover";
};

export const ImageCard = ({
  src,
  alt,
  className = "",
  priority = false,
  objectFit = "fit",
}: ImageCardProps) => {
  return (
    <WobbleCard containerClassName={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`rounded-2xl ${
          objectFit === "fit" ? "object-fit" : "object-cover"
        }`}
        priority={priority}
      />
    </WobbleCard>
  );
};
