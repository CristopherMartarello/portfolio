import { HoverBorderGradientEffect } from "@/app/components/HoverBorderGradientEffect";
import { CssIcon } from "@/app/icons/CSSIcon";
import { HtmlIcon } from "@/app/icons/HTMLIcon";
import { JavascriptIcon } from "@/app/icons/JavaScriptIcon";
import { SCSSIcon } from "@/app/icons/SCSSIcon";

const BankboostStacks = () => {
  return (
    <>
      <HoverBorderGradientEffect icon={<HtmlIcon />} title={"HTML5"} />
      <HoverBorderGradientEffect icon={<CssIcon />} title={"CSS3"} />
      <HoverBorderGradientEffect icon={<SCSSIcon />} title={"SCSS"} />
      <HoverBorderGradientEffect
        icon={<JavascriptIcon />}
        title={"JavaScript"}
      />
    </>
  );
};

export default BankboostStacks;
