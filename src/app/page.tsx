import { Bio } from '@/components/placeholder'
import Link from 'next/link'
import { BlogPosts } from '@/components/posts'
import { Courseworks } from '@/components/courseworks'
import photo from '../../public/me.jpg'
import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-3xl mx-4 lg:mx-auto space-y-8 md:space-y-12 py-8 md:py-12">
      <section className="space-y-6 md:space-y-8">
        <Image 
          alt="Indra Zulfi" 
          src={photo} 
          className="w-26 h-24 md:w-36 md:h-32 rounded-xl grayscale hover:grayscale-0 transition-all duration-300" 
          priority
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tighter">
          From Community Development to Tech: My Career Shift Journey
        </h1>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap">
          {Bio}
        </p>
      </section>

      <section className="space-y-6 md:space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tighter">
          Featured Blog Posts
        </h2>
        <div className="space-y-4">
          <BlogPosts />
        </div>
        <Link 
          href="/blog" 
          className="inline-block text-sm md:text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-100"
        >
          see all posts
        </Link>
      </section>

      <section className="space-y-6 md:space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tighter">
          What I've Learned
        </h2>
        <Courseworks />
      </section>
    </main>
  )
}
