import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Don't Burn the Couch: A Parent's Guide to Lice Panic",
      excerpt: "Before you start throwing away furniture and buying industrial-strength shampoo, take a deep breath. Here's what you actually need to know about lice.",
      date: "March 15, 2024",
      readTime: "5 min read",
      content: `
        <p>We get it. You found lice on your child's head, and now you're Googling "how to burn down house safely." Stop right there. Put down the matches.</p>
        
        <h3>The Truth About Lice</h3>
        <p>Lice are annoying, not dangerous. They don't carry diseases, they don't jump from furniture to heads, and they definitely don't require you to throw away half your belongings.</p>
        
        <h3>What NOT to Do</h3>
        <ul>
          <li>Don't bag up every stuffed animal for weeks</li>
          <li>Don't spray your house with pesticides</li>
          <li>Don't shave everyone's head (unless that's your thing)</li>
          <li>Don't panic-buy every lice product at the store</li>
        </ul>
        
        <h3>What TO Do</h3>
        <p>Call us. Seriously. We've seen it all, and we promise your situation isn't as bad as you think. A professional head check costs just $10, and we'll give you a realistic treatment plan.</p>
        
        <p>Remember: Lice prefer clean hair, so this isn't about hygiene. It's just one of those things that happens when kids are being kids.</p>
      `
    },
    {
      id: 2,
      title: "Back to School: Lice Prevention That Actually Works",
      excerpt: "Forget the tea tree oil myths. Here are evidence-based tips to help your kids avoid bringing home unwanted guests.",
      date: "August 20, 2024",
      readTime: "3 min read",
      content: `
        <p>School's starting, and you're probably seeing those "lice prevention" posts flooding your parent Facebook groups. Let's separate fact from fiction.</p>
        
        <h3>What Actually Prevents Lice</h3>
        <ul>
          <li>Teaching kids not to share hats, brushes, or hair accessories</li>
          <li>Regular head checks (weekly is plenty)</li>
          <li>Keeping long hair tied back</li>
          <li>Teaching kids about personal space during selfies</li>
        </ul>
        
        <h3>What Doesn't Work</h3>
        <p>Tea tree oil, coconut oil, and other "natural repellents" aren't proven effective. Save your money and your child's scalp.</p>
        
        <p>The best prevention? Stay calm, stay informed, and know that if lice do show up, it's not the end of the world.</p>
      `
    },
    {
      id: 3,
      title: "School Nurses: The Unsung Heroes of Lice Management",
      excerpt: "A tribute to the school nurses who deal with lice scares, worried parents, and outdated policies with grace and expertise.",
      date: "February 10, 2024",
      readTime: "4 min read",
      content: `
        <p>Shoutout to school nurses everywhere who have to navigate the chaos of lice season with the patience of saints.</p>
        
        <h3>The Reality</h3>
        <p>School nurses see everything from full-blown infestations to parents convinced their child has lice because they scratched their head once. They handle it all with professionalism.</p>
        
        <h3>Supporting Your School Nurse</h3>
        <ul>
          <li>Trust their expertise</li>
          <li>Don't demand your child be checked daily</li>
          <li>Understand that "no-nit" policies are often outdated</li>
          <li>Be reasonable about treatment timelines</li>
        </ul>
        
        <p>Remember: School nurses are your allies, not your enemies. Work with them, not against them.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#003366] mb-4">
              Lice Happens: Don't Panic
            </h1>
            <p className="text-lg text-gray-600">
              Real talk about lice from professionals who've seen it all
            </p>
          </div>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl text-[#003366] hover:text-[#006d77] cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div 
                    className="prose prose-sm max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="bg-[#006d77] text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Need Professional Help?
                </h3>
                <p className="mb-6">
                  Stop stressing and let us handle it. Professional head checks start at just $10.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#006d77] hover:bg-gray-100"
                >
                  Book a Head Check
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;