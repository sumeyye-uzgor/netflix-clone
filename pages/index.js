import { useEffect, useState } from "react";
import Banner from "../components/banner";
import Head from "next/head";
import Navbar from "../components/navbar";
import SectionCards from "../components/section-cards";
import getVideos from "../lib/videos";
import sections from "../db/data";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const surfingVideos = await getVideos();

  return { props: { surfingVideos } };
}

export default function Home({ surfingVideos }) {
  useEffect(() => {
    console.log(surfingVideos);
  }, [surfingVideos]);
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
      <div className={styles.sectionWrapper}>
        {sections.map((section) => (
          <SectionCards
            key={section.id}
            title={section.title}
            movies={section.movies}
            posterSize={section.posterSize}
          />
        ))}
        <SectionCards
          title="Surfing"
          movies={surfingVideos}
          posterSize="small"
        />
      </div>
    </div>
  );
}
