// src/components/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

interface ReservationData {
  selectedCar: string;
  pickupDate: string;
  pickupTime: string;
  dropoffDate: string;
  dropoffTime: string;
  pickupCity: string;
  dropoffCity: string;
}

interface ContactProps {
  reservation?: ReservationData;
}

export default function Contact({ reservation }: ContactProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation Inquiry:', reservation, form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        تواصل معنا
      </motion.h2>

      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        {/* معلومات الاتصال */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* رقم الهاتف */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-xl" />
            <a
              href="tel:9123456789"
              className="text-lg text-gray-800 hover:text-blue-600 transition"
            >
              رقم التواصل : 9123456789
            </a>
          </div>

          {/* البريد الإلكتروني */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <a
              href="mailto:contact@ronnidev.com"
              className="text-lg text-gray-800 hover:text-blue-600 transition"
            >
              contact@ronnidev.com
            </a>
          </div>

          {/* أيقونات التواصل الاجتماعي */}
          <div className="flex items-center gap-4 mt-8">
            {[FaInstagram, FaTwitter, FaFacebookF, FaYoutube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-3 bg-white rounded-full shadow-lg transform transition hover:-translate-y-1 hover:scale-105"
              >
                <Icon className="text-xl text-blue-600" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* نموذج التواصل */}
        <motion.form
          onSubmit={submit}
          className="flex-1 bg-white p-6 rounded-2xl shadow-lg space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* بيانات الحجز المسبقة */}
          {reservation && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold">
                  نوع السيارة
                </label>
                <input
                  type="text"
                  value={reservation.selectedCar}
                  readOnly
                  className="w-full border p-2 rounded bg-gray-100"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold">استلام</label>
                  <input
                    type="text"
                    value={`${reservation.pickupDate} ${reservation.pickupTime}`}
                    readOnly
                    className="w-full border p-2 rounded bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">تسليم</label>
                  <input
                    type="text"
                    value={`${reservation.dropoffDate} ${reservation.dropoffTime}`}
                    readOnly
                    className="w-full border p-2 rounded bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold">
                    مكان الاستلام
                  </label>
                  <input
                    type="text"
                    value={reservation.pickupCity}
                    readOnly
                    className="w-full border p-2 rounded bg-gray-100"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold">
                    مكان التسليم
                  </label>
                  <input
                    type="text"
                    value={reservation.dropoffCity}
                    readOnly
                    className="w-full border p-2 rounded bg-gray-100"
                  />
                </div>
              </div>
            </div>
          )}

          {/* بيانات المستخدم */}
          <input
            name="name"
            value={form.name}
            onChange={change}
            placeholder="الاسم"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={change}
            placeholder="البريد الإلكتروني"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={change}
            placeholder="رسالتك"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
          >
            إرسال
          </button>
        </motion.form>
      </div>
    </section>
  );
}
