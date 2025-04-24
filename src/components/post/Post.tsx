import type { PostType } from '@/types'
import PhotoProfile from '@/assets/fabrizio.jpg'
import { Github, Link, Verified } from '@/icons'

interface PostProps {
  post: PostType
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <article className="w-full rounded-xl shadow-2xl shadow-black p-5 flex flex-col bg-neutral-800">
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

      <span className="text-neutral-500 text-sm font-medium mt-2">
        {post.date}
      </span>

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
              <Github className="size-8 sm:size-10 text-gray-300 hover:text-gray-100 transition duration-300 ease-in-out hover:scale-110" />
            </a>
          )}

          {post.link && !post.company && (
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <Link className="size-8 sm:size-10 text-gray-300 hover:text-gray-100 transition duration-300 ease-in-out hover:scale-110" />
            </a>
          )}
        </div>
      )}

      {post.link && post.company && (
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm sm:text-base font-extrabold hover:underline transition duration-300 ease-in-out sm:hover:scale-105"
        >
          Saber más
        </a>
      )}
    </article>
  )
}

export default Post
