// src/shared/config/contacts.ts
export const PHONES = ["+7 (708) 51 51 518", "+7 (700) 51 51 518"];

export const CONTACTS = {
  address: "Большой Сухаревский переулок, 25с2 Москва", 
  phone: "+996 551 040 207",
  email: "office@prolab.academy",
};

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACTS.address
)}&z=16&output=embed`;