import { Bio } from '@/components/placeholder'
import Link from 'next/link'
import { BlogPosts } from '@/components/posts'
import { Courseworks } from '@/components/courseworks'

export default function Page() {
  return (
    <main className="max-w-3xl m-auto space-y-12">
      <section>
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
          From Community Development to Tech: My Career Shift Journey
        </h1>
        <p className="mb-4 whitespace-pre-wrap">
          {Bio}
        </p>
      </section>
      <section>
        <h2 className="mb-8 text-xl font-semibold tracking-tighter">
          Featured Blog Posts
        </h2>
        <div className="my-8">
          <BlogPosts />
        </div>
        <Link 
        href="/blog" 
        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-100">
          see all posts
        </Link>
      </section>
      <section>
        <h2 className="mb-8 text-xl font-semibold tracking-tighter">
          What I've Learned
        </h2>
        <Courseworks />
      </section>
    </main>
  )
}
