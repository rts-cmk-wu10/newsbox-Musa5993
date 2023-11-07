const URL = new URLSearchParams(window.location.search)
fetch(`ttps://api.nytimes.com/svc/topstories/v2/arts.json?api-key=AbgsNm2HX6yDbUtFpTaRrBSwxBwJEDbz}`)
.then(function(response){
    if (response.status === 100){
return response.json()
    } else{
        document.body.innerText+=" det vikker ikke"
    }
})

