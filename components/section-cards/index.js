import Card from "../card";
import styles from "./style.module.css";

const SectionCards = ({ title, movies, posterSize }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {movies.map(({ name, imgUrl, link }, index) => (
          <Card
            key={name}
            name={name}
            imgUrl={imgUrl}
            link={link}
            size={posterSize}
            isFirstOrLast={index === 0 || index === movies.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
