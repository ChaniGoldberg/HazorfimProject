//רק בשביל להראות את הניתובים בפופאפ יכולנו לקבץ כמה json צריך עוד לעבוד על זה....
export const categories = [
   {
      name: "קידוש ויין",
      items: ["סט קידוש", "כוסות קידוש", "צלחות קידוש", "כוסות ליקר", "בקבוק ליין", "מחלק יין"]
   },
   {
      name: "שולחן שבת",
      items: ["מגשי חלות וסכינים", "פריטי הבדלה", "כלים למים אחרונים", "קופות צדקה", "מלחיות", "נטילת ידיים", "פריטים להדלקת נרות"]
   },
   {
      name: "עיצוב הבית",
      items: ["מגשים", "הוראות תחזוקה", "מתנות לעסקים", "אגרטלים יוקרתיים", "מזוזות", "כלי שולחן", "מפיון", "מסגרות לתמונות", "מיניאטורות וליצנים", "ברכות"]
   },
   {
      name: "חגים ומועדים",
      items: ["קעריות לדבש", "קופסאות אתרוג", "מגילות", "צלחות וקערות סדר", "כוסות וצלחות אליהו הנביא"]
   },
   {
      name: "קולקציות מיוחדות",
      items: ["הגלריה", "Legacy Collections", "YM Collections ®"]
   },
   {
      name: "ספרי תורה",
      items: ["תיקים לספרי תורה", "כתר לספר תורה", "יד לספר תורה", "ציץ לספר תורה", "רימונים לספר תורה"]
   }
];

export const usefulCategories = [
   {
      name: null,
      items: ["פמוטים", "קנדלברות", "חנוכיות", "שובר מתנה"]
   },
];

export const gifts = [{
   name: "ארועים מיוחדים",
   items: [
      "מתנה לבעל",
      "מתנה לאישה",
      "מתנה למשרד",
      "מתנה לחתונה",
      "מתנה לבר/בת מצווה",
      "מתנות יוקרתיות לבית",
      "מתנה לאירוסין",
      "מתנה ליולדת",
      "ירושלים",
      "מתנה ישראלית",
   ]
}];

export const priceUpToACertainAmount = {
   name:"לפי מחיר",
   items: [
       "עד 300 ש'ח" ,
       "300 ש'ח -500ש'ח" ,
       "500 ש'ח-1000 ש'ח" ,
       "1000 -4000" 
   ]
};

// דוגמה לשימוש ב-map
// const formattedCategories = categories.map(category => ({
//    name: category.name,
//    items: category.items
// }));

// const formattedUsefulCategories = usefulCategories.map(category => ({
//    name: category.name
// }));

// const formattedGifts = Object.entries(gifts).map(([key, value]) => ({
//    category: key,
//    items: value
// }));

// const formattedPriceRanges = Object.entries(priceUpToACertainAmount).map(([key, value]) => ({
//    category: key,
//    ranges: value
// }));

// console.log(formattedCategories);
// console.log(formattedUsefulCategories);
// console.log(formattedGifts);
// console.log(formattedPriceRanges);
