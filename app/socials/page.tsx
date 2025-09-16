"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Instagram,
  Facebook,
  Youtube,
  ExternalLink,
  Heart,
  Users,
  Camera,
} from "lucide-react"
import Image from "next/image"

export default function SocialsPage() {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@auraperfumes",
      followers: "125K",
      description: "Daily fragrance inspiration, behind-the-scenes content, and customer features",
      icon: <Instagram className="h-8 w-8" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      url: "https://www.instagram.com/aura.perfume27/?hl=en",
    },
    {
      name: "Facebook",
      handle: "AURA PERFUMES",
      followers: "45K",
      description: "Community discussions, exclusive offers, and detailed product information",
      icon: <Facebook className="h-8 w-8" />,
      color: "bg-gradient-to-r from-blue-600 to-blue-700",
      url: "https://www.facebook.com/profile.php?id=61580889202988",
    },
    {
      name: "YouTube",
      handle: "AURA PERFUMES",
      followers: "32K",
      description: "In-depth fragrance reviews, perfumer interviews, and scent education",
      icon: <Youtube className="h-8 w-8" />,
      color: "bg-gradient-to-r from-red-500 to-red-600",
      url: "https://www.youtube.com/@unveilyouraura",
    },
    {
      name: "Pinterest",
      handle: "@auraperfumes",
      followers: "28K",
      description: "Creative fragrance boards, styling tips, and visual inspiration",
      icon: <Image src="/pinterest-icon.jpg" alt="Pinterest" width={32} height={32} className="rounded" />,
      color: "bg-gradient-to-r from-red-600 to-red-700",
      url: "https://in.pinterest.com/perfumeaura827/",
    },
  ]

  const communityStats = [
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      label: "Community Members",
      value: "320K+",
    },
    {
      icon: <Heart className="h-6 w-6 text-accent" />,
      label: "Monthly Engagement",
      value: "2.5M+",
    },
    {
      icon: <Camera className="h-6 w-6 text-accent" />,
      label: "User Generated Content",
      value: "15K+",
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6">Join Our Community</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with fellow fragrance enthusiasts, discover new scents, and stay updated with the latest from AURA
            PERFUMES across all our social platforms.
          </p>
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
            Follow us for exclusive content & offers
          </Badge>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Social Platforms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg text-white ${platform.color}`}>{platform.icon}</div>
                    <Badge variant="secondary">{platform.followers} followers</Badge>
                  </div>
                  <CardTitle className="font-playfair text-xl">{platform.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{platform.handle}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-6 flex-1">{platform.description}</p>
                  <Button
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                    variant="outline"
                    asChild
                  >
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      Follow Us
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* User Generated Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
            <CardContent className="p-12">
              <h2 className="font-playfair text-3xl font-bold text-primary mb-6">Share Your AURA Moments</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tag us in your fragrance photos and stories using{" "}
                <Badge variant="secondary" className="bg-accent text-accent-foreground mx-1">
                  #MyAuraScent
                </Badge>{" "}
                for a chance to be featured on our social media and win exclusive prizes!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Camera className="mr-2 h-5 w-5" />
                  Share Your Story
                </Button>
                <Button size="lg" variant="outline">
                  View Gallery
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="font-playfair text-3xl font-bold mb-6">Stay Connected</h2>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Get exclusive access to new launches, fragrance tips, and special offers delivered straight to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-primary bg-primary-foreground"
                />
                <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}