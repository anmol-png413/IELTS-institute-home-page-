// import React from 'react';
// import { Star } from 'lucide-react';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       score: "Band 8.5",
//       text: "ExcelIELTS helped me achieve my dream score! The speaking practice sessions were incredibly effective.",
//       rating: 5
//     },
//     {
//       name: "Ahmed Hassan",
//       score: "Band 8.0",
//       text: "The mock tests were exactly like the real exam. I felt completely prepared on test day.",
//       rating: 5
//     },
//     {
//       name: "Maria Rodriguez",
//       score: "Band 9.0",
//       text: "Outstanding instruction and personalized feedback. Highly recommend to anyone serious about IELTS.",
//       rating: 5
//     }
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
//           <p className="text-xl text-gray-600">Hear from our students who achieved their dream IELTS scores</p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
//                   <span className="text-white font-semibold">{testimonial.name.charAt(0)}</span>
//                 </div>
//                 <div className="ml-4">
//                   <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                   <div className="text-green-600 font-medium">{testimonial.score}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;   

import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      score: "Band 8.5",
      text: "ExcelIELTS helped me achieve my dream score! The speaking practice sessions were incredibly effective.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      score: "Band 8.0",
      text: "The mock tests were exactly like the real exam. I felt completely prepared on test day.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      score: "Band 9.0",
      text: "Outstanding instruction and personalized feedback. Highly recommend to anyone serious about IELTS.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-xl text-gray-600">Hear from our students who achieved their dream IELTS scores</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-green-600 font-medium">{testimonial.score}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;