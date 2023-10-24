import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export const ProjectDemo = ({ href, title, src, isWeb, className }) => {
  const { t, lang } = useTranslation("common");

  return (
    <Link target="_blank" href={href} class={className}>
      {isWeb ? (
        <div class="sm:min-h-[380px] max-w-xl self-center m-auto border-4 rounded-xl border-slate-300 hover:border-[#0A66C2] transition-all ease-linear duration-200 hidden sm:block">
          <div class="sm:min-h-[380px] relative hidden rounded-md sm:block">
            <div class="sm:min-h-[380px] absolute bottom-0 z-10 w-full h-full text-center rounded-md opacity-0 hover:opacity-100 hover:block">
              <p class="relative rounded-b-md text-white bg-[#0A66C2] font-bold top-[85%] py-4 text-xl">
                {t("seeDemo")}
              </p>
            </div>
            <h3 class="py-4 font-semibold text-center">{title}</h3>
            <video width={700} autoPlay loop muted class="relative z-0">
              <source type="video/mp4" src={src} />
            </video>
          </div>
        </div>
      ) : (
        <div class="sm:min-h-[380px] relative rounded-md sm:hidden">
          <div class="sm:min-h-[380px] absolute bottom-0 z-10 w-full h-full text-center rounded-sm opacity-0 hover:opacity-100 hover:block">
            <p class="relative rounded-b-sm text-white bg-[#0A66C2] font-bold top-[92%] sm:top-[84%] py-4 text-xl">
              {t("seeDemo")}
            </p>
          </div>
          <h3 class="py-4 font-semibold text-center">{title}</h3>

          <video
            height={320}
            width={350}
            autoPlay
            loop
            muted
            class="rounded-md h-80"
          >
            <source type="video/mp4" src={src} />
          </video>
        </div>
      )}
    </Link>
  );
};
