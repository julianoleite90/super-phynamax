"use client"

import { Star, Quote } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const testimonials = [
  {
    name: 'Maria Silva',
    age: 45,
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Incrível! Em apenas 10 dias já vejo uma diferença enorme na firmeza da minha pele. As rugas ao redor dos olhos diminuíram significativamente.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Ana Costa',
    age: 38,
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'Produto fantástico! Minha pele está mais firme e com um brilho natural que não tinha há anos. Recomendo para todas as mulheres.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Carla Mendes',
    age: 52,
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Estou usando há 3 semanas e os resultados são impressionantes. Minha filha até perguntou se fiz algum procedimento estético!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Patricia Lima',
    age: 41,
    location: 'Porto Alegre, RS',
    rating: 5,
    text: 'Finalmente encontrei um produto que realmente funciona! Minha pele está mais jovem e saudável. Vale cada centavo investido.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Fernanda Santos',
    age: 47,
    location: 'Salvador, BA',
    rating: 5,
    text: 'Produto de qualidade excepcional. Minha pele está mais firme e as linhas de expressão suavizaram muito. Estou muito satisfeita!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Juliana Oliveira',
    age: 35,
    location: 'Brasília, DF',
    rating: 5,
    text: 'Comecei a usar preventivamente e já vejo resultados incríveis. Minha pele está mais uniforme e com um aspecto mais jovem.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  }
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      title: "Hot mode",
      items: [
        "Linhas de expressão",
        "Bolsas nos olhos", 
        "Bigode chinês"
      ],
      color: "bg-yellow-500"
    },
    {
      title: "Cold mode", 
      items: [
        "Flacidez facial",
        "Inchaço"
      ],
      color: "bg-gray-700"
    }
  ]

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    
    const diff = startX - currentX
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      } else {
        // Swipe right - previous slide
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      }
    }

    setIsDragging(false)
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recomendado por especialistas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            30% mais saciedade, redução dos impulsos e controle do apetite.
          </p>
        </div>

        {/* Single Image with Both Modes */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mb-0 items-start mt-4 md:mt-0">
          {/* Left Column - Both Modes */}
          <div className="flex flex-col space-y-6 order-2 md:order-2">
            {/* Title and Subtitle */}
            <div className="mb-4 -mt-6 mt-4 md:mt-24">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Um organismo regulado queima até 47% mais calorias
              </h2>
              <p className="text-xl text-gray-600">
                A fórmula do Phynamax regula o organismo em poucos dias, acelerando a queima de gordura e mantendo a fome sob controle!
              </p>
              
              <p className="text-xl text-gray-600 mt-4">
                As fibras poderosas de alto impacto transformam seu intestino em uma máquina de queima calórica, disparando o metabolismo em até 27% com a produção de ácidos graxos que queimam calorias.
              </p>
              
              <p className="text-xl text-gray-600 mt-4 hidden md:block">
                Os antioxidantes, maximizam a energia e equilibram hormônios como a leptina, eliminando a fome excessiva e acelerando o emagrecimento.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center md:justify-start pt-12 lg:pt-16">
                <button 
                  onClick={() => {
                    const kitsSection = document.getElementById('kits');
                    if (kitsSection) {
                      kitsSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // Fallback: scroll to treatment section
                      const treatmentSection = document.getElementById('treatment');
                      if (treatmentSection) {
                        treatmentSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-semibold py-4 px-20 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  EU QUERO EXPERIMENTAR
                </button>
              </div>
            </div>


          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-start md:items-end order-1 md:order-1">
            <img 
              src="/images/hot.png" 
              alt="Massageador L&L Skin" 
              className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] object-contain md:mb-0 md:translate-y-16 md:-mt-16"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
