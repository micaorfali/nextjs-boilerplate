import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Button from '../components/Button/Button';
import 'bulma/css/bulma.css';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import Grid from '../components/Grid/Grid';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';

const singlepage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Title>Proyectos de Programación</Title>
      <Grid></Grid>
      <Footer></Footer>
    </>
  );
};

export default singlepage;
