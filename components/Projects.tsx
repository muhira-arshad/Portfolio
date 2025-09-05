"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Netflix Database Simulation",
      description:
        "Designed and implemented a relational database simulating Netflix-like features such as subscriptions, user profiles, and watch history. Used SQL and Faker to populate the dataset for data analysis and reporting.",
      image:
        "/netflix.png",
      techStack: ["SQL", "Database Design", "Python", "Data Analysis"],
      githubUrl: "https://github.com/muhira-arshad/Netflix_Database.git",
      demoUrl: null,
      featured: false,
    },
    {
      title: "McDonald's Pakistan Mobile App",
      description:
        "Built a cross-platform mobile app with user authentication, dynamic menu, and real-time cart management. Integrated Supabase backend for services like authentication, database, and real-time updates.",
      image:
        "/mcdonalds_app.png",
      techStack: ["React Native", "Supabase", "JavaScript", "Mobile Development"],
      githubUrl: "https://github.com/muhira-arshad/Mcdonalds_Clone.git",
      demoUrl:
        "https://www.linkedin.com/posts/muhira-arshad-63039925a_excited-to-share-a-milestone-project-we-activity-7367564510993223681-0Yh0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_F3UQBkQjRkc26NXweZy2HAOfuJQl1zkw",
      featured: false,
    },
    {
      title: "Parallel Terrain Generation (Research Project)",
      description:
        "Optimized 3D terrain mesh generation using parallel computing techniques. Employed multi-octave noise algorithms and thread-level parallelism with OpenMP and POSIX threads.",
      image:
        "/parallel_terrain_generation (2).png",
      techStack: ["C++", "OpenMP", "POSIX", "Parallel Computing"],
      githubUrl: "https://github.com/muhira-arshad/Terrain_Generation-using-perlin-noise-.git",
      demoUrl:
        "https://www.linkedin.com/posts/muhira-arshad-63039925a_parallel-terrain-generation-semester-project-activity-7350198438396858368-C-zt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_F3UQBkQjRkc26NXweZy2HAOfuJQl1zkw",
      featured: false,
    },
    {
      title: "IntelliPlan AI (Final Year Project)- Currently working on this ",
      description:
        "Developing an AI-powered system to generate architectural floor plans from user prompts. Interprets spatial and design requirements to create accurate layouts. Features an interactive web platform for real-time feedback and design suggestions.",
      image:
        "/intelliplan.png",
      techStack: ["AI/ML", "Python", "Web Development", "Computer Vision"],
      githubUrl: "https://github.com/muhira-arshad/fyp-frontend-intelliPlan-Ai-.git",
      demoUrl: null,
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-gray-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-600/10 to-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-glow-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-gray-500 mx-auto rounded-full glow-purple"></div>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto font-body">
            Here are some of my recent projects that showcase my skills in mobile development, AI/ML, database design,
            and parallel computing.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass group hover:glow-purple transition-all duration-500 rounded-2xl border border-purple-400/20 hover:border-purple-400/60 overflow-hidden hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <CardHeader className="p-6">
                <CardTitle className="text-xl md:text-2xl font-heading text-glow-purple group-hover:text-glow-white transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed text-gray-300 mt-3 font-body">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="glass text-xs px-3 py-1 rounded-lg border border-purple-400/30 text-purple-200 hover:border-purple-400/60 hover:glow-purple transition-all duration-300 font-body"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass border-purple-400/50 text-purple-300 hover:bg-purple-600/20 hover:text-white hover:glow-purple transition-all duration-300 rounded-xl font-body bg-transparent"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.demoUrl ? (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-gray-600 hover:from-purple-500 hover:to-gray-500 text-white rounded-xl font-body glow-purple hover:glow-white transition-all duration-300"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="flex-1 glass border-gray-500/50 text-gray-500 cursor-not-allowed rounded-xl font-body"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
