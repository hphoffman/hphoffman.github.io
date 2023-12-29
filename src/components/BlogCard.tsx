// BlogPost.tsx
import React from "react";

interface BlogCardProps {
  title: string;
  content: string;
  thumb: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, content, thumb }) => {
  return (
    <div>
      <img src={thumb} alt=""></img>
      <h2>{title}</h2>
      <div className="blog-post-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
