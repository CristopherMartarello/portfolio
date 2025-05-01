import { useTranslations } from "next-intl";
import Container from "./Container";

const FooterSection = () => {
  const t = useTranslations("FooterSection");
  return (
    <>
      <div className="w-full py-10 flex flex-col bg-brand-blue-900/[0.90] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Container>
          <div className="flex items-center justify-between">
            <span className="text-xl">
              © 2025 Cristopher Martarello Derossi.
            </span>
            <span className="text-xl">{t("copy")}</span>
          </div>
        </Container>
      </div>
      <div className="justify-center items-center flex">
        <hr className="w-full border-t-4 border-brand-blue-700" />
      </div>
    </>
  );
};

export default FooterSection;
