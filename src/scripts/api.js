
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
            <img class="category__logo"src="images/newyork.png" alt="">
            <h2 class='category__head'>${category}</h2>
            <span class="material-symbols-outlined category__dropdown">more</span>
        </summary>
        `
 
    CATEGORY.querySelector('.category__dropdown').addEventListener('click', function () {
        if (CATEGORY.querySelector('.category__content')) return
 
        fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=uZhoGPSEKtSyAp1AGwJYzO8qDAJsjMvc`)
            .then(res => res.json())
            .then(data => {
                data.results.forEach(element => {
                    CATEGORY.innerHTML += //`
                       // <img src='https://picsum.photos/200' alt='headline picture'
                        `<img src="${element.multimedia[2].url}" alt="">
                        <section class='category__container'>
                            <h3 class='category__headline'>${element.title} </h3>
                            <p class='category__description'>${element.abstract}</p>
                        </section>
                    `
                })
            })
    })
 
    CATEGORIES.append(CATEGORY)  
})

