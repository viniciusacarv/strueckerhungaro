import { BrandCard } from "./components/BrandCard";
import { BrandHero } from "./components/BrandHero";
import { BrandLayout } from "./components/BrandLayout";
import { SocialPost } from "./components/SocialPost";

export default function App() {
  return (
    <BrandLayout>
      <BrandHero />

      <section className="brand-container py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sh-blueDigital">Design tokens</p>
          <h2 className="mt-3 text-4xl font-semibold text-sh-blueBusiness">Base visual codificada</h2>
          <p className="mt-4 leading-7 text-sh-muted">
            Abaixo estão exemplos de componentes criados a partir da paleta, tipografia e elementos de apoio do Key Visual.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <BrandCard
            eyebrow="Digital"
            title="Blue Digital"
            text="Cor principal para presença digital, chamadas de ação e destaques em interfaces."
          />
          <BrandCard
            eyebrow="Empresarial"
            title="Blue Business"
            text="Tom institucional para fundos, títulos e comunicações de maior autoridade."
            variant="blue"
          />
          <BrandCard
            eyebrow="Atencioso"
            title="Yellow Attention"
            text="Cor de contraste para destacar informações relevantes e direcionar a atenção."
            variant="accent"
          />
        </div>
      </section>

      <section className="brand-container grid gap-10 pb-20 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <SocialPost
          title="Licitações públicas com estratégia."
          description="Exemplo de card social quadrado, com alto contraste, tag institucional e elemento visual de apoio."
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sh-blueDigital">Aplicações</p>
          <h2 className="mt-3 text-4xl font-semibold text-sh-blueBusiness">Pronto para site, posts, landing pages e novos produtos.</h2>
          <p className="mt-5 leading-8 text-sh-muted">
            Use estes componentes como ponto de partida e adapte o conteúdo conforme cada área do escritório: licitações, bancário, contencioso e comunicação institucional.
          </p>
        </div>
      </section>
    </BrandLayout>
  );
}
