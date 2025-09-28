// import React from 'react';
// import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <div className="flex items-center mb-6">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">E</span>
//               </div>
//               <span className="ml-2 text-2xl font-bold">ExcelIELTS</span>
//             </div>
//             <p className="text-gray-400 leading-relaxed">
//               Empowering students worldwide to achieve their IELTS goals with expert guidance and innovative learning solutions.
//             </p>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mock Tests</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Support</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <div className="space-y-3">
//               <div className="flex items-center">
//                 <Phone className="w-5 h-5 text-blue-400 mr-3" />
//                 <span className="text-gray-400">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="w-5 h-5 text-blue-400 mr-3" />
//                 <span className="text-gray-400">info@excelielts.com</span>
//               </div>
//               <div className="flex items-center">
//                 <MapPin className="w-5 h-5 text-blue-400 mr-3" />
//                 <span className="text-gray-400">123 Education St, Learning City</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               © 2024 ExcelIELTS. All rights reserved.
//             </p>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Instagram className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Linkedin className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;   

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="ml-2 text-2xl font-bold">ExcelIELTS</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering students worldwide to achieve their IELTS goals with expert guidance and innovative learning solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mock Tests</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">info@excelielts.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ExcelIELTS. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;