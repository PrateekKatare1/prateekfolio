import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  loomUrl: string;
  githubUrl: string;
  tools: string[];
  lessons: string[];
  features: string[];
}

const ProjectCard = ({
  title = "Project Title",
  description = "This is a sample project description. It showcases my skills in React, Framer Motion, and Tailwind CSS.",
  loomUrl = "https://www.loom.com/embed/1a2b3c4d5e6f7g8h9i0j",
  githubUrl = "https://github.com/username/project",
  tools = ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
  lessons = [
    "Learned how to implement smooth animations",
    "Improved component architecture",
    "Mastered responsive design",
  ],
  features = [
    "Interactive UI",
    "Responsive layout",
    "Smooth animations",
    "Dark mode",
  ],
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const premiumCardVariants = {
    initial: {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      y: -12,
      rotateX: 3,
      rotateY: 3,
      scale: 1.03,
      boxShadow:
        "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)",
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
    <motion.div
      className="w-full max-w-[700px] bg-background"
      style={{ transformStyle: "preserve-3d" }}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={premiumCardVariants}
    >
      <Card
        className="overflow-hidden border border-white/10 bg-gray-800/30 backdrop-blur-sm transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center bg-gray-800/50 opacity-0 transition-opacity"
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-white/20 bg-black/50 text-white hover:bg-black/70 hover:shadow-lg transition-all duration-200"
                  onClick={() => window.open(githubUrl, "_blank")}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-white/20 bg-gray-800 text-white hover:bg-black/70 hover:shadow-lg transition-all duration-200"
                  onClick={() => window.open(loomUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  View Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <iframe
            src={loomUrl}
            frameBorder="0"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          ></iframe>
        </div>

        <CardContent className="p-6">
          <motion.h3
            className="mb-2 text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="mb-4 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="tools" className="border-white/10">
              <AccordionTrigger className="text-sm font-medium text-white hover:no-underline">
                Tools Used
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-300">
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lessons" className="border-white/10">
              <AccordionTrigger className="text-sm font-medium text-white hover:no-underline">
                What I Learned
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-300">
                <ul className="list-inside list-disc space-y-1">
                  {lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="features" className="border-white/10">
              <AccordionTrigger className="text-sm font-medium text-white hover:no-underline">
                Features Built
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-300">
                <ul className="list-inside list-disc space-y-1">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
