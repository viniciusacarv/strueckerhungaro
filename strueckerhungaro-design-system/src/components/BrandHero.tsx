import { ArrowRight } from "lucide-react";
import { BrandButton } from "./BrandButton";

export function BrandHero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient px-6 py-20 text-white md:py-28">
      <div className="absolute -right-12 top-8 text-[18rem] font-semibold leading-none opacity-10 md:text-[26rem]">SH</div>
      <div className="brand-container relative grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-sh-yellowAttention">Struecker Hungaro</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            Advocacia com visão estratégica e atuação empresarial.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Sistema visual baseado em uma identidade moderna, digital, atenciosa e preparada para aplicações institucionais, comerciais e digitais.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BrandButton variant="accent">Conheça a atuação</BrandButton>
            <BrandButton variant="outline" className="border-white text-white hover:bg-white hover:text-sh-blueBusiness">
              Ver componentes <ArrowRight className="ml-2 h-4 w-4" />
            </BrandButton>
          </div>
        </div>
        <div className="rounded-brand border border-white/20 bg-white/10 p-6 backdrop-blur">
          <div className="rounded-2xl bg-white p-6 text-sh-blueBusiness">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sh-blueDigital">Key Visual</p>
            <h2 className="mt-4 text-3xl font-semibold">Design system inicial</h2>
            <p className="mt-4 text-sm leading-7 text-sh-muted">
              Tokens, componentes e padrões visuais preparados para novas plataformas de design e desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
