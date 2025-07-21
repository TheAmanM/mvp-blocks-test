"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA3() {
  return (
    <section className="relative px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/80 shadow-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20">
          <div className="relative z-10 grid gap-0 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="mb-6 inline-block rounded-full border border-border/30 bg-background px-4 py-1 text-primary">
                SHIP WITH CONFIDENCE
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-card-foreground md:text-4xl lg:text-5xl">
                Ready to{" "}
                <span className="bg-gradient-to-r from-chart-5 to-primary bg-clip-text text-transparent">
                  Future-Proof
                </span>{" "}
                Your Codebase?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Every commit made with an outdated AI tool silently injects
                technical debt and security risks into your project. DocDev
                stops this decay at the source, ensuring every line of code is
                built on the latest, most secure standards.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-background p-2 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 10L9 11.5L12.5 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-card-foreground">
                      Code with Confidence
                    </h3>
                    <p className="text-muted-foreground">
                      Generate code knowing it's based on the latest docs, not a
                      stale model.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-background p-2 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 10L9 11.5L12.5 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground">
                      Eliminate Security Risks
                    </h3>
                    <p className="text-muted-foreground">
                      Automatically avoid deprecated patterns and known
                      vulnerabilities before they're committed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-background p-2 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 10L9 11.5L12.5 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground">
                      Accelerate Your Workflow
                    </h3>
                    <p className="text-muted-foreground">
                      Spend less time on documentation and more time building
                      features that matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-chart-5 to-primary p-8 text-primary-foreground md:p-12 lg:p-16">
              <div className="absolute right-0 top-0 h-full w-full opacity-10"></div>
              <div className="relative z-10">
                <h3 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
                  Stop Committing Yesterday's Bugs
                </h3>
                <p className="mb-8 text-primary-foreground/80">
                  Every day you code without live data is costing your team:
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-foreground text-lg font-bold">
                      1
                    </div>
                    <p className="text-lg">
                      Critical security flaws that have already been patched.
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-foreground text-lg font-bold">
                      2
                    </div>
                    <p className="text-lg">
                      Hours wasted on debugging deprecated functions.
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-foreground text-lg font-bold">
                      3
                    </div>
                    <p className="text-lg">
                      Frustrating bugs that get shipped to production.
                    </p>
                  </div>
                </div>

                <div className="mt-10 rounded-xl bg-primary-foreground/10 p-6 backdrop-blur">
                  <p className="text-lg font-medium">
                    "We cut down our pre-deployment bug hunt by over 50%. DocDev
                    caught three major issues related to outdated Next.js APIs
                    that our other tools completely missed."
                  </p>
                  <p className="mt-3 font-medium text-primary-foreground/70">
                    — Sarah Chen, Lead Engineer, SynthoCorp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto flex items-center justify-center mt-8">
          <div className="items-center space-x-4 flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-primary-1 to-primary-2 px-6 py-2.5 font-medium text-white lg:px-8 lg:py-3.5 lg:text-lg  transition-all duration-200 hover:shadow-lg"
              >
                <span>Launch</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
