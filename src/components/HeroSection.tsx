import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;
  const [openFaq, setOpenFaq] = useState<number>(1); // Primeira pergunta aberta por padrão
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showKit8Popup, setShowKit8Popup] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(true);

  const toggleFaq = (faqNumber: number) => {
    setOpenFaq(openFaq === faqNumber ? 0 : faqNumber);
  };

  const openImageModal = (imageSrc: string) => {
    console.log('Opening modal with image:', imageSrc);
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const scrollToKits = () => {
    const kitsSection = document.getElementById('kits');
    if (kitsSection) {
      kitsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigateCarousel = (direction: number) => {
    setCurrentSlide((prevSlide) => (prevSlide + direction + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const updateCarousel = () => {
    const track = document.getElementById('carousel-track');
    if (track) {
      const slideWidth = window.innerWidth >= 1024 ? 33.333 : window.innerWidth >= 768 ? 50 : 100;
      track.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }
  };

  useEffect(() => {
    updateCarousel();
  }, [currentSlide]);

  useEffect(() => {
    const handleResize = () => updateCarousel();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  // Animação do ponto vermelho piscando
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRecording(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-pink-600 py-4 px-4 sm:px-6 lg:px-8">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/logo-phynamax.png" 
              alt="Phynamax Logo" 
              className="h-10 sm:h-12 lg:h-16 w-auto"
            />
          </div>
                            <a href="https://rastreamento.correios.com.br/app/index.php" target="_blank" rel="noopener noreferrer nofollow" className="bg-white text-black hover:bg-gray-100 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm lg:text-base inline-block">
                    RASTREAR PEDIDO
                  </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Hero Image */}
            <div className="relative flex items-end justify-center lg:justify-start pb-0 pt-8">
              <img 
                src="/a1hero.png" 
                alt="Hero" 
                className="w-full max-w-[280px] lg:max-w-[360px] xl:max-w-[430px] h-auto object-contain"
              />
            </div>

            {/* Right Side - Text and CTA */}
                          <div className="text-center lg:text-left space-y-6 flex flex-col justify-start pt-0 sm:pt-0 md:pt-4 lg:pt-16">
              <h1 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-900 leading-tight">
                <span className="font-black">PERCA PESO</span> DE <span>FORMA RÁPIDA</span><br />
                E TENHA UMA <span className="font-black">VIDA MAIS SAUDÁVEL</span>
              </h1>
              
              {/* Benefits List */}
              <div className="space-y-4 pt-2 sm:pt-0">
                {[
                  "REDUZ A ABSORÇÃO DO AÇUCAR",
                  "AUMENTA A SACIEDADE",
                  "CONTROLA O APETITE",
                  "ELIMINA A GORDURA TEIMOSA",
                  "AUXILIA O FUNCIONAMENTO METABÓLICO"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 text-left">
                    <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-800 leading-tight text-left">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* Main CTA Button */}
              <div className="pt-6 pb-8 sm:pb-0">
                <button 
                  onClick={scrollToKits}
                  className="w-full lg:w-auto bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-xl text-sm lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-base lg:text-xl">SIM, QUERO EXPERIMENTAR AGORA</div>
                    <div className="text-xs lg:text-sm font-normal opacity-90 mt-1">
                      CLIQUE AQUI E GARANTA SEU KIT COM DESCONTO
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-pink-600 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center">
          <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
            RECOMENDADO POR ESPECIALISTAS E APROVADO PELA LEGISLAÇÃO
          </p>
        </div>
      </footer>

      {/* ANVISA Approval Section */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 pb-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text */}
            <div className="text-left">
              <p className="text-gray-800 text-lg leading-relaxed">
                A fórmula do <strong className="font-bold">Phynamax</strong> é aprovada pelos orgãos regulatórios do Brasil, dentro dos termos da RDC 240 DE 26/07/2018, sendo dispensado de registro, pois é avaliado como 100% seguro para o consumo da população por este órgão.
              </p>
            </div>
            
            {/* Right Side - ANVISA Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center">
                <img 
                  src="/adra.png" 
                  alt="ANVISA Logo" 
                  className="w-72 h-72 lg:w-96 lg:h-96 mx-auto lg:mx-0 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pink Bar Section */}
      <section className="bg-pink-600 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center">
          <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
            GARANTIMOS 30 DIAS INCRÍVEIS, SEM EFEITOS COLATERAIS, OU VOCÊ NÃO PAGA NADA!
          </p>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Guarantee Image */}
            <div className="flex justify-center lg:justify-start">
                              <img 
                  src="/garantia-min.png" 
                  alt="Garantia Phynamax" 
                  className="w-full max-w-[230px] lg:max-w-[300px] xl:max-w-[350px] h-auto object-contain"
                />
            </div>

            {/* Right Side - Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Quantos produtos você já comprou que não deram resultado? Pois é.
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Para eliminar qualquer risco, nós te oferecemos uma garantia incondicional de 30 dias para quem adquirir o <strong>Phynamax</strong>. Se nestes 30 primeiros dias você não notar uma diminuição no seu apetite, e nem uma redução de peso, ou uma grande melhora na sua qualidade de vida, basta enviar um email para <strong>sac@bourjun.com</strong> que faremos a devolução integral do seu dinheiro, sem qualquer questionamento.
                </p>
                
                <p>
                  Oferecemos essa garantia porque temos certeza que o <strong>Phynamax</strong> é tudo o que você precisa para emagrecer e melhorar a sua saúde e poder aproveitar o melhor da sua vida, com muita disposição e sem sofrer com efeitos colaterais.
                </p>
                
                <p className="text-xl font-semibold text-gray-900">
                  Por isso, faça seu pedido agora. Você não tem absolutamente <span className="text-red-600">NADA</span> a perder, e tudo a ganhar.
                </p>
                
                <div className="pt-6">
                  <button 
                    onClick={scrollToKits}
                    className="w-full lg:w-auto bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-xl text-sm lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <div className="text-center">
                      <div className="text-base lg:text-xl">SIM, QUERO EXPERIMENTAR AGORA</div>
                      <div className="text-xs lg:text-sm font-normal opacity-90 mt-1">
                        CLIQUE AQUI E GARANTA SEU KIT COM DESCONTO
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Third Pink Bar Section */}
      <section className="bg-pink-600 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center">
          <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide mb-4">
            RESULTADOS REAIS
          </p>
          <p className="text-white text-lg sm:text-xl lg:text-2xl tracking-wide">
            Veja as transformações incríveis de quem já experimentou o Phynamax
          </p>
        </div>
      </section>

      {/* Before and After Carousel Section */}
      <section className="bg-white pt-4 lg:pt-2 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto mt-8 lg:-mt-12 mb-4 lg:mb-6">
            {/* Carousel Track */}
            <div className="flex overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out w-full" id="carousel-track">
                {/* Before and After Images */}
                {[
                  { image: "/11.png", name: "Gabriela Oliveira", age: "31 anos", weight: "-25kg", city: "Brasília - DF" },
                  { image: "/13.png", name: "Bruno Rodrigues", age: "43 anos", weight: "-28kg", city: "Fortaleza - CE" },
                  { image: "/14.png", name: "Priscila Santos", age: "30 anos", weight: "-24kg", city: "Goiânia - GO" },
                  { image: "/10.png", name: "Isabela Lima", age: "29 anos", weight: "-16kg", city: "Florianópolis - SC" },
                  { image: "/12.png", name: "Juliana Mendes", age: "27 anos", weight: "-19kg", city: "Curitiba - PR" },
                  { image: "/15.png", name: "Rafaela Fernandes", age: "26 anos", weight: "-18kg", city: "Manaus - AM" }
                ].map((item, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-2">
                    <img 
                      src={item.image} 
                      alt={`Resultado ${index + 1}`}
                      className="w-full h-80 sm:h-80 lg:h-[36rem] object-contain rounded-lg mx-auto"
                    />
                    <div className="text-center mt-3 lg:-mt-20">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1">
                        {item.name} | {item.age} | {item.weight}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                        {item.city}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-200/40 text-pink-700 p-2 rounded-full shadow-sm hover:bg-pink-300/60 transition-colors duration-200 z-10"
              onClick={() => navigateCarousel(-1)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-200/40 text-pink-700 p-2 rounded-full shadow-sm hover:bg-pink-300/60 transition-colors duration-200 z-10"
              onClick={() => navigateCarousel(1)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2, 3, 4, 5].map((dot) => (
                <button
                  key={dot}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    dot === currentSlide ? 'bg-pink-600' : 'bg-gray-300'
                  }`}
                  onClick={() => goToSlide(dot)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Pink Bar Section */}
      <section className="bg-pink-600 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center">
          <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
            A FÓRMULA DO EMAGRECIMENTO
          </p>
          <p className="text-white text-base sm:text-lg lg:text-xl font-normal mt-2 opacity-90">
            6 Bioativos para acelerar o seu emagrecimento
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Image - Top on Mobile, Right on Desktop */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <img 
                src="/formula1.png" 
                alt="Fórmula Phynamax" 
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain mt-0 lg:mt-12"
              />
            </div>
            
            {/* Benefits - Bottom on Mobile, Left on Desktop */}
            <div className="space-y-6 order-2 lg:order-1">
              
              <div className="space-y-3">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-pink-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-800 text-base font-semibold">Psyllium:</p>
                      <p className="text-gray-600 text-sm">Essa fibra atua como uma esponja, absorvendo água e aumentando a saciedade, fazendo o organismo trabalhar na regulação do intestino e reduzindo o apetite.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-pink-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-800 text-base font-semibold">Spirulina:</p>
                      <p className="text-gray-600 text-sm">Essa alga acelera o metabolismo com seus nutrientes, fazendo o organismo queimar calorias mais eficientemente e reduzir a retenção de líquidos.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-pink-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-800 text-base font-semibold">Quitosana:</p>
                      <p className="text-gray-600 text-sm">Esse bioativo atua como uma esponja, capturando gorduras da dieta e fazendo o organismo eliminá-las antes que sejam absorvidas.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-pink-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-800 text-base font-semibold">Cromo:</p>
                      <p className="text-gray-600 text-sm">Esse mineral faz o organismo trabalhar no equilíbrio do açúcar no sangue, acelerando o metabolismo e diminuindo a vontade de comer doces.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-pink-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-800 text-base font-semibold">Agar Agar:</p>
                      <p className="text-gray-600 text-sm">Essa fibra forma um gel no estômago, atuando como uma esponja que aumenta a saciedade e faz o organismo absorver menos calorias.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-pink-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-800 text-base font-semibold">Guaraná:</p>
                      <p className="text-gray-600 text-sm">Esse estimulante acelera o metabolismo, fazendo o organismo queimar gordura e manter a energia para atividades físicas.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="pt-8 text-center">
                <button 
                  onClick={scrollToKits}
                  className="w-full lg:w-auto bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-xl text-sm lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-base lg:text-xl">SIM, QUERO EXPERIMENTAR AGORA</div>
                    <div className="text-xs lg:text-sm font-normal opacity-90 mt-1">
                      CLIQUE AQUI E GARANTA SEU KIT COM DESCONTO
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

              {/* Kit Selection Section */}
        <section id="kits" className="bg-pink-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center">
          <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
            ESCOLHA O SEU KIT ABAIXO
          </p>
          <p className="text-white text-lg sm:text-xl lg:text-2xl tracking-wide">
            Recomendamos o tratamento de 3 a 5 meses para efeito total e duradouro
          </p>
        </div>
      </section>

      {/* Kits Section */}
      <section className="bg-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6 lg:gap-6">
            
            {/* Kit 8 Potes */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-4 lg:p-8 text-center">
                <div className="relative mb-0">
                  <img src="/5f.png" alt="Kit 8 Potes" className="w-[17rem] h-[17rem] md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] mx-auto object-contain -mt-20 md:-mt-36 lg:-mt-56" />
                </div>
                <div className="border-2 border-dashed border-pink-600 text-center py-2 px-4 -mt-4 md:-mt-28 rounded">
                  <div className="font-bold text-lg lg:text-xl text-pink-600">8 FRASCOS</div>
                  <div className="text-sm lg:text-base text-pink-600">tratamento para 240 dias</div>
                </div>
                
                {/* Preço por pote */}
                <div className="mt-4 lg:mt-6 text-center">
                  <p className="text-gray-800 text-sm lg:text-base">Neste kit cada pote sai por <span className="font-semibold">R$66,12</span></p>
                </div>
                
                <div className="space-y-2 mb-6 mt-6 lg:space-y-3 lg:mb-8 lg:mt-8">
                  <p className="text-gray-800 text-xl lg:text-2xl">em 12x de <span className="text-green-600 font-bold text-2xl lg:text-3xl">R$52,00</span></p>
                  <p className="text-gray-800 text-sm lg:text-base">à vista <span className="font-semibold text-gray-800">R$ 529,00</span></p>
                  <p className="text-green-600 text-sm lg:text-base font-semibold">PIX: 15% de desconto adicional!</p>
                </div>
                <button 
                  onClick={() => setShowKit8Popup(true)}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 lg:py-5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg lg:text-xl"
                >
                  ESGOTADO
                </button>
                <div className="mt-3 lg:mt-4 text-center">
                  <p className="text-green-600 font-semibold text-sm lg:text-base">Frete grátis ⚡ FULL</p>
                </div>
              </div>
            </div>

            {/* Kit 5 Potes */}
            <div className="bg-white rounded-xl shadow-2xl border-2 border-yellow-400 transform -translate-y-2 hover:-translate-y-4 transition-all duration-300">
              <div className="p-4 lg:p-8 text-center">
                <div className="relative mb-0">
                  <img src="/8f.png" alt="Kit 5 Potes" className="w-[17rem] h-[17rem] md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] mx-auto object-contain -mt-20 md:-mt-36 lg:-mt-56" />
                </div>
                <div className="border-2 border-dashed border-pink-600 text-center py-2 px-4 -mt-4 md:-mt-28 rounded">
                  <div className="font-bold text-lg lg:text-xl text-pink-600">5 FRASCOS</div>
                  <div className="text-sm lg:text-base text-pink-600">tratamento para 150 dias</div>
                </div>
                
                {/* Preço por pote */}
                <div className="mt-4 lg:mt-6 text-center">
                  <p className="text-gray-800 text-sm lg:text-base">Neste kit cada pote sai por <span className="font-semibold">R$87,80</span></p>
                </div>
                
                <div className="space-y-2 mb-6 mt-6 lg:space-y-3 lg:mb-8 lg:mt-8">
                  <p className="text-xl lg:text-2xl">em 12x de <span className="text-green-600 font-bold text-2xl lg:text-3xl">R$44,08</span></p>
                  <p className="text-gray-800 text-sm lg:text-base">à vista <span className="font-semibold text-gray-800">R$ 439,00</span></p>
                  <p className="text-green-600 text-sm lg:text-base font-semibold">PIX: 15% de desconto adicional!</p>
                </div>
                <a href="https://full.sale/8mYNoQ" target="_blank" rel="noopener noreferrer nofollow" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 lg:py-5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg lg:text-xl inline-block text-center">
                  Comprar Agora »
                </a>
                <div className="mt-3 lg:mt-4 text-center">
                  <p className="text-green-600 font-semibold text-sm lg:text-base">Frete grátis ⚡ FULL</p>
                </div>
              </div>
            </div>

            {/* Kit 3 Potes */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-4 lg:p-8 text-center">
                <div className="relative mb-0">
                  <img src="/3f.png" alt="Kit 3 Potes" className="w-[17rem] h-[17rem] md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] mx-auto object-contain -mt-20 md:-mt-36 lg:-mt-56" />
                </div>
                <div className="border-2 border-dashed border-pink-600 text-center py-2 px-4 -mt-4 md:-mt-28 rounded">
                  <div className="font-bold text-lg lg:text-xl text-pink-600">3 FRASCOS</div>
                  <div className="text-sm lg:text-base text-pink-600">tratamento para 90 dias</div>
                </div>
                
                {/* Preço por pote */}
                <div className="mt-4 lg:mt-6 text-center">
                  <p className="text-gray-800 text-sm lg:text-base">Neste kit cada pote sai por <span className="font-semibold">R$106,33</span></p>
                </div>
                
                <div className="space-y-2 mb-6 mt-6 lg:space-y-3 lg:mb-8 lg:mt-8">
                  <p className="text-gray-800 text-xl lg:text-2xl">em 12x de <span className="text-green-600 font-bold text-2xl lg:text-3xl">R$32,03</span></p>
                  <p className="text-gray-800 text-sm lg:text-base">à vista <span className="font-semibold text-gray-800">R$ 319,00</span></p>
                  <p className="text-green-600 text-sm lg:text-base font-semibold">PIX: 15% de desconto adicional!</p>
                </div>
                <a href="https://full.sale/k0E9wK" target="_blank" rel="noopener noreferrer nofollow" className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-4 lg:py-5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg lg:text-xl inline-block text-center">
                  Comprar Agora »
                </a>
                <div className="mt-3 lg:mt-4 text-center">
                  <p className="text-green-600 font-semibold text-sm lg:text-base">Frete grátis ⚡ FULL</p>
                </div>
              </div>
            </div>

            {/* Kit 1 Pote */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-4 lg:p-8 text-center">
                <div className="relative mb-0">
                  <img src="/1f.png" alt="Kit 1 Pote" className="w-[17rem] h-[17rem] md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] mx-auto object-contain -mt-20 md:-mt-36 lg:-mt-56" />
                </div>
                <div className="border-2 border-dashed border-pink-600 text-center py-2 px-4 -mt-4 md:-mt-28 rounded">
                  <div className="font-bold text-lg lg:text-xl text-pink-600">1 FRASCO</div>
                  <div className="text-sm lg:text-base text-pink-600">tratamento para 30 dias</div>
                </div>
                
                {/* Preço por pote */}
                <div className="mt-4 lg:mt-6 text-center">
                  <p className="text-gray-800 text-sm lg:text-base">Neste kit cada pote sai por <span className="font-semibold">R$189,00</span></p>
                </div>
                
                <div className="space-y-2 mb-6 mt-6 lg:space-y-3 lg:mb-8 lg:mt-8">
                  <p className="text-gray-800 text-xl lg:text-2xl">em 12x de<br /><span className="text-green-600 font-bold text-2xl lg:text-3xl">R$18,98</span></p>
                  <p className="text-gray-800 text-sm lg:text-base">à vista <span className="font-semibold text-gray-800">R$ 189,00</span></p>
                  <p className="text-green-600 text-sm lg:text-base font-semibold">PIX: 15% de desconto adicional!</p>
                </div>
                <a href="https://full.sale/eANTht" target="_blank" rel="noopener noreferrer nofollow" className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-4 lg:py-5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg lg:text-xl inline-block text-center">
                  Comprar Agora »
                </a>
                <div className="mt-3 lg:mt-4 text-center">
                  <p className="text-green-600 font-semibold text-sm lg:text-base">Frete grátis ⚡ FULL</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Payment Methods Section - Mobile and Desktop */}
      <section className="bg-white py-1 px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center">
          <h2 className="text-xl lg:text-2xl font-bold text-black mb-2 -mt-4 lg:mt-0">
            Aceitamos todos os métodos de pagamento
          </h2>
          <img 
            src="./cartoes.webp" 
            alt="Métodos de pagamento aceitos" 
            className="w-full max-w-xs mx-auto object-contain mb-4"
          />
        </div>
      </section>

      {/* Mercado Livre Section */}
      <section className="bg-yellow-200/70 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Text and CTA */}
              <div className="text-center lg:text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Prefere comprar no Mercado Livre?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Acesse nossa loja oficial no Mercado Livre e garanta agora mesmo o seu Phynamax Original e Seguro.
                </p>
                {/* CTA Button - Desktop Only */}
                <div className="hidden lg:block">
                  <a href="https://produto.mercadolivre.com.br/MLB-3985586341-phynamax-funciona-5-frascos-_JM#polycard_client=recommendations_vip-seller_items-above&reco_backend=ranker-retsys-same-seller&reco_model=rk_entity_sameseller&reco_client=vip-seller_items-above&reco_item_pos=1&reco_backend_type=low_level&reco_id=66b9e745-9f26-4da3-b223-a9e69e99b705" target="_blank" rel="noopener noreferrer nofollow" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block">
                    Comprar no Mercado Livre »
                  </a>
                </div>
              </div>
              
              {/* Right Column - Mercado Livre Image and CTA (Mobile) */}
              <div className="flex flex-col items-center">
                <img 
                  src="/mercado-livre.png" 
                  alt="Mercado Livre" 
                  className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] object-contain -mt-32 lg:-mt-48 -mb-48 lg:-mb-56"
                  style={{width: '400px', height: '400px'}}
                />
                {/* CTA Button - Visible on Mobile, Hidden on Desktop */}
                <a href="https://produto.mercadolivre.com.br/MLB-3985586341-phynamax-funciona-5-frascos-_JM#polycard_client=recommendations_vip-seller_items-above&reco_backend=ranker-retsys-same-seller&reco_model=rk_entity_sameseller&reco_client=vip-seller_items-above&reco_item_pos=1&reco_backend_type=low_level&reco_id=66b9e745-9f26-4da3-b223-a9e69e99b705" target="_blank" rel="noopener noreferrer nofollow" className="lg:hidden bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl mt-28 inline-block">
                  Comprar no Mercado Livre »
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compra Segura Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          {/* Mobile Layout: Image first, then title and content */}
          <div className="lg:hidden space-y-8">
            {/* Image - Above title on mobile */}
            <div className="flex justify-center">
              <img 
                src="/correio-frete.png" 
                alt="Correio Frete - Compra Segura" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Main Title */}
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide text-green-600">
                <span>COMPRA 100% SEGURA - ENTREGA GARANTIDA</span>
              </h2>
            </div>

                          {/* Features Grid */}
              <div className="grid grid-cols-1 gap-4">
              {/* Site Confiável */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/ico-seguro.png" alt="Site Confiável" className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Site Confiável</h3>
                    <p className="text-gray-600 text-sm">Monitorado todo o tempo por empresas de segurança digital.</p>
                  </div>
                </div>
              </div>

              {/* Entrega Garantida */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/ico-frete.png" alt="Entrega Garantida" className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Entrega Garantida</h3>
                    <p className="text-gray-600 text-sm">Logística eficaz com entregas feitas no prazo combinado.</p>
                  </div>
                </div>
              </div>

              {/* Dados Financeiros */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/ico-dados.png" alt="Dados Financeiros" className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Dados Financeiros</h3>
                    <p className="text-gray-600 text-sm">Gravados em ambiente 100% seguro.</p>
                  </div>
                </div>
              </div>

              {/* Dados Pessoais */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/ico-cadeado.png" alt="Dados Pessoais" className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Dados Pessoais</h3>
                    <p className="text-gray-600 text-sm">São totalmente sigilosos e não são compartilhados.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Text */}
            <div className="text-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                Experimente Phynamax com total tranquilidade! Oferecemos <span className="text-black font-bold">garantia de satisfação de 30 dias</span> - se não ficar completamente satisfeito, devolvemos 100% do valor pago, sem complicações.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button 
                onClick={scrollToKits}
                className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-xl text-sm lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="text-base lg:text-xl">SIM, QUERO EXPERIMENTAR AGORA</div>
                  <div className="text-xs lg:text-sm font-normal opacity-90 mt-1">
                    CLIQUE AQUI E GARANTA SEU KIT COM DESCONTO
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Desktop Layout: Two columns - Image left, Content right */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="flex justify-center">
              <img 
                src="/correio-frete.png" 
                alt="Correio Frete - Compra Segura" 
                className="w-full max-w-lg xl:max-w-xl h-auto object-contain mt-24"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Main Title */}
              <div className="text-left">
                <h2 className="text-2xl lg:text-3xl font-extrabold tracking-wide text-gray-900">
                  <span>COMPRA 100% SEGURA - ENTREGA GARANTIDA</span>
                </h2>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Site Confiável */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                                      <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/ico-seguro.png" alt="Site Confiável" className="w-7 h-7" />
                  </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">Site Confiável</h3>
                      <p className="text-gray-600 text-sm">Monitorado todo o tempo por empresas de segurança digital.</p>
                    </div>
                  </div>
                </div>

                {/* Entrega Garantida */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                                      <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/ico-frete.png" alt="Entrega Garantida" className="w-7 h-7" />
                  </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">Entrega Garantida</h3>
                      <p className="text-gray-600 text-sm">Logística eficaz com entregas feitas no prazo combinado.</p>
                    </div>
                  </div>
                </div>

                {/* Dados Financeiros */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                                      <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/ico-dados.png" alt="Dados Financeiros" className="w-7 h-7" />
                  </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">Dados Financeiros</h3>
                      <p className="text-gray-600 text-sm">Gravados em ambiente 100% seguro.</p>
                    </div>
                  </div>
                </div>

                {/* Dados Pessoais */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                                      <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/ico-cadeado.png" alt="Dados Pessoais" className="w-7 h-7" />
                  </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">Dados Pessoais</h3>
                      <p className="text-gray-600 text-sm">São totalmente sigilosos e não são compartilhados.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee Text */}
              <div className="text-left">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Experimente Phynamax com total tranquilidade! Oferecemos <span className="text-black font-bold">garantia de satisfação de 30 dias</span> - se não ficar completamente satisfeito, devolvemos 100% do valor pago, sem complicações.
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-left">
                <button 
                  onClick={scrollToKits}
                  className="w-full lg:w-auto bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-xl text-sm lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-base lg:text-xl">SIM, QUERO EXPERIMENTAR AGORA</div>
                    <div className="text-xs lg:text-sm font-normal opacity-90 mt-1">
                      CLIQUE AQUI E GARANTA SEU KIT COM DESCONTO
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes Section */}
      <section className="bg-pink-600 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center">
          <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
            PERGUNTAS FREQUENTES
          </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  Como devo tomar o Phynamax?
                </h3>
                <div className={`text-2xl font-bold text-gray-400 transition-transform ${openFaq === 1 ? 'rotate-45' : ''}`}>
                  {openFaq === 1 ? '×' : '+'}
                </div>
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Recomenda-se tomar 2 cápsulas por dia, preferencialmente antes das principais refeições. Para melhores resultados, tome uma cápsula 30 minutos antes do almoço e outra 30 minutos antes do jantar, sempre com um copo de água.
                  </p>
                </div>
              )}
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  Quanto tempo demora para ver resultados?
                </h3>
                <div className={`text-2xl font-bold text-gray-400 transition-transform ${openFaq === 2 ? 'rotate-45' : ''}`}>
                  {openFaq === 2 ? '×' : '+'}
                </div>
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Os primeiros resultados começam a aparecer nas primeiras semanas de uso, com redução do apetite e controle da compulsão. A perda de peso mais significativa torna-se visível a partir do segundo mês de uso contínuo.
                  </p>
                </div>
              )}
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  Qual é a composição?
                </h3>
                <div className={`text-2xl font-bold text-gray-400 transition-transform ${openFaq === 3 ? 'rotate-45' : ''}`}>
                  {openFaq === 3 ? '×' : '+'}
                </div>
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Phynamax é composto por: Psyllium, Agar Agar, Quitosana, Cromo, Guaraná, Spirulina. Seis poderosos ingredientes que juntos promovem um emagrecimento saudável e totalmente natural.
                  </p>
                </div>
              )}
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <button 
                onClick={() => toggleFaq(4)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  O Phynamax tem efeitos colaterais?
                </h3>
                <div className={`text-2xl font-bold text-gray-400 transition-transform ${openFaq === 4 ? 'rotate-45' : ''}`}>
                  {openFaq === 4 ? '×' : '+'}
                </div>
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Por ser um produto 100% natural, o Phynamax não apresenta efeitos colaterais. Você pode tomar sem riscos e aproveitar todos os benefícios. Importante: pessoas que possuem alergias a crustáceos não devem utilizar.
                  </p>
                </div>
              )}
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <button 
                onClick={() => toggleFaq(5)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-8">
                  Preciso fazer dieta rigorosa enquanto tomo Phynamax?
                </h3>
                <div className={`text-2xl font-bold text-gray-400 transition-transform ${openFaq === 5 ? 'rotate-45' : ''}`}>
                  {openFaq === 5 ? '×' : '+'}
                </div>
              </button>
              {openFaq === 5 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    O Phynamax funciona mesmo sem dietas rigorosas, pois age controlando a compulsão e reduzindo o apetite naturalmente. No entanto, para resultados ainda melhores, recomendamos manter uma alimentação equilibrada e praticar atividades físicas regularmente.
                  </p>
                </div>
              )}
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <button 
                onClick={() => toggleFaq(6)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  Como funciona a garantia de satisfação?
                </h3>
                <div className={`text-2xl font-bold text-gray-400 transition-transform ${openFaq === 6 ? 'rotate-45' : ''}`}>
                  {openFaq === 6 ? '×' : '+'}
                </div>
              </button>
              {openFaq === 6 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Oferecemos 30 dias de garantia incondicional. Se você não ficar satisfeito com os resultados, basta entrar em contato com nosso atendimento e solicitar o reembolso total do seu investimento, conforme os nossos termos de garantia. Você não tem riscos.
                  </p>
                </div>
              )}
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden lg:col-span-2">
              <button 
                onClick={() => toggleFaq(7)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  Qual o prazo de entrega?
                </h3>
                <div className={`text-2xl font-bold text-gray-400 transition-transform ${openFaq === 7 ? 'rotate-45' : ''}`}>
                  {openFaq === 7 ? '×' : '+'}
                </div>
              </button>
              {openFaq === 7 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    O prazo médio de entrega é de 5 a 10 dias úteis para todo Brasil. Após a confirmação do pagamento, você receberá o código de rastreamento para acompanhar sua encomenda.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Comentários Recentes Section */}
      <section className="bg-pink-600 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container-custom text-center">
          <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
            COMENTÁRIOS RECENTES
          </p>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Post 1 - Com Foto */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Header do Post */}
              <div className="flex items-center p-3 border-b border-gray-100">
                <img 
                  src="/ig1.png" 
                  alt="Avatar Maria" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="ml-3 flex-1">
                  <div className="font-semibold text-sm text-gray-900">maria_silva</div>
                  <div className="text-xs text-gray-500">São Paulo, SP</div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Conteúdo da Imagem */}
              <div className="relative cursor-pointer group" onClick={() => openImageModal('/im-dep-1.png')}>
                <img 
                  src="/im-dep-1.png" 
                  alt="Resultado Phynamax" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay com texto */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="bg-black/70 px-3 py-2 rounded-lg">
                      <span className="text-sm font-semibold">Clique para ampliar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="p-3">
                <div className="flex items-center space-x-4 mb-3">
                  <button className="text-gray-600 hover:text-red-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  <div className="ml-auto">
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Likes */}
                <div className="text-sm font-semibold text-gray-900 mb-2">Curtido por <span className="text-blue-600">carla_emagreceu</span> e <span className="text-blue-600">outras 127 pessoas</span></div>

                {/* Caption */}
                <div className="text-sm text-gray-900 mb-2">
                  <span className="font-semibold">maria_silva</span> Finalmente consegui perder 18kg com Phynamax! 🎉 
                  <br />Depois de 3 meses, minha autoestima mudou completamente! 
                  <br />#emagrecimento #phynamax #resultados #foco
                </div>

                {/* Comentários */}
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">ana_clara</span>
                    <span className="text-gray-700 ml-2">Parabéns! Estou tomando também! 💪</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">pedro_santos</span>
                    <span className="text-gray-700 ml-2">Incrível! Quanto tempo demorou?</span>
                  </div>
                </div>

                {/* Horário */}
                <div className="text-xs text-gray-500">HÁ 3 DIAS</div>
              </div>
            </div>

            {/* Post 2 - Com Vídeo */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Header do Post */}
              <div className="flex items-center p-3 border-b border-gray-100">
                <img 
                  src="/ig2.png" 
                  alt="Avatar Carlos" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="ml-3 flex-1">
                  <div className="font-semibold text-sm text-gray-900">ana_paula</div>
                  <div className="text-xs text-gray-500">Curitiba, PR</div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Conteúdo do Vídeo */}
              <div className="relative">
                <iframe 
                  src="https://player.vimeo.com/video/1112916686?h=64c0c0c0c0&autoplay=0&loop=0&title=0&byline=0&portrait=0" 
                  className="w-full h-64"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  title="Vídeo Carlos Lima - Treino"
                ></iframe>
              </div>

              {/* Ações */}
              <div className="p-3">
                <div className="flex items-center space-x-4 mb-3">
                  <button className="text-gray-600 hover:text-red-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  <div className="ml-auto">
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Likes */}
                <div className="text-sm font-semibold text-gray-900 mb-2">Curtido por <span className="text-blue-600">maria_silva</span> e <span className="text-blue-600">outras 89 pessoas</span></div>

                {/* Caption */}
                <div className="text-sm text-gray-900 mb-2">
                  <span className="font-semibold">ana_paula</span> Treino pesado hoje! 💪 
                  <br />Com Phynamax controlando o apetite, fica mais fácil manter o foco! 
                  <br />#treino #foco #phynamax #academia
                </div>

                {/* Comentários */}
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">joao_fitness</span>
                    <span className="text-gray-700 ml-2">Boa! Está funcionando mesmo! 🔥</span>
                  </div>
                </div>

                {/* Horário */}
                <div className="text-xs text-gray-500">HÁ 1 SEMANA</div>
              </div>
            </div>

            {/* Post 3 - Com Foto */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Header do Post */}
              <div className="flex items-center p-3 border-b border-gray-100">
                <img 
                  src="/ig3.png" 
                  alt="Avatar Julia" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="ml-3 flex-1">
                  <div className="font-semibold text-sm text-gray-900">julia_costa</div>
                  <div className="text-xs text-gray-500">Belo Horizonte, MG</div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Conteúdo da Imagem */}
              <div className="relative cursor-pointer group" onClick={() => openImageModal('/im-3-dep.png')}>
                <img 
                  src="/im-3-dep.png" 
                  alt="Resultado Phynamax" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay com texto */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="bg-black/70 px-3 py-2 rounded-lg">
                      <span className="text-sm font-semibold">Clique para ampliar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="p-3">
                <div className="flex items-center space-x-4 mb-3">
                  <button className="text-red-500">
                    <svg className="w-6 h-6" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  <div className="ml-auto">
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Likes */}
                <div className="text-sm font-semibold text-gray-900 mb-2">Curtido por <span className="text-blue-600">carlos_lima</span> e <span className="text-blue-600">outras 203 pessoas</span></div>

                {/* Caption */}
                <div className="text-sm text-gray-900 mb-2">
                  <span className="font-semibold">julia_costa</span> Antes e depois! 😍 
                  <br />Phynamax mudou minha vida! Perdi 22kg em 4 meses! 
                  <br />#antesedepois #phynamax #transformacao #feliz
                </div>

                {/* Comentários */}
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">ana_maria</span>
                    <span className="text-gray-700 ml-2">Que transformação incrível! 👏</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">pedro_emagreceu</span>
                    <span className="text-gray-700 ml-2">Parabéns! Estou no mesmo caminho! 💪</span>
                  </div>
                </div>

                {/* Horário */}
                <div className="text-xs text-gray-500">HÁ 2 SEMANAS</div>
              </div>
            </div>

            {/* Post 4 - Com Vídeo */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Header do Post */}
              <div className="flex items-center p-3 border-b border-gray-100">
                <img 
                  src="/ig4.png" 
                  alt="Avatar Roberto" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="ml-3 flex-1">
                  <div className="font-semibold text-sm text-gray-900">ana_silva</div>
                  <div className="text-xs text-gray-500">Salvador, BA</div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Conteúdo do Vídeo */}
              <div className="relative">
                <iframe 
                  src="https://player.vimeo.com/video/1104572615?h=64c0c0c0c0&autoplay=0&loop=0&title=0&byline=0&portrait=0" 
                  className="w-full h-64"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  title="Vídeo Roberto Silva - Corrida"
                ></iframe>
              </div>

              {/* Ações */}
              <div className="p-3">
                <div className="flex items-center space-x-4 mb-3">
                  <button className="text-gray-600 hover:text-red-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  <div className="ml-auto">
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Likes */}
                <div className="text-sm font-semibold text-gray-900 mb-2">Curtido por <span className="text-blue-600">julia_costa</span> e <span className="text-blue-600">outras 156 pessoas</span></div>

                {/* Caption */}
                <div className="text-sm text-gray-900 mb-2">
                  <span className="font-semibold">ana_silva</span> Corrida matinal! 🏃‍♂️ 
                  <br />Com Phynamax controlando a fome, consigo treinar melhor! 
                  <br />#corrida #manha #phynamax #energia
                </div>

                {/* Comentários */}
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">maria_atleta</span>
                    <span className="text-gray-700 ml-2">Boa! Está funcionando mesmo! 💪</span>
                  </div>
                </div>

                {/* Horário */}
                <div className="text-xs text-gray-500">HÁ 2 MESES</div>
              </div>
            </div>

            {/* Post 5 - Com Foto */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Header do Post */}
              <div className="flex items-center p-3 border-b border-gray-100">
                <img 
                  src="/ig5.png" 
                  alt="Avatar Amanda" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="ml-3 flex-1">
                  <div className="font-semibold text-sm text-gray-900">roberto_queiroz</div>
                  <div className="text-xs text-gray-500">Porto Alegre, RS</div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Conteúdo da Imagem */}
              <div className="relative cursor-pointer group" onClick={() => openImageModal('/im-5-dep.png')}>
                <img 
                  src="/im-5-dep.png" 
                  alt="Resultado Phynamax" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay com texto */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="bg-black/70 px-3 py-2 rounded-lg">
                      <span className="text-sm font-semibold">Clique para ampliar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="p-3">
                <div className="flex items-center space-x-4 mb-3">
                  <button className="text-gray-600 hover:text-red-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  <div className="ml-auto">
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Likes */}
                <div className="text-sm font-semibold text-gray-900 mb-2">Curtido por <span className="text-blue-600">roberto_silva</span> e <span className="text-blue-600">outras 98 pessoas</span></div>

                {/* Caption */}
                <div className="text-sm text-gray-900 mb-2">
                  <span className="font-semibold">roberto_queiroz</span> Almoço saudável! 🥗 
                  <br />Phynamax me ajudou a controlar a compulsão por doces! 
                  <br />#alimentacaosaudavel #phynamax #controle #foco
                </div>

                {/* Comentários */}
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">carla_nutri</span>
                    <span className="text-gray-700 ml-2">Que prato lindo! 👏</span>
                  </div>
                </div>

                {/* Horário */}
                <div className="text-xs text-gray-500">HÁ 2 MESES</div>
              </div>
            </div>

            {/* Post 6 - Com Vídeo */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Header do Post */}
              <div className="flex items-center p-3 border-b border-gray-100">
                <img 
                  src="/ig6.png" 
                  alt="Avatar Lucas" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="ml-3 flex-1">
                  <div className="font-semibold text-sm text-gray-900">luana_pereira</div>
                  <div className="text-xs text-gray-500">Recife, PE</div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Conteúdo da Imagem */}
              <div className="relative cursor-pointer group" onClick={() => openImageModal('/im-6-dep.png')}>
                <img 
                  src="/im-6-dep.png" 
                  alt="Resultado Phynamax" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay com texto */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="bg-black/70 px-3 py-2 rounded-lg">
                      <span className="text-sm font-semibold">Clique para ampliar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="p-3">
                <div className="flex items-center space-x-4 mb-3">
                  <button className="text-gray-600 hover:text-red-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  <div className="ml-auto">
                    <button className="text-gray-600 hover:text-gray-800 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Likes */}
                <div className="text-sm font-semibold text-gray-900 mb-2">Curtido por <span className="text-blue-600">amanda_pereira</span> e <span className="text-blue-600">outras 134 pessoas</span></div>

                {/* Caption */}
                <div className="text-sm text-gray-900 mb-2">
                  <span className="font-semibold">luana_pereira</span> Domingo na praia! 🏖️ 
                  <br />Com Phynamax controlando o apetite, aproveito melhor! 
                  <br />#praia #domingo #phynamax #vida
                </div>

                {/* Comentários */}
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">maria_praia</span>
                    <span className="text-gray-700 ml-2">Que lugar lindo! 😍</span>
                  </div>
                </div>

                {/* Horário */}
                <div className="text-xs text-gray-500">HÁ 3 MESES</div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Centralizado */}
        <div className="text-center mt-12">
          <button 
            onClick={scrollToKits}
            className="w-full lg:w-auto bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-xl text-sm lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="text-center">
              <div className="text-base lg:text-xl">SIM, QUERO EXPERIMENTAR AGORA</div>
              <div className="text-xs lg:text-sm font-normal opacity-90 mt-1">
                CLIQUE AQUI E GARANTA SEU KIT COM DESCONTO
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-2xl max-h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden">
            <img 
              src={selectedImage} 
              alt="Imagem Ampliada" 
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <button 
              onClick={closeImageModal}
              className="absolute top-3 right-3 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="/logo-phynamax.png" 
              alt="Phynamax Logo" 
              className="h-12 sm:h-14 lg:h-16 w-auto mx-auto"
            />
          </div>

          {/* 2 Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Coluna Esquerda */}
            <div className="space-y-6">
              {/* Navegação */}
              <div className="flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-6">
                <Link to="/termos-garantia" className="hover:text-pink-200 transition-colors">Termos de Garantia</Link>
                <div className="hidden lg:block w-px bg-white h-4"></div>
                <a href="#" className="hover:text-pink-200 transition-colors">Perguntas Frequentes</a>
                <div className="hidden lg:block w-px bg-white h-4"></div>
                <a href="#" className="hover:text-pink-200 transition-colors">Política de Privacidade</a>
              </div>

              {/* Informações da Empresa */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-bold mb-3">Informações da Empresa</h3>
                <p className="text-sm text-gray-200 mb-2">
                  Distribuído por: Convertex Comércio de Produtos Alimentares Ltda
                </p>
                <p className="text-sm text-gray-200">
                  Endereço: Florianópolis, SC - Sapiens Parque
                </p>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-6">
              {/* Formas de Pagamento */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-bold mb-3">Formas de Pagamento</h3>
                
                {/* Logos dos Cartões */}
                <div className="flex justify-center lg:justify-start mb-3">
                  <img 
                    src="/cartoes.webp" 
                    alt="Formas de Pagamento" 
                    className="h-16 w-auto object-contain"
                  />
                </div>

                {/* Texto de Pagamento */}
                <p className="text-sm text-gray-200 mb-2">
                  Parcelamento em até 12x | Pix com desconto especial
                </p>
                <p className="text-xs text-gray-300">
                  *Compras parceladas podem incluir taxas de parcelamento cobrada pela plataforma que gerencia os pagamentos
                </p>
              </div>
            </div>
          </div>

          {/* Linha Separadora */}
          <div className="border-t border-white/20 mb-8"></div>

          {/* Copyright e Informações Finais - Centralizado */}
          <div className="text-center space-y-2">
            <p className="text-sm">
              Copyright © 2025 Phynamax. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-200">
              Convertex Comércio de Produtos Alimentares Ltda - Florianópolis, Santa Catarina
            </p>
            <p className="text-xs text-gray-300">
              *Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
            </p>
          </div>
        </div>


      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/5541984549172?text=${encodeURIComponent('Olá! Estava no site do Phynamax e gostaria de ajuda para escolher o meu tratamento.')}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Fale com o suporte via WhatsApp"
        >
          {/* Ícone do WhatsApp */}
          <svg 
            className="w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Ponto vermelho piscando */}
          <div className={`absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full ${isRecording ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
          
          {/* Frase sempre visível */}
          <div className="absolute bottom-full mb-2 -left-24 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
            FALE COM O SUPORTE
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-gray-900 border-l-4 border-l-transparent border-r-4 border-r-transparent"></div>
          </div>
        </a>
      </div>

      {/* Kit 8 Popup */}
      {showKit8Popup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Produto Esgotado
              </h3>
              <p className="text-gray-600 mb-6">
                O kit de 8 frascos está temporariamente indisponível. 
                <br /><br />
                <strong>Recomendamos o tratamento de 5 meses</strong> que oferece os mesmos benefícios com excelente custo-benefício.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="https://full.sale/8mYNoQ" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
                >
                  Ir para Kit 5 Frascos »
                </a>
                
                <button 
                  onClick={() => setShowKit8Popup(false)}
                  className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
