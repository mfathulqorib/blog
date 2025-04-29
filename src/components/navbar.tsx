import Link from 'next/link'
import ThemeToggle from '@/theme/theme-toggle'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] tracking-tight sticky top-0 w-full bg-white dark:bg-black z-50 border-b-1 border-neutral-200 dark:border-neutral-800 ">
      <div className="max-w-3xl mx-auto py-1.5 ">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-600 dark:hover:text-neutral-300 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </aside>
  )
}
