import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      type: "certification",
      title: "CE3 E-learning Certification",
      company: "Universal Robotic Academy",
      location: "Online",
      period: "Sep 2024",
      description: "Covered robot safety, installation, programming, and collaborative design principles.",
      technologies: ["Robotics", "Programming", "Safety Protocols", "Collaborative Design"],
    },
    {
      type: "education",
      title: "Bachelor in Computer Science",
      company: "COMSATS University Islamabad (Lahore Campus)",
      location: "Lahore, Pakistan",
      period: "2022 - 2026",
      description:
        "Currently pursuing Bachelor's degree. Focusing on software development, artificial intelligence, and database systems.",
      technologies: ["Programming", "AI/ML", "Database Systems", "Software Engineering"],
    },
    {
      type: "education",
      title: "Intermediate",
      company: "Punjab Group of Colleges, Lahore",
      location: "Lahore, Pakistan",
      period: "2020 - 2022",
      description:
        "Completed intermediate education with 996/1100 marks, demonstrating strong academic performance in science subjects. Awarded a 50% merit-based fee discount for consistent academic performance during college studies.",
      technologies: ["Mathematics", "Physics", "Computer Science", "Chemistry"],
    },
    {
      type: "education",
      title: "Matric",
      company: "Unique High School, Lahore",
      location: "Lahore, Pakistan",
      period: "2016 - 2019",
      description:
        "Completed matriculation with 1034/1100 marks, establishing a strong foundation in core subjects. Received a 100% scholarship in Grade 10 based on academic excellence (Matric board result).",
      technologies: ["Core Subjects", "Mathematics", "Science", "English"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>

      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-6 text-glow-purple">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full glow-purple"></div>
        </div>

        <div className="relative">
          {/* Glowing timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-1 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full glow-purple"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Glowing timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:-ml-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-900 shadow-2xl z-10 glow-purple animate-pulse-glow"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 w-full ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} md:w-1/2`}>
                  <Card className="glass glow-purple hover:glow-pink transition-all duration-500 rounded-2xl border border-purple-400/30 hover:border-purple-400/60 hover:scale-105 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-xl md:text-2xl mb-2 font-futuristic text-gray-100 group-hover:text-glow-purple transition-all duration-300">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-purple-300 font-medium text-base md:text-lg">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge
                          variant={exp.type === "certification" ? "default" : "secondary"}
                          className={`${
                            exp.type === "certification"
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white glow-purple"
                              : "glass border border-purple-400/30 text-purple-200"
                          } rounded-xl px-3 py-1 font-futuristic text-xs`}
                        >
                          {exp.type === "certification" ? "🏆 Certificate" : "🎓 Education"}
                        </Badge>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-300 mt-4">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4 text-purple-400" />
                          <span className="font-futuristic">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span className="font-futuristic">{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="leading-relaxed text-gray-200 text-base md:text-lg">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="glass text-xs px-3 py-1 rounded-lg border border-purple-400/30 text-purple-200 hover:border-purple-400/60 hover:glow-purple transition-all duration-300 font-futuristic"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
