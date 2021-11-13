const BASE_URL = 'http://numbersapi.com/';
const JSON_KEY = '/?json';

const faveNumber = 10;
const numbers = [1, 2, 3, 4]


async function singleNumber() {
    let fact = await axios.get(`${BASE_URL}${faveNumber}`);
    console.log(fact.data);
}

singleNumber();


async function multNumbers() {
    let facts = await axios.get(`${BASE_URL}${numbers}${JSON_KEY}`)
    console.log(facts.data)
}

multNumbers();


async function multFaveFacts() {
    let fact1 = axios.get(`${BASE_URL}${faveNumber}${JSON_KEY}`);
    let fact2 = axios.get(`${BASE_URL}${faveNumber}${JSON_KEY}`);
    let fact3 = axios.get(`${BASE_URL}${faveNumber}${JSON_KEY}`);
    let fact4 = axios.get(`${BASE_URL}${faveNumber}${JSON_KEY}`);

    fact1 = await fact1;
    fact2 = await fact2;
    fact3 = await fact3;
    fact4 = await fact4;

    console.log(fact1.data.text);
    console.log(fact2.data.text);
    console.log(fact3.data.text);
    console.log(fact4.data.text);
}

multFaveFacts();