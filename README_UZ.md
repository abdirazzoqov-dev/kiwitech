# 🚀 Kiwitech Solutions - Professional IT Agency Website

## ✨ Loyihangiz Yangilandi!

Sizning IT xizmatlari saytingiz professional darajaga ko'tarildi va quyidagi kuchli funksiyalar qo'shildi:

### 🎯 Yangi Imkoniyatlar

#### 1. 🌍 Ko'p Tillilik (4 til)
- **🇺🇿 O'zbekcha (Lotin)** - uz
- **🇺🇿 Ўзбекча (Кирилл)** - uz-cyrl
- **🇷🇺 Русский** - ru
- **🇬🇧 English** - en

#### 2. 🎨 Professional UI/UX
- Modern gradient dizayn
- Smooth animatsiyalar
- Responsive (barcha qurilmalarda)
- Professional IT agency ko'rinishi

#### 3. 🛡️ Admin Panel
- Xavfsiz autentifikatsiya
- Kontent boshqarish
- Ko'p tillilik uchun tahrirlash
- Intuitiv interfeys

---

## 🚀 Tezkor Boshlash

### 1-qadam: Dependencies o'rnatish

```bash
npm install
```

### 2-qadam: MongoDB sozlash

**Variant A: MongoDB Atlas (Tavsiya etiladi)**
1. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) da ro'yxatdan o'ting
2. Bepul M0 cluster yarating
3. Database User qo'shing
4. Network Access da IP whitelist qo'shing (0.0.0.0/0)
5. Connection string oling

**Variant B: Local MongoDB**
```bash
# MongoDB Community Edition ni yuklab oling va o'rnating
# https://www.mongodb.com/try/download/community
```

### 3-qadam: Environment Variables

Loyiha ildiz papkasida `.env.local` fayl yarating:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/kiwitech
# yoki Atlas uchun:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kiwitech

# JWT Secret (Production da o'zgartiring!)
JWT_SECRET=kiwitech-secret-key-change-this-in-production-32-chars

# Environment
NODE_ENV=development
```

### 4-qadam: Admin User yaratish

```bash
npm run init-admin
```

Bu buyruq admin foydalanuvchi yaratadi:
- **Email:** admin@kiwitech.uz
- **Password:** admin123

⚠️ **MUHIM:** Production da bu parolni o'zgartiring!

### 5-qadam: Development serverni ishga tushirish

```bash
npm run dev
```

Sayt ishga tushdi! 🎉

Oching: **http://localhost:3000**

---

## 📖 Foydalanish

### Foydalanuvchilar uchun

1. **Tilni o'zgartirish**
   - Navbar'dagi **Globe** (🌐) ikonkasini bosing
   - Kerakli tilni tanlang
   - Sahifa avtomatik yangilanadi

2. **Sahifalar**
   - **Bosh sahifa** - Hero, Xizmatlar, Jamoa
   - **Xizmatlar** - Barcha xizmatlar ro'yxati
   - **Biz haqimizda** - Kompaniya haqida
   - **Portfolio** - Bajarilgan ishlar
   - **Bog'lanish** - Aloqa forma

### Admin uchun

1. **Login**
   ```
   http://localhost:3000/admin/login
   ```
   Email: `admin@kiwitech.uz`
   Password: `admin123`

2. **Dashboard**
   ```
   http://localhost:3000/admin/dashboard
   ```

3. **Kontent boshqarish**
   - **Qo'shish:** "Add New Content" tugmasi
   - **Tahrirlash:** Edit (✏️) ikonkasi
   - **O'chirish:** Delete (🗑️) ikonkasi

---

## 📂 Loyiha Strukturasi

```
kiwitech/
├── app/                        # Next.js app directory
│   ├── admin/                  # Admin panel
│   │   ├── login/             # Login sahifasi
│   │   └── dashboard/         # Dashboard
│   ├── api/                   # API routes
│   │   └── admin/             # Admin API endpoints
│   ├── services/              # Xizmatlar sahifasi
│   ├── about/                 # Biz haqimizda
│   ├── contact/               # Bog'lanish
│   ├── portfolio/             # Portfolio
│   └── layout.tsx             # Root layout
├── components/                # React komponentlar
│   ├── Navbar.tsx            # Navigation
│   ├── Footer.tsx            # Footer
│   └── LanguageSwitcher.tsx  # Til almashtirgich
├── i18n/                      # Internationalization
│   ├── config.ts             # Til konfiguratsiyasi
│   ├── request.ts            # Server tarafida til olish
│   ├── actions.ts            # Til o'zgartirish
│   └── locales/              # Tarjimalar
│       ├── uz.json
│       ├── uz-cyrl.json
│       ├── ru.json
│       └── en.json
├── lib/                       # Utility funksiyalar
│   ├── mongodb.ts            # Database connection
│   └── auth.ts               # Authentication
├── scripts/                   # Helper scripts
│   └── init-admin.ts         # Admin user yaratish
└── public/                    # Static files
```

---

## 🎨 Dizayn Sistema

### Rang Palitra
```css
/* Primary Gradient */
bg-gradient-to-r from-cyan-600 to-blue-600

