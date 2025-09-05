"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Github, Linkedin, Instagram, Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

   try {
const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

if (!formspreeKey) {
  throw new Error("Formspree key is missing! Check your .env setup.");
}

const response = await fetch(formspreeKey, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  }),
}); 

      if (response.ok) {
        setStatus("success")
        setStatusMessage("Thanks for your message! I'll get back to you soon. ✅")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
        setStatusMessage("Oops! Something went wrong. Please try again. ❌")
      }
    } catch (error) {
      setStatus("error")
      setStatusMessage("Network error. Please check your connection and try again. ❌")
    }

    setTimeout(() => {
      setStatus("idle")
      setStatusMessage("")
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/muhira-arshad",
      color: "hover:text-purple-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/muhira-arshad-63039925a",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:text-pink-400",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhira16@gmail.com",
      href: "mailto:muhira16@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "03308430305",
      href: "tel:03308430305",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Canal City Lahore",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>

      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-600/10 to-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-6 text-glow-blue">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full glow-blue"></div>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
            together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="glass glow-blue hover:glow-purple transition-all duration-500 rounded-2xl border border-blue-400/30 hover:border-purple-400/60">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl md:text-3xl font-futuristic text-glow-purple">Send me a message</CardTitle>
              <CardDescription className="text-gray-300 text-base md:text-lg">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-purple-300 font-futuristic text-base">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    disabled={status === "loading"}
                    className="glass border border-purple-400/30 focus:border-purple-400/80 focus:glow-purple transition-all duration-300 rounded-xl bg-transparent text-white placeholder-gray-400 text-base py-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-purple-300 font-futuristic text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={status === "loading"}
                    className="glass border border-purple-400/30 focus:border-purple-400/80 focus:glow-purple transition-all duration-300 rounded-xl bg-transparent text-white placeholder-gray-400 text-base py-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-purple-300 font-futuristic text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    required
                    disabled={status === "loading"}
                    rows={5}
                    className="glass border border-purple-400/30 focus:border-purple-400/80 focus:glow-purple transition-all duration-300 rounded-xl bg-transparent text-white placeholder-gray-400 text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-futuristic text-lg py-4 glow-purple hover:glow-pink transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {status === "loading" ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>🚀 Send Message</>
                  )}
                </Button>

                {statusMessage && (
                  <div
                    className={`flex items-center gap-2 p-4 rounded-xl ${
                      status === "success"
                        ? "bg-green-500/20 border border-green-500/30 text-green-300"
                        : "bg-red-500/20 border border-red-500/30 text-red-300"
                    }`}
                  >
                    {status === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    <span className="font-futuristic">{statusMessage}</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-futuristic font-semibold mb-6 text-glow-pink">Let's connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
                I'm always interested in hearing about new opportunities, interesting projects, or just having a good
                conversation about technology and design.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/50 hover:glow-purple transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center glow-purple group-hover:glow-pink transition-all duration-300">
                      <item.icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-futuristic font-medium text-purple-300 text-base">{item.label}</p>
                      <a
                        href={item.href}
                        className="text-gray-200 hover:text-glow-purple transition-all duration-300 text-sm md:text-base"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-futuristic font-semibold mb-6 text-purple-300 text-lg">Follow me on social media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 glass rounded-xl flex items-center justify-center border border-purple-400/30 hover:border-purple-400/60 ${social.color} transition-all duration-300 hover:scale-110 hover:glow-purple group`}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
