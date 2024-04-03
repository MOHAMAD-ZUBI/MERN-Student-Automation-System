/* eslint-disable no-unused-vars */

import QuestionMark from "../../public/QuestionMark";
import { useState, useEffect } from "react";
import AiBot from "./AiBot";

const Questions = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMessages = () => {
    const messagesBox = document.querySelector(".ai-bot");
    if (windowWidth >= 768 && messagesBox.classList.contains("hidden")) {
      messagesBox.classList.remove("hidden");
      messagesBox.classList.add("flex");
    } else {
      messagesBox.classList.remove("flex");
      messagesBox.classList.add("hidden");
    }
  };

  const hideMessages = () => {
    const messagesBox = document.querySelector(".ai-bot");
    if (windowWidth < 768 && messagesBox.classList.contains("flex")) {
      messagesBox.classList.remove("flex");
      messagesBox.classList.add("hidden");
    }
  };

  return (
    <div
      className="question fixed bottom-[100px] sm:bottom-10 right-5 w-[63px] h-[63px] bg-primary flex items-center justify-center p-5 border border-white hover:border-secondary duration-0.3 rounded-full z-[100] cursor-pointer"
      onClick={toggleMessages}
    >
      <AiBot />
      <QuestionMark wth="100%" hth="100%" fill="white" />
    </div>
  );
};

export default Questions;
