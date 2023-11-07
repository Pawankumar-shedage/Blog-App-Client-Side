/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { BlogPost } from "./BlogPost";

/* eslint-disable no-unused-vars */

export const Blogs = () => {
  // Post Data . From Server
  const [posts, setPosts] = useState([
    {
      id: 1,
      user_id: 1,
      userName: "Pawankumar Shedage",
      createdat: "12 Novembar 2023",
      title: "ChatGPT Turbo launch",
      content:
        "The field of artificial intelligence has seen remarkable advancements in recent years, and one of the latest breakthroughs is the launch of ChatGPT Turbo. This cutting-edge AI model is designed to take conversational AI to the next level. With its enhanced capabilities, ChatGPT Turbo opens up new possibilities for natural language understanding and generation. It promises to revolutionize how we interact with AI systems, making them even more useful and efficient. Stay tuned as we explore the exciting developments and potential applications of ChatGPT Turbo in the world of AI.",
    },
    {
      id: 2,
      user_id: 1,
      userName: "Pawankumar Shedage",
      createdat: "12 Novembar 2023",
      title: "ChatGPT Turbo launch",
      content:
        "The field of artificial intelligence has seen remarkable advancements in recent years, and one of the latest breakthroughs is the launch of ChatGPT Turbo. This cutting-edge AI model is designed to take conversational AI to the next level. With its enhanced capabilities, ChatGPT Turbo opens up new possibilities for natural language understanding and generation. It promises to revolutionize how we interact with AI systems, making them even more useful and efficient. Stay tuned as we explore the exciting developments and potential applications of ChatGPT Turbo in the world of AI.",
    },
    {
      id: 15,
      user_id: 1,
      userName: "Pawankumar Shedage",
      createdat: "12 Novembar 2023",
      title: "ChatGPT Turbo launch",
      content:
        "The field of artificial intelligence has seen remarkable advancements in recent years, and one of the latest breakthroughs is the launch of ChatGPT Turbo. This cutting-edge AI model is designed to take conversational AI to the next level. With its enhanced capabilities, ChatGPT Turbo opens up new possibilities for natural language understanding and generation. It promises to revolutionize how we interact with AI systems, making them even more useful and efficient. Stay tuned as we explore the exciting developments and potential applications of ChatGPT Turbo in the world of AI.",
    },
  ]);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          console.log(data);
        });
    } catch (error) {
      console.log("Error occured while fetching posts:", error);
    }
  }, []);

  // ------------------------RETRUN STATEMENT------------------
  return (
    <div className="container ps-3" style={{ marginBottom: "60px" }}>
      <div className="row justify-content-center">
        {/* Single blog post */}
        {posts.map((post) => (
          <>
            <BlogPost key={post.id} post={post} />
          </>
        ))}
      </div>
    </div>
  );
};
