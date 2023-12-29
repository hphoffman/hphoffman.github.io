// BlogPost.tsx
import React from "react";

interface BlogPostProps {
  title: string;
  content: string;
  thumb: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, thumb }) => {
  return (
    <div>
      <img src={thumb} alt=""></img>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
