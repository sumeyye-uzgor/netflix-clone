import Banner from "../components/banner";
import Card from "../components/card";
import Head from "next/head";
import Navbar from "../components/navbar";
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
      <Navbar username="sumeyyeuzgor@gmail.com" />
      <Banner
        title="Clifford the red dog"
        subtitle="a very cute dog"
        imgUrl="https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?cs=srgb&dl=pexels-burak-karaduman-1549326.jpg&fm=jpg"
      />
      <Card
        size="small"
        name="snowball"
        imgUrl="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop"
        link="/watch/id1"
      />
      <Card
        size="medium"
        name="hello world"
        imgUrl="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop"
        link="/watch/id2"
      />
      <Card
        size="large"
        name="chrismast"
        imgUrl="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop"
        link="/watch/id3"
      />
    </div>
  );
}
