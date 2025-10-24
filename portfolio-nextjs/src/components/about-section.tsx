'use client'

import { useSectionInView } from '@/hooks/use-section-in-view'
import { siteConfig } from '@/lib/site-config'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from './section-heading'
import Skills from './skills'

export default function AboutSection() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      // CHANGED: Added 'px-4' for horizontal padding on mobile
      className="my-10 flex w-full scroll-mt-28 flex-col items-center px-4 md:mb-20"
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        
        {/* --- CONTENT UPDATED --- */}
        <p className="mb-4">
          I'm a passionate Full Stack Developer focused on building scalable and
          user-friendly web applications.
        </p>
        <p>
          I am committed to writing clean, high-performance code and enjoy
          tackling complex challenges to deliver efficient solutions. I'm always
          open to new opportunities. If you have a project in mind, please don't
          hesitate to{' '}
          <Link
            className="underline-offset-4 hover:underline"
            href={siteConfig.links.contactForm}
          >
            contact
          </Link>{' '}
          me.
        </p>
        {/* --- END OF CONTENT UPDATE --- */}

      </div>
      <Skills />
    </motion.section>
  )
}