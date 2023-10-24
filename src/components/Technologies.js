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
  SiMysql,
  SiSpring,
  SiAmazonaws,
  SiVuedotjs
} from "react-icons/si";

const technologiesItem = [
  {
    id: "html",
    name: "HTML5",
    nivel: "avançado",
    icon: <DiHtml5 className="text-[#E44D26] text-6xl" />
  },
  {
    id: "css",
    name: "CSS",
    nivel: "avançado",
    icon: <DiCss3 className="text-[#1572B6] text-6xl" />
  },
  {
    id: "js",
    name: "JavaScript",
    nivel: "avançado",
    icon: <DiJsBadge className="text-[#F0DB4F] text-6xl" />
  },
  {
    id: "react",
    name: "React",
    nivel: "intermediário",
    icon: <DiReact className="text-[#61DAFB] text-6xl" />
  },
  {
    id: "typescript",
    name: "TypeScript",
    nivel: "intermediário",
    icon: <SiTypescript className="text-blue-600 text-6xl" />
  },
  {
    id: "vue",
    name: "VUE",
    nivel: "básico",
    icon: <SiVuedotjs className="text-[#42b983] text-6xl" />
  },
  {
    id: "sass",
    name: "Sass",
    nivel: "avançado",
    icon: <SiSass className="text-pink-500 text-6xl" />
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    nivel: "avançado",
    icon: <SiTailwindcss className="text-cyan-500 text-6xl" />
  },
  {
    id: "node",
    name: "Node.js",
    nivel: "intermediário",
    icon: <DiNodejsSmall className="text-[#83CD29] text-6xl" />
  },
  {
    id: "java",
    name: "Java",
    nivel: "intermediário",
    icon: <DiJava className="text-[#FF9800] text-6xl" />
  },
  {
    id: "kotlin",
    name: "Kotlin",
    nivel: "intermediário",
    icon: <SiKotlin className="text-purple-500 text-6xl" />
  },
  {
    id: "springboot",
    name: "Spring Boot",
    nivel: "básico",
    icon: <SiSpring className="text-green-600 text-6xl" />
  },
  {
    id: "mysql",
    name: "MySQL",
    nivel: "intermediário",
    icon: <DiMysql className="text-[#00618A] text-6xl" />
  },
  {
    id: "aws",
    name: "AWS",
    nivel: "básico",
    icon: <SiAmazonaws className="text-[#FF9900] text-6xl" />
  }
];

export const Technologies = () => {
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
                class="flex items-center w-52 lg:w-72 gap-4 p-4 border-4 border-slate-600 rounded-lg"
                id={tech.id}
                key={tech.id}
              >
                {tech.icon}
                <div class="text-left">
                  <h3 class="lg:text-xl text-lg font-bold mb-1">{tech.name}</h3>
                  <span class="lg:text-sm text-xs">Nível:<p class="text-yellow-500">{tech.nivel}</p> </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
