// src/app/index.js
// @ts-nocheck
// @use-client
import React from "react";
import Image from "next/image";
import { FadeInWrapper } from "@/components/FadeInWrapper";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import useTranslation from "next-translate/useTranslation";
import { ProjectDemo } from "@/components/project";
import { TechnicalSkills } from "../components/technicalSkills";
import { ILanguageSelect } from "@/components/languageSelect";

export default function Home() {
  const { t, lang } = useTranslation("common");

  return (
    <main class="flex flex-col text-black transition-all">
      <div
        id="hero-section"
        class="flex flex-col px-4 pt-12 xl:px-0 justify-center text-[#262d3e] bg-[whitesmoke] lg:flex relative overflow-hidden"
      >
        <ILanguageSelect class="ml-auto" />
        <div class="flex flex-col lg:flex-row">
          <div class="max-w-4xl m-auto">
            <p class="mt-20 max-w-xl sm:max-w-2xl text-2xl sm:text-3xl bg-[#262d3e] bg-inherit text-whitetext-[#262d3e] sm:text-left text-center font-light">
              {t("hello")}
            </p>
            <h2 class="text-5xl font-black text-center sm:text-left fadeIn sm:text-6xl">
              André Dias de Sena
            </h2>
            <div class="relative self-center max-w-md mx-auto mt-12 sm:hidden sm:left-0 left-2 fadeIn">
              <Image
                alt=""
                src="/andre-pf.jpg"
                width={600}
                height={600}
                class="rounded-full sm:mt-8"
              />
            </div>
            <div class="my-12 max-w-xl sm:max-w-2xl text-2xl sm:text-3xl bg-[#262d3e] sm:bg-inherit rounded-md text-white sm:text-[#262d3e] text-center font-light">
              <p class="sm:hidden p-6 text-left xl:p-0 line-[43px]">
                {t("mobileGreeting")}
              </p>
              <p class="hidden sm:block py-6 text-left xl:p-0 line-[43px]">
                {t("greeting")}
              </p>
            </div>
            <div class="hidden m-auto mb-8 sm:block">
              <a
                target="_blank"
                class="hover:bg-blue-400 py-3 px-6 text-white uppercase font-semibold transition-all bg-[#0A66C2] rounded-md text-xl sm:hover:scale-110"
                onClick={() =>
                  document
                    .querySelector("#projetos")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("seeMyProjects")}
              </a>
            </div>
          </div>
          <div class="relative self-center hidden max-w-md mx-auto sm:block sm:left-0 left-2 fadeIn">
            <Image
              alt=""
              src="/andre-pf.jpg"
              width={600}
              height={600}
              class="rounded-full"
            />
          </div>
          <div class="relative my-12 text-center sm:hidden">
            <a
              target="_blank"
              class="hover:bg-blue-400 px-6 py-3 text-white uppercase font-semibold transition-all bg-[#0A66C2] rounded-md text-xl sm:hover:scale-110"
              onClick={() =>
                document
                  .querySelector("#projetos")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("seeMyProjects")}
            </a>
          </div>
        </div>
        <div class="self-center max-w-md m-auto rounded-md">
          <Image
            alt="arrow down"
            src="/arrow-down.svg"
            width={80}
            height={80}
            class="mx-auto bg-white rounded-full hover:cursor-pointer animate-bounce"
            onClick={() =>
              document
                .querySelector("#about_me")
                .scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>

      <div class="relative flex justify-center">
        <svg
          class="w-full bg-slate-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f5f5f5"
            fillOpacity="1"
            d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <div class="absolute flex justify-center w-60 -bottom-12 sm:bottom-[20%] 2xl:bottom-[30%] gap-x-4">
          <a
            href="https://www.linkedin.com/in/andr%C3%A9-dias-de-sena-b6b915225/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={60} fill="white" />
          </a>
          <a href="https://github.com/gitsena" target="_blank" rel="noreferrer">
            <FaGithub size={60} fill="white" />
          </a>
          <a
            href="https://wa.me/5511962759225"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={60} fill="white" />
          </a>
        </div>
      </div>
      <div
        id="about_me"
        class="justify-center px-4 text-white lg:flex bg-slate-800 sm:flex-col"
      >
        <FadeInWrapper>
          <div class="relative flex flex-col xl:flex-row">
            <div class="max-w-2xl px-4 m-auto lg:relative">
              <h2 class="pt-20 text-4xl font-bold sm:pt-0 sm:text-6xl">
                {t("aboutMe")}
              </h2>
              <p class="mt-12 text-2xl sm:text-2xl font-extralight sm:line-[43px]">
                {t("aboutMeDescription")}
              </p>
              <TechnicalSkills />
              <p class="my-12 text-2xl sm:text-2xl font-extralight sm:line-[43px]">
                {t("hobbiesDescription")}
              </p>
            </div>
            <div class="relative mt-12 text-center sm:hidden">
              <div class="self-center max-w-md m-auto rounded-xl">
                <video width={400} autoPlay loop muted class="rounded-xl">
                  <source type="video/mp4" src="/videos/app-educa.mp4" />
                </video>
              </div>
            </div>

            <div class="top-0 self-center hidden max-w-md m-auto rounded-md lg:block lg:relative">
              <video width={400} autoPlay loop muted class="rounded-3xl">
                <source type="video/mp4" src="/videos/appeduca.mp4" />
              </video>
            </div>
          </div>
          <div class="self-center max-w-md m-auto rounded-md">
            <Image
              alt=""
              src="/arrow-down.svg"
              width={80}
              height={80}
              class="mx-auto bg-white rounded-full hover:cursor-pointer animate-bounce"
              onClick={() =>
                document
                  .querySelector("#projetos")
                  .scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </FadeInWrapper>
      </div>
      <div class="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1e293b"
            fillOpacity="1"
            d="M0,192L80,197.3C160,203,320,213,480,213.3C640,213,800,203,960,192C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <section class="flex flex-col justify-center w-full gap-8 pb-20">
          <h2 class="text-4xl font-extrabold text-center text-[#262d3e] sm:text-6xl">
            {t("myProjectsTitle")}
          </h2>
          <section
            id="projetos"
            class="grid lg:grid-cols-2 justify-items-center flex-col lg:flex-row items-center justify-center w-full gap-8 mx-auto"
          >
            {/* Educa */}
            <ProjectDemo
              isWeb
              href={"https://portfolio-andresena.netlify.app/"}
              title={t("projectWebEduca")}
              src={"/videos/webeduca.mp4"}
            />
            <div class="sm:hidden sm:min-h-[380px] max-w-xl self-center m-auto border-4 rounded-xl border-slate-200 hover:border-[#0A66C2] transition-all ease-linear duration-200 block">
              <ProjectDemo
                isWeb={false}
                href={"https://portfolio-andresena.netlify.app/"}
                title={t("projectMobEduca")}
                src={"/videos/appeduca.mp4"}
              />
            </div>
            {/* LS Journey */}
            <ProjectDemo
              isWeb
              href={"https://liquidstudiojourney.web.app/"}
              title={t("projectLsJourney")}
              src={"/videos/lsjourney.mp4"}
            />
            <div class="sm:hidden sm:min-h-[380px] max-w-xl self-center m-auto border-4 rounded-xl border-slate-200 hover:border-[#0A66C2] transition-all ease-linear duration-200 block">
              <ProjectDemo
                isWeb={false}
                href={"https://liquidstudiojourney.web.app/"}
                title={t("projectMobJourney")}
                src={"/videos/moblsjourney.mp4"}
              />
            </div>

            {/* VTEX */}
            <ProjectDemo
              isWeb
              href={"https://portfolio-andresena.netlify.app/"}
              title={t("projectVtex")}
              src={"/videos/vtex.mp4"}
            />
            {/* Termovinho */}
            <ProjectDemo
              isWeb
              href={"https://gitsena.github.io/projeto-termovinho/"}
              title={t("projectTermovinho")}
              src={"/videos/termovinho.mp4"}
            />
          </section>
        </section>
      </div>
      <p class="my-5 text-lg text-center">
        {t("madeWithHeartText")}
        <a
          class="underline"
          href="https://www.linkedin.com/in/andr%C3%A9-dias-de-sena-b6b915225/"
        >
          André Sena
        </a>
        <br />
      </p>
    </main>
  );
}
