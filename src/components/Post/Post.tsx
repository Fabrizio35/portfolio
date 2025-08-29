import type { PostType } from '@/types'
import { GithubIcon, LinkIcon } from '@/icons'

interface Props {
  post: PostType
}

export default function Post({ post }: Props) {
  return (
    <article className="w-full rounded-xl shadow-2xl shadow-black p-5 flex flex-col bg-neutral-800">
      <span className="text-neutral-500 text-sm font-medium">{post.date}</span>

      <h3 className="text-lg sm:text-xl font-bold text-blue-500 mt-1">
        {post.title}
      </h3>

      {post.company && (
        <h4 className="font-semibold text-base sm:text-lg text-white">
          {post.company}
        </h4>
      )}

      <p className="text-gray-300 mt-2 text-pretty text-sm sm:text-base">
        {post.description}
      </p>

      {post.techs && (
        <p className="text-gray-300 mt-2 font-semibold text-sm sm:text-base">
          {post.techs}
        </p>
      )}

      {post.image && (
        <div className="mt-2 transition duration-500 ease-in-out shadow-xl overflow-clip rounded-xl border border-gray-800 hover:border-gray-700 hover:bg-gray-800/50">
          <img
            src={post.image}
            alt={`${post.title} project image`}
            className="object-cover rounded-xl transition duration-500 hover:scale-105"
          />
        </div>
      )}

      {(post.source || post.link) && (
        <div className="flex items-center justify-between mt-5">
          {post.source && (
            <a href={post.source} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="size-8 sm:size-10 text-gray-300 hover:text-gray-100 transition duration-300 ease-in-out hover:scale-110" />
            </a>
          )}

          {post.link && !post.company && (
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="size-8 sm:size-10 text-gray-300 hover:text-gray-100 transition duration-300 ease-in-out hover:scale-110" />
            </a>
          )}
        </div>
      )}

      {post.link && post.company && (
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm sm:text-base font-extrabold hover:underline"
        >
          Saber más
        </a>
      )}
    </article>
  )
}
