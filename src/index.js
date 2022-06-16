    console.log('%c HI', 'color: firebrick')
    const container = document.querySelector("#dog-image-container")
    // console.log(container)
     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
     const ulContainer = document.querySelector("#dog-breeds")
     const dropDown = document.querySelector("#breed-dropdown")
     let breedsArray = []

    ulContainer.addEventListener('click',clickHandler)
    dropDown.addEventListener('change',changeHandler)


     function getImages(){
    fetch (imgUrl)
    .then(resp => resp.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImgElement(imgs)
        renderElement(imgsArray)
    
    })
        
    }

    function createImgElement(imgs) {
        return imgs.map((img) => {
            let i = `<img src = ${img}>`
            return i

        }) 

    }

    function renderElement(imgsArray) {
        imgsArray.forEach(element => {
            renderElement(element)
        });
        
    }

    function renderElement(element){
        ulContainer.innerHTML += element
        
    }

    function getBreeds(){
        fetch (breedUrl)
        .then(resp => resp.json())
        .then(breeds => {
            breedsArray = Object.keys(breeds.message)
            const breedsLis = createLiElement(breedsArray)
            renderLis(breedsLis)
            // let imgsArray = createImgElement(imgs)
            // renderImg(imgsArray)
        
        })
            
        }
    
        function createLiElement(breedsArray) {
            return breedsArray.map((breed) => {
                let li = `<li>${breed}</li>`
                return li
    
            }) 
    
        }

        function renderLis(breedsLis) {
            breedsLis.forEach(element => {
                renderElement(element)
            });
            
        }

        function clickHandler(event){
            if (event.target.nodeName === 'LI') {
        
            if (event.target.style.color === 'red') {
                event.target.style.color = 'black'
            } else {
                event.target.style.color = 'red'
            } 
        }   
        }

        function changeHandler (event) {
            const letter = event.target.value
            console.log (breedsArray)
            const filteredBreeds = breedsArray.filter (breed => breed.startsWith(letter))
            const filteredBreedLis = createLiElement(filteredBreeds)
            ulContainer.innerHTML = ''
            renderLis(filteredBreedLis)
        }
    // getImages()
    getBreeds()
