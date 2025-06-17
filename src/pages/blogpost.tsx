import { useParams } from "react-router-dom";

const posts = [
  {
    id: "why-head-checks-matter",
    title: "Why Regular Head Checks Matter",
    content: `
      <h3>Early Detection Saves Time 🕒</h3>
      <p>A head check can reveal lice before they spread—saving you hours of combing and treatment time...</p>
      <h3>How Often Should You Check?</h3>
      <p>Try checking once a week during peak lice seasons like back-to-school.</p>
    `,
  },
  {
    id: "home-lice-removal-steps",
    title: "Steps to a Successful Home Lice Removal",
    content: `
      <ol>
        <li>🧼 Begin with a thorough shampoo and conditioner rinse.</li>
        <li>Use a metal lice comb — section hair into small parts.</li>
        <li>Clean comb in hot water after each pass.</li>
        <li>Set a reminder for a follow-up check in 7–10 days.</li>
      </ol>
    `,
  },
];

export default function BlogPost() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) return <p className="p-8">Sorry, that post can't be found.</p>;

  return (
    <article className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
