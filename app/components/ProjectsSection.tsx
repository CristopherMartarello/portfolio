"use client";
import Container from "./Container";
import ShinyText from "./animations/shiny-text";
import BlurText from "./animations/blur-text";
import { SwiperEffect } from "./Swiper";
import { useTranslations } from "next-intl";

const ProjectsSection = () => {
  const t = useTranslations("ProjectsSection");
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col dark:bg-brand-dark-blue/[0.90] bg-brand-blue-50 antialiased relative overflow-hidden"
    >
      <Container>
        <div className="flex gap-4 mt-10 md:mt-24 lg:mt-40">
          <ShinyText
            text={t("title_shiny_1")}
            disabled={false}
            speed={2}
            className="font-poppins text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold"
          />
        </div>
        <BlurText
          text={t("description")}
          delay={30}
          animateBy="words"
          direction="bottom"
          className="text-xl md:text-2xl lg:text-2xl xl:text-3xl my-4 font-semibold"
        />
      </Container>
      <SwiperEffect />
    </div>
  );
};

export default ProjectsSection;
