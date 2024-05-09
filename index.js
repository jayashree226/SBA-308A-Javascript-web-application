
document.getElementById('fetch-button').addEventListener('click', async () => {
    try {
        const catImageUrl = await fetchRandomCats();
        displayCat(catImageUrl);
    } catch (error) {
        console.error('Error fetching cat:', error);
    }
});

function displayCat(catImageUrl) {
    const gallery = document.getElementById('gallery');
    const img = document.createElement('img');
    img.src = catImageUrl;
    gallery.appendChild(img);
    console.log(catImageUrl);
}


const API_URL = 'https://api.thecatapi.com/v1/images/search';

export async function fetchRandomCats() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch cat');
        }
        const [catData] = await response.json();
        return catData.url;
        console.log(response);
    } catch (error) {
        throw error;
    }
}