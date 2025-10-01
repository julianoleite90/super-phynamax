"use client"

import { useState, useEffect } from 'react'

// Array de vídeos do Vimeo - organizados para evitar repetições consecutivas
const videos = [
  {
    id: 'video1',
    title: 'Depoimento 1',
    vimeoId: '1115818116'
  },
  {
    id: 'video2', 
    title: 'Depoimento 2',
    vimeoId: '1104572615'
  },
  {
    id: 'video3',
    title: 'Depoimento 3', 
    vimeoId: '1104578342'
  },
  {
    id: 'video4',
    title: 'Depoimento 4',
    vimeoId: '1109455496'
  },
  {
    id: 'video5',
    title: 'Depoimento 5',
    vimeoId: '1115870579'
  },
  {
    id: 'video6',
    title: 'Depoimento 6',
    vimeoId: '1109455496'
  },
  {
    id: 'video7',
    title: 'Depoimento 7',
    vimeoId: '1115818116'
  },
  {
    id: 'video8',
    title: 'Depoimento 8',
    vimeoId: '1104578342'
  },
  {
    id: 'video9',
    title: 'Depoimento 9',
    vimeoId: '1109455496'
  },
  {
    id: 'video10',
    title: 'Depoimento 10',
    vimeoId: '1115818116'
  },
  {
    id: 'video11',
    title: 'Depoimento 11',
    vimeoId: '1115870579'
  },
  {
    id: 'video12',
    title: 'Depoimento 12',
    vimeoId: '1104578342'
  },
  {
    id: 'video13',
    title: 'Depoimento 13',
    vimeoId: '1109455496'
  },
  {
    id: 'video14',
    title: 'Depoimento 14',
    vimeoId: '1115818116'
  },
  {
    id: 'video15',
    title: 'Depoimento 15',
    vimeoId: '1115870579'
  },
  {
    id: 'video16',
    title: 'Depoimento 16',
    vimeoId: '1104578342'
  },
  {
    id: 'video17',
    title: 'Depoimento 17',
    vimeoId: '1109455496'
  },
  {
    id: 'video18',
    title: 'Depoimento 18',
    vimeoId: '1115818116'
  },
  {
    id: 'video19',
    title: 'Depoimento 19',
    vimeoId: '1115870579'
  },
  {
    id: 'video20',
    title: 'Depoimento 20',
    vimeoId: '1104578342'
  },
  {
    id: 'video21',
    title: 'Depoimento 21',
    vimeoId: '1109455496'
  },
  {
    id: 'video22',
    title: 'Depoimento 22',
    vimeoId: '1115818116'
  },
  {
    id: 'video23',
    title: 'Depoimento 23',
    vimeoId: '1115870579'
  },
  {
    id: 'video24',
    title: 'Depoimento 24',
    vimeoId: '1104578342'
  }
]

export default function Pricing() {
  const [visibleVideos, setVisibleVideos] = useState(5) // Começa com apenas 5 vídeos
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    // Carrega mais vídeos gradualmente
    const timer = setInterval(() => {
      setVisibleVideos(prev => Math.min(prev + 2, videos.length * 2))
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Intersection Observer para carregar vídeos quando a seção estiver visível
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('precos')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="precos" className="py-8 md:py-12 bg-white relative">
      <div className="container-custom">
        {/* Header */}
        {/* <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Peça hoje e receba em até 7 dias com 30 dias de garantia
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          envie o seu vídeo também
        </p>
        </div> */}

        {/* Video Carousel */}
        {/* <div className="mb-16">
          <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="flex animate-scroll">
              {/* Carregamento progressivo de vídeos */}
              {/* {[...videos, ...videos, ...videos].slice(0, visibleVideos).map((video, index) => (
                <div key={`${video.id}-${index}`} className="flex-shrink-0 w-32 h-56 sm:w-40 sm:h-72 mx-2">
                  <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
                    {isIntersecting ? (
                      <iframe
                        src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&loop=1&muted=1&controls=0&background=1&autopause=0&playsinline=1&byline=0&title=0&portrait=0`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                        loading="lazy"
                      ></iframe>
                    ) : (
                      <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="w-6 h-6 mx-auto mb-1 bg-gray-400 rounded-full animate-pulse"></div>
                          <p className="text-xs">Carregando...</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
      
      {/* Gradient separator line - REMOVIDA */}
    </section>
  )
}
