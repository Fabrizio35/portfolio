import { Verified } from '@/icons'
import PhotoProfile from '@/assets/fabrizio.jpg'
import type { TechType } from '@/types'

interface Props {
  text?: React.ReactNode
  techs?: TechType[]
  techTitle?: string
}

const PostAbout: React.FC<Props> = ({ text, techTitle, techs }) => {
  return (
    <article className="w-full rounded-xl shadow-2xl shadow-black p-3 sm:p-5 flex flex-col bg-neutral-800">
      <div className="flex items-center gap-2">
        <img
          src={PhotoProfile}
          alt="photo-profile-fabrizio"
          className="rounded-full size-10 object-cover"
        />

        <div className="flex items-center gap-1">
          <h6 className="font-medium text-gray-200">Fabrizio Ossola</h6>

          <Verified className="text-blue-500 size-4" />
        </div>
      </div>

      {text && (
        <div className="mt-2 [&>p>strong]:text-blue-500 [&>p>strong]:font-normal text-gray-300 text-pretty text-sm sm:text-base">
          {text}
        </div>
      )}

      {techTitle && (
        <h3 className="text-lg sm:text-xl font-bold text-blue-500 mt-2">
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

export default PostAbout
