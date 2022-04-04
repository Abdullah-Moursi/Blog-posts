import Head from 'next/head'

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
        {posts.map((post, index) => (
          <div key={index}>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
