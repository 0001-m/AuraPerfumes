"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Settings,
  Package,
  Heart,
  Phone,
  Mail,
  Calendar,
  Star,
  ShoppingBag,
  Edit3,
  Save,
  Camera,
} from "lucide-react"
import Image from "next/image"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Mayur Jogade",
    email: "mayur.jogade23@pccoepune.org",
    phone: "+91 9977320618",
    address: "718 Malabar Hills Street, Mumbai, MH 410001",
    bio: "Fragrance enthusiast with a passion for discovering unique scents. Love floral and woody notes.",
  })

  // Mock data for orders and favorites
  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 189.99,
      items: [
        { name: "Midnight Essence", quantity: 1, price: 89.99 },
        { name: "Rose Garden", quantity: 1, price: 95.0 },
      ],
    },
    {
      id: "ORD-002",
      date: "2024-01-08",
      status: "Delivered",
      total: 125.0,
      items: [{ name: "Velvet Dreams", quantity: 1, price: 125.0 }],
    },
    {
      id: "ORD-003",
      date: "2023-12-20",
      status: "Delivered",
      total: 245.5,
      items: [
        { name: "Ocean Breeze", quantity: 1, price: 75.5 },
        { name: "Golden Hour", quantity: 1, price: 99.99 },
        { name: "Citrus Burst", quantity: 1, price: 65.99 },
      ],
    },
  ]

  const favoriteProducts = [
    {
      id: "p2",
      name: "Midnight Essence",
      price: 89.99,
      image: "/elegant-black-perfume-bottle-with-gold-accents.jpg",
      category: "Evening",
    },
    {
      id: "p4",
      name: "Rose Garden",
      price: 95.0,
      image: "/pink-rose-perfume-bottle-with-floral-design.jpg",
      category: "Floral",
    },
    {
      id: "p7",
      name: "Velvet Dreams",
      price: 125.0,
      image: "/purple-velvet-perfume-bottle-luxury-design.jpg",
      category: "Luxury",
    },
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to a backend
  }

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
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
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt={profileData.name} />
                <AvatarFallback className="text-2xl font-playfair bg-accent text-accent-foreground">
                  {profileData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute -bottom-2 -right-2 h-8 w-8 p-0 rounded-full bg-accent hover:bg-accent/90"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h1 className="font-playfair text-3xl font-bold text-primary mb-2">{profileData.name}</h1>
              <p className="text-muted-foreground mb-4">Member since September 2025</p>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  <Star className="h-3 w-3 mr-1" />
                  VIP Member
                </Badge>
                <Badge variant="outline">
                  <ShoppingBag className="h-3 w-3 mr-1" />
                  {recentOrders.length} Orders
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Favorites
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-playfair">Personal Information</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => (isEditing ? handleSave() : setIsEditing(true))}>
                      {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit3 className="h-4 w-4 mr-2" />}
                      {isEditing ? "Save" : "Edit"}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={profileData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => handleInputChange("bio", e.target.value)}
                        disabled={!isEditing}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair">Account Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ShoppingBag className="h-5 w-5 text-accent" />
                        <span>Total Orders</span>
                      </div>
                      <span className="font-bold text-accent">{recentOrders.length}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Heart className="h-5 w-5 text-accent" />
                        <span>Favorite Products</span>
                      </div>
                      <span className="font-bold text-accent">{favoriteProducts.length}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Star className="h-5 w-5 text-accent" />
                        <span>Loyalty Points</span>
                      </div>
                      <span className="font-bold text-accent">2,450</span>
                    </div>

                    <Separator />

                    <div className="text-center">
                      <h3 className="font-playfair font-semibold text-primary mb-2">VIP Member Benefits</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Free shipping on all orders</li>
                        <li>• Early access to new releases</li>
                        <li>• Exclusive member discounts</li>
                        <li>• Priority customer support</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <span className="font-semibold text-primary">#{order.id}</span>
                            <Badge
                              variant={order.status === "Delivered" ? "secondary" : "outline"}
                              className={order.status === "Delivered" ? "bg-green-100 text-green-800" : ""}
                            >
                              {order.status}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-accent">${order.total.toFixed(2)}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(order.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>
                                {item.name} × {item.quantity}
                              </span>
                              <span>${item.price.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reorder
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Favorites Tab */}
            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Favorite Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteProducts.map((product) => (
                      <div key={product.id} className="border border-border rounded-lg overflow-hidden">
                        <div className="relative aspect-square">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                            {product.category}
                          </Badge>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-3 right-3 h-8 w-8 p-0 bg-white/80 hover:bg-white"
                          >
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-playfair font-semibold text-primary mb-2">{product.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-accent">${product.price.toFixed(2)}</span>
                            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair">Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive updates about orders and promotions</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">SMS Notifications</h4>
                        <p className="text-sm text-muted-foreground">Get shipping updates via text message</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Marketing Communications</h4>
                        <p className="text-sm text-muted-foreground">Receive exclusive offers and new product alerts</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair">Account Security</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Mail className="mr-2 h-4 w-4" />
                      Change Email Address
                    </Button>

                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Settings className="mr-2 h-4 w-4" />
                      Change Password
                    </Button>

                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      Update Phone Number
                    </Button>

                    <Separator />

                    <Button variant="destructive" className="w-full">
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
