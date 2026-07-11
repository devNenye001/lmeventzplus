import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CooperateEvents from './components/CooperateEvents';
import SocialEvents from './components/SocialEvents';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Home from './components/Home';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    // Listen for history state changes
    window.addEventListener('popstate', handleLocationChange);
    
    // Intercept clicks on links that are local
    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      
      // Only intercept internal links
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        handleLocationChange();
      }
    };
    
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderContent = () => {
    const path = currentPath.toLowerCase();
    if (path === '/' || path === '') {
      return <Home />;
    } else if (path === '/contact' || path === '/contact-us') {
      return <Contact />;
    } else if (
      path === '/cooperate' || 
      path === '/cooperate-events' || 
      path === '/corporate' || 
      path === '/corporate-events'
    ) {
      return <CooperateEvents />;
    } else if (path === '/social' || path === '/social-events') {
      return <SocialEvents />;
    } else if (path === '/about' || path === '/about-us') {
      return <About />;
    } else if (path === '/portfolio') {
      return <Portfolio />;
    } else {
      return <NotFound />;
    }
  };

  return (
    <>
      <Navbar />
      {renderContent()}
      <Footer />
    </>
  );
}

export default App;


