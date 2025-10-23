import Image from "next/image"

export default function DashboardPreview({ activeCard }: { activeCard?: number }) {
  const audiobooks = [
    {
      title: "Pai Rico, Pai Pobre",
      author: "Robert Kiyosaki",
      category: "Finanças",
      color: "bg-emerald-500",
      image: "/images/pai-rico-pai-pobre.png",
    },
    {
      title: "Do Mil ao Milhão",
      author: "Thiago Nigro",
      category: "Investimentos",
      color: "bg-blue-500",
      image: "/images/do-mil-ao-milhao.png",
    },
    {
      title: "Quem Pensa Enriquece",
      author: "Napoleon Hill",
      category: "Mentalidade",
      color: "bg-purple-500",
      image: "/images/quem-pensa-enriquece.png",
    },
  ]

  return (
    <section className="relative pb-16 w-full">
      <div className="max-w-[1060px] mx-auto px-4">
        {/* Tablet Device Frame */}
        <div className="relative mx-auto max-w-4xl">
          {/* Tablet outer frame */}
          <div className="relative bg-[#1f1f1f] rounded-[32px] p-3 shadow-2xl">
            {/* Tablet screen */}
            <div className="relative bg-white rounded-[24px] overflow-hidden shadow-inner">
              {/* Screen content */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#fbfaf9] to-[#f5f3f0] p-8">
                {/* Catalog Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#37322f] mb-1">Catálogo de Audiolivros</h2>
                    <p className="text-sm text-[#605a57]">200 títulos best-sellers disponíveis</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#37322f] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Book Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {audiobooks.map((book, i) => (
                    <div
                      key={i}
                      className={`bg-white rounded-lg p-4 shadow-sm border border-[#e0dedb] hover:shadow-md transition-shadow cursor-pointer ${
                        activeCard === i ? "border-2 border-[#37322f]" : ""
                      }`}
                    >
                      <div className="rounded-md aspect-[2/3] relative overflow-hidden bg-gray-100">
                        <Image
                          src={book.image || "/placeholder.svg"}
                          alt={book.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tablet home button */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#3f3f3f] rounded-full"></div>
          </div>

          {/* Tablet shadow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#37322f]/5 blur-2xl translate-y-8"></div>
        </div>
      </div>
    </section>
  )
}
