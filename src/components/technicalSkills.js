import React from "react";
import useTranslation from "next-translate/useTranslation";

export const TechnicalSkills = () => {
  const { t } = useTranslation("common");

  const technicalSkillsItems = [
    {
      id: 1,
      skill: t("skillFrontEnd")
    },
    {
      id: 2,
      skill: t("skillBackEnd")
    },
    {
      id: 3,
      skill: t("skillMobile")
    },
    {
      id: 4,
      skill: t("skillplatform")
    },
    {
      id: 5,
      skill: t("skillVersioning")
    }
  ];

  return (
    <ul class="my-12 text-lg sm:text-lg font-extralight list-disc list-inside">
      {technicalSkillsItems.map((item) => (
        <li key={item.id}>{item.skill}</li>
      ))}
    </ul>
  );
};
