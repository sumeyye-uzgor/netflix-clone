import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <a>
              <div className={styles.logoWrapper}>
                <Image
                  src="/netflix.svg"
                  alt="Netflix logo"
                  width="128px"
                  height="34px"
                />
              </div>
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <div className={styles.loader}>Loading...</div>
        </div>
      </main>
    </div>
  );
};

export default Loading;
