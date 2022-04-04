import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'

const posts = [
  {
    title: 'react testing',
    excerpt: 'Learn react testing',
  },
  {
    title: 'react tailwind',
    excerpt: 'Learn react tailwind',
  },
]

const Home = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
