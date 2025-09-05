import { Badge } from "./ui/badge"

export function About() {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "📘" },
    { name: "Mobile Development", icon: "📱" },
    { name: "SQL", icon: "🗃️" },
    { name: "Database Design", icon: "🏗️" },
    { name: "OpenMP", icon: "🔗" },
    { name: "AI/ML", icon: "🤖" },
    { name: "Problem Solving", icon: "🧩" },
  ]

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>

      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-6 text-glow-purple">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full glow-purple"></div>
        </div>

        {/* Glassmorphism card */}
        <div className="glass rounded-2xl p-8 md:p-12 glow-purple">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                I am an Undergraduate Computer Science Student at COMSATS University Lahore with a strong passion for
                technology, problem-solving, and building impactful digital solutions. Over the course of my academic
                journey, I have developed skills in web and mobile application development, AI-powered applications, and
                software engineering principles.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                Dedicated to personal and professional growth with a proactive and collaborative approach. I enjoy
                working on challenging projects that push the boundaries of technology and create meaningful impact.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                My experience spans working on projects involving React Native, React.js, Redux, Supabase,
                JavaScript/TypeScript, and Python, along with foundational knowledge in databases, parallel programming
                concepts. I enjoy transforming ideas into functional, user-friendly products and continuously seek
                opportunities to learn and explore emerging technologies. Strong communicator and team player, eager to
                contribute to impactful projects. I aspire to grow as a software engineer and AI developer, contributing
                to impactful projects that merge creativity, innovation, and technology to solve real-world problems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-futuristic font-semibold mb-8 text-glow-pink">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="glass px-4 py-3 text-sm font-medium text-purple-200 hover:text-white transition-all duration-300 rounded-xl border border-purple-400/30 hover:border-purple-400/60 hover:glow-purple hover:scale-105 group cursor-default"
                  >
                    <span className="mr-2 text-lg group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-futuristic">{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
