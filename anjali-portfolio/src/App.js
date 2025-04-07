import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      // Add scroll-based active section detection logic here
      // This would set the active section based on scroll position
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed w-full bg-white z-50 px-6 md:px-12 py-4 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-bold">Anjali</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink title="Home" active={activeSection === 'home'} onClick={() => setActiveSection('home')} />
          <NavLink title="About" active={activeSection === 'about'} onClick={() => setActiveSection('about')} />
          <NavLink title="Works" active={activeSection === 'works'} onClick={() => setActiveSection('works')} />
          <NavLink title="Contact" active={activeSection === 'contact'} onClick={() => setActiveSection('contact')} />
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-6">
          <nav className="flex flex-col space-y-6 text-xl">
            <MobileNavLink title="Home" onClick={() => { setActiveSection('home'); setMenuOpen(false); }} />
            <MobileNavLink title="About" onClick={() => { setActiveSection('about'); setMenuOpen(false); }} />
            <MobileNavLink title="Works" onClick={() => { setActiveSection('works'); setMenuOpen(false); }} />
            <MobileNavLink title="Contact" onClick={() => { setActiveSection('contact'); setMenuOpen(false); }} />
          </nav>
        </div>
      )}
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Works Section */}
        <WorksSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Anjali</div>
            <div className="text-gray-600">© 2025 All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Navigation Components
const NavLink = ({ title, active, onClick }) => (
  <button
    onClick={onClick}
    className={`font-medium transition-colors ${
      active ? 'text-black' : 'text-gray-500 hover:text-black'
    }`}
  >
    {title}
  </button>
);

const MobileNavLink = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="font-medium text-left py-2 transition-colors hover:text-gray-600"
  >
    {title}
  </button>
);

// Hero Section
const HeroSection = () => (
  <section className="min-h-screen flex items-center px-6 md:px-12 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hello, I'm Anjali,<br />
            Product Designer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Passionate about creating meaningful and intuitive digital experiences
          </p>
          <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            <span>See my work</span>
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="order-first md:order-last">
          <div className="rounded-lg overflow-hidden aspect-square bg-gray-200">
            {/* Hero image would go here */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Portrait Image
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section id="about" className="py-24 px-6 md:px-12 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="rounded-lg overflow-hidden aspect-square bg-gray-200">
            {/* About image would go here */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              About Image
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg mb-6">
            I'm a product designer with 5+ years of experience creating user-centered digital products. 
            My approach combines analytical thinking with creativity to solve complex problems.
          </p>
          <p className="text-lg mb-6">
            I specialize in UI/UX design, user research, and prototyping. My goal is to create
            products that are not just visually appealing but also functional and accessible.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Education</h3>
              <p>Master in Design<br />Central Design Institute</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Experience</h3>
              <p>Senior Product Designer<br />Design Studio Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Project Card Component
const ProjectCard = ({ title, category, imgPlaceholder }) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden rounded-lg bg-gray-200 aspect-video mb-4">
      {/* Project image would go here */}
      <div className="w-full h-full flex items-center justify-center text-gray-400">
        {imgPlaceholder}
      </div>
    </div>
    <h3 className="font-bold text-xl mb-1 group-hover:text-gray-700 transition-colors">{title}</h3>
    <p className="text-gray-600">{category}</p>
  </div>
);

// Works Section
const WorksSection = () => (
  <section id="works" className="py-24 px-6 md:px-12 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold">Selected Works</h2>
        <button className="text-gray-600 hover:text-black transition-colors">
          View All Projects
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          title="Finance App Redesign" 
          category="UX/UI Design" 
          imgPlaceholder="Project 1"
        />
        <ProjectCard 
          title="E-commerce Platform" 
          category="Web Design" 
          imgPlaceholder="Project 2"
        />
        <ProjectCard 
          title="Health Tracking App" 
          category="Mobile App" 
          imgPlaceholder="Project 3"
        />
        <ProjectCard 
          title="Smart Home Dashboard" 
          category="UX/UI Design" 
          imgPlaceholder="Project 4"
        />
        <ProjectCard 
          title="Travel Planning Tool" 
          category="Web App" 
          imgPlaceholder="Project 5"
        />
        <ProjectCard 
          title="Restaurant Booking System" 
          category="Service Design" 
          imgPlaceholder="Project 6"
        />
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section id="contact" className="py-24 px-6 md:px-12 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-8">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <p className="text-gray-600">hello@anjali.design</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Social</h3>
              <div className="flex space-x-4 mt-2">
                <SocialIcon label="LinkedIn" />
                <SocialIcon label="Dribbble" />
                <SocialIcon label="Instagram" />
                <SocialIcon label="Behance" />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// Social Icon Component
const SocialIcon = ({ label }) => (
  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
    <span className="sr-only">{label}</span>
    <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
  </div>
);

export default App;