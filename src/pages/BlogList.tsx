import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: "dont-burn-the-couch", title: "Don't Burn the Couch", excerpt: "Learn why lice stick to heads, not sofas…" },
  { id: "lice-myths-busted", title: "Lice Myths Busted", excerpt: "We separate fact from fiction…" },
  { id: "back-to-school-prevention", title: "Back to School Tips", excerpt: "Practical ways to reduce lice risk…" },
];

export default function BlogList() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Latest from Our Blog</h2>
      {posts.map(({ id, title, excerpt }) => (
        <div key={id} className="border rounded p-4 mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-700">{excerpt}</p>
          <Link to={`/blog/${id}`} className="text-blue-600 hover:underline">Read More →</Link>
        </div>
      ))}
    </div>
  );
}
