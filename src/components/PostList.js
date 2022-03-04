import React from "react";

const PostList = (props) => {
  const { PostList, setEditPost } = props;

  return (
    <div
      className="post-list"
      style={{
        display: "grid",
        gap: "8px",
        gridColumn: 1,
        gridRow: 2,
        overflowY: "scroll",
        padding: "8px",
      }}
    >
      <h3>All Posts</h3>
      {PostList.map((post, idx) => {
        return (
          <div
            className="post"
            key={idx}
            style={{
              border: post.isAuthor ? "5px solid gold" : "1px solid brown",
            }}
          >
            <h5>
              {post.title} ({post.location}) [{post.createdAt}]
            </h5>
            <p>{post.description}</p>
            {post.isAuthor ? (
              <button
                onClick={() => {
                  setEditPost(post);
                }}>EDIT</button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default PostList;