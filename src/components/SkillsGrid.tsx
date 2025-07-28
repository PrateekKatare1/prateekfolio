import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  color?: string;
  category: string;
}

interface SkillsGridProps {
  skills?: Skill[];
}

const SkillsGrid = ({ skills = defaultSkills }: SkillsGridProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    initial: {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    hover: {
      y: -8,
      rotateX: 5,
      rotateY: 5,
      scale: 1.05,
      boxShadow:
        "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div className="w-full py-16 bg-[#1A1A1A]" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-start group p-4 rounded-lg bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer"
              variants={itemVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate="initial"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              {...floatingVariants}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg mr-3 flex-shrink-0">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                  style={
                    skill.color
                      ? { filter: `drop-shadow(0 0 2px ${skill.color})` }
                      : {}
                  }
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-[#EAEAEA] group-hover:text-white transition-colors duration-300 truncate">
                  {skill.name}
                </span>
                <span className="text-xs text-[#EAEAEA]/60 group-hover:text-[#EAEAEA]/80 transition-colors duration-300 truncate">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const defaultSkills: Skill[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
    category: "Frontend Framework",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000",
    category: "React Framework",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
    category: "Programming Language",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
    category: "Programming Language",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
    category: "Programming Language",
  },
  {
    name: "Notion",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    category: "Project Management",
  },
  {
    name: "Airtable",
    icon: "https://seeklogo.com/images/A/airtable-logo-216B9AF035-seeklogo.com.png",
    color: "#18BFFF",
    category: "Database Platform",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#F24E1E",
    category: "Design Tool",
  },
  {
    name: "Framer",
    icon: "/white-mark.png",
    category: "Web Design",
  },
  {
    name: "Supabase/Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    color: "#3ECF8E",
    category: "Backend Platform",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1",
    category: "Database",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
    category: "Version Control",
  },
];

export default SkillsGrid;
