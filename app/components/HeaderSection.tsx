import Image from "next/image";
import Container from "./Container";
import NavbarSpan from "./NavbarSpan";
import { Switch } from "./ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FlagForBrazil } from "../icons/BrazilIcon";
import { FlagForUnitedStates } from "../icons/EUAIcon";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTheme } from "../context/ThemeContext";
import { useTranslations } from "next-intl";

const HeaderSection = () => {
  const [language, setLanguage] = useState("portuguese");
  const pathname = usePathname();
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();
  const t = useTranslations("HeaderSection");

  useEffect(() => {
    const savedLang = localStorage.getItem("app-language");
    if (savedLang === "portuguese" || savedLang === "english") {
      setLanguage(savedLang);
      const locale = savedLang === "portuguese" ? "pt" : "en";
      router.push(pathname, { locale });
    }
  }, []);

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    localStorage.setItem("app-language", value);
    const locale = value === "portuguese" ? "pt" : "en";
    router.push(pathname, { locale });
  };

  return (
    <div className="w-full py-4 flex flex-col antialiased  relative overflow-hidden">
      <Container>
        <div className="flex items-center justify-between">
          <Image
            src={"/cmd_logo.png"}
            height={175}
            width={175}
            alt="Logo cmd"
          />
          <div className="flex items-center gap-10">
            <div className="flex text-2xl items-center gap-16">
              <NavbarSpan href="#about-me" text={t("about")} />
              <NavbarSpan href="#projects" text={t("projects")} />
              <NavbarSpan href="#contact" text={t("contact")} />
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="w-full">
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger>
                  <SelectValue
                    placeholder="Linguagem"
                    defaultValue="portuguese"
                  >
                    <span className="flex items-center gap-4">
                      {language === "portuguese" ? (
                        <>
                          <FlagForBrazil />
                          <span className="font-semibold text-lg text-brand-blue-900 dark:text-white">
                            {t("portuguese_select")}
                          </span>
                        </>
                      ) : language === "english" ? (
                        <>
                          <FlagForUnitedStates />
                          <span className="font-semibold text-lg text-brand-blue-900 dark:text-white">
                            {t("english_select")}
                          </span>
                        </>
                      ) : (
                        ""
                      )}
                    </span>
                  </SelectValue>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="portuguese">
                    <span className="flex items-center gap-4">
                      <FlagForBrazil />
                      <span className="font-semibold text-lg text-brand-blue-900 dark:text-white">
                        {t("portuguese_select")}
                      </span>
                    </span>
                  </SelectItem>
                  <SelectItem value="english">
                    <span className="flex items-center gap-4">
                      <FlagForUnitedStates />
                      <span className="font-semibold text-lg text-brand-blue-900 dark:text-white">
                        {t("english_select")}
                      </span>
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="theme-mode"
                isDark={isDark}
                toggleTheme={toggleTheme}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderSection;
