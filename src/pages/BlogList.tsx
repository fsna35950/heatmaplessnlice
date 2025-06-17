import { Link } from "react-router-dom";

const posts = [
  {
    id: "why-head-checks-matter",
    title: "Why Regular Head Checks Matter",
    excerpt: "Learn why early lice detection can save you hours of stress...",
  },
  {
    id: "home-lice-removal-steps",
    title: "Steps to a Successful Home Lice Removal",
    excerpt: "We break down an easy step-by-step method for safe, effective removal...",
  },
];

export default function BlogList() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-6 border-b pb-4">
            <Link to={`/blog/${post.id}`}>
              <h2 className="text-2xl font-semibold text-blue-800 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-700">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
