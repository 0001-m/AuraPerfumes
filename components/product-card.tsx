"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/products"
import Image from "next/image"
import { ShoppingBag, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart()
  const [isLiked, setIsLiked] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-0 shadow-md">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

          {/* Category Badge */}
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground shadow-lg">{product.category}</Badge>

          {/* Like Button */}
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-3 right-3 h-8 w-8 p-0 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </Button>

          {/* Quick Add Button */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
              size="sm"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>

          {/* Out of Stock Overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="destructive" className="text-sm">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <CardContent className="p-4 flex-1 flex flex-col bg-card">
          <div className="flex-1">
            <h3 className="font-playfair text-lg font-semibold text-primary mb-2 line-clamp-1 group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">{product.description}</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="text-xl font-bold text-accent">${product.price.toFixed(2)}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
            >
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
