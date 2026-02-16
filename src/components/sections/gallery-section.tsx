import { useReveal } from "@/hooks/use-reveal"

const stickers = [
  {
    src: "https://cdn.poehali.dev/projects/4ad5f7eb-544a-42df-9157-6deec4ff7bfd/files/301e609b-cb80-4c7e-a1d7-4db49687c666.jpg",
    title: "Солнышко",
    author: "Маша, 7 лет",
  },
  {
    src: "https://cdn.poehali.dev/projects/4ad5f7eb-544a-42df-9157-6deec4ff7bfd/files/faa5afa8-f74f-407b-9601-81495f41a817.jpg",
    title: "Котик",
    author: "Аня, 6 лет",
  },
  {
    src: "https://cdn.poehali.dev/projects/4ad5f7eb-544a-42df-9157-6deec4ff7bfd/files/8e95b7b1-e447-4ea6-9f59-f7529cb29815.jpg",
    title: "Пёсик",
    author: "Дима, 8 лет",
  },
  {
    src: "https://cdn.poehali.dev/projects/4ad5f7eb-544a-42df-9157-6deec4ff7bfd/files/864437bc-16bc-4e35-8d8e-a8de90c0d012.jpg",
    title: "Бабочка",
    author: "Соня, 5 лет",
  },
  {
    src: "https://cdn.poehali.dev/projects/4ad5f7eb-544a-42df-9157-6deec4ff7bfd/files/d0ea60ae-8739-4a55-a590-9af3f68fdbc9.jpg",
    title: "Ракета",
    author: "Миша, 9 лет",
  },
  {
    src: "https://cdn.poehali.dev/projects/4ad5f7eb-544a-42df-9157-6deec4ff7bfd/files/c2463038-5021-4943-bf71-a36e33bd8009.jpg",
    title: "Единорог",
    author: "Лиза, 7 лет",
  },
]

export function GallerySection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Галерея
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Стикеры из детских рисунков</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {stickers.map((sticker, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03]">
                <img
                  src={sticker.src}
                  alt={sticker.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0 md:p-4">
                  <p className="font-sans text-sm font-medium text-white md:text-base">{sticker.title}</p>
                  <p className="font-mono text-xs text-white/70">{sticker.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
