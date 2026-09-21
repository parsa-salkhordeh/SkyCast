export type Country = {
  name: string;
  value: string;
  cities: City[];
};

export type City = {
  name: string;
  value: string;
};

export const countries: Country[]= [
  {
    name: "ایران",
    value: "iran",
    cities: [
      { name: "تهران", value: "tehran" },
      { name: "تبریز", value: "tabriz" },
      { name: "شیراز", value: "shiraz" },
      { name: "مشهد", value: "mashhad" },
      { name: "کرمانشاه", value: "kermanshah" },
      { name: "اصفهان", value: "isfahan" },
      { name: "یزد", value: "yazd" },
      { name: "قم", value: "qom" },
      { name: "رشت", value: "rasht" },
      { name: "اهواز", value: "ahvaz" },
      { name: "ارومیه", value: "urmia" },
      { name: "کرج", value: "karaj" },
      { name: "سنندج", value: "sanandaj" },
      { name: "زاهدان", value: "zahedan" },
      { name: "بندرعباس", value: "bandar-abbas" },
      { name: "ساری", value: "sari" },
      { name: "گرگان", value: "gorgan" },
      { name: "همدان", value: "hamedan" },
      { name: "قزوین", value: "qazvin" },
      { name: "خرم‌آباد", value: "khorramabad" },
      { name: "اردبیل", value: "ardabil" },
      { name: "بوشهر", value: "bushehr" },
      { name: "ایلام", value: "ilam" },
      { name: "شهرکرد", value: "shahrekord" },
      { name: "یاسوج", value: "yasuj" },
      { name: "بیرجند", value: "birjand" },
      { name: "سمنان", value: "semnan" },
      { name: "زنجان", value: "zanjan" },
      { name: "کاشان", value: "kashan" },
      { name: "آبادان", value: "abadan" }
    ]
  },

  {
    name: "آلمان",
    value: "germany",
    cities: [
      { name: "برلین", value: "berlin" },
      { name: "مونیخ", value: "munich" },
      { name: "هامبورگ", value: "hamburg" },
      { name: "فرانکفورت", value: "frankfurt" }
    ]
  },

  {
    name: "ترکیه",
    value: "turkey",
    cities: [
      { name: "استانبول", value: "istanbul" },
      { name: "آنکارا", value: "ankara" },
      { name: "ازمیر", value: "izmir" },
      { name: "آنتالیا", value: "antalya" }
    ]
  },

  {
    name: "اسپانیا",
    value: "spain",
    cities: [
      { name: "مادرید", value: "madrid" },
      { name: "بارسلونا", value: "barcelona" },
      { name: "والنسیا", value: "valencia" },
      { name: "سویا", value: "sevilla" }
    ]
  },


  {
  name: "عراق",
  value: "iraq",
  cities: [
    { name: "بغداد", value: "baghdad" },
    { name: "بصره", value: "basra" },
    { name: "موصل", value: "mosul" },
    { name: "اربیل", value: "erbil" },
    { name: "نجف", value: "najaf" },
    { name: "کربلا", value: "karbala" },
    { name: "سلیمانیه", value: "sulaymaniyah" },
    { name: "کرکوک", value: "kirkuk" },
    { name: "ناصریه", value: "nasiriyah" },
    { name: "فلوجه", value: "fallujah" }
  ]
},

{
  name: "عمان",
  value: "oman",
  cities: [
    { name: "مسقط", value: "muscat" },
    { name: "صلاله", value: "salalah" },
    { name: "صحار", value: "sohar" },
    { name: "نزوی", value: "nizwa" },
    { name: "صور", value: "sur" },
    { name: "عبری", value: "ibri" },
    { name: "برکاء", value: "barka" },
    { name: "خصب", value: "khasab" },
    { name: "الرستاق", value: "rustaq" },
    { name: "بهلاء", value: "bahla" }
  ]
},

{
  name: "روسیه",
  value: "russia",
  cities: [
    { name: "مسکو", value: "moscow" },
    { name: "نووسیبیرسک", value: "novosibirsk" },
    { name: "یکاترینبورگ", value: "yekaterinburg" },
    { name: "کازان", value: "kazan" },
    { name: "نیژنی نووگورود", value: "nizhny-novgorod" },
    { name: "چلیابینسک", value: "chelyabinsk" },
    { name: "اومسک", value: "omsk" },
    { name: "سامارا", value: "samara" },
    { name: "روستوف-نا-دونو", value: "rostov-on-don" }
  ]
}
];