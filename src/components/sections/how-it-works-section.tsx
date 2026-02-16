import { useReveal } from "@/hooks/use-reveal"

const steps = [
  {
    number: "01",
    emoji: "✏️",
    title: "Дети рисуют",
    description: "Ребята из детских студий и центров создают рисунки — от забавных котиков до космических кораблей.",
    direction: "left",
  },
  {
    number: "02",
    emoji: "🎨",
    title: "Мы создаём стикеры",
    description: "Наши дизайнеры бережно превращают каждый рисунок в качественный стикер, сохраняя детскую непосредственность.",
    direction: "right",
  },
  {
    number: "03",
    emoji: "🛒",
    title: "Вы покупаете",
    description: "Стикер-паки доступны в популярных мессенджерах. Выбирайте набор, который вам по душе!",
    direction: "left",
  },
  {
    number: "04",
    emoji: "💝",
    title: "Средства идут в фонд",
    description: "100% от продажи стикеров направляются в благотворительный фонд помощи детям.",
    direction: "right",
  },
]

export function HowItWorksSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Как это работает
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ От рисунка до помощи — 4 шага</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          {steps.map((step, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                return step.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
              }
              return "translate-x-0 translate-y-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`group transition-all duration-700 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                  <span className="font-mono text-xs text-foreground/60">{step.number}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl md:text-4xl">{step.emoji}</span>
                  <div>
                    <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{step.title}</h3>
                    <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
