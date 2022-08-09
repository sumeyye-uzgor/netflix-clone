import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";
import { useRouter } from "next/router";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0, 0, 0, 0.6)",
  },
  overlay: {
    background: "rgba(255, 255, 255, 0.2)",
  },
};
Modal.setAppElement("#__next");
const Video = () => {
  const router = useRouter();
  const [videoId, setVideoId] = useState(router.query.videoId || "");
  useEffect(() => {
    setVideoId(router.query.videoId);
  }, [router]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>
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
        {/* <div>Video {router.query.videoId}</div>; */}
        <Modal
          isOpen={true}
          style={customStyles}
          contentLabel="Watch the video"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          <iframe
            id="player"
            className={styles.videoPlayer}
            type="text/html"
            width="100%"
            height="390"
            src={`http://www.youtube.com/embed/${videoId}`}
            // src={`http://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://localhost:3000&enablejsapi=1&controls=0&rel=0`}
            frameBorder="0"
          ></iframe>
          <div>Video {router.query.videoId}</div>;
        </Modal>
      </main>
    </div>
  );
};

export default Video;
