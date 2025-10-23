"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Como vou receber meu acesso?",
    answer:
      "Você receberá o acesso imediatamente assim que seu pagamento for aprovado, diretamente no seu e-mail de compra. Poderá começar a ouvir seus audiolivros em minutos!",
  },
  {
    question: "Posso ler e baixar em qualquer dispositivo?",
    answer:
      "Sim! Nosso pack é compatível com qualquer dispositivo - smartphone, tablet, computador ou notebook. É só fazer o download e aproveitar onde e quando quiser.",
  },
  {
    question: "Posso comprar depois?",
    answer:
      "Essa oferta é exclusiva e limitada. Se deixar para depois, poderá perder essa oportunidade única de ter acesso a 200 audiolivros + bônus por apenas R$ 19,90.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Compre com tranquilidade! Oferecemos garantia de satisfação de 7 dias. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro, sem perguntas.",
  },
  {
    question: "Quais categorias de audiolivros estão incluídas?",
    answer:
      "O pack inclui audiolivros sobre Finanças (psicologia do dinheiro), Investimentos (renda fixa, variável e empreendedorismo), Carreira (desenvolvimento profissional) e Mentalidade (livros motivacionais como 'Quem Pensa Enriquece').",
  },
  {
    question: "Os bônus estão realmente incluídos?",
    answer:
      "Sim! Além dos 200 audiolivros, você recebe gratuitamente 3.500 livros em PDF formato best-sellers e um curso completo de Oratória. Tudo isso por R$ 19,90!",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Dúvidas Frequentes
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Tire suas dúvidas sobre o pack de audiolivros
            <br className="hidden md:block" />e comece sua jornada de transformação hoje.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
