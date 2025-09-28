// import React from 'react';
// import { Mic, BookOpen, Trophy, Users } from 'lucide-react';

// const Features = () => {
//   const features = [
//     {
//       icon: <Mic className="w-8 h-8 text-blue-600" />,
//       title: "Speaking Practice",
//       description: "Interactive speaking sessions with certified trainers and AI-powered feedback system."
//     },
//     {
//       icon: <BookOpen className="w-8 h-8 text-blue-600" />,
//       title: "Mock Tests",
//       description: "Comprehensive practice tests that simulate real IELTS exam conditions with detailed analysis."
//     },
//     {
//       icon: <Trophy className="w-8 h-8 text-blue-600" />,
//       title: "AI Band Score",
//       description: "Advanced AI technology provides instant band score predictions and improvement suggestions."
//     },
//     {
//       icon: <Users className="w-8 h-8 text-blue-600" />,
//       title: "Expert Tutors",
//       description: "Learn from experienced IELTS instructors with proven track records of student success."
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ExcelIELTS?</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our comprehensive approach combines expert instruction, advanced technology, and personalized support to ensure your IELTS success.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="text-center group">
//               <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;



import React from 'react';
import { Mic, BookOpen, Trophy, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-blue-600" />,
      title: "Speaking Practice",
      description: "Interactive speaking sessions with certified trainers and AI-powered feedback system."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Mock Tests",
      description: "Comprehensive practice tests that simulate real IELTS exam conditions with detailed analysis."
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      title: "AI Band Score",
      description: "Advanced AI technology provides instant band score predictions and improvement suggestions."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Tutors",
      description: "Learn from experienced IELTS instructors with proven track records of student success."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ExcelIELTS?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines expert instruction, advanced technology, and personalized support to ensure your IELTS success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;