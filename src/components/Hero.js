// import React from 'react';
// import { CheckCircle, Star } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="text-center lg:text-left">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//               Master IELTS with
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Excellence</span>
//             </h1>
//             <p className="mt-6 text-xl text-gray-600 leading-relaxed">
//               Achieve your target IELTS band score with our expert-led courses, AI-powered practice tests, and personalized feedback system.
//             </p>
//             <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//                 Start Your Journey
//               </button>
//               <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
//                 Watch Demo
//               </button>
//             </div>
//             <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">10,000+</div>
//                 <div className="text-sm text-gray-600">Students Trained</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">95%</div>
//                 <div className="text-sm text-gray-600">Success Rate</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">4.9★</div>
//                 <div className="text-sm text-gray-600">Average Rating</div>
//               </div>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="relative z-10">
//               <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <CheckCircle className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Band 9.0 Achieved!</h3>
//                   <p className="text-gray-600">Join thousands of successful students</p>
//                   <div className="mt-4 flex justify-center">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl transform rotate-6 opacity-20"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
 
// export default Hero; 

import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Master IELTS with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Excellence</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Achieve your target IELTS band score with our expert-led courses, AI-powered practice tests, and personalized feedback system.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Band 9.0 Achieved!</h3>
                  <p className="text-gray-600">Join thousands of successful students</p>
                  <div className="mt-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl transform rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;