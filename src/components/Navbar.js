// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">E</span>
//               </div>
//               <span className="ml-2 text-2xl font-bold text-gray-900">ExcelIELTS</span>
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Home</a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Courses</a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Mock Tests</a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">About</a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Contact</a>
//               <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                 Get Started
//               </button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
//               <a href="#" className="block px-3 py-2 text-gray-900 font-medium">Home</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900"></a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Mock Tests</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
//               <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg font-medium mt-2">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar; 


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="ml-2 text-2xl font-bold text-gray-900">ExcelIELTS</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Courses</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Mock Tests</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium transition-colors">Contact</button>
              <button onClick={() => scrollToSection('home')} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-900 font-medium hover:bg-gray-50">Home</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Courses</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Mock Tests</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Contact</button>
              <button onClick={() => scrollToSection('home')} className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg font-medium mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;