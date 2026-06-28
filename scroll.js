const container = document.getElementById("container");
const loader = document.getElementById("loader");

let count = 1;
let loading = false;

// Create one card
function createCard() {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>Post ${count}</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam voluptate molestiae minus dignissimos,
        ducimus dolore maxime quos pariatur provident illo.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    `;

    container.appendChild(card);

    count++;
}

// Load multiple cards
function loadContent(number = 6){

    loading = true;
    loader.style.display = "block";

    setTimeout(()=>{

        for(let i=0;i<number;i++){
            createCard();
        }

        loader.style.display = "none";
        loading = false;

    },1000);

}

// Infinite Scroll Logic
window.addEventListener("scroll",()=>{

    if(loading) return;

    const scrollPosition =
        window.innerHeight + window.scrollY;

    const pageHeight =
        document.body.offsetHeight;

    if(scrollPosition >= pageHeight - 200){

        loadContent();

    }

});

// Initial Load
loadContent();