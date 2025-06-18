import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const posts = [
  {
    id: 'dont-burn-the-couch',
    title: "Don't Burn the Couch: A Parent's Guide to Not Panicking",
    excerpt: 'Spoiler alert: Your furniture is safe. Learn why lice prefer heads...',
  },
  {
    id: 'lice-myths-busted',
    title: 'Lice Myths Busted: What Really Works',
    excerpt: 'Mayo? Olive oil? Essential oils? We separate fact from fiction...',
  },
  {
    id: 'back-to-school-prevention',
    title: 'Back to School: Prevention Tips That Actually Work',
    excerpt: 'Simple, practical advice to reduce your child’s risk...',
  },
];

export default function BlogList() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Latest from Our Blog</h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {posts.map(({ id, title, excerpt }) => (
          <div key={id} className="p-6 bg-white shadow rounded">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="mb-4 text-gray-700">{excerpt}</p>
            <Link to={`/blog/${id}`}>
              <Button variant="outline" size="sm">Read More</Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
  

