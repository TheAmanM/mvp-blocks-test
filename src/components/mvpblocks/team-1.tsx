"use client";
// changes on line 109
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

import ahmed from "@/assets/ahmed.jpeg";
import aman from "@/assets/aman.jpeg";
import hala from "@/assets/hala.jpeg";
import mahad from "@/assets/mahad.jpeg";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  location?: string;
  socialLinks?: { platform: "github" | "twitter" | "linkedin"; url: string }[];
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  className?: string;
}

// Default data
const defaultMembers: TeamMember[] = [
  {
    name: "Ahmed Abdul Jader",
    role: "Motivator",
    bio: "10+ years of experience in product development and team leadership. Passionate about building products that make a difference.",
    imageUrl: ahmed.src,
    location: "Toronto, ON",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Aman Meherally",
    role: "Frontend Designer & Developer",
    bio: "Award-winning designer with a passion for creating beautiful, functional interfaces that delight users.",
    imageUrl: aman.src,
    location: "Toronto, ON",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Hala Alshareef",
    role: "Senior Developer",
    bio: "Full-stack developer with expertise in React, Node.js, and cloud architecture. Building scalable solutions for complex problems.",
    imageUrl: hala.src,

    location: "Toronto, ON",
    socialLinks: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Mahad Hasan",
    role: "Product Manager",
    bio: "Strategic thinker with a track record of launching successful products that users love and businesses value. ",
    imageUrl: mahad.src,
    location: "Toronto, ON",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
];

export default function Team1({
  title = "Meet Our Team",
  subtitle = "We're a diverse group of passionate individuals working together to build amazing products.",
  members = defaultMembers,
  className,
}: TeamProps) {
  return (
    <section className={cn("mx-auto max-w-7xl py-16 md:py-24", className)}>
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="px-4 md:px-6 w-full">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[fit-content(50%)_fit-content(50%)] lg:grid-cols-[fit-content(100%)_fit-content(100%)] place-items-center gap-8 lg:gap-16 w-full justify-center">
          {members.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Team member card component
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="opacity-100 hover:opacity-75 transition-opacity group h-[540px] w-96 overflow-hidden rounded-xl bg-card shadow-sm">
      <div className="relative aspect-[5/4] w-full overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover absolute top-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex h-[220px] flex-col p-5">
        {member.location && (
          <div className="mb-1 flex items-center text-xs text-muted-foreground">
            <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            {member.location}
          </div>
        )}

        <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
        <p className="mb-2 text-sm font-medium text-primary">{member.role}</p>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">{member.bio}</p>
        </div>
        <div className="mt-auto">
          {member.socialLinks && (
            <div className="flex space-x-3">
              {member.socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {link.platform === "github" && (
                    <GithubIcon className="h-4 w-4" />
                  )}
                  {link.platform === "twitter" && (
                    <TwitterIcon className="h-4 w-4" />
                  )}
                  {link.platform === "linkedin" && (
                    <LinkedinIcon className="h-4 w-4" />
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
