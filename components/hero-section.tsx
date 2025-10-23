import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-[216px] pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Content */}
          <div className="max-w-[937px] flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[748px] text-center text-[#37322f] text-6xl md:text-[80px] font-normal leading-tight md:leading-[96px] font-serif">
                A Chave para o Seu...Próximo Nível
              </h1>
              <p className="max-w-[506px] text-center text-[#37322f]/80 text-lg font-medium leading-7">
                Transforme sua vida com 200 audiolivros best-sellers sobre finanças, investimentos, carreira e
                mentalidade. Acesso vitalício por apenas R$ 19,90.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              asChild
              className="h-10 px-12 bg-[#37322f] hover:bg-[#37322f]/90 text-white rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
            >
              <a href="https://pay.cakto.com.br/3cp75mh_619431" target="_blank" rel="noopener noreferrer">
                QUERO IR PARA O PRÓXIMO NÍVEL
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
