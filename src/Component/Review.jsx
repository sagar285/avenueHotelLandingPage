import { Star } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';
const Reviews = () => {
  const reviews = useSelector(state => state.reviews);
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Guest Reviews</h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)]?.map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xl font-semibold text-gray-800 ml-2">{reviews?.rating}/5</span>
            <span className="text-gray-600">({reviews?.totalReviews}+ reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews?.reviews?.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{review.comment}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Reviews
