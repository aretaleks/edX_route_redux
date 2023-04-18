import React from "react";
import Article from "./Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt5__blog">
    <div className="gpt5__blog-heading">
      <h1>
        A lot is happening, <br /> I'm blogging about it.
      </h1>
    </div>
    <div className="gpt5__blog-container">
      <div className="gpt5__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Apr 18, 2023"
          text="LLM and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="gpt5__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Apr 18, 2023"
          text="LLM and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog03}
          date="Apr 18, 2023"
          text="LLM and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog04}
          date="Apr 18, 2023"
          text="LLM and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog05}
          date="Apr 18, 2023"
          text="LLM and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
