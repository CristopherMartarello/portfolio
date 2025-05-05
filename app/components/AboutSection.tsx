"use client";
import {
  Cloud,
  Code,
  Code2,
  Handshake,
  LayoutDashboard,
  PaintBucket,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { LampIcon } from "../icons/LampIcon";
import { Americasglobe } from "../icons/LanguageIcon";
import { GraduationCapIcon } from "../icons/GraduationIcon";
import { CompanyIcon } from "../icons/CompanyIcon";
import { RocketIcon } from "../icons/RocketIcon";

import Container from "./Container";
import ItemList from "./ItemList";
import ShinyText from "./animations/shiny-text";
import BlurText from "./animations/blur-text";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("AboutSection");
  return (
    <div
      id="about-me"
      className="w-full flex flex-col dark:bg-brand-dark-blue/[0.90] bg-brand-blue-50 antialiased relative overflow-visible"
    >
      <Container>
        <div className="flex justify-between">
          {/* DIREITA */}
          <div className="w-full justify-center text-center">
            <h1 className="text-brand-dark-blue dark:text-white font-poppins text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
              {t("title")}{" "}
              <span className="font-poppins text-brand-blue-500 leading-relaxed">
                <ShinyText
                  text={t("title_shiny")}
                  disabled={false}
                  speed={2}
                  className="font-poppins text-brand-blue-500"
                />
              </span>
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-10 md:mt-24 flex-wrap space-x-10 gap-12">
          <ItemList icon={<Code color="#2563EB" />} text={t("item_list_1")} />
          <ItemList
            icon={<LayoutDashboard color="#2563EB" />}
            text={t("item_list_2")}
          />
          <ItemList
            icon={<Smartphone color="#2563EB" />}
            text={t("item_list_3")}
          />
          <ItemList
            icon={<ShieldCheck color="#2563EB" />}
            text={t("item_list_4")}
          />
          <ItemList icon={<Rocket color="#2563EB" />} text={t("item_list_5")} />
          <ItemList icon={<Cloud color="#2563EB" />} text={t("item_list_6")} />
        </div>
        <div className="hidden dark:block absolute left-1/2 top-0 -translate-x-1/2 w-[65vw] h-[65vw] bg-gradient-to-br from-blue-500/30 to-purple-500/20 blur-[100px] rounded-full z-[-1] shadow-[0_0_100px_20px_rgba(99,102,241,0.15)]" />
        <div className="flex justify-center items-center gap-4 mt-16 md:mt-24">
          <ShinyText
            text={t("title_shiny_2")}
            disabled={false}
            speed={2}
            className="font-poppins text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md:mt-20 font-semibold">
          <BlurText
            text={t("blur_text_1")}
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center justify-center mb-8"
          />
          <BlurText
            text={t("blur_text_2")}
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center justify-center"
          />
        </div>
        <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center my-24 md:my-60 px-8 gap-24">
          <Timeline />
          <TimelineItem
            date="2021"
            description={t("timeline_item_1")}
            icon={<LampIcon />}
          />
          <TimelineItem
            date="2021"
            description={t("timeline_item_2")}
            icon={<Americasglobe />}
          />
          <TimelineItem
            date="2022"
            description={t("timeline_item_3")}
            icon={<GraduationCapIcon />}
          />
          <TimelineItem
            date="2023-2025"
            description={t("timeline_item_4")}
            icon={<CompanyIcon />}
          />
          <TimelineItem
            date="2025"
            description={t("timeline_item_5")}
            icon={<RocketIcon />}
          />
        </div>
        <ShinyText
          text={t("title_shiny_3")}
          disabled={false}
          speed={2}
          className="font-poppins text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold md:mt-20"
        />
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-20 mt-10 md:mt-20">
          {/* Accordion */}
          <div className="w-full">
            <Accordion
              type="single"
              defaultValue="item-1"
              className="text-2xl font-semibold"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-4 font-semibold">
                    <Code2 /> {t("accordion_title_1")}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xl md:text-2xl lg:text-2xl xl:text-2xl dark:text-zinc-400">
                  {t("accordion_content_1")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-4 font-semibold">
                    <PaintBucket /> {t("accordion_title_2")}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xl md:text-2xl lg:text-2xl xl:text-2xl dark:text-zinc-400">
                  {t("accordion_content_2")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex items-center gap-4 font-semibold">
                    <Handshake /> {t("accordion_title_3")}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xl md:text-2xl lg:text-2xl xl:text-2xl dark:text-zinc-400">
                  {t("accordion_content_3")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Mockups */}
          <div className="relative w-full max-w-[60rem] h-[40rem] flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute"
            >
              <Image
                src="/mockup_mac.svg"
                alt="Mockup Macbook"
                width={600}
                height={600}
                className="object-contain rounded-xl"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute end-0"
            >
              <Image
                src="/mockup_iphone.svg"
                alt="Mockup Iphone"
                width={150}
                height={150}
                className="object-contain rounded-xl z-10"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
