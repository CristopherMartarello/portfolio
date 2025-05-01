import { HoverBorderGradientEffect } from "@/app/components/HoverBorderGradientEffect";
import { NextjsIcon } from "@/app/icons/NextIcon";
import { PostgresqlIcon } from "@/app/icons/PostgreSQLIcon";
import { ReactIcon } from "@/app/icons/ReactIcon";
import { TypescriptIcon } from "@/app/icons/TypeScriptIcon";

const FswFoodsStacks = () => {
  return (
    <>
      <HoverBorderGradientEffect icon={<ReactIcon />} title={"React.js"} />
      <HoverBorderGradientEffect
        icon={<TypescriptIcon />}
        title={"TypeScript"}
      />
      <HoverBorderGradientEffect icon={<NextjsIcon />} title={"Next.js"} />
      <HoverBorderGradientEffect
        icon={<PostgresqlIcon />}
        title={"PostgreSQL"}
      />
    </>
  );
};

export default FswFoodsStacks;
