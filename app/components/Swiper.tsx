import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { WobbleCardEffect } from "./WobbleCardEffect";
import { useState } from "react";
import { imagesFswFoods } from "../constants/swiper-images/fsw-foods";
import FswFinanceAiStacks from "../constants/swiper-stacks/fsw-finance-ai";
import FswFoodsStacks from "../constants/swiper-stacks/fsw-foods";
import { imagesBankboost } from "../constants/swiper-images/bankboost";
import { imagesFswFinanceAi } from "../constants/swiper-images/fsw-finance-ai";
import BankboostStacks from "../constants/swiper-stacks/bankboost";
import CloudboostStacks from "../constants/swiper-stacks/cloudboost";
import { imagesCloudboost } from "../constants/swiper-images/cloudboost";
import { imagesQuizProject } from "../constants/swiper-images/quiz";
import QuizStacks from "../constants/swiper-stacks/quiz";
import { useTranslations } from "next-intl";

export const SwiperEffect = () => {
  const [imagesFood] = useState(imagesFswFoods);
  const [imagesFinance] = useState(imagesFswFinanceAi);
  const [imagesBankBoost] = useState(imagesBankboost);
  const [imagesCloudBoost] = useState(imagesCloudboost);
  const [imagesQuiz] = useState(imagesQuizProject);
  const t = useTranslations("ProjectsSection");

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        fadeEffect={{ crossFade: true }}
        speed={1500}
        className="w-10/12 custom-swiper-pagination"
      >
        <SwiperSlide className="md:px-32">
          <WobbleCardEffect
            images={imagesFood}
            stacks={<FswFoodsStacks />}
            description={t("project_description_1")}
            title={t("project_title_1")}
            date={"2024"}
            projectLink={"https://fsw-foods-seven.vercel.app"}
            githubLink={"https://github.com/CristopherMartarello/fsw-foods.git"}
          />
        </SwiperSlide>
        <SwiperSlide className="md:px-32">
          <WobbleCardEffect
            images={imagesFinance}
            stacks={<FswFinanceAiStacks />}
            description={t("project_description_2")}
            title={t("project_title_2")}
            date={"2025"}
            projectLink="https://fsw-ai-finance.vercel.app"
            githubLink="https://github.com/CristopherMartarello/fsw-finance-ai.git"
          />
        </SwiperSlide>
        <SwiperSlide className="md:px-32">
          <WobbleCardEffect
            images={imagesBankBoost}
            stacks={<BankboostStacks />}
            description={t("project_description_3")}
            title={t("project_title_3")}
            date={"2025"}
            projectLink="https://bank-boost.vercel.app"
            githubLink="https://github.com/CristopherMartarello/bank-boost.git"
          />
        </SwiperSlide>
        <SwiperSlide className="md:px-32">
          <WobbleCardEffect
            images={imagesCloudBoost}
            stacks={<CloudboostStacks />}
            description={t("project_description_4")}
            title={t("project_title_4")}
            date={"2025"}
            projectLink="https://cloud-boost-eta.vercel.app"
            githubLink="https://github.com/CristopherMartarello/cloud-boost.git"
          />
        </SwiperSlide>
        <SwiperSlide className="md:px-32">
          <WobbleCardEffect
            images={imagesQuiz}
            stacks={<QuizStacks />}
            description={t("project_description_5")}
            title={t("project_title_5")}
            date={"2023"}
            projectLink="https://projeto-quiz-one.vercel.app"
            githubLink="https://github.com/CristopherMartarello/projeto-quiz.git"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
