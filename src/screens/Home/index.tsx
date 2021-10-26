import React from 'react';
import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Footer } from '../../components/Footer';


export const Home = () => {

  return ( 
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
