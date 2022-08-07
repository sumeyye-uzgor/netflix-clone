import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import { useState } from "react";

const Card = (props) => {
  const fallbackUrl = "/movie_poster.png";
  const { size = "medium", imgUrl = fallbackUrl, name, link } = props;
  const [imgFallback, setImgFallback] = useState(imgUrl);
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  return (
    <div className={styles.container}>
      <Link href={link}>
        <div className={classMap[size]}>
          <Image
            className={styles.cardImg}
            src={imgFallback}
            layout="fill"
            alt={`${name} cover image`}
            onError={() => setImgFallback(fallbackUrl)}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card;
