// BlogCard.tsx
import React from "react";

interface BlogCardProps {
  title: string;
  content: string;
  content2?: string;
  thumb: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  content,
  content2,
  thumb,
}) => {
  return (
    <div>
      <img src={thumb} alt=""></img>
      <h2>{title}</h2>
      <div className="blog-post-content">
        <p>{content}</p>
        <p>{content2}</p>
      </div>
    </div>
  );
};

export default BlogCard;
