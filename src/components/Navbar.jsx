import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

import { Menu, X } from "lucide-react"; // for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "سر ورق", href: "/#" },
     { label: "شعبہ جات", href: "/departments" },
         { label: "ہماری انتظامیہ ", href: "/administration" },
    { label: "تعاون ", href: "/about" },
    { label: "رابطہ", href: "/#contact-section" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary/90 backdrop-blur-md shadow-md" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Logo */}
          <a href="/" className="flex md:hidden items-center pb-[10px] gap-2">
            <span className="text-2xl font-bold font-urdu text-gold">
              جامعہ عربیہ
            </span>
          </a>

         {/* Desktop Navigation */}
<div className="hidden md:flex flex-1 justify-center mr-24 items-center space-x-12 rtl:space-x-reverse">
  {navItems.map((item, index) => (
    <HashLink
      key={index}
      smooth
      to={item.href}
      className="text-primary-foreground font-urdu hover:text-gold transition-colors text-lg"
    >
      {item.label}
    </HashLink>
  ))}
</div>

          {/* Desktop Logo (right side) */}
          <div className="hidden md:flex ml-auto">
            <a href="/" className="flex items-center gap-2 ">
              <span className="text-2xl font-bold font-urdu text-gold">
               جامعہ عربیہ امداد العلوم
              </span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <div className="md:hidden bg-primary/95 backdrop-blur-sm h-[700px] shadow-lg">
    <div className="flex flex-col items-center space-y-4 py-6">
      {navItems.map((item, index) => (
        <HashLink
          key={index}
          smooth
          to={item.href}
          className="text-primary-foreground font-urdu hover:text-gold transition-colors text-lg"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </HashLink>
      ))}
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;
