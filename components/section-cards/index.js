import Card from "../card";
import styles from "./style.module.css";

const SectionCards = ({ title, movies, size }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        {movies.map(({ name, imgUrl, link }) => (
          <Card
            key={name}
            name={name}
            imgUrl={imgUrl}
            link={link}
            size={size}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionCards;
