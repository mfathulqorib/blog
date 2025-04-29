function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="my-8 sm:my-12">
      <div className="flex flex-col space-y-6 px-4 sm:px-8 md:px-0">
        <div className="text-center sm:text-left">
          <h2 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
            Feel free to reach out through any of these channels
          </p>
        </div>
        
        <ul className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
          <li className="w-full sm:w-auto">
            <a
              className="flex items-center justify-center sm:justify-start w-full transition-all hover:text-neutral-900 dark:hover:text-neutral-100 group"
              rel="noopener noreferrer"
              target="_blank"
              href="https://x.com/mfathulqorib97"
            >
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowIcon />
              </span>
              <span className="ml-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">Follow on X</span>
            </a>
          </li>
          <li className="w-full sm:w-auto">
            <a
              className="flex items-center justify-center sm:justify-start w-full transition-all hover:text-neutral-900 dark:hover:text-neutral-100 group"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:mfathulqorib97@gmail.com"
            >
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowIcon />
              </span>
              <span className="ml-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">Send Email</span>
            </a>
          </li>
          <li className="w-full sm:w-auto">
            <a
              className="flex items-center justify-center sm:justify-start w-full transition-all hover:text-neutral-900 dark:hover:text-neutral-100 group"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/mfathulqorib"
            >
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowIcon />
              </span>
              <span className="ml-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">View GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}