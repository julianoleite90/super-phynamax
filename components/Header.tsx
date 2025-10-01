"use client"

import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    // Force header to be fixed
    const header = document.querySelector('header')
    if (header) {
      header.style.position = 'fixed'
      header.style.top = '0'
      header.style.left = '0'
      header.style.right = '0'
      header.style.zIndex = '99999'
      header.style.width = '100%'
    }
  }, [])

  return (
    <header className="bg-white shadow-sm" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 99999, 
      width: '100%' 
    }}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <div className="flex items-center justify-start flex-1 pl-4 md:pl-0">
            <img 
              src="/images/logo-rosa-phynamax.png" 
              alt="Phynamax Logo" 
              className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-contain"
            />
          </div>

          {/* Desktop Navigation + CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#produto" className="text-gray-700 hover:text-primary-600 transition-colors">
                Produto
              </a>
              <a href="#beneficios" className="text-gray-700 hover:text-primary-600 transition-colors">
                Benefícios
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-primary-600 transition-colors">
                Depoimentos
              </a>
              <a href="#precos" className="text-gray-700 hover:text-primary-600 transition-colors">
                Preços
              </a>
            </nav>
            <button 
              onClick={() => window.location.href = '/rastreio'}
              className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Rastrear Pedido
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden pr-4">
            <button 
              onClick={() => window.location.href = '/rastreio'}
              className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-1.5 px-3 rounded-lg transition-all duration-300 text-xs"
            >
              Rastrear Pedido
            </button>
          </div>
        </div>

      </div>
    </header>
  )
}
