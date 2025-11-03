// src/components/Hero.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
  return (
    <section id="home" className="pt-7">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-[calc(100vh-64px)]"
      >
        {['hero1.jpg', 'hero2.jpg', 'hero3.jpg'].map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(/assets/${img})` }}
            >
              {/* التدرج السفلي */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

              {/* النص الترحيبي */}
              <div className="absolute bottom-0 left-0 w-full px-6 py-10 text-white">
                <div className="max-w-4xl mx-auto text-center drop-shadow-lg">
                  <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    أهلاً بك في شركة تأجير السيارات
                  </h1>
                  <p className="mb-6">
                    أفضل تجربة تأجير سيارات بأحدث الموديلات وأسعار منافسة
                  </p>
                  <a
                    href="#filter"
                    className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition"
                  >
                    ابحث عن سيارة
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
