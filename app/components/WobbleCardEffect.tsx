import Link from "next/link";
import { ImageCard } from "../components/ImageCard";
import { ExternalLinkIcon } from "../icons/ExternalLinkIcon";
import { GithubIcon } from "../icons/GitHubIcon";
import Button from "./Button";
import { useTranslations } from "next-intl";

type Image = {
  src: string;
  alt: string;
  className: string;
};

type LayoutGridEffectProps = {
  images: Image[];
  description: string;
  title: string;
  date: string;
  stacks: React.ReactNode;
  projectLink: string;
  githubLink: string;
};

export function WobbleCardEffect({
  images,
  description,
  title,
  date,
  stacks,
  projectLink,
  githubLink,
}: LayoutGridEffectProps) {
  const t = useTranslations("ProjectsSection");
  return (
    <div className="flex py-20 space-x-20">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            alt={image.alt}
            objectFit="fit"
            className={image.className}
            priority={index === 0}
          />
        ))}
      </div>
      <div className="flex flex-col w-full py-28 font-semibold">
        <div className="flex w-full justify-between items-center font-semibold">
          <h1 className="font-poppins text-4xl dark:text-white text-zinc-800">
            {title}
          </h1>
          <p className="font-poppins text-2xl dark:text-white text-zinc-800">
            {date}
          </p>
        </div>
        <div className="flex items-center gap-4 my-10">{stacks}</div>
        <div className="mt-10 text-2xl flex flex-grow whitespace-pre-line dark:text-white text-zinc-800">
          {description}
        </div>
        <div className="flex items-center gap-6">
          <Link
            href={`${projectLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              icon={<ExternalLinkIcon width={"3rem"} height={"3rem"} />}
              text={t("button_text_1")}
            />
          </Link>
          <Link
            href={`${githubLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              icon={<GithubIcon width={"3rem"} height={"3rem"} />}
              text={t("button_text_2")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
