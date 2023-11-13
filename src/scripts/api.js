
const URL = new URLSearchParams(window.location.search)
export default (async function () {
    const NEWS = document.querySelector(".nyhed")
    //her får jeg fat i min div i min html 
    await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s')
        .then(response => response.json())
        
        .then(data => {
         

            data.results.forEach((element, index) => {
                if (index >= 10) return
                // her kalder jeg at jeg skal kun have 10 af element så jeg sætter en limte på dem  at de skal hvis list er mere end 10 skal den kom til den første 

                NEWS.innerHTML += `<img src="${element.multimedia[2].url}" alt="" srcset="">`
                // her siger jeg første at den skal kalde på min div og så ind i min div skal den lave en img tag hvor den skal vise min billde i 
                    NEWS.innerHTML += `<h2>${element.title}</h2>`
                    //her siger at den skal lave en h2 i min html og tage fat i element title fra api 
                NEWS.innerHTML += `<p>${element.abstract}</p"`
                //her siger at den skal lave nogle p tag ved at få fat i element og der efter i abstract for at få fat i nogle tekst
                
                    ;
            });
            console.log(data);
        });
})()