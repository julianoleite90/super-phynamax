"use client"

export default function Treatment() {
  const handleBuyClick = (kitType: '1' | '3' | '5') => {
    const urls = {
      '1': 'https://full.sale/eANTht?src=site-oficial',
      '3': 'https://full.sale/k0E9wK?src=site-oficial',
      '5': 'https://full.sale/8mYNoQ'
    }
    window.location.href = urls[kitType]
  }
  return (
    <section id="treatment" className="pt-0 pb-16 bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Escolha o melhor tratamento para a perda de peso
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Feito para quem busca emagrecimento saudável sem sacrifícios.
        </p>
        </div>

        {/* Kits Section */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
          {/* Kit 5 Frascos */}
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-300">
            <div className="text-center">
              <img 
                src="/images/5-frascos.png" 
                alt="Phynamax 5 Frascos" 
                className="w-56 h-56 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">5 Frascos</h3>
              <p className="text-gray-600 mb-4">150 dias de tratamento</p>
              
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">De R$ 1.087,00</span>
                <div className="text-2xl font-bold text-green-600">Por: 12x R$38,00</div>
                <div className="text-sm text-green-500 font-medium">sem juros</div>
                <div className="text-sm text-gray-600 mt-1">Ou R$410,40 no PIX</div>
              </div>

              <button 
                onClick={() => handleBuyClick('5')}
                className="w-full bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                COMPRAR AGORA
              </button>

              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Frete Grátis
                </span>
              </div>
            </div>
          </div>

          {/* Kit 3 Frascos - Destaque */}
          <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-green-500 relative hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                MAIS VENDIDO
              </span>
            </div>
            <div className="text-center">
              <img 
                src="/images/3-frascos.png" 
                alt="Phynamax 3 Frascos" 
                className="w-56 h-56 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">3 Frascos</h3>
              <p className="text-gray-600 mb-4">90 dias de tratamento</p>
              
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">De R$ 787,00</span>
                <div className="text-2xl font-bold text-green-600">Por: 12x R$32,00</div>
                <div className="text-sm text-green-500 font-medium">sem juros</div>
                <div className="text-sm text-gray-600 mt-1">Ou R$345,60 no PIX</div>
              </div>

              <button 
                onClick={() => handleBuyClick('3')}
                className="w-full bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                COMPRAR AGORA
              </button>

              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Frete Grátis
                </span>
              </div>
            </div>
          </div>

          {/* Kit 1 Frasco */}
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-300">
            <div className="text-center">
              <img 
                src="/images/1-frasco.png" 
                alt="Phynamax 1 Frasco" 
                className="w-56 h-56 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">1 Frasco</h3>
              <p className="text-gray-600 mb-4">30 dias de tratamento</p>
              
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">De R$ 384,00</span>
                <div className="text-2xl font-bold text-green-600">Por: 12x R$24,00</div>
                <div className="text-sm text-green-500 font-medium">sem juros</div>
                <div className="text-sm text-gray-600 mt-1">Ou R$259,20 no PIX</div>
              </div>

              <button 
                onClick={() => handleBuyClick('1')}
                className="w-full bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                COMPRAR AGORA
              </button>

              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Frete Grátis
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
          <img 
            src="/images/cartoes.webp" 
            alt="Formas de pagamento" 
            className="w-full max-w-lg mx-auto h-auto object-contain"
          />
          <p className="text-gray-600 text-sm mt-4">
            Aceitamos todos os meios de pagamento
          </p>
        </div>
      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
    </section>
  )
}
