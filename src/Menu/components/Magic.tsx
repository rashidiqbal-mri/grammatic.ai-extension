// Magic.tsx
import React from 'react';

interface MagicProps {
  text: string;
  words: string[];
  colors: string[];
}

export const Magic: React.FC<MagicProps> = ({ text, words, colors }) => {
  const highlightWords = (inputText: string, wordsToHighlight: string[], highlightColors: string[]) => {
    return inputText.split(" ").map((word, index) => {
      const highlightIndex = wordsToHighlight.indexOf(word);
      if (highlightIndex !== -1) {
        const textDecoration = highlightColors[highlightIndex] === '#ff0000' ? 'line-through' : 'none';
        return (
          <React.Fragment key={index}>
            <span
              style={{
                color: highlightColors[highlightIndex],
                textDecoration: textDecoration,
              }}
            >
              {word}
            </span>{" "}
          </React.Fragment>
        );
      }
      return <React.Fragment key={index}>{word} </React.Fragment>;
    });
  };

  const highlightedText = highlightWords(text, words, colors);

  return <>{highlightedText}</>;
};
