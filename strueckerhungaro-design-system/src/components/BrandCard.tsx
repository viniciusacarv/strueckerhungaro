type BrandCardProps = {
  eyebrow?: string;
  title: string;
  text: string;
  variant?: "light" | "blue" | "accent";
};

const variants = {
  light: "bg-white text-sh-blueBusiness",
  blue: "bg-blue-gradient text-white",
  accent: "bg-yellow-gradient text-sh-blueBusiness"
};

export function BrandCard({ eyebrow, title, text, variant = "light" }: BrandCardProps) {
  return (
    <article className={`relative overflow-hidden rounded-brand p-8 shadow-brand ${variants[variant]}`}>
      <div className="absolute -right-10 -top-12 text-[11rem] font-semibold leading-none opacity-10">S</div>
      {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] opacity-80">{eyebrow}</p>}
      <h3 className="relative text-2xl font-semibold leading-tight md:text-3xl">{title}</h3>
      <p className="relative mt-4 text-sm leading-7 opacity-85">{text}</p>
    </article>
  );
}
