"use client"

export default function Kits() {
  return (
    <section id="kits" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Linha de separação com gradiente prateado - REMOVIDA */}
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            O Segredo está nos ingredientes que aumentam a saciedade, eliminam a fome excessiva e regulam o organismo
          </p>
            </div>

        {/* Image - Mobile only (above content) */}
        <div className="md:hidden flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <img
              src="/images/colher.png"
              alt="Phynamax - Como funciona"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Two Columns Layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 order-1 md:order-1">
            
            <ul className="space-y-4 text-lg">
              <li className="flex items-start space-x-3">
                <img src="/images/icone-emagrecimento.png" alt="Ícone emagrecimento" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Espirulina:</strong> Rica em proteínas e antioxidantes, estabiliza a glicemia, reduz fome e impulsiona a queima de calorias.
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/icone-emagrecimento.png" alt="Ícone emagrecimento" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Cromo:</strong> Melhora a ação da insulina, corta o desejo por doces e acelera o metabolismo de gorduras.
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/icone-emagrecimento.png" alt="Ícone emagrecimento" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Guaraná:</strong> Com cafeína natural, dispara o metabolismo e a termogênese, queimando gordura e dando energia.
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/icone-emagrecimento.png" alt="Ícone emagrecimento" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Psyllium:</strong> Fibra que forma gel, aumenta saciedade em 30%, reduz apetite e regula o intestino.
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/icone-emagrecimento.png" alt="Ícone emagrecimento" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Agar Agar:</strong> Fibra que promove saciedade, reduz calorias e melhora a saúde intestinal para emagrecer.
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/icone-emagrecimento.png" alt="Ícone emagrecimento" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Quitosana:</strong> Bloqueia absorção de gorduras, reduz calorias e controla hormônios da fome, como leptina.
                </div>
              </li>
            </ul>


            <div className="pt-4">
            <button 
              onClick={() => {
                const treatmentSection = document.getElementById('treatment');
                if (treatmentSection) {
                  treatmentSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              EU QUERO EXPERIMENTAR
            </button>
            </div>
          </div>

          {/* Right Column - Image - Desktop only */}
          <div className="hidden md:flex justify-center order-2">
            <div className="w-full max-w-xl">
              <img
                src="/images/colher.png"
                alt="Phynamax - Como funciona"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>

      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
    </section>
  )
}
