import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Send, Calendar, Mail, ArrowRight } from "lucide-react";

interface ContactSectionProps {
  useCalendar?: boolean;
  calendarLink?: string;
  emailAddress?: string;
}

const ContactSection = ({
  useCalendar = true,
  calendarLink = "https://cal.com/prateekkatare1",
  emailAddress = "prateekkatare1@gmail.com",
}: ContactSectionProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow:
        "0 10px 25px -5px rgba(166, 148, 249, 0.4), 0 0 0 1px rgba(166, 148, 249, 0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  const premiumCardVariants = {
    initial: {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    },
    hover: {
      y: -8,
      rotateX: 2,
      rotateY: 2,
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
    <motion.section
      id="contact"
      className="py-20 px-4 md:px-8 bg-[#0F0F0F] text-[#EAEAEA] min-h-[400px] flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {useCalendar ? "Let's Schedule a Chat" : "Get in Touch"}
        </h2>
        <p className="text-[#EAEAEA]/80 max-w-lg mx-auto">
          {useCalendar
            ? "Book a quick call to discuss potential collaborations or just to say hello."
            : "Have a question or want to work together? Send me a message and I'll get back to you soon."}
        </p>
      </motion.div>

      {useCalendar ? (
        <motion.div
          variants={itemVariants}
          className="w-full max-w-md"
          style={{ transformStyle: "preserve-3d" }}
          whileHover="hover"
          initial="initial"
          animate="initial"
        >
          <motion.div variants={premiumCardVariants}>
            <Card className="bg-[#1A1A1A] border border-[#ffffff1a] text-[#EAEAEA] transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#A694F9]" />
                  Book a Meeting
                </CardTitle>
                <CardDescription className="text-[#EAEAEA]/70">
                  Select a time that works for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Calendar integration would appear here.</p>
                <p className="text-sm text-[#EAEAEA]/60">
                  Available for 30-minute calls on weekdays
                </p>
              </CardContent>
              <CardFooter>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full"
                >
                  <Button
                    className="w-full bg-[#A694F9] hover:bg-[#A694F9]/90 text-white flex items-center justify-center gap-2"
                    onClick={() => window.open(calendarLink, "_blank")}
                  >
                    Schedule Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          variants={itemVariants}
          className="w-full max-w-md"
          style={{ transformStyle: "preserve-3d" }}
          whileHover="hover"
          initial="initial"
          animate="initial"
        >
          <motion.div variants={premiumCardVariants}>
            <Card className="bg-[#1A1A1A] border border-[#ffffff1a] text-[#EAEAEA] transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#A694F9]" />
                  Send a Message
                </CardTitle>
                <CardDescription className="text-[#EAEAEA]/70">
                  Fill out the form below
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-[#EAEAEA]/70">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="bg-[#252525] border-[#ffffff1a] text-[#EAEAEA] placeholder:text-[#EAEAEA]/50"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="bg-[#252525] border-[#ffffff1a] text-[#EAEAEA] placeholder:text-[#EAEAEA]/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        className="bg-[#252525] border-[#ffffff1a] text-[#EAEAEA] placeholder:text-[#EAEAEA]/50 min-h-[120px]"
                      />
                    </div>
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button
                        type="submit"
                        className="w-full bg-[#A694F9] hover:bg-[#A694F9]/90 text-white flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
              <CardFooter className="flex justify-center border-t border-[#ffffff1a] pt-4">
                <p className="text-sm text-[#EAEAEA]/60">
                  Or email me directly at{" "}
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-[#A694F9] hover:underline"
                  >
                    {emailAddress}
                  </a>
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ContactSection;
