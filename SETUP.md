# Kiwitech Solutions - Setup Guide

## 🌟 Yangi Imkoniyatlar / New Features

Loyihangizga quyidagi professional funksiyalar qo'shildi:

### 1. Ko'p tillilik (Multi-language Support)
- ✅ O'zbek (Lotin) - uz
- ✅ O'zbek (Kirill) - uz-cyrl  
- ✅ Русский (Russian) - ru
- ✅ English - en

### 2. Professional UI/UX Design
- ✅ Zamonaviy gradientlar va animatsiyalar
- ✅ Professional IT agency ko'rinishi
- ✅ Responsive dizayn (barcha ekranlarda ishlaydi)
- ✅ Smooth transitions va hover effektlar

### 3. Admin Panel
- ✅ Xavfsiz autentifikatsiya (JWT)
- ✅ Kontent boshqarish tizimi
- ✅ Ko'p tillilik uchun kontent tahrirlash
- ✅ CRUD operatsiyalari (Create, Read, Update, Delete)

---

## 📋 O'rnatish / Installation

### 1. MongoDB o'rnatish

#### Variant A: MongoDB Atlas (Cloud - Tavsiya etiladi)
1. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) ga ro'yxatdan o'ting
2. Yangi cluster yarating (bepul M0 tier yetarli)
3. Database User yarating
4. IP Address ni whitelist ga qo'shing (yoki 0.0.0.0/0 barcha IP lar uchun)
5. Connection string ni oling

#### Variant B: Local MongoDB
```bash
# Windows uchun MongoDB o'rnatish
# https://www.mongodb.com/try/download/community
# Yuklab oling va o'rnating, keyin:

# MongoDB xizmatini ishga tushirish
net start MongoDB
```

### 2. Environment Variables o'rnatish

Loyiha root papkasida `.env.local` fayl yarating:

```env
# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/kiwitech
# yoki MongoDB Atlas uchun:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kiwitech?retryWrites=true&w=majority

# JWT Secret (Production da o'zgartiring!)
JWT_SECRET=your-very-secret-key-change-in-production-minimum-32-characters

# Environment
NODE_ENV=development
```

### 3. Dependencies o'rnatish

```bash
npm install
```

### 4. Admin user yaratish

```bash
npm run init-admin
```

Bu buyruq quyidagi admin foydalanuvchi yaratadi:
- **Email:** admin@kiwitech.uz
- **Password:** admin123

⚠️ **Muhim:** Production da parolni o'zgartiring!

### 5. Development serverni ishga tushirish

```bash
npm run dev
```

Brauzerda oching: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Admin Panelga kirish

1. Brauzerda oching: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Login qiling:
   - Email: `admin@kiwitech.uz`
   - Password: `admin123`
3. Dashboard: [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)

---

## 📝 Admin Panelda ishlash

### Yangi Kontent qo'shish

1. Admin Dashboard ga kiring
2. "Add New Content" tugmasini bosing
3. Quyidagi ma'lumotlarni kiriting:
   - **Key:** Kontent identifikatori (masalan: `hero.title`)
   - **Locale:** Til kodi (`uz`, `uz-cyrl`, `ru`, `en`)
   - **Category:** Kategoriya (masalan: `general`, `services`)
   - **Value:** Kontent matni

4. "Save" tugmasini bosing

### Kontentni tahrirlash

1. Kontentni topib, "Edit" (qalamcha) ikonkasini bosing
2. O'zgarishlarni kiriting
3. "Save" tugmasini bosing

### Kontentni o'chirish

1. Kontentni topib, "Delete" (trash) ikonkasini bosing
2. Tasdiqlang

---

## 🎨 Dizayn Hususiyatlari

### Yangi UI Elementlar
- **Gradient buttons:** Cyan-dan Blue gacha gradient tugmalar
- **Shadow effects:** Professional soyalar va glow effektlar
- **Smooth animations:** fadeInUp, hover, va scale animatsiyalar
- **Modern cards:** Rounded corners va hover transformatsiyalar

### Rang Sxemasi
- **Primary:** Cyan (#06B6D4) - Blue (#3B82F6) gradient
- **Dark:** Gray-900 (#111827) - Gray-800 (#1F2937)
- **Accent:** Cyan-500, Blue-500
- **Text:** Gray-900 (dark), Gray-600 (muted)

---

## 🌍 Til almashtirgich

Navbar'da til almashtirgich joylashgan. Foydalanuvchilar 4 til o'rtasida osongina o'tishi mumkin:
- 🇺🇿 O'zbekcha (Latin)
- 🇺🇿 Ўзбекча (Kirill)
- 🇷🇺 Русский
- 🇬🇧 English

---

## 📦 Production ga Deploy qilish

### 1. Environment Variables

Production serverda `.env.local` faylini yarating va quyidagi o'zgaruvchilarni o'rnating:

```env
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_very_long_and_secure_random_string
NODE_ENV=production
```

### 2. Build qilish

```bash
npm run build
```

### 3. Serverni ishga tushirish

```bash
npm start
```

### 4. Deploy platformalari

#### Vercel (Tavsiya etiladi)
1. [Vercel](https://vercel.com) ga login qiling
2. Loyihani import qiling
3. Environment variables ni qo'shing
4. Deploy qiling

#### Netlify
1. [Netlify](https://netlify.com) ga login qiling
2. New site from Git
3. Environment variables ni qo'shing
4. Deploy qiling

---

## 🛠️ Texnologiyalar

### Frontend
- **Next.js 16** - React Framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **next-intl** - Internationalization
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Backend
- **Next.js API Routes** - Backend API
- **MongoDB** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing

---

## 📞 Support

Agar savollar bo'lsa:
- **Email:** support@kiwitech.uz
- **Telefon:** +998 (90) 868-50-10

---

## 📄 License

© 2024 Kiwitech Solutions. All rights reserved.

