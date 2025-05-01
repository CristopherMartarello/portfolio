import { HoverBorderGradientEffect } from "@/app/components/HoverBorderGradientEffect";
import { ChatGptIcon } from "@/app/icons/ChatGPTIcon";
import { NextjsIcon } from "@/app/icons/NextIcon";
import { ReactIcon } from "@/app/icons/ReactIcon";
import { StripeIcon } from "@/app/icons/StripeIcon";
import { TypescriptIcon } from "@/app/icons/TypeScriptIcon";

const FswFinanceAiStacks = () => {
  return (
    <>
      <HoverBorderGradientEffect icon={<ReactIcon />} title={"React.js"} />
      <HoverBorderGradientEffect
        icon={<TypescriptIcon />}
        title={"TypeScript"}
      />
      <HoverBorderGradientEffect icon={<NextjsIcon />} title={"Next.js"} />
      <HoverBorderGradientEffect icon={<ChatGptIcon />} title={"ChatGPT"} />
      <HoverBorderGradientEffect icon={<StripeIcon />} title={"Stripe"} />
    </>
  );
};

export default FswFinanceAiStacks;
