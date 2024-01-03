// BlogPage.tsx
import React, { useState } from "react";
import BlogPost from "./BlogCard";
import "./styles/BlogPage.css";
import thumb1 from "../handz.jpg";

interface BlogPostProps {
  id: string;
  title: string;
  content: string;
  shorthand: string;
  thumbnail?: string;

  content2?: string;
}

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const blogPosts: BlogPostProps[] = [
    {
      id: "1",
      title: "Happy Birthday Heather!",
      shorthand: "Click inside to read!",
      thumbnail: thumb1,
      content:
        "Happy Birthday darling! I've had this idea for a while, to make you a website full of everything that is amazing about you! I've been working on learning my web design for a while now, and while I'm still learning everyday I want this to be a project that I can work on continously for you. Anytime you make a new achivement, we can celebrate it together and add it to the page. And we can make blog posts together for everyone to see, like this one here! I love getting any chance I can to celebrate you, and celebrate with you. I was thinking for a while about this, I wanted to find a way to do something cool for you that was really specific to me, so you could always think of me when you see it. But of course I wanted to add some fun stuff along the way! Confetti button was a for sure must, and I think that the blogs will be a fun thing too! Now this site will only be expanding more and more, and if you have any other ideas on things for me to add you can always let me know and I am more than happy to work on it!",
      content2:
        "Now, to talk about the birthday girl and how much she means to me! First off, I want to say thank you, I'm sure you're tired of hearing it, but with everything that has been happening in my life, it's been really amazing having someone so supportive and loving to be with me everystep of the way. You never fail to make me feel loved and cared for in everything I do, and having you there with me makes me feel like I can do anything! Your support and love means the world to me, and having you as my number one supporter is the best feeling in the world. Another thing about you, YOU'RE SO FREAKING BEAUTIFUL! Everything from your beautiful smile, to your amazing fashion, every eye is on you when you walk into a room. You're freaking perfect. You're someone who inspires me everyday, in both work and fun you always show me how amazing, and exciting life can be. From dunkin runs, to wordle, and even going to botanical gardens anywhere we can find them, you always make everything an adventure. So once again, to my adventuring partner, to my everything, Happy Birthday Heather",
    },
    {
      id: "2",
      title: "Example Blog",
      shorthand: "Click here!",
      content: "Content for Blog Post 2.",
    },
    // Add more blog posts as needed
  ];

  const handleThumbnailClick = (postId: string) => {
    setSelectedPost(postId);
  };

  return (
    <div className="main-section">
      <div className="text">HPH BLOGS</div>
      <hr className="history-divider" />
      <div className="blog-cards">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="card"
            onClick={() => handleThumbnailClick(post.id)}
          >
            <div className="card-body">
              <img src={post.thumbnail} alt="" className="thumb"></img>
              <h3 className="card-title">{post.title}</h3>
              <p className="card-text">{post.shorthand}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="full-page-view">
          <BlogPost
            title={
              blogPosts.find((post) => post.id === selectedPost)?.title || ""
            }
            content={
              blogPosts.find((post) => post.id === selectedPost)?.content || ""
            }
            content2={
              blogPosts.find((post) => post.id === selectedPost)?.content2 || ""
            }
            thumb={
              blogPosts.find((post) => post.thumbnail === selectedPost)
                ?.thumbnail || ""
            }
          />
          <button onClick={() => setSelectedPost(null)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
