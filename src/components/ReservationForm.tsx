// src/components/ReservationForm.tsx
import React, { useState, useEffect } from 'react';
import { Car, carsData } from '../data/carsData';
import { saudiCities } from '../data/saudiCities';
import { ReservationData } from '../App';
import { useCar } from '../context/CarContext';

interface ReservationFormProps {
  onReserve: (data: ReservationData) => void;
}

export default function ReservationForm({ onReserve }: ReservationFormProps) {
  // نقرأ اسم السيارة من السياق
  const { selectedCarName } = useCar();

  // نعتمد الحالة المبدئية على القيمة من السياق
  const [selectedCar, setSelectedCar] = useState<string>(selectedCarName);
  const [pickupDate, setPickupDate] = useState<string>('');
  const [pickupTime, setPickupTime] = useState<string>('');
  const [dropoffDate, setDropoffDate] = useState<string>('');
  const [dropoffTime, setDropoffTime] = useState<string>('');
  const [pickupCity, setPickupCity] = useState<string>('');
  const [dropoffCity, setDropoffCity] = useState<string>('');
  const [totalCost, setTotalCost] = useState<number | null>(null);

  // كلما تغيّرت السيارة المختارة في السياق، نحدّث select field
  useEffect(() => {
    if (selectedCarName) {
      setSelectedCar(selectedCarName);
    }
  }, [selectedCarName]);

  const calculateTotal = () => {
    if (!selectedCar || !pickupDate || !pickupTime || !dropoffDate || !dropoffTime) return;
    const car = carsData.find((c: Car) => c.name === selectedCar);
    if (!car) return;
    const start = new Date(`${pickupDate}T${pickupTime}`);
    const end = new Date(`${dropoffDate}T${dropoffTime}`);
    const diffMs = end.getTime() - start.getTime();
    if (diffMs <= 0) {
      setTotalCost(0);
      return;
    }
    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    const cost = days * car.priceNumeric;
    setTotalCost(cost);
    // تمرير البيانات للمكون الأعلى
    onReserve({ selectedCar, pickupDate, pickupTime, dropoffDate, dropoffTime, pickupCity, dropoffCity });
  };

  return (
    <section id="reservation" className="w-full bg-gray-50 py-10">
     <div className="container mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">نموذج حجز السيارة</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* نوع السيارة (معبأ تلقائيًا) */}
        <div>
          <label className="block mb-1 font-semibold">نوع السيارة</label>
          <select
            className="w-full border p-2 rounded"
            value={selectedCar}
            onChange={e => setSelectedCar(e.target.value)}
          >
            <option value="">{selectedCarName ? selectedCarName : 'اختر السيارة'}</option>
            {carsData.map(car => (
              <option key={car.name} value={car.name}>{car.name}</option>
            ))}
          </select>
        </div>

        {/* تواريخ وأوقات الاستلام والتسليم */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">تاريخ الاستلام</label>
            <input
              type="date"
              className="w-full border p-2 rounded"
              value={pickupDate}
              onChange={e => setPickupDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">وقت الاستلام</label>
            <input
              type="time"
              className="w-full border p-2 rounded"
              value={pickupTime}
              onChange={e => setPickupTime(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">تاريخ التسليم</label>
            <input
              type="date"
              className="w-full border p-2 rounded"
              value={dropoffDate}
              onChange={e => setDropoffDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">وقت التسليم</label>
            <input
              type="time"
              className="w-full border p-2 rounded"
              value={dropoffTime}
              onChange={e => setDropoffTime(e.target.value)}
            />
          </div>
        </div>

        {/* مدن الاستلام والتسليم */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">مكان الاستلام</label>
            <select
              className="w-full border p-2 rounded"
              value={pickupCity}
              onChange={e => setPickupCity(e.target.value)}
            >
              <option value="">اختر المدينة</option>
              {saudiCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">مكان التسليم</label>
            <select
              className="w-full border p-2 rounded"
              value={dropoffCity}
              onChange={e => setDropoffCity(e.target.value)}
            >
              <option value="">اختر المدينة</option>
              {saudiCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        {/* زر حساب التكلفة */}
        <button
  onClick={calculateTotal}
  className="mt-4 bg-[#1A2D6F] text-white font-medium py-2 px-4 rounded-full hover:bg-blue-800 transition inline-block mx-auto"
>
  احسب التكلفة
</button>

        {/* عرض التكلفة وزر الحجز النهائي */}
        {totalCost !== null && (
          <>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="text-lg font-semibold">التكلفة الإجمالية: {totalCost} ريال</p>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-[#1A2D6F] text-white py-2 px-6 rounded-full hover:bg-blue-800 transition"
              >
                احجز الآن
              </button>
            </div>
          </>
        )}
       </div>
      </div>
    </section>
  );
}
