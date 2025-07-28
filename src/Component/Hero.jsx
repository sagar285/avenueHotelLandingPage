import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BookingWidget from './BookinWidget';
import { Building, CarFront, ChevronLeft, ChevronRight, MapPin, Utensils, Wifi } from 'lucide-react';
import { nextImage, prevImage } from '../redux/uiSlice';
const Hero = () => {
  const dispatch = useDispatch();
  const hotel = useSelector(state => state.hotel);
  const ui = useSelector(state => state.ui);
  
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextImage());
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);
  
  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    {ui.heroImages.map((image, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === ui.currentImageIndex ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={image}
          alt={`Hotel ${index + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    ))}
  </div>

  <button
    onClick={() => dispatch(prevImage())}
    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
  >
    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
  </button>

  <button
    onClick={() => dispatch(nextImage())}
    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
  >
    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
  </button>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 sm:py-20">
    <div className="text-white text-center lg:text-left">
      <div className="flex justify-center lg:justify-start items-center space-x-2 mb-4">
        <MapPin className="h-5 w-5 text-orange-400" />
        <span className="text-sm">{hotel.location}</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        The Fortunaa
        <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Avenue
        </span>
      </h1>

      <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-lg mx-auto lg:mx-0">
        {hotel.description}
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm justify-items-center sm:justify-items-start">
        <div className="flex items-center space-x-2">
          <Building className="h-5 w-5 text-yellow-400" />
          <span>Business Hotel</span>
        </div>
        <div className="flex items-center space-x-2">
          <CarFront className="h-5 w-5 text-yellow-400" />
          <span>Free Parking</span>
        </div>
        <div className="flex items-center space-x-2">
          <Wifi className="h-5 w-5 text-yellow-400" />
          <span>Free WiFi</span>
        </div>
        <div className="flex items-center space-x-2">
          <Utensils className="h-5 w-5 text-yellow-400" />
          <span>Multi-Cuisine</span>
        </div>
      </div>
    </div>

    <div className="flex justify-center lg:justify-end">
      <BookingWidget />
    </div>
  </div>
</section>

  );
};


export default Hero
