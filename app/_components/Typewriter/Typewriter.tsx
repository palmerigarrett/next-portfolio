"use client";
import React, { useEffect, useState } from 'react';

interface ITypewriter {
  copy: string;
}

const Typewriter = ({ copy }: ITypewriter) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let currText = "";
    const typingInterval = setInterval(() => {
      currText = currText + copy[currentIndex];
      setDisplayText(currText);
      currentIndex++;

      if (currentIndex === copy.length) {
        clearInterval(typingInterval);
      }
    }, 10);

    return () => {
      clearInterval(typingInterval);
    };
  }, [copy]);

  return <p>{displayText}</p>;
};

export default Typewriter;