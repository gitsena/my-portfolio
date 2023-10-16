import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt'br">
      <Head />
      <meta name="theme-color" content="#262d3e" />
      <title>André Sena - Developer Full Stack</title>
      <body style={{ backgroundColor: "white" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const Header = () => (
  <div class="fixed z-10 flex justify-between w-full py-1 bg-white shadow-md sm:py-2">
    <div class="flex items-center self-center">
      <p class="relative sm:text-xl font-extrabold text-[#49473a] left-32 ">
        ANDRÉ SENA
      </p>
    </div>
  </div>
);
