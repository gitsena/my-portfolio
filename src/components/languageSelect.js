import React from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

export const ILanguageSelect = (className) => {
  const { lang } = useTranslation("common");
  const router = useRouter();

  const changeLanguage = (selectedLang) => {
    setLanguage(selectedLang);
    router.replace(router.asPath, undefined, { locale: selectedLang });
  };

  return (
    <section class={className}>
      <div className="float-right flex space-x-3 cursor-pointer mr-10">
        <img
          onClick={() => changeLanguage("en")}
          width="24"
          height="24"
          src="https://img.icons8.com/color/48/usa.png"
          alt="usa"
        />
        <img
          onClick={() => changeLanguage("pt")}
          width="24"
          height="24"
          src="https://img.icons8.com/fluency/48/brazil.png"
          alt="brazil"
        />
        <img
          onClick={() => changeLanguage("es")}
          width="24"
          height="24"
          src="https://img.icons8.com/color/48/spain-2.png"
          alt="spain-2"
        />
      </div>
    </section>
  );
};
