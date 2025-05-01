"use client";
import React, { useState } from "react";
import { Spotlight } from "@/app/components/ui/spotlight-new";
import Container from "./Container";
import { TypewriterEffectSmoothEffect } from "./TypewriterSmoothDemo";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { skills } from "../constants/skills";
import Button from "./Button";
import HeaderSection from "./HeaderSection";
import { useTheme } from "../context/ThemeContext";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const [competencies] = useState(skills);
  const { isDark } = useTheme();
  const t = useTranslations("HeroSection");
  return (
    <div
      id="home"
      className="h-screen w-full flex flex-col dark:bg-brand-dark-blue/[0.90] bg-brand-blue-50 antialiased relative overflow-hidden"
    >
      {isDark && <Spotlight />}
      <HeaderSection />
      <Container>
        <div className="flex justify-between">
          {/* Esquerda */}
          <div className="max-w-[64.5rem] space-y-8 mt-[25rem]">
            <TypewriterEffectSmoothEffect />
            <h1 className="dark:text-white text-brand-dark-blue font-poppins text-7xl font-semibold">
              {t("title")}
            </h1>
            <p className="dark:text-zinc-400 text-zinc-600 text-2xl">
              {t("description")}
            </p>
            <Button text={t("resume")} />
          </div>

          {/* Direita */}
          <div className="relative w-[52rem] h-[60rem] mt-[5rem] ml-40">
            <Image
              src="/cris_frontal.jpg"
              alt="Picture of the author"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </Container>
      <div className="mt-28 py-6 border-t border-b dark:border-zinc-800 border-brand-blue-400">
        <InfiniteMovingCards
          items={competencies}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}
