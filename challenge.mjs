import fetch from 'node-fetch';

const url = 'https://flag-gilt.vercel.app/api/challenge';
const headers = {
    'Authorization': 'Bearer uM0M7uypyeeHZ741XIrs9KsFOUEhxUdtXJA=',
    'Content-Type': 'application/json'
};

async function followCursor(cursor) {
    const body = JSON.stringify({ cursor: cursor });

    const options = {
        method: 'POST',
        headers: headers,
        body: body
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        console.log(data.message);

        if (data.nextCursor) {
            await followCursor(data.nextCursor);
        } else if (data.flag) {
            console.log('Hidden Flag:', data.flag);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

followCursor(null);



// Here is the Output:
// Welcome to the Data Booster Intern Challenge! Your quest begins here. Follow the trail of cursors to uncover the hidden flag. May your code be swift and your logic sharp!
// Keep pushing forward! Each cursor brings you closer to the prize.
// You're making great progress! The flag is still hiding, but you're on the right path.
// Excellent work so far! Your coding skills are shining through. Keep following those cursors!
// You're navigating the cursor maze like a pro! The flag awaits the truly persistent.
// Another step closer! Your determination is admirable. The flag can't hide forever!
// Impressive cursor-chasing skills! You're proving yourself worthy of the Data Booster team.
// The plot thickens! Each request unveils more of the mystery. Keep going!
// You're unraveling the cursor puzzle piece by piece. The flag is within reach!
// Your persistence is paying off! The flag is feeling the pressure of your relentless pursuit.
// Keep pushing forward! Each cursor brings you closer to the prize.
// You're making great progress! The flag is still hiding, but you're on the right path.
// Excellent work so far! Your coding skills are shining through. Keep following those cursors!
// You're navigating the cursor maze like a pro! The flag awaits the truly persistent.
// Another step closer! Your determination is admirable. The flag can't hide forever!
// Impressive cursor-chasing skills! You're proving yourself worthy of the Data Booster team.
// The plot thickens! Each request unveils more of the mystery. Keep going!
// You're unraveling the cursor puzzle piece by piece. The flag is within reach!
// Your persistence is paying off! The flag is feeling the pressure of your relentless pursuit.
// Keep pushing forward! Each cursor brings you closer to the prize.
// You're making great progress! The flag is still hiding, but you're on the right path.
// Excellent work so far! Your coding skills are shining through. Keep following those cursors!
// You're navigating the cursor maze like a pro! The flag awaits the truly persistent.
// Another step closer! Your determination is admirable. The flag can't hide forever!
// Impressive cursor-chasing skills! You're proving yourself worthy of the Data Booster team.
// The plot thickens! Each request unveils more of the mystery. Keep going!
// You're unraveling the cursor puzzle piece by piece. The flag is within reach!
// Your persistence is paying off! The flag is feeling the pressure of your relentless pursuit.
// Keep pushing forward! Each cursor brings you closer to the prize.
// You're making great progress! The flag is still hiding, but you're on the right path.
// Excellent work so far! Your coding skills are shining through. Keep following those cursors!
// You're navigating the cursor maze like a pro! The flag awaits the truly persistent.
// Another step closer! Your determination is admirable. The flag can't hide forever!
// Impressive cursor-chasing skills! You're proving yourself worthy of the Data Booster team.
// The plot thickens! Each request unveils more of the mystery. Keep going!
// You're unraveling the cursor puzzle piece by piece. The flag is within reach!
// Your persistence is paying off! The flag is feeling the pressure of your relentless pursuit.
// Keep pushing forward! Each cursor brings you closer to the prize.
// You're making great progress! The flag is still hiding, but you're on the right path.
// Excellent work so far! Your coding skills are shining through. Keep following those cursors!
// You're navigating the cursor maze like a pro! The flag awaits the truly persistent.
// Another step closer! Your determination is admirable. The flag can't hide forever!
// Impressive cursor-chasing skills! You're proving yourself worthy of the Data Booster team.
// The plot thickens! Each request unveils more of the mystery. Keep going!
// You're unraveling the cursor puzzle piece by piece. The flag is within reach!
// Your persistence is paying off! The flag is feeling the pressure of your relentless pursuit.
// Keep pushing forward! Each cursor brings you closer to the prize.
// You're making great progress! The flag is still hiding, but you're on the right path.
// Excellent work so far! Your coding skills are shining through. Keep following those cursors!
// You're navigating the cursor maze like a pro! The flag awaits the truly persistent.
// Another step closer! Your determination is admirable. The flag can't hide forever!
// Impressive cursor-chasing skills! You're proving yourself worthy of the Data Booster team.
// The plot thickens! Each request unveils more of the mystery. Keep going!
// You're unraveling the cursor puzzle piece by piece. The flag is within reach!
// Your persistence is paying off! The flag is feeling the pressure of your relentless pursuit.
// Keep pushing forward! Each cursor brings you closer to the prize.
// You're making great progress! The flag is still hiding, but you're on the right path.
// Excellent work so far! Your coding skills are shining through. Keep following those cursors!
// You're navigating the cursor maze like a pro! The flag awaits the truly persistent.
// Another step closer! Your determination is admirable. The flag can't hide forever!
// Impressive cursor-chasing skills! You're proving yourself worthy of the Data Booster team.
// The plot thickens! Each request unveils more of the mystery. Keep going!
// You're unraveling the cursor puzzle piece by piece. The flag is within reach!
// Your persistence is paying off! The flag is feeling the pressure of your relentless pursuit.
// Keep pushing forward! Each cursor brings you closer to the prize.
// You're making great progress! The flag is still hiding, but you're on the right path.
// Excellent work so far! Your coding skills are shining through. Keep following those cursors!
// You're navigating the cursor maze like a pro! The flag awaits the truly persistent.
// Another step closer! Your determination is admirable. The flag can't hide forever!
// Impressive cursor-chasing skills! You're proving yourself worthy of the Data Booster team.
// The plot thickens! Each request unveils more of the mystery. Keep going!
// You're unraveling the cursor puzzle piece by piece. The flag is within reach!
// Your persistence is paying off! The flag is feeling the pressure of your relentless pursuit.
// Keep pushing forward! Each cursor brings you closer to the prize.
// You're making great progress! The flag is still hiding, but you're on the right path.
// Excellent work so far! Your coding skills are shining through. Keep following those cursors!
// You're navigating the cursor maze like a pro! The flag awaits the truly persistent.
// Another step closer! Your determination is admirable. The flag can't hide forever!
// Impressive cursor-chasing skills! You're proving yourself worthy of the Data Booster team.
// The plot thickens! Each request unveils more of the mystery. Keep going!
// Congratulations, aspiring Data Booster! You've reached the end of the cursor trail and found the flag. Your perseverance has paid off. Now, push your code to GitHub and submit the link to complete this epic challenge. We're excited to see your solution!
// Hidden Flag: FLAG{C0ngr4ts_Y0u_F0und_M3}