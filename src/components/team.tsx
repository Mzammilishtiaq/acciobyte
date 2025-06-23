"use client"

import { motion } from "framer-motion"

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mike Johnson",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function Team() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-green-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate professionals dedicated to bringing your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-green-500/20 group-hover:border-green-500/50 transition-colors duration-300"
                />

                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="text-green-400 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
