import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/utils/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) < new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .filter((post) => post.metadata.isFeatured === 'true')
        .map((post) => 
          (
            <Link
              key={post.slug}
              className="hover-card p-4 sm:p-6 flex flex-col space-y-2 sm:space-y-3 cursor-pointer border-y transition-all hover:border-neutral-400 dark:hover:border-neutral-600 border-neutral-200 dark:border-neutral-800"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 min-h-[56px]">
                <h2 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 tabular-nums text-right whitespace-nowrap">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
        ))}
    </div>
  )
}
