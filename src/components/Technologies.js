import useTranslation from "next-translate/useTranslation";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiJava,
  DiReact
} from "react-icons/di";

import {
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiKotlin,
  SiSpring,
  SiAmazonaws,
  SiVuedotjs
} from "react-icons/si";

const technologiesItem = [
  {
    id: "html",
    name: "HTML5",
    nivel: "avançado",
    icon: <DiHtml5 className="text-[#E44D26] lg:text-6xl text-4xl" />
  },
  {
    id: "css",
    name: "CSS",
    nivel: "avançado",
    icon: <DiCss3 className="text-[#1572B6] lg:text-6xl text-4xl" />
  },
  {
    id: "js",
    name: "JavaScript",
    nivel: "avançado",
    icon: <DiJsBadge className="text-[#F0DB4F] lg:text-6xl text-4xl" />
  },
  {
    id: "react",
    name: "React",
    nivel: "intermediário",
    icon: <DiReact className="text-[#61DAFB] lg:text-6xl text-4xl" />
  },
  {
    id: "typescript",
    name: "TypeScript",
    nivel: "intermediário",
    icon: <SiTypescript className="text-blue-600 lg:text-6xl text-4xl" />
  },
  {
    id: "vue",
    name: "VUE",
    nivel: "básico",
    icon: <SiVuedotjs className="text-[#42b983] lg:text-6xl text-4xl" />
  },
  {
    id: "sass",
    name: "Sass",
    nivel: "avançado",
    icon: <SiSass className="text-pink-500 lg:text-6xl text-4xl" />
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    nivel: "avançado",
    icon: <SiTailwindcss className="text-cyan-500 lg:text-6xl text-4xl" />
  },
  {
    id: "node",
    name: "Node.js",
    nivel: "intermediário",
    icon: <DiNodejsSmall className="text-[#83CD29] lg:text-6xl text-4xl" />
  },
  {
    id: "java",
    name: "Java",
    nivel: "intermediário",
    icon: <DiJava className="text-[#FF9800] lg:text-6xl text-4xl" />
  },
  {
    id: "kotlin",
    name: "Kotlin",
    nivel: "intermediário",
    icon: <SiKotlin className="text-purple-500 lg:text-6xl text-4xl" />
  },
  {
    id: "springboot",
    name: "Spring Boot",
    nivel: "básico",
    icon: <SiSpring className="text-green-600 lg:text-6xl text-4xl" />
  },
  {
    id: "mysql",
    name: "MySQL",
    nivel: "intermediário",
    icon: <DiMysql className="text-[#00618A] lg:text-6xl text-4xl" />
  },
  {
    id: "aws",
    name: "AWS",
    nivel: "básico",
    icon: <SiAmazonaws className="text-[#FF9900] lg:text-6xl text-4xl" />
  }
];

export const Technologies = () => {
  const { t, lang } = useTranslation("common");
  const chunkedTechnologies = [];
  const chunkSize = 4;
  for (let i = 0; i < technologiesItem.length; i += chunkSize) {
    chunkedTechnologies.push(technologiesItem.slice(i, i + chunkSize));
  }

  return (
    <div class="grid grid-cols-2 flex-col lg:grid-cols-1 justify-center w-full">
      {chunkedTechnologies.map((chunk, index) => (
        <div class="max-w-full mt-10 lg:relative" key={index}>
          <div class="flex flex-wrap justify-center gap-6">
            {chunk.map((tech) => (
              <div
                class="flex lg:flex-row flex-col items-center w-40 lg:w-72 gap-4 lg:gap-8 p-4 border-4 border-slate-600 rounded-lg"
                id={tech.id}
                key={tech.id}
              >
                {tech.icon}
                <div class="lg:text-left text-center">
                  <h3 class="lg:text-xl text-base font-bold mb-1">
                    {tech.name}
                  </h3>
                  <span class="lg:text-sm text-xs">
                    {t("level")}
                    <p class="text-yellow-500">{tech.nivel}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
