import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Hero from '../components/Hero/Hero';
import Grid from '../components/Grid/Grid';
import Title from '../components/Title/Title';
import Column_5 from '../components/Column_Container_Nosotros/Column_Nosotros';
import Footer from '../components/Footer/Footer';
import Subtitle from '../components/Subtitle/Subtitle';
import Hero_2 from '../components/Hero_2/Hero_2';
import { FavContext } from '../contexts/FavContext';
import { useContext } from 'react';
import Column_Nosotros from '../components/Column_Container_Nosotros/Column_Nosotros';

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
      <Column_Nosotros />
      <Footer></Footer>
    </>
  );
}
