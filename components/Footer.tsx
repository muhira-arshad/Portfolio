"use client"

import { Github, Linkedin, Instagram, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-gray-800"></div>

      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand and Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-futuristic font-semibold text-glow-purple">Muhira Arshad</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              A motivated computer science student passionate about building practical solutions through technology and
              innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-purple-400/30 hover:border-purple-400/60 text-purple-300 hover:text-white transition-all duration-300 hover:scale-110 hover:glow-purple group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-futuristic font-semibold text-purple-300 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-gray-400 hover:text-glow-purple hover:text-purple-300 transition-all duration-300 font-futuristic"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-futuristic font-semibold text-purple-300 text-lg">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p className="font-futuristic">📍 Lahore, Pakistan</p>
              <a
                href="mailto:muhira@gmail.com"
                className="block hover:text-glow-purple hover:text-purple-300 transition-all duration-300 font-futuristic"
              >
                📧 muhira@gmail.com
              </a>
              <a
                href="tel:03308430305"
                className="block hover:text-glow-purple hover:text-purple-300 transition-all duration-300 font-futuristic"
              >
                📱 03308430305
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-400/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 font-futuristic">
            <span>© {currentYear} Muhira Arshad. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            
          </div>

          <button
            onClick={scrollToTop}
            className="glass px-4 py-2 rounded-xl border border-purple-400/30 hover:border-purple-400/60 text-purple-300 hover:text-white hover:glow-purple transition-all duration-300 font-futuristic text-sm"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
