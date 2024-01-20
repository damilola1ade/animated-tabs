import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "./motion";

interface TypingTextProps {
  title: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ title }) => (
  <motion.p variants={textContainer}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
