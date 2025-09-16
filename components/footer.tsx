"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Instagram, Facebook, Twitter, Youtube, TicketIcon as TikTok, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const footerLinks = {
    Shop: [
      { label: "All Fragrances", href: "/shop" },
      { label: "New Arrivals", href: "/shop?category=new" },
      { label: "Best Sellers", href: "/shop?category=bestsellers" },
      { label: "Gift Sets", href: "/shop?category=gifts" },
    ],
    Support: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Returns", href: "/returns" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/story" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  }

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/aura.perfume27/?hl=en", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61580889202988", label: "Facebook" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@unveilyouraura", label: "YouTube" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://in.pinterest.com/perfumeaura827/", label: "Pinterest" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="font-playfair text-2xl font-bold mb-4 block">
                AURA PERFUMES
              </Link>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Discover your signature scent with our curated collection of premium fragrances. Each bottle tells a
                story, each scent creates a memory.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h3 className="font-semibold">Stay Updated</h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-6 text-sm text-primary-foreground/80"
          >
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 8498738734</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>perfumeaura827@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Mumbai, MH</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-primary-foreground/20"
        >
          <p className="text-sm text-primary-foreground/60">
            © 2024 AURA PERFUMES. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
