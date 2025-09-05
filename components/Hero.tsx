"use client"

import { Button } from "./ui/button"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Sparkles, Code, Rocket, Zap, Star, Cpu, Database } from "lucide-react"

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const roles = [
    "Computer Science Student",
    "AI Enthusiast",
    "Problem Solver",
    "Innovation Creator",
    "Tech Explorer",
  ]

  const techIcons = [
    { icon: "⚛️", name: "React", delay: "0s" },
    { icon: "🐍", name: "Python", delay: "0.5s" },
    { icon: "🤖", name: "AI/ML", delay: "1s" },
    { icon: "📱", name: "Mobile", delay: "1.5s" },
    { icon: "🌐", name: "Web", delay: "2s" },
    { icon: "⚡", name: "Performance", delay: "2.5s" },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(30, 58, 138, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(88, 28, 135, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(30, 58, 138, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #581c87 75%, #0f172a 100%)
        `,
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-900/40 via-purple-800/30 to-indigo-900/40 rounded-full blur-3xl transition-all duration-1000 ease-out shadow-2xl shadow-blue-500/20"
          style={{
            left: `${20 + mousePosition.x * 20}%`,
            top: `${10 + mousePosition.y * 20}%`,
            transform: `scale(${1 + mousePosition.x * 0.2})`,
            filter: "blur(60px) brightness(1.2)",
          }}
        ></div>
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-900/35 via-blue-800/40 to-indigo-900/35 rounded-full blur-3xl transition-all duration-1500 ease-out shadow-2xl shadow-purple-500/20"
          style={{
            right: `${15 + mousePosition.y * 25}%`,
            bottom: `${20 + mousePosition.x * 15}%`,
            transform: `scale(${1.2 - mousePosition.y * 0.3})`,
            filter: "blur(60px) brightness(1.3)",
          }}
        ></div>
        <div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-indigo-800/25 via-purple-900/35 to-blue-800/30 rounded-full blur-2xl transition-all duration-2000 ease-out shadow-xl shadow-indigo-500/15"
          style={{
            left: `${50 + mousePosition.x * 10}%`,
            top: `${50 + mousePosition.y * 10}%`,
            transform: `rotate(${mousePosition.x * 45}deg) scale(${0.8 + mousePosition.y * 0.4})`,
            filter: "blur(50px) brightness(1.1)",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/15 animate-pulse"></div>

        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float opacity-60 shadow-lg`}
            style={{
              background:
                i % 3 === 0
                  ? "linear-gradient(45deg, #3b82f6, #1e40af)"
                  : i % 3 === 1
                    ? "linear-gradient(45deg, #8b5cf6, #7c3aed)"
                    : "linear-gradient(45deg, #6366f1, #4f46e5)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              boxShadow: i % 2 === 0 ? "0 0 10px rgba(59, 130, 246, 0.6)" : "0 0 10px rgba(139, 92, 246, 0.6)",
            }}
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float group">
          <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center border border-blue-400/40 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/20">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-14 h-14 glass rounded-xl flex items-center justify-center border border-purple-400/40 shadow-lg shadow-purple-500/20">
            <Sparkles className="w-7 h-7 text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-18 h-18 glass rounded-2xl flex items-center justify-center border border-indigo-400/40 shadow-lg shadow-indigo-500/20">
            <Rocket className="w-9 h-9 text-indigo-400" />
          </div>
        </div>
        <div className="absolute top-1/2 right-8 animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="w-12 h-12 glass rounded-lg flex items-center justify-center border border-blue-400/40 shadow-lg shadow-blue-500/20">
            <Zap className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: "3s" }}>
          <div className="w-10 h-10 glass rounded-full flex items-center justify-center border border-purple-400/40 shadow-lg shadow-purple-500/20">
            <Star className="w-5 h-5 text-purple-400" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div
          className={`space-y-10 text-center lg:text-left transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full border border-blue-400/50 text-blue-300 font-body text-sm hover:border-purple-400/60 transition-all duration-300 group shadow-lg shadow-blue-500/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              Available for opportunities
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-sm shadow-purple-400/50"></div>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tight leading-none">
                <div className="overflow-hidden">
                  <span
                    className={`block transition-all duration-700 delay-200 ${isLoaded ? "translate-y-0" : "translate-y-full"}`}
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                    }}
                  >
                    Hi, I'm
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span
                    className={`block font-bold transition-all duration-700 delay-400 ${isLoaded ? "translate-y-0" : "translate-y-full"}`}
                    style={{
                      background: "linear-gradient(135deg, #ffffff, #e2e8f0, #cbd5e1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Muhira Arshad
                  </span>
                </div>
              </h1>

              <div className="text-2xl md:text-4xl font-medium h-20 flex items-center justify-center lg:justify-start font-body">
                <div className="relative">
                  <span
                    className="transition-all duration-500 font-bold"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6, #3b82f6, #6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 25px rgba(139, 92, 246, 0.4)",
                    }}
                  >
                    {roles[currentRole]}
                  </span>
                  <span className="absolute -right-1 top-0 w-0.5 h-full bg-blue-400 animate-pulse shadow-sm shadow-blue-400/50"></span>
                </div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-body">
              A passionate computer science student at{" "}
              <span
                className="font-bold"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                }}
              >
                COMSATS Lahore
              </span>
              , dedicated to building innovative solutions through{" "}
              <span
                className="font-bold"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                }}
              >
                artificial intelligence
              </span>
              , <span className="text-blue-300 font-bold">mobile development</span>, and{" "}
              <span className="text-purple-200 font-bold">web development</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start">
            <Button
              size="lg"
              className="relative text-white shadow-2xl transition-all duration-500 hover:scale-105 font-body text-xl px-10 py-6 rounded-2xl group overflow-hidden border-0"
              style={{
                background: "linear-gradient(135deg, #1e40af, #7c3aed, #3730a3)",
                boxShadow: "0 0 30px rgba(30, 64, 175, 0.4), 0 0 60px rgba(124, 58, 237, 0.2)",
              }}
              onClick={() => scrollToSection("projects")}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #3730a3, #1e40af, #7c3aed)",
                }}
              ></div>
              <div className="relative flex items-center">
                <Rocket className="w-6 h-6 mr-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                View My Work
              </div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass border-2 border-blue-400/60 text-blue-300 hover:text-white transition-all duration-500 font-body text-xl px-10 py-6 rounded-2xl group bg-transparent hover:scale-105"
              style={{
                borderImage: "linear-gradient(135deg, #3b82f6, #8b5cf6) 1",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
              }}
              onClick={() => scrollToSection("contact")}
            >
              <span className="mr-3 text-2xl group-hover:scale-110 transition-transform duration-300">📧</span>
              Get In Touch
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12">
            {[
              { number: "4", label: "Projects", gradient: "linear-gradient(135deg, #3b82f6, #1e40af)" },
              { number: "3+", label: "Years Learning", gradient: "linear-gradient(135deg, #ffffff, #e2e8f0)" },
              { number: "10+", label: "Technologies", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div
                  className="text-3xl md:text-4xl font-black font-heading group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: stat.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-body mt-1 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="relative group">
            <div className="relative w-96 h-96 md:w-[450px] md:h-[450px]">
              <div
                className="absolute inset-8 rounded-full overflow-hidden border-4 shadow-2xl group-hover:border-purple-400/60 transition-all duration-500"
                style={{
                  borderImage: "linear-gradient(135deg, #3b82f6, #8b5cf6, #6366f1) 1",
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.2)",
                }}
              >
                <img
                  src="/professional-portrait-of-computer-science-student-.jpg"
                  alt="Muhira Arshad - Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-purple-900/20 rounded-full group-hover:from-purple-900/40 group-hover:to-blue-900/20 transition-all duration-500"></div>
              </div>

              <div
                className="absolute inset-0 w-full h-full border-2 rounded-full animate-spin"
                style={{
                  animationDuration: "25s",
                  borderImage: "linear-gradient(135deg, #3b82f6, transparent, #8b5cf6, transparent) 1",
                }}
              ></div>
              <div
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border rounded-full animate-spin"
                style={{
                  animationDuration: "20s",
                  animationDirection: "reverse",
                  borderImage: "linear-gradient(135deg, #6366f1, transparent, #3b82f6, transparent) 1",
                }}
              ></div>
              <div
                className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] border rounded-full animate-spin"
                style={{
                  animationDuration: "30s",
                  borderImage: "linear-gradient(135deg, #8b5cf6, transparent, #6366f1, transparent) 1",
                }}
              ></div>
              <div
                className="absolute inset-12 w-[calc(100%-6rem)] h-[calc(100%-6rem)] border rounded-full animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                  borderImage: "linear-gradient(135deg, #1e40af, transparent, #7c3aed, transparent) 1",
                }}
              ></div>

              {techIcons.map((tech, index) => {
                const angle = index * 60 * (Math.PI / 180)
                const radius = 200
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div
                    key={tech.name}
                    className="absolute w-16 h-16 glass rounded-2xl flex items-center justify-center border hover:scale-110 group/icon cursor-pointer transition-all duration-300"
                    style={{
                      left: `calc(50% + ${x}px - 2rem)`,
                      top: `calc(50% + ${y}px - 2rem)`,
                      animationDelay: tech.delay,
                      borderImage:
                        index % 2 === 0
                          ? "linear-gradient(135deg, #3b82f6, #6366f1) 1"
                          : "linear-gradient(135deg, #8b5cf6, #7c3aed) 1",
                      boxShadow:
                        index % 2 === 0 ? "0 0 15px rgba(59, 130, 246, 0.3)" : "0 0 15px rgba(139, 92, 246, 0.3)",
                    }}
                  >
                    <span
                      className="text-2xl group-hover/icon:scale-125 transition-transform duration-300"
                      title={tech.name}
                    >
                      {tech.icon}
                    </span>
                  </div>
                )
              })}

              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 glass rounded-full flex items-center justify-center border border-blue-400/50 animate-bounce shadow-lg shadow-blue-500/20">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 glass rounded-full flex items-center justify-center border border-purple-400/50 animate-bounce shadow-lg shadow-purple-500/20"
                style={{ animationDelay: "1s" }}
              >
                <Database className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-3 text-blue-400 hover:text-purple-300 transition-all duration-300 group animate-bounce hover:animate-none"
        >
          <span className="text-sm font-body group-hover:text-base transition-all duration-300">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-blue-400/60 rounded-full flex justify-center group-hover:border-purple-400 transition-colors duration-300 shadow-sm shadow-blue-500/20">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse shadow-sm shadow-blue-400/50"></div>
          </div>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  )
}
