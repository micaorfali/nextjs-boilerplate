import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar/NavBar';
import Button from '../components/Button/Button';
import 'bulma/css/bulma.css';
import Card from '../components/Card/Card';
import Grid from '../components/Grid/Grid';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import Subtitle from '../components/Subtitle/Subtitle';
import Hero_3 from '../components/Hero_3/Hero_3';

export default function Favoritos() {
  return (
    <>
      <NavBar></NavBar>
      <Hero_3></Hero_3>
      <Title>Favoritos</Title>
      <Grid></Grid>
      <Footer></Footer>
    </>
  );
}
