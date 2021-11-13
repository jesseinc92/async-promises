// Code for numbers trivia (promises)

// Print single fact about favorite number

BASE_URL = 'http://numbersapi.com/';
JSON_KEY = '/?json';

axios.get(`${BASE_URL}7${JSON_KEY}`)
    .then(response => console.log(response.data.text));


// Print facts for multiple numbers

axios.get(`${BASE_URL}3..6?json`)
    .then(response => console.log(response.data));


// Print multiple facts for single favorite number

Promise.all(
    Array.from({ length: 4}, () => {
        return axios.get(`${BASE_URL}7${JSON_KEY}`)
    })
).then(response => {
    response.forEach(fact => console.log(fact.data.text))
});