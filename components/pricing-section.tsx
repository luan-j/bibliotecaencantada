"use client"

import { forwardRef, useState } from "react"

const PricingSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")

  const pricing = {
    starter: {
      monthly: 0,
      annually: 0,
    },
    professional: {
      monthly: 20,
      annually: 16, // 20% discount for annual
    },
    enterprise: {
      monthly: 200,
      annually: 160, // 20% discount for annual
    },
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          {/* Pricing Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="#37322F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              Oferta Imperdível
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Pack Audiolivros Incríveis
          </div>

          {/* Description */}
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            A melhor escolha para quem deseja transformar sua mentalidade
            <br />e alcançar a independência financeira.
          </div>
        </div>
      </div>

      {/* Billing Toggle Section */}
      {/* Removed Billing Toggle Section as it's not needed for the audiobook offer */}

      {/* Pricing Cards Section */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center" ref={ref}>
        <div className="flex justify-center items-start w-full">
          {/* Left Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>

          {/* Pricing Cards Container */}
          <div className="flex-1 flex flex-col justify-center items-center gap-6 py-12">
            {/* Single Featured Plan */}
            <div className="w-full max-w-[400px] px-8 py-8 bg-[#37322F] border border-[rgba(55,50,47,0.12)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-8">
              {/* Plan Header */}
              <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <div className="text-[#FBFAF9] text-2xl font-semibold leading-7 font-sans text-center">
                    200 Audiolivros Best-Sellers
                  </div>
                  <div className="text-[#B2AEA9] text-base font-normal leading-6 font-sans text-center">
                    + Bônus 3.500 livros em PDF
                    <br />+ Curso completo de Oratória
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-center gap-3">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#D2C6BF] text-lg font-medium line-through font-sans">R$ 97,00</span>
                      <span className="text-[#F0EFEE] text-6xl font-bold leading-none font-serif">R$ 19,90</span>
                    </div>
                    <div className="text-[#D2C6BF] text-sm font-medium font-sans">pagamento único</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://chk.eduzz.com/89AO4XNE0D?utm_source=facebook&utm_medium=cpc&utm_content=biblioteca%20encantada%20&utm_campaign=audios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-stretch px-6 py-3 relative bg-[#FBFAF9] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center hover:bg-[#F0EFEE] transition-colors"
                >
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="flex justify-center flex-col text-[#37322F] text-base font-semibold leading-5 font-sans">
                    EU QUERO!
                  </div>
                </a>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                {[
                  "Acesso vitalício",
                  "Download ilimitado",
                  "200 audiolivros best-sellers",
                  "+ 3.500 livros em PDF",
                  "Curso completo de Oratória",
                  "Atualizações incluídas",
                  "Garantia de 7 dias",
                  "Acesso imediato",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-3">
                    <div className="w-5 h-5 relative flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13 4L6 11L3 8"
                          stroke="#FF8000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-[#F0EFEE] text-sm font-normal leading-6 font-sans">{feature}</div>
                  </div>
                ))}
              </div>

              {/* Guarantee Badge */}
              <div className="self-stretch pt-4 border-t border-[rgba(255,255,255,0.1)] flex flex-col items-center gap-2">
                <div className="text-[#B2AEA9] text-xs font-medium text-center font-sans">
                  🛡️ Garantia de Satisfação de 7 dias
                </div>
                <div className="text-[#D2C6BF] text-xs text-center font-sans">
                  Se não ficar satisfeito, devolvemos seu dinheiro
                </div>
              </div>
            </div>
          </div>

          {/* Right Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

PricingSection.displayName = "PricingSection"

export default PricingSection