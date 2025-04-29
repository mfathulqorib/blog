import { BlogPosts } from '@/components/posts'

export default function Page() {
  return ( 
    <section className="min-h-[calc(100vh-20rem)] md:min-h-[calc(100vh-16rem)]">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
