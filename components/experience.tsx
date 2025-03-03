"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2022 - Present",
    location: "San Francisco, CA",
    description:
      "Lead the frontend development team in building a SaaS platform. Implemented new features, optimized performance, and mentored junior developers.",
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    duration: "Mar 2019 - Dec 2021",
    location: "New York, NY",
    description:
      "Developed responsive web applications and collaborated with UX/UI designers to implement pixel-perfect designs. Improved site performance by 40%.",
    skills: ["React", "JavaScript", "CSS", "Redux", "REST APIs"],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Creative Agency",
    duration: "Jun 2017 - Feb 2019",
    location: "Boston, MA",
    description:
      "Created websites for various clients across different industries. Worked in an agile environment and participated in client meetings.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"],
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "Startup Hub",
    duration: "Jan 2016 - May 2017",
    location: "Austin, TX",
    description:
      "Assisted in developing web applications and fixing bugs. Gained experience in frontend technologies and version control systems.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
  },
]

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in the world of web development, showcasing my growth and the skills I've acquired
            along the way.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 ${
                  index % 2 === 0 ? "md:-right-3" : "md:-left-3"
                } left-0 md:left-auto w-6 h-6 rounded-full bg-primary z-10`}
              ></div>

              <Card className="transform transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarDays className="mr-1 h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                  <p>{exp.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

