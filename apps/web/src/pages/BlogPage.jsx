import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Mail, PencilLine, Search } from 'lucide-react';
import { toast } from 'sonner';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const categories = ['All', 'Research Insights', 'Digital Safety', 'Community', 'News'];

const posts = [
  {
    title: 'Understanding the Neurodivergent Algorithmic Misfit (NAM) Framework',
    excerpt: 'A deep dive into how digital systems often misinterpret neurodivergent behaviours and how we can change that.',
    category: 'Research Insights',
    date: 'Apr 12, 2025',
    readTime: '5 min read',
    image: '/images/products/research and insight hub.jpeg'
  },
  {
    title: '5 Ways to Reduce Digital Sensory Overload Today',
    excerpt: 'Simple, actionable strategies to create a calmer, more manageable online experience for neurodivergent minds.',
    category: 'Digital Safety',
    date: 'Apr 10, 2025',
    readTime: '5 min read',
    image: '/images/products/homepage.jpeg'
  },
  {
    title: 'Building a Neuroinclusive Workplace: A Guide for HR',
    excerpt: 'Practical steps HR leaders can take to foster inclusion, support wellbeing, and unlock neurodivergent talent.',
    category: 'Community',
    date: 'Apr 8, 2025',
    readTime: '5 min read',
    image: '/images/products/supportworker.jpeg'
  },
  {
    title: 'The Role of AI in Ethical Moderation for Autistic Users',
    excerpt: 'Exploring how AI can be designed and trained to better serve autistic and neurodivergent communities.',
    category: 'Research Insights',
    date: 'Apr 5, 2025',
    readTime: '6 min read',
    image: '/images/products/Digital Advocacy Hub.jpeg'
  },
  {
    title: 'Self-Identification in the Digital Age: Community vs. Clinical',
    excerpt: 'Why self-identification matters and how online communities are shaping new models of understanding.',
    category: 'Community',
    date: 'Apr 3, 2025',
    readTime: '5 min read',
    image: '/images/products/about.png'
  },
  {
    title: 'How NuroTok is Redefining Social Interaction for ADHD Adults',
    excerpt: 'Inside NuroTok&apos;s mission to build engaging, dopamine-friendly spaces that put users first.',
    category: 'News',
    date: 'Apr 1, 2025',
    readTime: '5 min read',
    image: '/images/products/nurotok.jpeg'
  }
];

const featuredPost = {
  title: 'The Future of Sensory-Aware Design in Social Media',
  excerpt: 'As digital spaces evolve, sensory-aware design is becoming essential for inclusive experiences. Here is what the future holds.',
  author: 'Kofi Ofori-Mensah',
  date: 'March 28, 2025',
  readTime: '7 min read',
  image: '/images/products/earlyuser.jpeg'
};

