import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getBlogs } from '@/api/api.js';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import { Button } from '@/components/ui/button';

const fallbackImage = '/images/products/research and insight hub.jpeg';

const normalizeImageUrl = (image) => {
  if (!image) {
    return fallbackImage;
  }

  if (/^https?:\/\//i.test(image)) {
    return image;
  }

  return `https://neurodigital.oraclesforce.com/${image.replace(/^\/+/, '')}`;
};

const BlogDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadPost = async () => {
      try {
        setIsLoading(true);
        setError('');

        const data = await getBlogs();

        if (!isMounted) {
          return;
        }

        const match = data.find((item) => String(item.id) === String(id));

        if (!match) {
          setError('This article could not be found.');
          setPost(null);
          return;
        }

        const minutes = Number(match.Time);

        setPost({
          id: match.id,
          title: match.title || 'Untitled article',
          content: match.content || '',
          category: match.category || 'Uncategorized',
          date: match.date || '',
          readTime: `${Number.isFinite(minutes) && minutes > 0 ? minutes : 0} min read`,
          image: normalizeImageUrl(match.image)
        });
      } catch (loadError) {
        if (!isMounted) {
          return;
        }

        setError(loadError.message || 'We could not load this article right now.');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{post ? `${post.title} | NeuroDigital Support Blog` : 'NeuroDigital Support Blog'}</title>
      </Helmet>

      <Header />

      <main className="theme-aware-page min-h-screen bg-[#fbfffd] text-[#102f28]">
        <section className="border-b border-[#e2f0ea] bg-[linear-gradient(180deg,#fbfffd_0%,#f1faf6_100%)] pb-14 pt-16 sm:pb-20 sm:pt-24">
          <div className="mx-auto max-w-[820px] px-5 sm:px-8 lg:px-10">
            <Button asChild variant="outline" className="rounded-full border-[#d7e6e0] bg-white px-5 text-sm font-semibold text-[#163d34] shadow-none hover:bg-[#f8fffb]">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Blog
              </Link>
            </Button>

            {isLoading ? (
              <div className="mt-10 rounded-[1.5rem] border border-[#dcece6] bg-[#fbfffd] p-8 text-center">
                <p className="text-base font-semibold text-[#31544c]">Loading article...</p>
              </div>
            ) : error ? (
              <div className="mt-10 rounded-[1.5rem] border border-[#f1d5d5] bg-[#fff8f8] p-8 text-center">
                <p className="text-base font-semibold text-[#8a2f2f]">{error}</p>
              </div>
            ) : post ? (
              <>
                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-[#0f765a]">{post.category}</p>
                <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-normal text-[#0b3b31] sm:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-4 text-sm font-semibold text-[#536b64]">
                  {post.date && post.readTime ? `${post.date} | ${post.readTime}` : post.date || post.readTime}
                </p>

                <div className="mt-8 overflow-hidden rounded-[1.4rem] border border-[#dcece6] bg-[#edf8f3]">
                  <img src={post.image} alt="" className="aspect-[1.9/1] w-full object-cover" />
                </div>

                <div className="mt-8 whitespace-pre-line text-base font-medium leading-8 text-[#31544c]">
                  {post.content || 'No content available yet.'}
                </div>
              </>
            ) : null}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetailPage;
