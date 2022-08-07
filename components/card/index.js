import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import { motion } from "framer-motion";
import styles from "./style.module.css";
import { useState } from "react";

const Card = (props) => {
  const fallbackUrl = "/movie_poster.png";
  const {
    size = "medium",
    imgUrl = fallbackUrl,
    name,
    link,
    isFirstOrLast,
  } = props;
  const [imgFallback, setImgFallback] = useState(imgUrl);
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  const scale = isFirstOrLast ? { scaleY: 1.1 } : { scale: 1.1 };
  return (
    <div className={styles.container}>
      <Link href={link}>
        <motion.div
          className={cls(classMap[size], styles.imgMotionWrapper)}
          whileHover={scale}
        >
          <Image
            className={styles.cardImg}
            src={imgFallback}
            layout="fill"
            alt={`${name} cover image`}
            onError={() => setImgFallback(fallbackUrl)}
          />
        </motion.div>
      </Link>
    </div>
  );
};

export default Card;
