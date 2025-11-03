// src/components/CarCards.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Car } from '../data/carsData';
import { useCar } from '../context/CarContext';

interface CarCardsProps {
  cars: Car[];
}

export default function CarCards({ cars }: CarCardsProps) {
  const { setSelectedCarName } = useCar(); // ✅ استدعاء الدالة من السياق

  return (
    <section id="cars" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
        {cars.map((car, i) => (
          <motion.div
            key={i}
            className="relative w-72 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* تاج متوفرة */}
            <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
              متوفرة
            </span>

            {/* صورة السيارة مع Hover */}
            <div className="flex justify-center items-center h-40 bg-gray-50 p-4 relative group">
              <img
                src={car.image}
                alt={car.name}
                className="absolute max-h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={car.hoverImage}
                alt={`${car.name} alternate`}
                className="absolute max-h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* الاسم والسعر */}
            <div className="text-center px-4 py-2 border-b">
              <h3 className="text-lg font-bold">{car.name}</h3>
              <p className="text-sm text-gray-500">SAR {car.priceNumeric.toLocaleString()}</p>
            </div>

            {/* معلومات العقد والميل والدفعة */}
            <div className="flex text-center text-sm text-gray-600 divide-x">
              <div className="flex-1 py-3 px-2">
                <div className="font-medium">{car.contractLength} شهر</div>
                <div>مدة العقد</div>
              </div>
              <div className="flex-1 py-3 px-2">
                <div className="font-medium">{car.mileage.toLocaleString()} كم</div>
                <div>المسافة</div>
              </div>
              <div className="flex-1 py-3 px-2">
                <div className="font-medium">SAR {car.priceNumeric.toLocaleString()}</div>
                <div>شهريًا</div>
              </div>
            </div>

            {/* زر الحجز */}
            <div className="p-4">
              <a
                href="#reservation"
                onClick={() => setSelectedCarName(car.name)}
                className="block w-full text-center bg-[#1A2D6F] text-white py-2 rounded-full hover:bg-blue-900 transition"
              >
                احجز الآن
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
