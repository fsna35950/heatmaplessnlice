import { useParams } from “react-router-dom”;

const posts = [
  {
    id: “1”,
    title: “Don’t Burn the Couch: A Parent’s Guide to Not Panicking”,
    content: `Spoiler alert: Your furniture is safe. Learn why lice prefer heads to household items and how to keep your sanity intact.`,
  },
  {
    id: “2”,
    title: “Lice Myths Busted: What Really Works”,
    content: `Mayo? Olive oil? Essential oils? We separate fact from fiction in the world of DIY lice treatments.`,
  },
  {
    id: “3”,
    title: “Back to School: Prevention Tips That Actually Work”,
    content: `Simple, practical advice to reduce your child’s risk without turning them into a hermit.`,
  },
];

export default function BlogPost() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <div className=“p-8”>Post not found.</div>;
  }

  return (
    <div className=“p-8 max-w-3xl mx-auto”>
      <h1 className=“text-4xl font-bold mb-4”>{post.title}</h1>
      <p className=“text-lg text-gray-700”>{post.content}</p>
    </div>
  );
}
