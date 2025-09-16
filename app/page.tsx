"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Heart, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image.jpeg"
            alt="AURA PERFUMES luxury collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Fragrance Collection
            </Badge>

            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-balance">
              Discover Your
              <span className="block" style={{color: '#FF00FF'}}>Signature Scent</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
              Immerse yourself in our curated collection of luxury fragrances, crafted to capture your unique essence
              and leave a lasting impression.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Learn Our Story
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose AURA?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our premium fragrances, crafted with the finest ingredients and attention
              to detail.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="h-8 w-8 text-accent" />,
                title: "Premium Quality",
                description: "Each fragrance is crafted with the finest ingredients sourced from around the world.",
              },
              {
                icon: <Heart className="h-8 w-8 text-accent" />,
                title: "Unique Blends",
                description: "Our master perfumers create distinctive scents that capture your individual personality.",
              },
              {
                icon: <Star className="h-8 w-8 text-accent" />,
                title: "Long-Lasting",
                description: "Experience all-day fragrance with our carefully formulated, long-lasting compositions.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">{feature.icon}</div>
                    <h3 className="font-playfair text-2xl font-semibold text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">Signature Fragrances</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our most popular scents, loved by fragrance enthusiasts worldwide.
            </p>
            <Link href="/shop">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Midnight Essence",
                price: "$89.99",
                image: "/elegant-black-perfume-bottle-with-gold-accents.jpg",
                category: "Evening",
              },
              {
                name: "Rose Garden",
                price: "$95.00",
                image: "/pink-rose-perfume-bottle-with-floral-design.jpg",
                category: "Floral",
              },
              {
                name: "Velvet Dreams",
                price: "$125.00",
                image: "/purple-velvet-perfume-bottle-luxury-design.jpg",
                category: "Luxury",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{product.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-accent">{product.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Aura?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Join thousands of satisfied customers who have discovered their perfect fragrance with AURA PERFUMES.
            </p>
            <Link href="/shop">
              <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Shopping Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
