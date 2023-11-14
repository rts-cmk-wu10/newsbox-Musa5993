
const categories = [
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sundayreview",
    "technology",
    "theater",
    "t-magazine",
    "travel",
    "upshot",
    "us",
    "world"
]
const CATEGORIES = document.querySelector('.nyhed')

categories.forEach(category => {
    const CATEGORY = document.createElement('details')

    CATEGORY.innerHTML = `
        <summary class="category__summary">
            <img class="category__logo"src="images/logo.png" alt="">
            <h2 class='category__head'>${category}</h2>
            <span class="material-symbols-outlined category__dropdown"><i class="fa-solid fa-chevron-right"></i></span>
            
        </summary>
        `
    const DROPDOWN = CATEGORY.querySelector('.category__dropdown')
    DROPDOWN.addEventListener('click', function () {
        if (DROPDOWN.querySelector('.fa-chevron-right')) {
        DROPDOWN.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
      
        fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=uZhoGPSEKtSyAp1AGwJYzO8qDAJsjMvc`)
            .then(res => res.json())
            .then(data => {
                data.results.forEach(element => {
                    CATEGORY.innerHTML +=
                        `<section class='category__container'>
                        <img src="${element.multimedia[2].url}" alt="">
                        
                        
                            <h3 class='category__headline'>${element.title} </h3>
                            <p class='category__description'>${element.abstract}</p>
                        </section>
                    `
                })
            })
        }  
         else { 
            DROPDOWN.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'

        }

    })

    CATEGORIES.append(CATEGORY)
})

