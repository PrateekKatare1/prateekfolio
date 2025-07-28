import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  tools: string[];
}

interface ExperienceTimelineProps {
  experiences?: ExperienceItem[];
}

const ExperienceTimeline = ({
  experiences = defaultExperiences,
}: ExperienceTimelineProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-[#1A1A1A] py-12 px-4 md:px-8">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border" />

        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

interface TimelineItemProps {
  experience: ExperienceItem;
  index: number;
  isLast: boolean;
}

const TimelineItem = ({ experience, index, isLast }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  const premiumCardVariants = {
    initial: {
      opacity: 0,
      y: 50,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      rotateX: 2,
      rotateY: isEven ? 2 : -2,
      scale: 1.02,
      boxShadow:
        "0 20px 40px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`relative mb-12 ${isLast ? "" : "mb-16"} flex flex-col md:flex-row`}
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      variants={premiumCardVariants}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"
        whileHover={{
          scale: 1.3,
          boxShadow: "0 0 20px rgba(166, 148, 249, 0.6)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Content */}
      <div
        className={`w-full md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}
      >
        <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
            <p className="text-muted-foreground mb-2">{experience.company}</p>
            <p className="text-sm text-muted-foreground mb-4">
              {experience.period}
            </p>

            <h4 className="text-sm font-medium mb-2">Achievements</h4>
            <ul className="space-y-2 mb-4">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-sm flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {experience.tools.map((tool, i) => (
                <Badge key={i} variant="outline" className="bg-background/50">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

const defaultExperiences: ExperienceItem[] = [
  {
    title: "Product Intern (full time)",
    company: "ALOOKA Systems",
    period: "Jun 2024 - Aug 2024",
    achievements: [
      "Designed and prototyped the website UI in Figma and Framer, focusing on simple booking flows and responsive design.",
      "Built and deployed the MVP using React and Supabase, enabling real-time booking and customer data storage.",
      "Integrated Zapier to automate backend tasks like booking confirmations, staff alerts, and follow-up emails.",
    ],
    tools: ["Figma", "Framer", "React", "Supabase", "Zapier", "Notion"],
  },
  {
    title: "Growth Intern (remote)",
    company: "CoinWise- Finance for Students",
    period: "Jan 2024 - March 2024",
    achievements: [
      "Executed targeted outreach and community-building strategies on Reddit and Twitter, contributing to a 30% increase in weekly signups.",
      "Analyzed onboarding funnels and recommended changes that improved Day-1 user activation by 18%.",
      "Collaborated with the product team to design and test referral and retention experiments to boost user engagement.",
    ],
    tools: [
      "Google Analytics",
      "Notion",
      "Figma",
      "Typeform",
      "TweetHunter",
      "Mixpanel",
    ],
  },
];

export default ExperienceTimeline;
