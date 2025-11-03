// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarFilter from './components/CarFilter';
import CarCards from './components/CarCards';
import ReservationForm from './components/ReservationForm';
import About from './components/About';
import Contact from './components/Contact';
import { Car, carsData } from './data/carsData';
import { CarProvider } from './context/CarContext';

// واجهة البيانات الممررة من نموذج الحجز
export interface ReservationData {
  selectedCar: string;
  pickupDate: string;
  pickupTime: string;
  dropoffDate: string;
  dropoffTime: string;
  pickupCity: string;
  dropoffCity: string;
}

export default function App() {
  const [visibleCars, setVisibleCars] = useState<Car[]>(carsData);
  const [reservation, setReservation] = useState<ReservationData | null>(null);

  return (
    <CarProvider>
      <div className="font-sans">
        <Header />
        <main className="pt-16">
          <Hero />
          <CarFilter onFilter={setVisibleCars} />
          <CarCards cars={visibleCars} />
          {/* نموذج الحجز مع تمرير دالة لتخزين البيانات */}
          <ReservationForm onReserve={setReservation} />
          <About />
          {/* قسم تواصل معنا، يملأ تلقائيًا من بيانات الحجز */}
          <Contact reservation={reservation || undefined} />
        </main>
      </div>
    </CarProvider>
  );
}
