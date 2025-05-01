"use client";
import React from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
import { HoverBorderGradientEffect } from "./HoverBorderGradientEffect";
import { ReactIcon } from "../icons/ReactIcon";
import { TypescriptIcon } from "../icons/TypeScriptIcon";
import { NextjsIcon } from "../icons/NextIcon";
import { PostgresqlIcon } from "../icons/PostgreSQLIcon";
import { GithubIcon } from "../icons/GitHubIcon";
import { ExternalLinkIcon } from "../icons/ExternalLinkIcon";
import Link from "next/link";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: React.ReactNode | string;
};

type LayoutGridEffectProps = {
  cards: Card[];
  description: string;
  title: string;
  date: string;
};

export function LayoutGridEffect({
  cards,
  description,
  title,
  date,
}: LayoutGridEffectProps) {
  return (
    <div className="h-screen flex py-20 space-x-20">
      <LayoutGrid cards={cards} />
      <div className="flex flex-col w-full h-5/6 py-28">
        <div className="flex w-full justify-between items-center font-semibold">
          <h1 className="font-poppins text-4xl">{title}</h1>
          <p className="font-poppins text-xl">{date}</p>
        </div>
        <div className="flex items-center gap-4 my-10">
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
        </div>
        <div className="mt-10 text-2xl flex flex-grow whitespace-pre-line">
          {description}
        </div>
        <div className="flex items-center gap-8">
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-4 bg-[#0070f3] hover:cursor-pointer rounded-md text-white font-light transition duration-200 ease-linear">
            <Link
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold text-xl flex items-center gap-3">
                <ExternalLinkIcon />
                Ver Projeto
              </span>
            </Link>
          </button>
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-4 bg-[#0070f3] hover:cursor-pointer rounded-md text-white font-light transition duration-200 ease-linear">
            <Link
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold text-xl flex items-center gap-3">
                <GithubIcon />
                GitHub
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
