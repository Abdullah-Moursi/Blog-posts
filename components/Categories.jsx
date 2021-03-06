import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const { query } = useRouter()

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span
            className={`mb-3 block cursor-pointer pb-3 ${
              category.slug === query.slug && 'font-semibold text-sky-700'
            }`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
