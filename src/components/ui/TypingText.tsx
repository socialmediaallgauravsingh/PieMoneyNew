import React, { useState, useEffect } from 'react';
import { TypingTextProps } from '../../types';

const TypingText: React.FC<TypingTextProps> = ({ 
  text, 
  delay = 30, 
  className = '', 
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, delay, text, onComplete, isComplete]);

  return (
    <div className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-1 h-4 bg-blue-500 dark:bg-blue-400 animate-blink ml-0.5" />
      )}
    </div>
  );
};

export default TypingText;