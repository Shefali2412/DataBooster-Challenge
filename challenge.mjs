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
