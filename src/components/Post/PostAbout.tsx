import type { TechType } from '@/types'

interface Props {
  text?: React.ReactNode
  techs?: TechType[]
  techTitle?: string
}

export default function PostAbout({ text, techs, techTitle }: Props) {
  return (
    <article className="w-full rounded-xl shadow-2xl shadow-black p-3 sm:p-5 flex flex-col bg-neutral-800">
      {text && (
        <div className="[&>p>strong]:text-blue-500 [&>p>strong]:font-normal text-gray-300 text-pretty text-sm sm:text-base">
          {text}
        </div>
      )}

      {techTitle && (
        <h3 className="text-lg sm:text-xl font-bold text-blue-500">
          {techTitle}
        </h3>
      )}

      <div className="flex items-center flex-wrap mt-2">
        {techs &&
          techs.length > 0 &&
          techs.map((tech, index) => (
            <div
              key={tech.id}
              className="flex items-center gap-1 my-0.5 sm:my-1 text-gray-300"
            >
              <tech.icon className="size-4 sm:size-5" />

              <span className="text-sm sm:text-base">{tech.name}</span>

              {index < techs.length - 1 && <span className="mx-1">|</span>}
            </div>
          ))}
      </div>
    </article>
  )
}
