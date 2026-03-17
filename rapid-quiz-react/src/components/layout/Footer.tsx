import React from 'react';
import { siteConfig } from '../../config/site';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-xl pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-15">
        <img
          src={siteConfig.assets.quizAtmosphere}
          alt="Atmosphere texture"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl mb-xl">
          <div className="space-y-sm">
            <h3 className="text-white text-xl font-heading font-bold">
              {siteConfig.assets.logo} {siteConfig.name}
            </h3>
            <p className="text-secondary max-w-[300px]">
              {siteConfig.description}
            </p>
            <div className="flex gap-md">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-normal">𝕏</a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-normal">IN</a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-normal">IG</a>
            </div>
          </div>
          
          <div className="space-y-md">
            <h4 className="text-white text-base font-bold">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Diagnostic Tool</a></li>
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Advanced Reports</a></li>
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Strategy Calls</a></li>
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div className="space-y-md">
            <h4 className="text-white text-base font-bold">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-md">
            <h4 className="text-white text-base font-bold">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Playbooks</a></li>
              <li><a href="#" className="text-secondary text-sm hover:text-white transition-colors">Webinars</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-lg border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-md text-secondary text-[0.85rem] text-center md:text-left">
          <div>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
          <div className="flex gap-md">
            <button className="bg-transparent text-secondary text-[0.85rem] hover:text-white transition-colors">Privacy Policy</button>
            <button className="bg-transparent text-secondary text-[0.85rem] hover:text-white transition-colors">Terms of Service</button>
            <button className="bg-transparent text-secondary text-[0.85rem] hover:text-white transition-colors">Cookie Policy</button>
            <button className="bg-transparent text-secondary text-[0.85rem] hover:text-white transition-colors">Support</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
