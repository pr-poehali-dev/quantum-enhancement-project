import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ReportSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Отчётность
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Прозрачность и доверие</p>
            </div>

            <div className="space-y-5 md:space-y-8">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                  Мы публикуем все переводы средств в фонд. Каждый рубль — на виду. Ниже — скрины переводов и благодарственные письма от фонда.
                </p>
              </div>

              <div
                className={`space-y-4 transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-center gap-4 rounded-xl border border-foreground/10 bg-foreground/5 p-4 backdrop-blur-sm md:p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/10">
                    <Icon name="Receipt" size={24} className="text-foreground/70" />
                  </div>
                  <div>
                    <p className="font-sans text-base font-medium text-foreground md:text-lg">Скрин перевода средств</p>
                    <p className="font-mono text-xs text-foreground/50">Последний перевод — февраль 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-foreground/10 bg-foreground/5 p-4 backdrop-blur-sm md:p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/10">
                    <Icon name="FileHeart" size={24} className="text-foreground/70" />
                  </div>
                  <div>
                    <p className="font-sans text-base font-medium text-foreground md:text-lg">Благодарственное письмо</p>
                    <p className="font-mono text-xs text-foreground/50">От благотворительного фонда</p>
                  </div>
                </div>
              </div>

              <div
                className={`flex gap-2 pt-2 transition-all duration-700 md:pt-4 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                {["Telegram", "VK"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="border-b border-transparent font-mono text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div
              className={`w-full space-y-6 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 text-center backdrop-blur-sm md:p-10">
                <p className="mb-2 text-5xl font-light text-foreground md:text-7xl">💝</p>
                <p className="mb-1 font-sans text-2xl font-light text-foreground md:text-4xl">Поддержите проект</p>
                <p className="mb-6 text-sm text-foreground/60 md:text-base">
                  Купите стикер-пак или сделайте пожертвование
                </p>
                <MagneticButton variant="primary" size="lg">
                  Поддержать проект
                </MagneticButton>
              </div>

              <div
                className={`grid grid-cols-3 gap-3 transition-all duration-700 md:gap-4 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                {[
                  { value: "50+", label: "Стикеров" },
                  { value: "12", label: "Художников" },
                  { value: "100%", label: "В фонд" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-foreground/10 bg-foreground/5 p-3 text-center backdrop-blur-sm md:p-4"
                  >
                    <p className="text-xl font-light text-foreground md:text-2xl">{stat.value}</p>
                    <p className="font-mono text-xs text-foreground/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
