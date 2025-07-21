"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MinusIcon, PlusIcon } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "technical" | "support";
}

const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "What is DocDev?",
    answer:
      "DocDev is a free, open-source VS Code extension that acts as an AI coding assistant. Its unique feature is that it generates code based on a live, continuously updated database of official documentation, ensuring the code is always modern, correct, and secure.",
    category: "general",
  },
  {
    id: "2",
    question: "How is this different from GitHub Copilot or ChatGPT?",
    answer:
      "Standard AI tools are trained on static, often outdated, public code repositories. They frequently generate code using deprecated functions or vulnerable patterns. DocDev solves this by querying a real-time vector database of the *latest* official documentation, guaranteeing accuracy and security.",
    category: "general",
  },
  {
    id: "3",
    question: "Is DocDev free to use?",
    answer:
      "Yes, DocDev is completely free and open-source, available on the VS Code Marketplace. We believe in providing powerful, reliable tools to the entire developer community.",
    category: "general",
  },
  {
    id: "4",
    question: "How does the documentation database stay current?",
    answer:
      "We have an automated pipeline that monitors major package and framework repositories for new releases and documentation updates. As soon as a new version is published, our system ingests and processes the changes into the vector database, making them immediately available to the extension.",
    category: "technical",
  },
  {
    id: "5",
    question: "Which frameworks and languages do you support?",
    answer:
      "We launched with a focus on the most dynamic web development ecosystems, including Next.js, React, and Tailwind CSS. We are actively expanding support for other popular languages and frameworks based on community feedback. Check our GitHub repository for the most current list.",
    category: "technical",
  },
  {
    id: "6",
    question: "Will DocDev overwrite my code without permission?",
    answer:
      "Absolutely not. Your code is never changed automatically. Every suggestion from DocDev is presented in a clear 'diff' view within VS Code. You have full control to review the changes and must explicitly click 'Accept' to apply them.",
    category: "technical",
  },
  {
    id: "7",
    question: "How can I contribute to the project?",
    answer:
      "DocDev is a community-driven project. We welcome contributions of all kinds, from improving our documentation parsers to adding support for new languages or fixing bugs. Please see our CONTRIBUTING.md file in our GitHub repository for guidelines.",
    category: "support",
  },
  {
    id: "8",
    question: "Where can I report a bug or suggest a feature?",
    answer:
      "We'd love to hear from you! The best place to report bugs or suggest new features is by opening an issue on our official GitHub Issues page. This helps us track feedback and prioritize development.",
    category: "support",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "technical", label: "Technical" },
  { id: "support", label: "Support" },
];

export default function Faq2() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-background py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider"
          >
            FAQs
          </Badge>

          <h2 className="mb-6 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="max-w-2xl text-center text-muted-foreground">
            Find answers to common questions about MVPBlocks and how to use our
            components to build your next project.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  "h-fit overflow-hidden rounded-xl border border-border",
                  expandedId === faq.id ? "shadow-3xl bg-card/50" : "bg-card/50"
                )}
                style={{ minHeight: "88px" }}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-medium text-foreground">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    {expandedId === faq.id ? (
                      <MinusIcon className="h-5 w-5 text-primary" />
                    ) : (
                      <PlusIcon className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-6 pb-6 pt-2">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Contact Support
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
