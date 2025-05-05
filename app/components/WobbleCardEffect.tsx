import Link from "next/link";
import { ImageCard } from "../components/ImageCard";
import { ExternalLinkIcon } from "../icons/ExternalLinkIcon";
import { GithubIcon } from "../icons/GitHubIcon";
import Button from "./Button";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
    <div className="flex flex-col 2xl:flex-row py-10 md:py-20 2xl:space-x-20 gap-y-12">
      {/* grid de imagens */}
      <div className="max-w-5xl mx-auto w-full">
        {/* Mobile: apenas a primeira imagem, sem wobble */}
        <div className="lg:hidden">
          <div className={`min-h-0 flex items-center ${images[0].className}`}>
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={800}
              height={600}
              className="rounded-2xl object-fill w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Desktop: todas as imagens com WobbleCard (ImageCard) */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              objectFit="cover"
              className={image.className}
              priority={index === 0}
            />
          ))}
        </div>
      </div>

      {/* texto e botões */}
      <div className="flex flex-col w-full py-10 2xl:py-28 font-semibold">
        <div className="flex w-full justify-between items-center font-semibold">
          <h1 className="font-poppins text-2xl md:text-3xl lg:text-3xl xl:text-4xl dark:text-white text-zinc-800">
            {title}
          </h1>
          <p className="font-poppins text-xl md:text-2xl lg:text-2xl xl:text-2xl dark:text-white text-zinc-800">
            {date}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 my-10">{stacks}</div>
        <div className="mt-10 text-lg md:text-xl lg:text-xl xl:text-2xl flex flex-grow whitespace-pre-line dark:text-white text-zinc-800">
          {description}
        </div>
        <div className="flex items-center gap-6 mt-10">
          <Link href={projectLink} target="_blank" rel="noopener noreferrer">
            <Button
              icon={<ExternalLinkIcon width={"3rem"} height={"3rem"} />}
              text={t("button_text_1")}
            />
          </Link>
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
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
