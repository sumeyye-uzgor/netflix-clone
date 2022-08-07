import Banner from "../components/banner";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
        <meta
          name="description"
          content="Netflix clone to discover some videos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to Netflix Clone</h1>
      {/* <Navbar />
      <Card /> */}
      <Banner
        title="Clifford the red dog"
        subtitle="a very cute dog"
        imgUrl="https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?cs=srgb&dl=pexels-burak-karaduman-1549326.jpg&fm=jpg"
      />
    </div>
  );
}
