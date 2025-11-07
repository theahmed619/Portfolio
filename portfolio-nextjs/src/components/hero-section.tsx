"use client";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { GridPattern } from "./ui/grid-pattern";

export default function HeroSection() {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="relative my-10 mb-60 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <GridPattern
        width={80}
        height={120}
        squares={[
          [0, 3],
          [3, 1],
          [2, 0],
          [7, 2],
          [8, 3],
          [2, 4],
          [6, 4],
        ]}
        strokeDasharray={"4"}
        className={cn(
          "absolute inset-0",
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          "opacity-70"
        )}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Link
          href={siteConfig.links.contactForm}
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="text-sm">Available for work!</span>
        </Link>
      </motion.div>
<motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        // CHANGED: Aligns vertically centered on mobile, at the bottom on desktop
        className="font-heading flex max-w-3xl items-center text-4xl font-extrabold md:items-end md:text-5xl"
      >
        {/* Wrapper for "Hey!" */}
        {/* CHANGED: Added responsive margin (mr-2 md:mr-8) */}
        <div className="right-9 relative mr-2 pr-2 text-4xl font-bold md:mr-8 md:text-8xl">
          {/* CHANGED: Added responsive positioning (bottom-12 md:bottom-20) */}
          <span className="absolute bottom-5   md:right-0 -rotate-90 origin-bottom-right whitespace-nowrap md:bottom-20">
            Hey!{" "}
          </span>
        </div>

        {/* --- THIS IS THE UPDATED PART --- */}
        {/* CHANGED: 
          1. Removed 'text-left' and 'ml-3'.
          2. Added 'items-center' for mobile (to center the text)
          3. Added 'md:items-start' for desktop (to left-align the text)
        */}
        <span className="flex flex-col items-center text-2xl md:items-start md:text-4xl">
          {/* CHANGED: Removed 'text-center' (now controlled by parent) */}
          <span>
            My name is{" "}
            <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
              Ahmed
            </span>
          </span>
          <span>I am a software developer.</span>
        </span>
        {/* --- END OF UPDATED PART --- */}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-xl"
      >
        You have a project in mind? Let's talk about it!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2 items-center"
      >
        <Button asChild size="lg">
          <Link href={siteConfig.links.contactForm}>
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <a href={siteConfig.links.cvPdf} download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href={siteConfig.links.linkedin}
            aria-label="Linkedin"
            target="_blank"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href={siteConfig.links.github}
            aria-label="Github"
            target="_blank"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}