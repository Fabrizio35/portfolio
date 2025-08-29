import Post from './Post'
import type { PostType } from '@/types'

interface Props {
  posts: PostType[]
}

export default function PostList({ posts }: Props) {
  return (
    <div className="flex flex-col gap-8 w-full my-10 px-5 md:px-0">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
