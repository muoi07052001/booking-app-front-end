import React from 'react';
import FeaturedCity from '../../components/FeaturedCity';
import FeaturedProperties from '../../components/FeaturedProperties';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MailList from '../../components/MailList';
import Navbar from '../../components/Navbar';
import PropertyList from '../../components/PropertyList';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={styles['home-page__container']}>
        <h1 className={styles['home-page__container__title']}>
          Browse by property type
        </h1>
        <PropertyList />
        <FeaturedCity />
        <h1 className={styles['home-page__container__title']}>
          Home guests love
        </h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;