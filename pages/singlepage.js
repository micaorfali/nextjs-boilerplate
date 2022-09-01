import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from '../components/NavBar';
import GridSinglePage from '../components/GridSinglePage';

const singlepage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <GridSinglePage></GridSinglePage>
    </div>
  );
};

export default singlepage;
