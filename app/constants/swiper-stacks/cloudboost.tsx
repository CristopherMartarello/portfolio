import { HoverBorderGradientEffect } from "@/app/components/HoverBorderGradientEffect";
import { CssIcon } from "@/app/icons/CSSIcon";
import { HtmlIcon } from "@/app/icons/HTMLIcon";
import { SCSSIcon } from "@/app/icons/SCSSIcon";

const CloudboostStacks = () => {
  return (
    <>
      <HoverBorderGradientEffect icon={<HtmlIcon />} title={"HTML5"} />
      <HoverBorderGradientEffect icon={<CssIcon />} title={"CSS3"} />
      <HoverBorderGradientEffect icon={<SCSSIcon />} title={"SCSS"} />
    </>
  );
};

export default CloudboostStacks;
