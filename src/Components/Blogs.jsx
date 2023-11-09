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
      slug: "chatgpt-turbo-launch",
      content:
        "The field of artificial intelligence has seen remarkable advancements in recent years, and one of the latest breakthroughs is the launch of ChatGPT Turbo. This cutting-edge AI model is designed to take conversational AI to the next level. With its enhanced capabilities, ChatGPT Turbo opens up new possibilities for natural language understanding and generation. It promises to revolutionize how we interact with AI systems, making them even more useful and efficient. Stay tuned as we explore the exciting developments and potential applications of ChatGPT Turbo in the world of AI.",
    },
    {
      id: 2,
      user_id: 2,
      userName: "Binayak Purohit",
      createdat: "07 Novembar 2023",
      title: "Coding Chronicles: Navigating the Tech Landscape",
      slug: "coding-chroicles",
      content:
        "Dive into the world of programming and technology. From coding challenges to the latest industry trends, join us on a journey through the ever-evolving tech landscape and uncover the secrets of successful coding.",
    },
    {
      id: 3,
      user_id: 3,
      userName: "Rakshita A.J ",
      createdat: "08 Novembar 2023",
      title: "Culinary Delights: A Gastronomic Journey",
      slug: "culinary-delights",
      content:
        "Savor the flavors, aromas, and stories behind exquisite dishes. Embark on a gastronomic journey that explores the art of cooking, the joy of sharing meals, and the cultural richness found in every bite.",
    },
    {
      id: 4,
      user_id: 4,
      userName: "Shyam Nair",
      createdat: "02 Novembar 2023",
      title: "The Power of Creative Expression",
      slug: "power-of-creative-expression",
      content:
        "Celebrate the boundless potential of creative expression. From art and literature to music and dance, explore how creativity enriches our lives, connects us to others, and sparks innovation.",
    },
    {
      id: 5,
      user_id: 5,
      userName: "Vismaya ",
      createdat: "04 Novembar 2023",
      title: " Mind and Body Harmony",
      slug: "mind-and-body-harmony",
      content:
        "Discover the interconnectedness of mind and body. Explore holistic practices, mindfulness techniques, and wellness tips that foster harmony, balance, and overall well-being.",
    },
  ]);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/posts/postList")
        .then((response) => response.json())
        .then((data) => {
          // setPosts(data);

          console.log("post Data", data);
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
        {posts.map((post, index) => (
          <>
            <BlogPost key={post.id} post={post} />
          </>
        ))}
      </div>
    </div>
  );
};
