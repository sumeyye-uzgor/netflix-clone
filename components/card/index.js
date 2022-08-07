import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import { useState } from "react";

const Card = ({ size, imgUrl, name, link }) => {
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
            src={imgUrl}
            layout="fill"
            alt={`${name} cover image`}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card;
