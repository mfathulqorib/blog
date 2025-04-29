import Link from 'next/link'
import { formatDate } from '@/utils/utils'
import { genereateId } from '@/utils/utils'


export function Courseworks() {
  interface Coursework {
    id: string;
    title: string;
    description: string;
    link: string;
    completedAt: string;
    organization: string;
  }

  const courseworks: Coursework[] = [
    {
      id: genereateId(),
      title: 'Responsive Web Design',
      description: 'Learn how to use HTML and CSS to build a website that is responsive and looks good on all devices.',
      link: 'https://www.freecodecamp.org/certification/Calmbing97/responsive-web-design',
      completedAt: '2023-09-19',
      organization: 'freeCodeCamp',
    },
    {
      id: genereateId(),
      title: 'Fullstack Javascript Bootcamp - 8 Weeks',
      description: 'Learn how to build a fullstack javascript application using Next.js, Tailwind CSS, and PostgreSQL.',
      link: 'https://platform.devscale.id/api/certificates/CIKICY.pdf',
      completedAt: '2024-01-10',
      organization: 'Devscale Indonesia',
    },
    {
      id: genereateId(),
      title: 'Javascript Algorithms and Data Structures',
      description: 'Learn how to use javascript to solve problems and build data structures.',
      link: 'https://www.freecodecamp.org/certification/Calmbing97/javascript-algorithms-and-data-structures-v8',
      completedAt: '2025-02-15',
      organization: 'freeCodeCamp',
    },
  ]

  return (
    <div className="flex flex-col">
        {courseworks
        .sort((a, b) => {
          if (new Date(a.completedAt) < new Date(b.completedAt)) {
            return -1
          }
          return 1
        })
        .map((coursework) => (
          (
          <Link 
          href={coursework.link}
          key={coursework.id} 
          target="_blank"
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-4 p-4 border hover-card transition-all">
            <div className="w-full sm:w-auto">
              <div className="flex items-center gap-2 mb-1">
                <div className="font-semibold text-base sm:text-lg break-words">
                  {coursework.title}
                </div>
              </div>
              <p className="text-neutral-500 text-xs sm:text-sm">{coursework.organization}</p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 w-full sm:w-auto">
              <div className="font-medium text-zinc-500 text-xs sm:text-sm tracking-normal">{formatDate(coursework.completedAt, false)}</div>
            </div>
          </Link>
          )
        ))}
    </div>
  )
}
