import React from 'react';
import styles from './Blog.module.css';

const Blog = () => {
  const posts = [
    {
      title: "VS Code and GitHub Copilot",
      date: "March 15, 2024",
      author: "VS Code Team",
      excerpt: "Learn how GitHub Copilot enhances your coding experience in VS Code.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Remote Development with VS Code",
      date: "March 10, 2024",
      author: "Developer Tools Team",
      excerpt: "Discover how to use VS Code for remote development and collaboration.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className={styles.blog}>
      <div className={styles.header}>
        <h1>VS Code Blog</h1>
        <p>News, tips, and insights from the VS Code team</p>
      </div>
      
      <div className={styles.posts}>
        {posts.map((post, index) => (
          <article key={index} className={styles.post}>
            <div className={styles.postImage}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.postContent}>
              <h2>{post.title}</h2>
              <div className={styles.postMeta}>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <p>{post.excerpt}</p>
              <a href="#" className={styles.readMore}>Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;