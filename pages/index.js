import React from 'react';
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
import Subtitle from '../components/Subtitle/Subtitle';
import Hero_2 from '../components/Hero_2/Hero_2';
import { FavContext } from '../contexts/FavContext';
import { useContext } from 'react';
import { getFirestore } from '../utils/firebase';

export default function Home() {
  const { fav, setFav } = useContext(FavContext);

  return (
    <>
      {/* 
    {fav.map((item) => (
        <p key={item.id}>{item.name} </p>
    ))} 
    */}
      <NavBar></NavBar>
      <Hero></Hero>
      <Title>Bienvenidos</Title>
      <Hero_2></Hero_2>
      <Subtitle>UMAI</Subtitle>
      <Title>Proyectos</Title>
      <Grid></Grid>
      <Subtitle>Conocenos</Subtitle>
      <Title>Nosotros</Title>
      <Column_5></Column_5>
      <Footer></Footer>
    </>
  );
}
