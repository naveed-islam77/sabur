import { AnimatePresence, Variants, motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

const AnimatedText: FC<{ text: string[]; speed: number }> = ({
  text,
  speed,
}) => {
  const sentence: Variants = {
    hidden: {
      transition: {
        delay: 0.5,
        staggerChildren: speed / 1000 / 2,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        delay: 0.5,
        staggerChildren: speed / 1000,
      },
    },
  };
  const letter: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timer = text[index].length * 3 * speed;
    console.log(timer);
    setTimeout(() => {
      setIndex((state) => {
        setDeleting(true);
        setTimeout(() => {
          setDeleting(false);
        }, timer / 4);
        return state + 1 < text.length ? state + 1 : 0;
      });
    }, timer);
  }, [index]);

  return (
    <AnimatePresence>
      {text.map((item, idx) => {
        console.log(index === idx && !deleting ? 'animating' : '');
        return index === idx && !deleting ? (
          <motion.span
            variants={sentence}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={item + idx}
          >
            {item.split('').map((char, index) => (
              <motion.span
                className="text-my_dark_blue font-semibold"
                key={char + '-' + index}
                variants={letter}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ) : null;
      })}
    </AnimatePresence>
  );
};

export default AnimatedText;
