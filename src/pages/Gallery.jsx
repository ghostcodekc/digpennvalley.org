import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { INSTAGRAM_POSTS } from '../data/instagramPosts';

export const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInstagramEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    const scriptExists = document.querySelector('script[src="//www.instagram.com/embed.js"]');
    if (!scriptExists) {
      const script = document.createElement('script');
      script.setAttribute('src', '//www.instagram.com/embed.js');
      script.setAttribute('async', '');
      script.setAttribute('defer', '');
      script.onload = loadInstagramEmbeds;
      document.body.appendChild(script);
    } else {
      loadInstagramEmbeds();
    }

    // Poll for loaded iframes
    const expectedCount = INSTAGRAM_POSTS.length;
    const pollInterval = 500;
    const maxWait = 10000; // 10 seconds timeout fallback
    let elapsed = 0;

    const poll = setInterval(() => {
      const iframes = document.querySelectorAll('iframe.instagram-media');
      if (iframes.length >= expectedCount) {
        clearInterval(poll);
        setLoading(false);
      } else {
        elapsed += pollInterval;
        if (elapsed >= maxWait) {
          clearInterval(poll);
          setLoading(false); // Give up and remove spinner anyway
        }
      }
    }, pollInterval);

    return () => clearInterval(poll);
  }, []);

  return (
    <div id="gallery" className="pb-10 relative min-h-screen">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20">
          <img
            src="/images/misc/dig_logo.png"
            alt="Loading"
            className="animate-spin w-16 h-16"
          />
        </div>
      )}

      <Header title="Gallery" subtitle="Recent moments from our community on Instagram." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <blockquote
              key={post.id}
              className="instagram-media"
              data-instgrm-permalink={post.url}
              data-instgrm-version="14"
              style={{ maxWidth: '540px', width: '100%', margin: '0 auto' }}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/digpennvalley/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors font-semibold"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};
