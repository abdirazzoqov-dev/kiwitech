'use client'

import { motion } from 'framer-motion'

// Bu fayl Next.js da maxsus hisoblanadi.
// U har bir sahifa o'rtasida qayta ishga tushadi va animatsiyaga imkon beradi.

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      // Sahifaning boshlang'ich holati (shaffof va biroz pastda)
      initial={{ opacity: 0, y: 15 }}
      // Animatsiya tugagan holati (to'liq ko'rinadigan va joyida)
      animate={{ opacity: 1, y: 0 }}
      // Animatsiya davomiyligi va turi
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.main>
  )
}