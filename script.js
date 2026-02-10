let yesSize = 1.2; // גודל התחלתי ב-rem
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainContainer = document.getElementById('main-container');
const successScreen = document.getElementById('success-screen');

// רשימת משפטים מצחיקים כשהיא לוחצת על "לא"
const noTexts = [
    "את בטוחה?",
    "תחשבי על זה שוב...",
    "נו באמת קארין!",
    "אולי בכל זאת?",
    "אני אבכה...",
    "טעות בלחיצה, נכון?"
];
let textIndex = 0;

noBtn.addEventListener('click', () => {
    // מגדילים את הכפתור "כן"
    yesSize += 0.5;
    yesBtn.style.fontSize = yesSize + "rem";
    yesBtn.style.padding = (yesSize * 10) + "px " + (yesSize * 20) + "px";

    // משנים את הטקסט של כפתור ה-"לא"
    noBtn.innerText = noTexts[textIndex];
    textIndex = (textIndex + 1) % noTexts.length;

    // אם הכפתור כבר ממש ענק, הוא יכול להסתיר את ה"לא"
    if (yesSize > 5) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener('click', () => {
    mainContainer.classList.add('hidden');
    successScreen.classList.remove('hidden');
    successScreen.style.display = 'flex';

    // אופציונלי: להוסיף קונפטי כאן
    console.log("Success! Happy Valentine's Day");
    // הזיקוקים
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
});