'use client'

import { useSectionInView } from '@/hooks/use-section-in-view'
import { projectsData } from '@/lib/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react' // Import useState
import SectionHeading from './section-heading'
import { Badge } from './ui/badge'
import { Button } from './ui/button' // Import the Button component

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
}

// --- Define our constants ---
// Number of projects to show initially
const PROJECTS_TO_SHOW_INITIALLY = 2
// Number of projects to load when "Load More" is clicked
const PROJECTS_TO_LOAD = 2

export default function ProjectsSection() {
  const { ref } = useSectionInView('Projects')

  // --- Add state to track visible projects ---
  const [visibleProjects, setVisibleProjects] = useState(
    PROJECTS_TO_SHOW_INITIALLY
  )

  // --- Function to handle loading more projects ---
  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + PROJECTS_TO_LOAD)
  }

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* --- Use .slice() to show only the visible projects --- */}
        {projectsData.slice(0, visibleProjects).map((data, index) => (
          <motion.div
            key={data.title}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="flex flex-col rounded border p-4" // removed cursor-pointer as the video link is the main action
          >
            <Link
              href={data.links.github}
              aria-label={data.title}
              target="_blank"
              className="overflow-hidden rounded"
            >
              <video
                src={data.video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
              />
            </Link>
            <h3 className="mt-4 text-xl font-medium">{data.title}</h3>
            <p className="text-muted-foreground mb-4 mt-1">
              {data.description}
            </p>
            {/* Added flex-1 to push technologies to the bottom */}
            <div className="flex-1" />
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech) => (
                <Badge key={tech} variant={'outline'} size={'lg'}>
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Add the "Load More" button --- */}
      {/* It only shows if there are more projects to load */}
      {visibleProjects < projectsData.length && (
        <div className="mt-8 flex justify-center">
          <Button onClick={handleLoadMore} variant="outline" size="lg">
            Load More
          </Button>
        </div>
      )}
    </section>
  )
}