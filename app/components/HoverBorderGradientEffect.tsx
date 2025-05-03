"use client";
import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

interface HoverBorderGradientEffectProps {
  icon: React.ReactNode;
  title: string;
}

export function HoverBorderGradientEffect({
  icon,
  title,
}: HoverBorderGradientEffectProps) {
  return (
    <div className="flex text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-gradient-to-b dark:from-[#102347] dark:to-[#1E3A8A] bg-gradient-to-b from-[#1E3A8A] to-[#2563EB] dark:text-white flex items-center gap-3 py-3 px-6 text-base md:text-xl font-semibold"
      >
        <div className="w-[2rem] h-[2rem] sm:w-[2rem] sm:h-[2rem] md:w-[4rem] md:h-[4rem] flex items-center justify-center">
          {icon}
        </div>
        <span className="whitespace-nowrap">{title}</span>
      </HoverBorderGradient>
    </div>
  );
}
