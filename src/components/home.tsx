import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  loomUrl: string;
  githubUrl: string;
  tools: string[];
  lessons: string[];
  features: string[];
  metrics: {
    [key: string]: string;
  };
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

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
      <div
        className="overflow-hidden border border-white/10 bg-gray-800/30 backdrop-blur-sm rounded-lg transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center bg-gray-800/50 opacity-0 transition-opacity"
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="flex gap-4">
              <button
                className="flex items-center gap-2 border border-white/20 bg-black/50 text-white hover:bg-black/70 px-4 py-2 rounded-md text-sm"
                onClick={() => window.open(caseStudy.githubUrl, "_blank")}
              >
                <Github size={16} />
                GitHub
              </button>
              <button
                className="flex items-center gap-2 border border-white/20 bg-gray-800 text-white hover:bg-black/70 px-4 py-2 rounded-md text-sm"
                onClick={() => window.open(caseStudy.loomUrl, "_blank")}
              >
                View Case Study
              </button>
            </div>
          </motion.div>

          <iframe
            src={caseStudy.loomUrl}
            frameBorder="0"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          ></iframe>
        </div>

        <div className="p-6">
          <motion.h3
            className="mb-2 text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {caseStudy.title}
          </motion.h3>

          <motion.p
            className="mb-4 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {caseStudy.description}
          </motion.p>

          {/* Tools */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-white mb-2">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tools.map((tool, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-medium text-white mb-2">
              Key Features
            </h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-300">
              {caseStudy.features.slice(0, 3).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
import SkillsGrid from "./SkillsGrid";
import ExperienceTimeline from "./ExperienceTimeline";
import ContactSection from "./ContactSection";

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: {
      scale: 1.15,
      y: -4,
      boxShadow: "0 10px 25px -5px rgba(166, 148, 249, 0.4)",
      transition: { duration: 0.2 },
    },
  };

  const premiumCardVariants = {
    initial: {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      y: -8,
      rotateX: 2,
      rotateY: 2,
      scale: 1.02,
      boxShadow:
        "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const caseStudies = [
    {
      id: 1,
      title: "SaaS Dashboard Redesign",
      description:
        "Complete UX overhaul of a B2B analytics platform, resulting in 40% increase in user engagement and 25% reduction in support tickets.",
      loomUrl: "https://www.loom.com/embed/casestudy1",
      githubUrl: "https://github.com/username/saas-dashboard",
      tools: ["Figma", "React", "TypeScript", "Framer Motion"],
      lessons: [
        "User research is crucial for identifying pain points",
        "Iterative design process leads to better outcomes",
        "Data-driven decisions improve user experience",
      ],
      features: [
        "Intuitive navigation system",
        "Advanced data visualization",
        "Responsive design across devices",
        "Accessibility compliance",
      ],
      metrics: {
        engagement: "+40%",
        supportTickets: "-25%",
        userSatisfaction: "4.8/5",
      },
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      description:
        "End-to-end design and development of a mobile shopping app with AI-powered recommendations, achieving 60% user retention rate.",
      loomUrl: "https://www.loom.com/embed/casestudy2",
      githubUrl: "https://github.com/username/ecommerce-app",
      tools: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
      lessons: [
        "Mobile-first design principles",
        "AI integration for personalization",
        "Performance optimization for mobile",
      ],
      features: [
        "AI-powered product recommendations",
        "One-click checkout process",
        "Social sharing integration",
        "Real-time inventory updates",
      ],
      metrics: {
        retention: "60%",
        conversionRate: "+35%",
        averageOrderValue: "+22%",
      },
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce analytics with real-time data visualization.",
      loomUrl: "https://www.loom.com/embed/123456789",
      githubUrl: "https://github.com/username/ecommerce-dashboard",
      tools: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      lessons: [
        "Optimizing React performance with useMemo",
        "Building responsive dashboards",
        "Working with complex data structures",
      ],
      features: [
        "Real-time sales tracking",
        "Customer behavior analytics",
        "Inventory management",
        "Revenue forecasting",
      ],
    },
    {
      id: 2,
      title: "AI Content Generator",
      description:
        "An AI-powered tool that generates marketing copy and social media content.",
      loomUrl: "https://www.loom.com/embed/987654321",
      githubUrl: "https://github.com/username/ai-content-generator",
      tools: ["Next.js", "OpenAI API", "Framer Motion", "Supabase"],
      lessons: [
        "Working with AI APIs",
        "State management for complex forms",
        "Optimizing API requests",
      ],
      features: [
        "Content generation for multiple platforms",
        "Tone and style customization",
        "Content history and favorites",
        "Export to various formats",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#EAEAEA] font-sans">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden"
      >
        <div className="flex-1 z-10">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Prateek Katare
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-[#A694F9] mb-6"
          >
            Digital Assassin. Minimalist Builder.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-[#EAEAEA]/80 mb-8 max-w-2xl leading-relaxed"
          >
            I'm a product-minded builder who blends design, code, and AI to turn
            ideas into clean, scalable, and fast-moving products.
            <br />
            <br />I focus on what matters: systems that reduce noise, automate
            the boring, and create leverage for users.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="flex space-x-6 mb-16"
          >
            <motion.a
              href="https://x.com/PrateekKataree"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              className="p-2 rounded-full bg-[#0F0F0F] border border-[rgba(255,255,255,0.1)] hover:border-[#A694F9] transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/prateek-katare-483a0732a/"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              className="p-2 rounded-full bg-[#0F0F0F] border border-[rgba(255,255,255,0.1)] hover:border-[#A694F9] transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              href="https://github.com/PrateekKatare1"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              className="p-2 rounded-full bg-[#0F0F0F] border border-[rgba(255,255,255,0.1)] hover:border-[#A694F9] transition-colors"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href="mailto:prateekkatare1@gmail.com"
              variants={socialIconVariants}
              whileHover="hover"
              className="p-2 rounded-full bg-[#0F0F0F] border border-[rgba(255,255,255,0.1)] hover:border-[#A694F9] transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-start">
            <motion.a
              href="#projects"
              className="flex items-center space-x-2 text-[#A694F9] hover:text-[#B4C0F9] transition-colors"
              whileHover={{ y: 5 }}
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <span>View my work</span>
              <ArrowDown size={16} />
            </motion.a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="flex-1 relative lg:ml-12 mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent z-10 pointer-events-none"></div>
            <img
              src="/hero-image.png"
              alt="Digital Assassin"
              className="w-full h-auto max-w-lg mx-auto filter blur-[0.5px] opacity-60 hover:opacity-70 transition-all duration-500"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-6 md:px-12 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <motion.div variants={staggerContainer}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Case Studies Section */}
      <motion.section
        id="case-studies"
        className="py-20 px-6 md:px-12 lg:px-24 bg-[#0F0F0F]/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <motion.div variants={staggerContainer}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Case Studies
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 px-6 md:px-12 lg:px-24 bg-[#0F0F0F]/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <motion.div variants={staggerContainer}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Skills
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <SkillsGrid />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 px-6 md:px-12 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <motion.div variants={staggerContainer}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Experience
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <ExperienceTimeline />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="py-20 px-6 md:px-12 lg:px-24 bg-[#0F0F0F]/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <motion.div variants={staggerContainer}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Education
          </motion.h2>
          <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
            <motion.div
              className="relative p-8 bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-lg"
              initial="initial"
              whileHover="hover"
              variants={premiumCardVariants}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    B.Tech in Mechanical Engineering
                  </motion.h3>
                  <motion.p
                    className="text-[#A694F9] text-lg mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Maulana Azad National Institute of Technology Bhopal
                  </motion.p>
                  <motion.div
                    className="flex items-center space-x-4 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      2021 - 2025
                    </span>
                  </motion.div>
                </div>
                <motion.div
                  className="mt-6 md:mt-0 md:ml-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-1">
                    <img
                      src="/manit-logo.jpg"
                      alt="MANIT Logo"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 md:px-12 lg:px-24 bg-[#0F0F0F]/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <motion.div variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <ContactSection />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#EAEAEA]/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Prateek Katare. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://x.com/PrateekKataree"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EAEAEA]/60 hover:text-[#A694F9] transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/prateek-katare-483a0732a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EAEAEA]/60 hover:text-[#A694F9] transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/PrateekKatare1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EAEAEA]/60 hover:text-[#A694F9] transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:prateekkatare1@gmail.com"
              className="text-[#EAEAEA]/60 hover:text-[#A694F9] transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
