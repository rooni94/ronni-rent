// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        {/* العمود الأيمن: الصورة */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            src="/assets/about.png"
            alt="عن الشركة"
            className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-xl"
          />
        </motion.div>

        {/* العمود الأيسر: العنوان والنص */}
        <motion.div
          className="w-full lg:w-1/2 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* عنوان القسم فوق النص */}
          <h2 className="text-3xl font-bold mb-6">من نحن</h2>

          <p>
            تأسست شركتنا لتأجير السيارات صاحبة العلامة التجارية المسجلة في عام 2011م 
            واستطاعت عبر مسيرتها الحافلة بالنجاحات توفير أحدث موديلات السيارات من مختلف فئات السيارات 
            الصغيرة والمتوسطة والفخمة حتى استطاعت تكوين أسطول ضخم من السيارات وتقديم أفضل الخدمات 
            للعملاء من خلال شبكة فروعها على مستوى المملكة، وتقديم خدمات التأجير للأفراد وقطاع الأعمال 
            وخدمات التأجير السحابية من خلال تقديم الخدمات الإلكترونية، متأملين الريادة في هذا المجال 
            بفضل الله ثم بفريق عمل متجانس دائم التطوير وخدمات فريدة تتميز بالدقة والجودة والمرونة.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
