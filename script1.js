for (let set = 1; set <= 5; set++) {
    const plantCardsContainer = document.querySelector(`.plant-cards${set}`);

    
    const plants = [
        { 
            imgSrc: 'img/fplant1.webp', 
            title: 'Parijat Tree, Parijatak, Night Flowering Jasmine - Plant', 
            description: 'This is the Parijat tree, known for its fragrant flowers and beautiful white petals.' 
        },
        { 
            imgSrc: 'img/fplant2.webp', 
            title: 'Ficus Bonsai - Indoor Plant', 
            description: 'A beautiful Ficus Bonsai, perfect for indoor settings and minimalist decor.' 
        },
        { 
            imgSrc: 'img/fplant3.webp', 
            title: 'Aloe Vera - Medicinal Plant', 
            description: 'Aloe Vera, the ultimate medicinal plant known for its healing properties.' 
        },
        { 
            imgSrc: 'img/fplant4.webp', 
            title: 'Snake Plant - Air Purifying Plant', 
            description: 'This Snake Plant is an excellent air purifier and low-maintenance addition to your home.' 
        },
        { 
            imgSrc: 'img/fplant5.webp', 
            title: 'Peace Lily - Indoor Flowering Plant', 
            description: 'The Peace Lily is known for its lovely white flowers and air purifying capabilities.' 
        },
        { 
            imgSrc: 'img/fplant6.webp', 
            title: 'Money Plant - Feng Shui Plant', 
            description: 'Bring prosperity and positive energy to your home with the Money Plant.' 
        },
    ];

    
    function generatePlantCards() {
        plants.forEach((plant) => {
            
            const randomPrice = Math.floor(Math.random() * 90) + 10; 

            const cardHTML = `
                <div class="max-w-sm bg-white border border-gray-600 rounded-lg shadow dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="${plant.imgSrc}" alt="${plant.title}" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${plant.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 text-gray-400">${plant.description}</p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Buy Now
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            $${randomPrice} 
                        </a>
                    </div>
                </div>
            `;

            
            plantCardsContainer.innerHTML += cardHTML;
        });
    }
    
    generatePlantCards();
}
