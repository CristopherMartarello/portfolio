"use client";
import { useTranslations } from "next-intl";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothEffect() {
  const t = useTranslations("HeroSection");
  const greetingText = t("greetings");

  const words = greetingText.split(" ").map((word) => {
    console.log(word);
    if (word.includes("Cristopher!")) {
      return {
        text: word,
        className: "text-blue-500 dark:text-blue-500",
      };
    }
    return { text: word };
  });

  return (
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
