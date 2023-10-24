// src/app/index.js
// @ts-nocheck
// @use-client
import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { ProjectDemo } from "@/components/Project";
import { ILanguageSelect } from "@/components/languageSelect";
import { Technologies } from "@/components/Technologies";
import { Contact } from "@/components/Contact";
import { Menu } from "@/components/Menu";

export default function Home() {
  const { t, lang } = useTranslation("common");

  return (
    <main id="top" class="flex flex-col text-black transition-all">
      <div
        id="hero-section"
        class="flex flex-col px-4 pt-8 xl:px-0 justify-center text-[#262d3e] bg-[whitesmoke] lg:flex relative overflow-hidden"
      >
        <ILanguageSelect class="ml-auto" />
        <div class="flex flex-col lg:flex-row">
          <div class="max-w-4xl mt--10 mx-0 lg:mx-28">
            <p class="mt-20 max-w-xl sm:max-w-2xl text-2xl sm:text-3xl bg-[#262d3e] bg-inherit text-whitetext-[#262d3e] sm:text-left text-center font-light">
              {t("hello")}
            </p>
            <h2 class="text-3xl lg:text-5xl font-black text-center sm:text-left fadeIn sm:text-6xl">
              André Dias de Sena
            </h2>
            <div class="relative self-center max-w-md lg:mx-auto mt-12 mx-28 sm:hidden sm:left-0 left-2 fadeIn">
              <Image
                alt="perfil"
                src="/andre-pf.jpg"
                width={420}
                height={420}
                class="rounded-full sm:mt-8 "
              />
            </div>
            <div class="my-12 max-w-xl lg:max-w-2xl text-xl sm:text-3xl bg-[#262d3e] sm:bg-inherit rounded-md text-white sm:text-[#262d3e] text-center font-light">
              <p class="sm:hidden p-6 text-left xl:p-0 line-[43px]">
                {t("mobileGreeting")}
              </p>
              <p class="hidden sm:block py-6 text-left xl:p-0 line-[43px]">
                {t("greeting")}
              </p>
            </div>

            <Menu />
          </div>
          <div class="relative self-center hidden max-w-md mx-auto sm:block sm:left-0 left-2 fadeIn">
            <Image
              alt="perfil"
              src="/andre-pf.jpg"
              width={500}
              height={500}
              class="rounded-full sm:mt-8"
            />
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
      </div>
      <div
        id="about_me"
        class="justify-center px-4 text-white lg:flex bg-slate-800 sm:flex-col"
      >
        <div class="relative flex flex-col xl:flex-row">
          <div class="max-w-2xl px-4 m-auto lg:mx-auto lg:mt-0 lg:relative">
            <h2 class="pt-20 text-4xl font-bold sm:pt-0 sm:text-6xl sm:text-left text-center">
              {t("aboutMe")}
            </h2>
            <p class="mt-12 text-2xl sm:text-2xl font-extralight sm:line-[43px]">
              {t("aboutMeDescription")}
            </p>
            <p class="my-12 text-2xl sm:text-2xl font-extralight sm:line-[43px]">
              {t("hobbiesDescription")}
            </p>
            <Contact />
          </div>

          <div class="top-0 self-center lg:m-auto mt-32 rounded-md lg:relative">
            <Image
              alt="perfil"
              src="/dev.jpeg"
              width={400}
              height={400}
              class="rounded-lg"
            />
            {/**<video class="h-[400px] lg:h-[650px] rounded-3xl" autoPlay loop muted>
                <source type="video/mp4" src="/videos/appeduca.mp4" /></video>*/}
          </div>
        </div>

        {/** <div class="self-center max-w-md m-auto rounded-md">
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
          </div> */}
      </div>
      <div class="bg-[whitesmoke]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1e293b"
            fillOpacity="1"
            d="M0,192L80,197.3C160,203,320,213,480,213.3C640,213,800,203,960,192C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        <section
          id="projetos"
          class="flex flex-col justify-center w-full gap-8 pb-20"
        >
          <h2 class="text-4xl font-extrabold text-center text-[#262d3e] sm:text-6xl mb-5">
            {t("myProjectsTitle")}
          </h2>
          <section class="grid lg:grid-cols-2 justify-items-center flex-col lg:flex-row items-center justify-center w-full gap-8 mx-auto">
            {/* Educa */}
            <ProjectDemo
              isWeb
              href={"https://web-educa.netlify.app/"}
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
          <text
            id="technologies"
            class="text-8xl lg:text-6xl font-bold sm:pt-0 sm:text-6xl relative m-auto flex justify-center w-full"
            x="50%"
            y="80%"
            dy=".3em"
            text-anchor="middle"
            fill="#ffffff"
          >
            {t("technologies")}
          </text>
        </svg>
      </div>

      <div class="justify-center w-full text-white bg-slate-800">
        <Technologies />
      </div>
      <div class="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1e293b"
            fillOpacity="1"
            d="M0,192L80,197.3C160,203,320,213,480,213.3C640,213,800,203,960,192C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <p class="mb-5 text-lg text-center">
        {t("madeWithHeartText")}
        <a
          class="underline"
          target="_blank"
          href="https://www.linkedin.com/in/andr%C3%A9-dias-de-sena-b6b915225/"
        >
          {" "}André Sena
        </a>
      </p>
    </main>
  );
}
