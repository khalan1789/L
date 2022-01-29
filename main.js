// faire appel api
const apiToFetch = 'https://forza-api.tk/'

// sélection du bouton
const btn = document.getElementById('btn')

// comptage des clics
let totalClicks = 0;

// fonction au clic du bouton : doit faire l'appel api et changer l'image dans la zone d'image suite au retour api
const imgDiv = document.getElementsByClassName('img-contain');
function searchImg () {
    const imgContainer = document.querySelector(".img-contain")
    const imgLoaded = document.querySelector(".img-loaded")
    if(imgLoaded) {
        imgContainer.removeChild(imgLoaded)
    }
    fetch(apiToFetch)
    .then((response) => response.json())
    // .then((image) => console.log(image.image))
    .then((data) => {
        const dataImg = data.image;
        console.log(dataImg)
    //     const imgDiv = `<img src=dataImg />`
      imgContainer.insertAdjacentHTML("afterbegin", `<img class="img-loaded" src=${data.image} alt="photo de voiture"/>`);
      totalClicks +=1;
      console.log("clicks :" +totalClicks)
      commentInfo(totalClicks)
    } )
}

btn.addEventListener("click", searchImg)

//   partie commentaires suite aux clics  //
const infoParagraph = document.querySelector('.small-info');

// zone info sous le click
function commentInfo (count){
     if(count == 2){
           infoParagraph.innerHTML = "Ah ça y es ça commence à venir !"
      }
    if(count == 4){
          infoParagraph.innerHTML= "Là ça devient mieux déjà, hein !!?";
      }
    if(count == 7){
        infoParagraph.innerHTML= "On est pas bien là 😀 !!!??"
    }
    if(count == 10){
        infoParagraph.innerHTML= "Va falloir penser à l'état de la souris par contre là...."
    }
    if(count == 12){
        infoParagraph.innerHTML= "Oula cela commence à devenir inquiétant, il faudrait se calmer maintenant 🙄🙄"
    }
    if(count == 14){
        infoParagraph.innerHTML= "Bon ça va c'est marrant 2 min mais va falloir penser à consulter là !!! 😵😵😵"
    }
    if(count == 16){
        infoParagraph.innerHTML= "Houston on a un problème, je répète Houston on a un problème !!!"
    }
     if(count == 18){
        infoParagraph.innerHTML= "C'est une bonne situation ça scribe ??"
    }
    if(count == 20){
        infoParagraph.innerHTML= "les chaussettes de l'archiduchesse sont elles sèchent ou archisèchent ??"
    }
    if(count == 22){
        infoParagraph.innerHTML= "essayez de cliquer sans les doigts maintenant !"
    }
    if(count == 23){
        infoParagraph.innerHTML= "bon sans le nez maintenant !"
    }
    if(count == 24){
        infoParagraph.innerHTML= "et sans le front !?"
    }
    if(count == 25){
        infoParagraph.innerHTML= "sans le coude ??????"
    }
     if(count == 26){
        infoParagraph.innerHTML= "sans les pieds ni les genoux !!????????"
    }
    if(count == 27){
        infoParagraph.innerHTML= "me dit pas que t'as fait avec langue 😨😨🥶🥵!!???  Gros dégueux va 🤢🤮 !!!"
    }
    if(count == 29){
        infoParagraph.innerHTML= " 🎆🎇🎆 Félicitations vous avez atteint le dernier niveau! Cela prouve bien qu'à l'image de l'auteur de ce site, vous êtes complètement con 🎆🎇🎆 !!!!! 😁... mais je ne veux pas savoir avec quoi vous avez cliqué par contre.............. "
    }
}
