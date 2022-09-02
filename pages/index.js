import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar/NavBar';
import Button from '../components/Button/Button';
import 'bulma/css/bulma.css';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import Grid from '../components/Grid/Grid';
import Title from '../components/Title/Title';
import Column_5 from '../components/Column_5/Column_5';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Grid></Grid>
      <Title></Title>
      <Column_5></Column_5>
      <Footer></Footer>
    </>
  );
}
