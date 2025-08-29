interface Props {
  experience: {
    date: string
    title: string
    company: string
    techs: string
    link: string
    description?: string
    current: boolean
    icon: (props: { className?: string }) => React.JSX.Element
  }
}

export default function Experience({ experience }: Props) {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <experience.icon className="size-3.5 text-blue-800 dark:text-blue-300" />
      </span>

      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        <span className="text-blue-500">{experience.title}</span>&nbsp;en{' '}
        {experience.company}
        {experience.current && (
          <span className="bg-blue-100 text-blue-800 text-sm select-none font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
            Actual
          </span>
        )}
      </h3>

      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {experience.date}
      </time>

      {experience.description && (
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {experience.description}
        </p>
      )}

      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {experience.techs}
      </p>

      <a
        href={experience.link}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Saber más
        <svg
          className="w-3 h-3 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </li>
  )
}