const BlogVisual = ({ post, featured = false }) => (
  <div className={`relative overflow-hidden bg-[#edf8f3] ${featured ? 'h-full min-h-[260px] rounded-[1.15rem]' : 'aspect-[1.72/1] rounded-t-[1.4rem]'}`}>
    <img
      src={post.image}
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover"
    />
  </div>
);

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');

  const visiblePosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = !query || `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      toast.error('Please enter your email address.');
      return;
    }

    toast.success('Thanks for joining our community.');
    setEmail('');
  };

  return (
    <>
      <Helmet>
        <title>The NeuroDigital Blog</title>
      </Helmet>

      <Header />

      <main className="theme-aware-page min-h-screen overflow-hidden bg-[#fbfffd] text-[#102f28]">
        <section className="relative border-b border-[#e2f0ea] bg-[linear-gradient(180deg,#fbfffd_0%,#f1faf6_100%)] pb-14 pt-16 sm:pb-20 sm:pt-24">
          <div className="absolute left-[7%] top-28 h-56 w-56 rounded-full bg-[#d9efe6]/70 blur-[1px] dark:bg-emerald-400/10 dark:blur-2xl" aria-hidden="true" />
          <div className="absolute right-[8%] top-14 h-56 w-56 rounded-full bg-[#d9efe6]/70 blur-[1px] dark:bg-emerald-400/10 dark:blur-2xl" aria-hidden="true" />
          <div className="absolute right-[16%] top-44 hidden h-48 w-48 bg-[radial-gradient(circle,#bfe2d4_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-65 dark:bg-[radial-gradient(circle,rgba(52,211,153,0.28)_1.5px,transparent_1.5px)] dark:opacity-35 lg:block" aria-hidden="true" />

          <div className="relative mx-auto max-w-[1040px] px-5 text-center sm:px-8 lg:px-10">
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-normal text-[#0b3b31] sm:text-5xl lg:text-6xl">
              The NeuroDigital Blog
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg font-medium leading-8 text-[#31544c] sm:text-xl">
              Exploring the intersection of neurodiversity, technology, and inclusive design.
            </p>

            <div className="mx-auto mt-9 flex h-14 max-w-[560px] items-center gap-3 rounded-full border border-[#d7e6e0] bg-white/88 px-5 shadow-[0_18px_48px_rgba(15,61,50,0.08)] backdrop-blur-xl">
              <Search className="h-5 w-5 shrink-0 text-[#6d837c]" aria-hidden="true" />
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search blog articles"
                placeholder="Search articles, topics, or keywords..."
                className="h-12 border-0 bg-transparent px-0 text-sm font-medium text-[#102f28] shadow-none placeholder:text-[#7a8f88] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3" aria-label="Blog categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-11 rounded-full border px-6 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167158] focus-visible:ring-offset-2 ${
                    activeCategory === category
                      ? 'border-[#0b5f49] bg-[#0b5f49] text-white shadow-[0_14px_32px_rgba(11,95,73,0.2)]'
                      : 'border-[#d7e6e0] bg-white text-[#163d34] hover:border-[#a8d4c3] hover:bg-[#f8fffb]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[980px] px-5 sm:px-8 lg:px-10">
            <article className="grid overflow-hidden rounded-[1.5rem] border border-[#dcece6] bg-white p-3 shadow-[0_24px_80px_rgba(15,61,50,0.08)] md:grid-cols-[1.05fr_0.95fr] md:gap-4">
              <BlogVisual post={featuredPost} featured />
              <div className="flex flex-col justify-center px-4 py-8 sm:px-8 md:py-10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0f765a]">Featured</p>
                <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-normal text-[#0b3b31] sm:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 text-base font-medium leading-7 text-[#536b64]">{featuredPost.excerpt}</p>
                <div className="mt-8 flex items-center gap-3">
                  <img
                    src="/images/products/researchworker.jpeg"
                    alt=""
                    aria-hidden="true"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-[#102f28]">{featuredPost.author}</p>
                    <p className="mt-1 text-xs font-medium text-[#536b64]">
                      {featuredPost.date} <span aria-hidden="true"> • </span> {featuredPost.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white pb-10 sm:pb-14">
          <div className="mx-auto max-w-[980px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post) => (
                <article
                  key={post.title}
                  className="overflow-hidden rounded-[1.4rem] border border-[#dcece6] bg-white shadow-[0_18px_56px_rgba(15,61,50,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_74px_rgba(15,61,50,0.1)]"
                >
                  <BlogVisual post={post} />
                  <div className="p-5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wide text-[#0f765a]">{post.category}</p>
                    <h3 className="mt-3 text-lg font-semibold leading-snug tracking-normal text-[#102f28]">{post.title}</h3>
                    <p className="mt-4 text-sm font-medium leading-6 text-[#536b64]" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    <p className="mt-5 text-sm font-semibold text-[#102f28]">
                      {post.readTime} <span aria-hidden="true"> • </span> {post.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {visiblePosts.length === 0 ? (
              <div className="rounded-[1.4rem] border border-[#dcece6] bg-[#fbfffd] p-8 text-center">
                <p className="text-base font-semibold text-[#31544c]">No articles match your search yet.</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="bg-white pb-10 sm:pb-14">
          <div className="mx-auto max-w-[980px] px-5 sm:px-8 lg:px-10">
            <form
              onSubmit={handleSubscribe}
              className="grid items-center gap-6 rounded-[1.4rem] border border-[#d6eee5] bg-[linear-gradient(115deg,#e8f8f2_0%,#f9fffc_52%,#dff5ec_100%)] p-7 shadow-[0_20px_60px_rgba(15,61,50,0.07)] md:grid-cols-[auto_1fr_1.15fr]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/72 text-[#0f765a] shadow-sm">
                <Mail className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold leading-tight tracking-normal text-[#0b3b31]">Join our community.</h2>
                <p className="mt-3 text-sm font-medium leading-6 text-[#536b64]">
                  Get the latest research and digital safety tips delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="h-12 rounded-full border-[#d7e6e0] bg-white px-5 text-sm font-medium shadow-none focus-visible:ring-[#167158]"
                />
                <Button type="submit" className="h-12 rounded-full bg-[#0b5f49] px-7 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(11,95,73,0.2)] hover:bg-[#084d3c]">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </section>

        <section className="bg-white pb-10">
          <div className="mx-auto flex max-w-[980px] items-center justify-center gap-2 px-5 sm:px-8 lg:px-10">
            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full text-[#102f28] hover:bg-[#edf8f3]" aria-label="Previous page">
              <ChevronLeft className="h-4 w-4" />
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                type="button"
                className={`h-9 w-9 rounded-full text-sm font-semibold ${page === 1 ? 'bg-[#0f765a] text-white' : 'text-[#102f28] hover:bg-[#edf8f3]'}`}
              >
                {page}
              </button>
            ))}
            <span className="px-2 text-sm font-semibold text-[#536b64]">...</span>
            <button type="button" className="h-9 w-9 rounded-full text-sm font-semibold text-[#102f28] hover:bg-[#edf8f3]">8</button>
            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full text-[#102f28] hover:bg-[#edf8f3]" aria-label="Next page">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        <section className="bg-white pb-16 sm:pb-20">
          <div className="mx-auto max-w-[980px] px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-6 rounded-[1.4rem] border border-[#dcece6] bg-white p-7 shadow-[0_18px_56px_rgba(15,61,50,0.06)] sm:grid-cols-[auto_1fr_auto]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f7f1] text-[#0f765a]">
                <PencilLine className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold leading-tight tracking-normal text-[#0b3b31]">
                  Have a story to share or a research topic to suggest?
                </h2>
                <p className="mt-2 text-xl font-semibold text-[#0b3b31]">Contact our editorial team.</p>
              </div>
              <Button asChild className="h-12 rounded-full border border-[#9fd0bd] bg-white px-7 text-sm font-semibold text-[#0b5f49] shadow-none hover:bg-[#f1faf6]">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;
