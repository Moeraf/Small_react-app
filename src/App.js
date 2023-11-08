import React from 'react';
import './App.css';
import {Header,Container,Footer,Hero,MostPopular,GamingLibrary} from './components/index';

function App () {
  return (
    <>
        <Header />
        <Container>
            <Hero />
            <MostPopular />
            <GamingLibrary />
        </Container>
        <Footer />
    </>
  )
}

export default App