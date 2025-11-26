Ronni Rent – Car Rental Website 🚗✨

موقع احترافي لتأجير السيارات تم تطويره باستخدام React + Vite مع دعم اللغة العربية ومحاذاة RTL، ويعمل بكفاءة على كل من GitHub Pages و Hostinger.

📸 Demo

🔗 الموقع المباشر: https://rental.ronnidev.com
# Ronni Rent – Car Rental Website

This is a modern and responsive car rental website built with React, designed to provide users with an easy and fast way to browse cars, calculate rental costs, and submit booking requests.

## 🌐 Live Demo  
https://rental.ronnidev.com

---

## 📌 Features
- Fully responsive design for mobile and desktop  
- Hero section with a modern professional look  
- Advanced car search and filtering  
- Car booking form with automatic cost calculation  
- "About Us" section for company details  
- Contact form with user-friendly layout  
- Clean and structured UI for real rental businesses  
- Multi‑language friendly structure  
- Optimized for Hostinger deployment  

---

## 🛠️ Tech Stack
- **React.js (Vite)**
- **TypeScript**
- **Tailwind CSS**
- **React Icons**
- **Hostinger Deployment**

---

## 📁 Project Structure
```
src/
│── components/
│── pages/
│── assets/
│── layout/
│── hooks/
│── data/
```

---

## 🚀 Deployment on Hostinger
The project is optimized for Hostinger using:
- Build command: `npm run build`
- Output directory: `dist`
- Custom `.htaccess` for SPA routing

---


## 📧 Contact
For development or customization:  
**Email:** contact@ronnidev.com  
**Website:** https://ronnidev.com

---

## 📖 **محتوى المشروع**

* صفحة رئيسية احترافية مع هيرو (Hero Section)
* نموذج بحث متقدم للسيارات (الفئة – نوع الوقود – ناقل الحركة – السعر)
* كروت سيارات تفاعلية مع الأسعار والمواصفات
* نموذج حجز كامل بحساب تكلفة تلقائي
* قسم من نحن
* قسم تواصل معنا (فورم + معلومات الاتصال)
* تصميم متجاوب 100% مع الهواتف والأجهزة اللوحية
* مهيّأ لتحسين تجربة المستخدم وسرعة التحميل

---

## 🛠 **التقنيات المستخدمة**

### **Frontend**

* React.js
* Vite
* TypeScript (اختياري حسب المشروع)
* Tailwind CSS
* React Router
* RTL Styles
* Responsive Layout

### **Build & Deployment**

* GitHub Pages (مع إعدادات base URL)
* Hostinger (رفع dist داخل public_html)
* Vite Configuration

---

## 📂 **هيكلة الملفات**

```
project/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── data/
│   ├── App.tsx
│   └── main.tsx
│── index.html
│── package.json
│── vite.config.mjs (أو .ts)
│── README.md
```
<img width="1366" height="768" alt="Screenshot 2025-11-26 040442" src="https://github.com/user-attachments/assets/29abedfc-fcf5-41dc-bab7-bd53fbf174cf" />
<img width="1366" height="768" alt="Screenshot 2025-11-26 040442" src="https://github.com/user-attachments/assets/0078d824-66a8-483c-98b0-f32a034487e7" />
---

## ⚙️ **إعداد Vite للموقع على Hostinger**

يجب أن يكون `vite.config.mjs` بالشكل التالي ليعمل على هوستنغر:

```js
export default {
  base: '/',
};
```

---

## ⚙️ **إعداد Vite للموقع على GitHub Pages**

إذا رغبت بإعادة رفعه على GitHub Pages يجب تغيير:

```js
export default {
  base: '/your-repo-name/',
};
```

---

## 🚀 **أوامر التشغيل**

### تثبيت الحزم:

```
npm install
```

### تشغيل السيرفر محلياً:

```
npm run dev
```

### بناء نسخة الإنتاج:

```
npm run build
```

### عرض نسخة الإنتاج:

```
npm run preview
```

---

## 🌐 **طريقة الرفع على Hostinger**

1. نفذ `npm run build`
2. ادخل مجلد **dist**
3. ارفع جميع الملفات إلى **public_html**
4. تأكد أن الصور موجودة في المسار الصحيح `./assets/...`
5. قم بمسح Cache المتصفح

---

## 🎨 **الميزات البصرية**

* تصميم نظيف وهادئ باللون الأزرق الداكن
* دعم كامل للغة العربية والاتجاه من اليمين لليسار
* بطاقات سيارات مرتبة وجذابة
* تأثير Blur شفاف في الهيرو
* تنسيق موحد للأقسام والمسافات

---

## 📱 **التجاوب**

✔ الهيدر ثابت
✔ الHero يتكيف مع حجم الشاشة
✔ الكروت تتحول لعمود واحد على الجوال
✔ النماذج تتحول إلى تصميم عمودي تلقائياً

---

## ✨ **مميزات المشروع**

* سريع جدًا بسبب استخدام Vite
* مسارات منظمة
* كود نظيف وقابل للتعديل
* واجهة مستخدم راقية ومناسبة لشركة تأجير سيارات
* جاهز للإطلاق على أي استضافة

---

## 📬 **تواصل**

لأي استفسار حول المشروع:

📧 [contact@ronnidev.com](mailto:contact@ronnidev.com)
🌐 [https://ronnidev.com](https://ronnidev.com)

---

## 📄 **الترخيص**

هذا المشروع ملك لـ **RonniDev**، جميع الحقوق محفوظة.

---

إذا أردت أن أضيف:
✔ شارات (Badges)
✔ صور داخل الـREADME
✔ قسم Backend للمستقبل
✔ أو تحسين التصميم

قل فقط **"أضف تحسينات"** وسأعدّلها فورًا.
