import React from 'react';
import { siteConfig } from '../../config/site';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-1000 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex justify-between items-center h-20">
        <a href="#" className="font-heading font-bold text-2xl flex items-center gap-sm">
          <div className="w-9 h-9 bg-accent rounded-sm flex items-center justify-center text-xl">
            {siteConfig.assets.logo}
          </div>
          <span>{siteConfig.name}</span>
        </a>
        <nav className="hidden md:flex gap-lg">
          <a href={siteConfig.links.howItWorks} className="text-sm text-secondary font-medium hover:text-primary transition-colors duration-fast">How It Works</a>
          <a href={siteConfig.links.results} className="text-sm text-secondary font-medium hover:text-primary transition-colors duration-fast">Results</a>
          <a href={siteConfig.links.pricing} className="text-sm text-secondary font-medium hover:text-primary transition-colors duration-fast">Pricing</a>
          <a href={siteConfig.links.faq} className="text-sm text-secondary font-medium hover:text-primary transition-colors duration-fast">FAQ</a>
        </nav>
        <button className="hidden lg:block bg-transparent text-primary font-semibold px-md py-sm rounded-sm border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-normal">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
