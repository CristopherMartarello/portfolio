import { HoverBorderGradientEffect } from "@/app/components/HoverBorderGradientEffect";
import { CssIcon } from "@/app/icons/CSSIcon";
import { ReactIcon } from "@/app/icons/ReactIcon";
import { TypescriptIcon } from "@/app/icons/TypeScriptIcon";

const QuizStacks = () => {
  return (
    <>
      <HoverBorderGradientEffect icon={<ReactIcon />} title={"React.js"} />
      <HoverBorderGradientEffect
        icon={<TypescriptIcon />}
        title={"TypeScript"}
      />
      <HoverBorderGradientEffect icon={<CssIcon />} title={"CSS3"} />
    </>
  );
};

export default QuizStacks;
