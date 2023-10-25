import React from "react";
import useTranslation from "next-translate/useTranslation";

export const Menu = () => {
  const { t, lang } = useTranslation("common");

  return (
    <div class="flex flex-col my-10 items-center text-center lg:m-auto lg:flex-row lg:gap-4 relative">
      <a
        target="_blank"
        class="hover:bg-[#0A66C2] hover:text-white py-3 px-6 text-[#0A66C2] uppercase font-semibold transition-all rounded-md text-lg
      border-4 border-[#0A66C2]"
        onClick={() =>
          document
            .querySelector("#projetos")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        {t("seeMyProjects")}
      </a>
      <a
        target="_blank"
        class="hover:text-blue-400 py-3 px-6 text-[#0A66C2] uppercase font-semibold transition-all rounded-md text-base
      hover:border-b-4 border-blue-400 hidden md:block"
        onClick={() =>
          document
            .querySelector("#about_me")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        {t("aboutMe")}
      </a>
      <a
        target="_blank"
        class="hover:text-blue-400 py-3 px-6 text-[#0A66C2] uppercase font-semibold transition-all rounded-md text-base 
      hover:border-b-4 border-blue-400 hidden md:block"
        onClick={() =>
          document
            .querySelector("#technologies")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        {t("technologies")}
      </a>
    </div>
  );
};
