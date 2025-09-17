"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Batman",
    location: "Gotham City",
    rating: 5,
    text: "AURA's Midnight Essence has become my signature scent. The complexity and longevity are unmatched - I receive compliments every single day I wear it.",
    product: "Midnight Essence",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Walter White",
    location: "Albuquerque, NM", 
    rating: 5,
    text: "I've tried countless fragrances, but nothing compares to the artistry of AURA. Each bottle tells a story, and the quality is absolutely phenomenal.",
    product: "Desert Dunes",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "Harry Potter",
    location: "Number Four, Privet Drive",
    rating: 5,
    text: "Rose Garden transported me to a French countryside. The delicate balance of floral notes with subtle undertones is pure perfection. Worth every penny!",
    product: "Rose Garden", 
    avatar: "/placeholder-user.jpg"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of fragrance lovers who have discovered their perfect scent with AURA PERFUMES
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="relative z-10 p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-accent/30" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="flex-1 mb-6">
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </blockquote>

                  {/* Product mention */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                      {testimonial.product}
                    </span>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                      {/* Initials fallback */}
                      <div className="absolute inset-0 flex items-center justify-center bg-accent/10 text-accent font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div>
              <span>Over 10,000+ Happy Customers</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div>
              <span>98% Customer Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}