/* Dark Background */
bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900

/* Text */
text-gray-900  /* Primary */
text-gray-600  /* Secondary */
text-gray-500  /* Muted */

/* Accents */
cyan-500, cyan-600, blue-500, blue-600
```

### Animatsiyalar
- **fadeInUp** - Pastdan yuqoriga fade
- **hover:scale-105** - Hover da kattalashtirish
- **hover:-translate-y-1** - Hover da yuqoriga ko'tarish

---

## 🔒 Xavfsizlik

### Amalga oshirilgan xavfsizlik

1. ✅ **Password Hashing** - bcrypt (12 rounds)
2. ✅ **JWT Authentication** - 7 kun amal qiladi
3. ✅ **HTTP-only Cookies** - XSS himoyasi
4. ✅ **Environment Variables** - Maxfiy ma'lumotlar yashirin
5. ✅ **Role-based Access** - Admin/Editor rollari

### Production Xavfsizlik Checklist

- [ ] JWT_SECRET ni kuchli qilib o'zgartiring (32+ belgi)
- [ ] Admin parolini o'zgartiring
- [ ] MongoDB Atlas production cluster ishlating
- [ ] HTTPS sozlang
- [ ] CORS sozlamalarini tekshiring
- [ ] Rate limiting qo'shing

---

## 📊 Database Schema

### Users Collection
```json
{
  "_id": "ObjectId",
  "email": "string",
  "password": "hashed_string",
  "name": "string",
  "role": "admin | editor",
  "createdAt": "Date"
}
```

### Content Collection
```json
{
  "_id": "ObjectId",
  "key": "string",
  "locale": "uz | uz-cyrl | ru | en",
  "value": "string",
  "category": "string",
  "createdAt": "Date",
  "updatedAt": "Date",
  "createdBy": "ObjectId",
  "updatedBy": "ObjectId"
}
```

---

## 🚢 Production ga Deploy

### Vercel (Tavsiya etiladi)

1. Vercel account yarating
2. GitHub bilan ulang
3. Loyihani import qiling
4. Environment variables qo'shing:
   ```
   MONGODB_URI=your_production_mongodb_uri
   JWT_SECRET=your_secure_secret_key
   NODE_ENV=production
   ```
5. Deploy tugmasini bosing!

### Netlify

1. Netlify account yarating
2. "New site from Git" tugmasini bosing
3. Repository tanlang
4. Environment variables sozlang
5. Deploy qiling

### Manual Deployment

```bash
# Build qilish
npm run build

# Production serverni ishga tushirish
npm start
```

---

## 🔧 Troubleshooting

### MongoDB connection xatosi
```
Error: MongoDB URI not configured
```
**Yechim:** `.env.local` faylini tekshiring, MONGODB_URI to'g'ri sozlanganligini tasdiqlang

### Admin login ishlamayapti
**Yechim:** 
1. `npm run init-admin` ni qayta ishga tushiring
2. MongoDB connection borligini tekshiring
3. JWT_SECRET sozlanganligini tekshiring

### Til almashtirilmayapti
**Yechim:** Brauzer cache ni tozalang va sahifani yangilang

### Build xatosi
```bash
# Dependencies ni qayta o'rnating
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Qo'shimcha Ma'lumot

### Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm start            # Production server
npm run lint         # Linter
npm run init-admin   # Admin user yaratish
```

### API Endpoints

```
POST   /api/admin/login      # Login
POST   /api/admin/logout     # Logout
GET    /api/admin/content    # Get all content
POST   /api/admin/content    # Create content
PUT    /api/admin/content    # Update content
DELETE /api/admin/content    # Delete content
```

---

## 🎓 Texnologiyalar

### Frontend
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- next-intl
- Framer Motion
- Lucide React

### Backend
- Next.js API Routes
- MongoDB
- JWT Authentication
- bcryptjs

---

## 📞 Support

Savollar yoki yordam kerakmi?

- **Email:** support@kiwitech.uz
- **Telefon:** +998 (90) 868-50-10
- **Manzil:** Qashqadaryo viloyati, Qarshi shahar

---

## 📜 License

© 2024 Kiwitech Solutions. Barcha huquqlar himoyalangan.

---

## 🙏 Minnatdorchilik

Ushbu loyihada quyidagi ajoyib texnologiyalar ishlatilgan:
- Next.js
- MongoDB
- Tailwind CSS
- next-intl
- va boshqalar...

---

## 🎉 Keyingi Qadamlar

1. ✅ `.env.local` faylini sozlang
2. ✅ MongoDB'ni ulang
3. ✅ Admin user yarating
4. ✅ Loyihani ishga tushiring
5. ✅ Kontentni admin panelda boshqaring
6. ✅ Production ga deploy qiling

**Muvaffaqiyatlar tilaymiz! 🚀**

---

*Batafsil ma'lumot uchun `SETUP.md` va `PROJECT_SUMMARY.md` fayllarini o'qing.*

