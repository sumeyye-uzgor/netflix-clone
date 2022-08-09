import getVideos, { getPopularVideos } from "../lib/videos";
import { useEffect, useState } from "react";
import Banner from "../components/banner";
import Head from "next/head";
import Navbar from "../components/navbar";
import SectionCards from "../components/section-cards";
import disneyData from "../db/disneyData";
import popularData from "../db/popularData";
import productivityData from "../db/productivityData";
// import sections from "../db/data";
import styles from "../styles/Home.module.css";
import travelData from "../db/travelData";

export async function getServerSideProps() {
  const dataToVideoConvert = (data) =>
    data.map((item) => {
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
        link: `/video/${id}`,
      };
    });
  const disneyVideos = await dataToVideoConvert(disneyData);
  const travelVideos = await dataToVideoConvert(travelData);
  const productivityVideos = await dataToVideoConvert(productivityData);
  const popularVideos = await dataToVideoConvert(popularData);
  // console.log({ disneyVideos });
  const sections = [
    {
      id: 1,
      title: "Disney",
      movies: disneyVideos,
      posterSize: "large",
    },
    {
      id: 2,
      title: "Travel",
      movies: travelVideos,
      posterSize: "small",
    },
    {
      id: 3,
      title: "Productivity",
      movies: productivityVideos,
      posterSize: "medium",
    },
    {
      id: 4,
      title: "Popular Videos",
      movies: popularVideos,
      posterSize: "small",
    },
  ];

  return { props: { sections } };
}

export default function Home({ sections }) {
  useEffect(() => {
    console.log(sections);
  }, [sections]);

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
      <main className={styles.main}>
        <Navbar />
        <Banner
          videoId="aEm72qlAtVc"
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
        </div>
      </main>
    </div>
  );
}
