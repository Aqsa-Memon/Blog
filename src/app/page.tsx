import { Blogs, blogs } from "@/blogs/blogs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        Recent <span className="text-yellow-400">blogs</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length > 0 &&
          blogs.map((blog: Blogs) => (
            <div
              key={blog.id}
              className="bg-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-gray-500 mb-4">By {blog.author} on {blog.date}</p>
                <p className="text-gray-700 mb-6">{blog.content.slice(0, 100)}...</p>
                <Link href={`/${blog.id}`}>
                  <span className="inline-block text-black  font-medium text-lg transition-colors duration-200 underline">
                    View More
                  </span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
