import { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Kits from '@/components/Kits'
import Treatment from '@/components/Treatment'
import Pricing from '@/components/Pricing'
import Guarantee from '@/components/Guarantee'
import Reviews from '@/components/Reviews'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import FacebookPixel from '@/components/FacebookPixel'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Phynamax - Emagreça Mais Rápido! Sem Sacrifícios ou Dietas Restritivas',
  description: 'Acabe com a compulsão alimentar e assuma o controle do seu corpo! Fórmula 100% natural para quem busca emagrecer mais rápido e controlar os impulsos alimentares.',
  keywords: 'phynamax, emagrecimento, perda de peso, queima de gordura, saciedade, controle do apetite, suplemento natural, emagrecer rápido',
  openGraph: {
    title: 'Phynamax - Emagreça Mais Rápido! Sem Sacrifícios ou Dietas Restritivas',
    description: 'Acabe com a compulsão alimentar e assuma o controle do seu corpo! Fórmula 100% natural para quem busca emagrecer mais rápido e controlar os impulsos alimentares.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Phynamax',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phynamax - Emagreça Mais Rápido! Sem Sacrifícios ou Dietas Restritivas',
    description: 'Acabe com a compulsão alimentar e assuma o controle do seu corpo! Fórmula 100% natural para quem busca emagrecer mais rápido e controlar os impulsos alimentares.',
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Phynamax",
  "description": "Suplemento natural para emagrecimento e controle do apetite",
  "brand": {
    "@type": "Brand",
    "name": "Phynamax"
  },
  "offers": {
    "@type": "Offer",
    "price": "259.20",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Phynamax"
    }
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Phynamax",
  "url": "https://phynamax.com.br",
  "logo": "https://phynamax.com.br/images/logo.png",
  "description": "Suplemento natural para emagrecimento e controle do apetite"
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://phynamax.com.br"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Oficial TJ",
      "item": "https://phynamax.com.br/oficial-tj"
    }
  ]
}

export default function OficialTjPage() {
  return (
    <>
      <FacebookPixel />
      <GoogleAnalytics />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />
      <main className="pt-12 md:pt-16">
        <Hero />
        <Features />
        <Testimonials />
        <Kits />
        <Treatment />
        <Pricing />
        <Guarantee />
        <Reviews />
        <Faq />
        <Footer />
      </main>
    </>
  )
}
