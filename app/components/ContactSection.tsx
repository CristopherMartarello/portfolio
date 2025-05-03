import ShinyText from "./animations/shiny-text";
import Container from "./Container";
import { BaselineWhatsappIcon } from "../icons/WhatsappIcon";
import { LinkedinRectIcon } from "../icons/LinkedinIcon";
import { GithubIcon } from "../icons/GitHubIcon";
import GlassIcons from "./animations/glass-icons";
import { LogoInstagram } from "../icons/InstagramIcon";
import { GmailIcon } from "../icons/GmailIcon";
import Button from "./Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ContactSection = () => {
  const t = useTranslations("ContactSection");
  const items = [
    {
      icon: <LinkedinRectIcon width={"4rem"} height={"4rem"} />,
      color: "blue",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/cristophermartarello/",
    },
    {
      icon: <LogoInstagram width={"4rem"} height={"4rem"} />,
      color: "blue",
      label: "Instagram",
      url: "https://www.instagram.com/cristopher_m1/",
    },
    {
      icon: <BaselineWhatsappIcon width={"4rem"} height={"4rem"} />,
      color: "blue",
      label: "WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=5549988001319&text=Olá+Cristopher&type=phone_number&app_absent=0",
    },
    {
      icon: <GmailIcon width={"4rem"} height={"4rem"} />,
      color: "blue",
      label: "Gmail",
      url: "mailto:crisrossi1313@gmail.com",
    },
    {
      icon: <GithubIcon width={"4rem"} height={"4rem"} />,
      color: "blue",
      label: "GitHub",
      url: "https://github.com/CristopherMartarello",
    },
  ];
  return (
    <div
      id="contact"
      className="w-full flex flex-col dark:bg-brand-dark-blue/[0.90] bg-brand-blue-50 antialiased relative overflow-visible"
    >
      <Container>
        <div className="flex flex-col items-center justify-center m-20">
          <ShinyText
            text={t("title_shiny_1")}
            disabled={false}
            speed={2}
            className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold font-poppins"
          />
          <div className="flex flex-col items-center space-y-10">
            <span className="text-xl md:text-2xl lg:text-2xl xl:text-3xl mt-10 dark:text-white text-zinc-800 font-semibold text-center">
              {t("description_1")}
            </span>
            <span className="text-xl md:text-2xl lg:text-2xl xl:text-3xl dark:text-white text-zinc-800 font-semibold text-center">
              {t("description_2")}
            </span>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5549988001319&text=Olá+Cristopher&type=phone_number&app_absent=0"
              }
              target="_blank"
            >
              <Button
                icon={<BaselineWhatsappIcon width={"3rem"} height={"3rem"} />}
                text={t("button_text_1")}
                bgColor="bg-green-700"
                className="rounded-full hover:bg-green-600"
              />
            </Link>
          </div>
          <div className="p-10 rounded-3xl">
            <GlassIcons items={items} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
