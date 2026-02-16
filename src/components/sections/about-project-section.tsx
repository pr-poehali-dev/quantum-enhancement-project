import { useReveal } from "@/hooks/use-reveal"

export function AboutProjectSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                О проекте
              </h2>
              <p className="font-mono text-sm text-foreground/60 md:text-base">/ Зачем мы это делаем</p>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 md:space-y-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-5 backdrop-blur-sm md:p-8">
                <p className="text-lg italic leading-relaxed text-foreground/90 md:text-xl lg:text-2xl">
                  «Мы хотим, чтобы наши рисунки помогали другим детям. Когда кто-то покупает стикер с моим рисунком — я знаю, что помогаю.»
                </p>
                <p className="mt-4 font-mono text-sm text-foreground/50">— Маша, 8 лет</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-5 md:space-y-8">
            {[
              {
                emoji: "✏️",
                title: "Рисунки от души",
                text: "Каждый стикер — это настоящий рисунок ребёнка, полный тепла и фантазии.",
                direction: "right",
              },
              {
                emoji: "💛",
                title: "100% в фонд",
                text: "Все средства от продажи стикеров направляются в благотворительный фонд помощи детям.",
                direction: "left",
              },
              {
                emoji: "🌍",
                title: "Творчество = помощь",
                text: "Мы верим, что детское творчество способно менять мир к лучшему.",
                direction: "right",
              },
            ].map((item, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex gap-4 border-l border-foreground/20 pl-5 transition-all duration-700 md:pl-8 ${getRevealClass()}`}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  <span className="text-2xl md:text-3xl">{item.emoji}</span>
                  <div>
                    <h3 className="mb-1 font-sans text-lg font-medium text-foreground md:text-xl">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70 md:text-base">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
