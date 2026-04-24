type SocialPostProps = {
  tag?: string;
  title: string;
  description: string;
};

export function SocialPost({ tag = "#shlaw", title, description }: SocialPostProps) {
  return (
    <div className="aspect-square w-full max-w-[420px] overflow-hidden rounded-brand bg-sh-blueBusiness p-8 text-white shadow-brand">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-sh-yellowAttention px-4 py-2 text-xs font-semibold text-sh-blueBusiness">{tag}</span>
          <span className="text-5xl font-semibold opacity-25">S</span>
        </div>
        <div>
          <h3 className="text-4xl font-semibold leading-tight">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/75">{description}</p>
        </div>
      </div>
    </div>
  );
}
