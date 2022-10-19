import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Grid from '../components/Grid/Grid';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';

export default function Diseno() {
  return (
    <>
      <NavBar></NavBar>
      <Hero num={1} />
      <Title>Diseño</Title>
      <Grid></Grid>
      <Footer></Footer>
    </>
  );
}
