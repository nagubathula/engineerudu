const fs = require('fs');
const path = 'public/courses/sql/30_days_sql_tenglish.md';

let content = fs.readFileSync(path, 'utf8');

// Regex to match emojis (Extended_Pictographic covers most emojis, Emoji_Presentation covers the rest)
// We also replace the variation selector \uFE0F if it exists.
content = content.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1FA00}-\u{1FAFF}\u{2300}-\u{23FF}\u{2B50}\u{2B55}\uFE0F]/gu, '');
// Also use the unicode property escape just to be safe
content = content.replace(/\p{Extended_Pictographic}/gu, '');
content = content.replace(/\p{Emoji_Presentation}/gu, '');

// Clean up any double spaces or spaces before punctuation caused by emoji removal
content = content.replace(/  +/g, ' ');
content = content.replace(/ \./g, '.');
content = content.replace(/ ,/g, ',');

fs.writeFileSync(path, content);
console.log('Emojis removed successfully!');
