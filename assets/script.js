//C'est un tableau avec les 4 images
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]


//C'est une let avec la longueur du tableau
let n = slides.length; //Et vrai n = 3 ou 4
//C'est une const de dots
const dots = document.querySelector('.dots');
//                                                            let c'est pour si on veut changer le nbr d'images ou de points
//Cest une boucle for
for (let i = 0; i < n; i++) {//i=0 et du temps que i<3 i++ 
    let dot = document.createElement('div');//On crée une div
    dot.className = 'dot';//Avec un nom
    dots.appendChild(dot);//Et un élément parents //dot c'est l'enfant de dots
    console.log(dot)
}

//Pour marquer le début
let imageIndice = 0; // ?? dots.appendChild(dot)                   
let dotsChildren = dots.children;//Pour quoi c'est pas dot

const banner = document.querySelector('.banner-img');//L'image
console.log(banner)
const paragraphe = document.querySelector('#banner p');//Le texte
console.log(paragraphe)
const selectedDot = [...document.querySelectorAll('.dot')]; //Un tableau avec les points
console.log(selectedDot)

banner.src = "./assets/images/slideshow/" + slides[imageIndice]["image"];//+ slides[imageIndice]
paragraphe.innerHTML = slides[imageIndice]["tagLine"];                   // On part de 0 et on change l'image
//On part de 0 et on change le texte

 
const flecheG = document.querySelector('.fléche-gauche');//Une fléche
const flecheD = document.querySelector('.fléche-droite');//Une autre

flecheG.addEventListener('click', function () {//Au click il y a une fonction
    
    imageIndice--;
    if (imageIndice < 0) {//C'est pour que ça fasse le tour (0 = début) et (n-1 = fin)
        imageIndice = n - 1;
    }
    banner.src = "./assets/images/slideshow/" + slides[imageIndice]["image"];//C'est pour changer d'image
    paragraphe.innerHTML = slides[imageIndice]["tagLine"];//C'est pour changer le texte
	whitePoint()
});

flecheD.addEventListener('click', function () {
    imageIndice++;
    if (imageIndice > n - 1) {
        imageIndice = 0;
    
    }
    banner.src = "./assets/images/slideshow/" + slides[imageIndice]["image"];
    paragraphe.innerHTML = slides[imageIndice]["tagLine"];
	whitePoint()	
});


function whitePoint() {
	for(let i = 0; i < n; i++ ) {
		if(i === imageIndice){
			selectedDot[i].classList.add("dot_selected");
		}
		else {
			selectedDot[i].classList.remove("dot_selected");
		}
	   }
}
