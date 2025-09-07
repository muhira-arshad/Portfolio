"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Github, Linkedin, Instagram, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react"

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
      const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY

      console.log("Formspree key:", formspreeKey) // Debugging

      if (!formspreeKey) {
        throw new Error("Formspree key is missing! Check your .env setup.")
      }

      const response = await fetch(formspreeKey, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setStatusMessage("✅ Thanks for your message! I'll get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
        setStatusMessage("❌ Oops! Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setStatusMessage("❌ Network error. Please check your connection and try again.")
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
      icon: MapPin,
      label: "Location",
      value: "Lahore",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    required
                    disabled={status === "loading"}
                    rows={5}
                  />
                </div>

                <Button type="submit" disabled={status === "loading"} className="w-full">
                  {status === "loading" ? "Sending..." : "🚀 Send Message"}
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
                    <span>{statusMessage}</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, interesting projects, or just having a good conversation about tech and design.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="rounded-xl p-6 border border-purple-400/20">
                  <div className="flex items-center gap-4">
                    <item.icon className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <a href={item.href} className="text-gray-200 hover:text-purple-400">
                        {item.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-6">Follow me on social media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center border border-purple-400/30"
                  >
                    <social.icon className="w-6 h-6" />
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
