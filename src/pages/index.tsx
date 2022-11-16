import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Nav from "../components/Nav"
import About from "../components/About"
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { scroll } = useLocomotiveScroll();

  return (
    <div className={styles.container}>
      <Head>
        <title>Kirill Ginko | Digital Designer</title>
        <meta name="description" content="Kirill Ginko Digital Designer based in NYC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <About/>
      </div>
  );
};

export default Home;
