import { useState } from 'react'
import { useEffect } from "react";
import Header from './screens/Header'
import NavBar from './components/NavBar'
import AboutPage from './screens/About'
import ProjectsPage from './screens/Projects';
import ContactPage from './screens/Contact';
import Footer from './screens/footer';

import './App.css'





function App() {
  useEffect(() => {
  const handleScroll = () => {
    const navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 0) {
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <>
      <NavBar/>
      <Header/>
       <AboutPage/>
       <ProjectsPage/>
       <Footer/>
      {/*<ContactPage/> */}
    </>
  )
}

export default App
