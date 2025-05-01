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
        className="dark:bg-gradient-to-b dark:from-[#102347] dark:to-[#1E3A8A] bg-gradient-to-b from-[#1E3A8A] to-[#2563EB] dark:text-white flex gap-2 items-center space-x-2"
      >
        {icon}
        <span className="font-semibold text-xl">{title}</span>
      </HoverBorderGradient>
    </div>
  );
}
