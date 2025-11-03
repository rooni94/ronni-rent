// src/components/CarFilter.tsx
import React, { useState, useEffect } from 'react';
import { Car, carsData } from '../data/carsData';

interface CarFilterProps {
  onFilter: (cars: Car[]) => void;
}

export default function CarFilter({ onFilter }: CarFilterProps) {
  const [brand, setBrand] = useState<string>('');
  const [fuel, setFuel] = useState<'بنزين' | 'ديزل' | ''>('');
  const [transmission, setTransmission] = useState<'أوتوماتيك' | 'عادي' | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  // تحديث القائمة عند تغيير الفلاتر
  useEffect(() => {
    let result = carsData;
    if (brand)       result = result.filter(c => c.brand === brand);
    if (fuel)        result = result.filter(c => c.fuelType === fuel);
    if (transmission) result = result.filter(c => c.transmission === transmission);
    if (maxPrice !== '') {
      result = result.filter(c => c.priceNumeric <= maxPrice);
    }
    onFilter(result);
  }, [brand, fuel, transmission, maxPrice, onFilter]);

  const resetFilters = () => {
    setBrand('');
    setFuel('');
    setTransmission('');
    setMaxPrice('');
  };

  // قيم فريدة للشركات
  const uniqueBrands = Array.from(new Set(carsData.map(c => c.brand)));

  return (
    <section id="filter" className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">ابحث عن سيارة</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* فلتر الشركة */}
        <select
          className="border p-2 rounded-lg"
          value={brand}
          onChange={e => setBrand(e.target.value)}
        >
          <option value="">كل الشركات</option>
          {uniqueBrands.map((b, i) => (
            <option key={i} value={b}>{b}</option>
          ))}
        </select>

        {/* فلتر نوع الوقود */}
        <select
          className="border p-2 rounded-lg"
          value={fuel}
          onChange={e => setFuel(e.target.value as 'بنزين' | 'ديزل' | '')}
        >
          <option value="">كل أنواع الوقود</option>
          <option value="بنزين">بنزين</option>
          <option value="ديزل">ديزل</option>
        </select>

        {/* فلتر ناقل الحركة */}
        <select
          className="border p-2 rounded-lg"
          value={transmission}
          onChange={e => setTransmission(e.target.value as 'أوتوماتيك' | 'عادي' | '')}
        >
          <option value="">كل نواقل الحركة</option>
          <option value="أوتوماتيك">أوتوماتيك</option>
          <option value="عادي">عادي</option>
        </select>

        {/* فلتر السعر */}
        <input
          type="number"
          className="border p-2 rounded-lg"
          placeholder="أقصى سعر (ريال)"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))}
        />
      </div>

      <div className="text-center mt-6">
        <button
          onClick={resetFilters}
          className="bg-gray-200 px-6 py-2 rounded-full hover:bg-gray-300 transition"
        >
          إعادة التعيين
        </button>
      </div>
    </section>
  );
}
