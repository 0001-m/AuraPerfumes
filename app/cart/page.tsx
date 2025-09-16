"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { useCart } from "@/components/cart-provider"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard, Truck } from "lucide-react"

export default function CartPage() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [isPromoApplied, setIsPromoApplied] = useState(false)

  const shipping = total > 100 ? 0 : 9.99
  const tax = total * 0.08
  const discount = isPromoApplied ? total * 0.1 : 0
  const finalTotal = total + shipping + tax - discount

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "aura10") {
      setIsPromoApplied(true)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="text-6xl mb-6">🛍️</div>
            <h1 className="font-playfair text-3xl font-bold text-primary mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Discover our beautiful collection of premium fragrances and find your perfect scent.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <Link href="/shop">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary">Shopping Cart</h1>
          <p className="text-muted-foreground mt-2">
            {items.length} {items.length === 1 ? "item" : "items"} in your cart
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="font-playfair">Cart Items</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear All
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-4 p-4 border border-border rounded-lg"
                      >
                        {/* Product Image */}
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-playfair font-semibold text-primary truncate">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">Premium Fragrance</p>
                          <p className="text-lg font-bold text-accent mt-1">${item.price.toFixed(2)}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive p-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Promo Code */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-lg">Promo Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={isPromoApplied}
                    />
                    <Button onClick={handleApplyPromo} disabled={isPromoApplied || !promoCode} variant="outline">
                      Apply
                    </Button>
                  </div>
                  {isPromoApplied && (
                    <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                      AURA10 applied - 10% off!
                    </Badge>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">Try code: AURA10</p>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Shipping
                    </span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-accent">${finalTotal.toFixed(2)}</span>
                  </div>

                  {total < 100 && (
                    <p className="text-sm text-muted-foreground">
                      Add ${(100 - total).toFixed(2)} more for free shipping!
                    </p>
                  )}

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Proceed to Checkout
                  </Button>

                  <div className="text-center">
                    <Link href="/shop">
                      <Button variant="ghost" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Security Badge */}
              <Card className="bg-muted">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🔒</div>
                  <p className="text-sm text-muted-foreground">Secure checkout with 256-bit SSL encryption</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
