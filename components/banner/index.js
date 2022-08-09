import Image from "next/image";
import styles from "./style.module.css";
import { useRouter } from "next/router";
const Banner = ({ videoId, title, subtitle, imgUrl }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <div className={styles.playBtnWrapper}>
            <button
              className={styles.btnWithIcon}
              onClick={() => router.push(`/video/${videoId}`)}
            >
              <Image
                src="/play_arrow.svg"
                width="32px"
                height="32px"
                alt="play button"
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
