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
      className="min-h-screen w-full flex flex-col dark:bg-brand-dark-blue/[0.90] bg-brand-blue-50 antialiased relative overflow-hidden"
    >
      {isDark && <div className="hidden sm:block absolute inset-0  pointer-events-none">
        <Spotlight />
      </div>}
      <HeaderSection />
      <Container>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          {/* Esquerda */}
          <div className="max-w-[64.5rem] space-y-8">
            <TypewriterEffectSmoothEffect />
            <h1 className="dark:text-white text-brand-dark-blue font-poppins text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
              {t("title")}
            </h1>
            <p className="dark:text-zinc-400 text-zinc-600 text-xl md:text-2xl lg:text-2xl xl:text-2xl">
              {t("description")}
            </p>
            <Button text={t("resume")} />
          </div>

          {/* Direita */}
          <div className="relative mt-10 ml-0 sm:ml-10 md:ml-10 lg:ml-32 xl:ml-40
                w-96 h-96 sm:w-[24rem] sm:h-[28rem] md:w-[24rem] md:h-[28rem] lg:w-[40rem] lg:h-[48rem] xl:w-[42rem] xl:h-[50rem]">
            <Image
              src="/cris_frontal.jpg"
              alt="Picture of the author"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </Container>
      <div className="my-32 py-6 border-t border-b dark:border-zinc-800 border-brand-blue-400">
        <InfiniteMovingCards
          items={competencies}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}
