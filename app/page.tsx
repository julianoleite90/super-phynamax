import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Kits from '@/components/Kits'
import Pricing from '@/components/Pricing'
import Treatment from '@/components/Treatment'
import Guarantee from '@/components/Guarantee'
// import BeforeAfter from '@/components/BeforeAfter'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import JsonLd from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phynamax - Emagreça de Forma Saudável | Perda de Peso Natural',
  description: 'Emagreça de forma saudável com Phynamax! 6 ingredientes poderosos para perda de peso natural. Reduz fome, acelera metabolismo. Garantia 30 dias. Frete grátis!',
  keywords: 'emagrecimento, perda de peso, queima de gordura, metabolismo, saciedade, Phynamax, emagrecer, dieta, suplemento emagrecimento, fibras, termogênico, queima calorias, emagrecimento saudável, redução de peso',
  openGraph: {
    title: 'Phynamax - Emagreça de Forma Saudável',
    description: 'Emagreça de forma saudável com Phynamax! 6 ingredientes poderosos para perda de peso natural. Reduz fome, acelera metabolismo. Garantia 30 dias.',
    images: ['/images/og-image.jpg'],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Phynamax - Suplemento para Emagrecimento",
  "description": "Suplemento com 6 ingredientes poderosos para emagrecimento saudável. Reduz fome, acelera metabolismo e queima gordura de forma natural. Resultados em poucas semanas.",
  "image": [
    "https://phynamax.com.br/images/2-min.png",
    "https://phynamax.com.br/images/hot.png",
    "https://phynamax.com.br/images/atuando.png"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Phynamax"
  },
  "category": "Saúde e Bem-estar",
  "offers": {
    "@type": "Offer",
    "price": "257.20",
    "priceCurrency": "BRL",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Biocapilar"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "BRL"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "businessDays": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        },
        "cutoffTime": "14:00",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 2,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 3,
          "maxValue": 7,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Carlos Silva"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Produto incrível! Em apenas 3 semanas já vejo resultados na perda de peso. A fome diminuiu e estou perdendo peso de forma saudável!"
    }
  ]
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Phynamax",
  "url": "https://phynamax.com.br",
  "logo": "https://phynamax.com.br/images/logo-rosa-phynamax.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-41-98454-9172",
    "contactType": "customer service",
    "availableLanguage": "Portuguese"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Florianópolis",
    "addressRegion": "SC",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://www.instagram.com/biocapilar",
    "https://www.facebook.com/biocapilar"
  ]
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
    }
  ]
}

export default function Home() {
  return (
    <main className="min-h-screen pt-12 md:pt-16">
      <JsonLd data={productSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Header />
      <Hero />
      <Features />
      {/* <BeforeAfter /> */}
      <Testimonials />
      <Kits />
      <Pricing />
      <Treatment />
      <Guarantee />
      <Reviews />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
