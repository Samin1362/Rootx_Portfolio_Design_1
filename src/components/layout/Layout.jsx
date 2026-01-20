import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, socialLinks }) => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default Layout;
