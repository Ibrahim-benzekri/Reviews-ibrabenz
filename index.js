//_____________________________________________________Arrows____________________________________________
let left = document.getElementById("left");
let right = document.getElementById("right");
let person = 1;
let pic = document.getElementById("ibrapic");
let pname = document.getElementById("name");
let prof = document.getElementById("profession");
let parag = document.getElementById("paragraph");
let rand = 1;

left.addEventListener("mouseover",()=>{
    left.style.color = "darkblue";
    left.style.textShadow = "2px 2px 2px gray";
});

left.addEventListener("mouseleave",()=>{
    left.style.color = "skyblue";
    left.style.textShadow = "";
});

right.addEventListener("mouseover",()=>{
    right.style.color = "darkblue";
    right.style.textShadow = "2px 2px 2px gray";
});

right.addEventListener("mouseleave",()=>{
    right.style.color = "skyblue";
    right.style.textShadow = "";
});

left.addEventListener("click",toLeft);
right.addEventListener("click",toRight);

function toLeft(){
    switch(person){
        case 1:
            pic.src = "ayoub.jpeg";
            pname.textContent = "Ayoub BEN AYYAD";
            prof.textContent = "Software engineer";
            parag.textContent = `hello, I am a ${prof.textContent} . I study at the National School of Applied Sciences,Fes. I am in the third year and I love CSS`;
            person = 3;
            break;
        case 2:
            pic.src = "ibrapic.jpg";
            pname.textContent = "Ibrahim BENZEKRI ARABI";
            prof.textContent = "Software engineer";
            parag.textContent = `hello, I am a ${prof.textContent} . I study at the National School of Applied Sciences,Fes. I am in the third year and I love javascript`;
            person = 1;
            break;
        case 3:
            pic.src = "adam.jpeg";
            pname.textContent = "Adam HOULIHAL";
            prof.textContent = "Cyber security engineer";
            parag.textContent = `hello, I am a ${prof.textContent}. I study at the National School of Applied Sciences,Fes. I am in the third year and I love Linux`;
            person = 2;
            break;
    }
}

function toRight(){
    switch(person){
        case 1:
            pic.src = "adam.jpeg";
            pname.textContent = "Adam HOULIHAL";
            prof.textContent = "Cyber security engineer";
            parag.textContent = `hello, I am a ${prof.textContent}. I study at the National School of Applied Sciences,Fes. I am in the third year and I love Linux`;
            person = 2;
            break;
        case 2:
            pic.src = "ayoub.jpeg";
            pname.textContent = "Ayoub BEN AYYAD";
            prof.textContent = "Software engineer";
            parag.textContent = `hello, I am a ${prof.textContent} . I study at the National School of Applied Sciences,Fes. I am in the third year and I love CSS`;
            person = 3;
            break;
        case 3:
            pic.src = "ibrapic.jpg";
            pname.textContent = "Ibrahim BENZEKRI ARABI";
            prof.textContent = "Software engineer";
            parag.textContent = `hello, I am a ${prof.textContent} . I study at the National School of Applied Sciences,Fes. I am in the third year and I love javascript`;
            person = 1;
            break;
    }
}
//________________________________________________________________________________________________________________

let surprise = document.getElementById("surprise");

surprise.addEventListener("mouseover",()=>{
    surprise.style.backgroundColor = "skyblue";
    surprise.style.color = "aliceblue";
    surprise.style.borderColor = "aliceblue";
    surprise.style.boxShadow = "10px 10px 10px lightgray" ;
});
surprise.addEventListener("mouseleave",()=>{
    surprise.style.backgroundColor = "aliceblue";
    surprise.style.color = "skyblue";
    surprise.style.borderColor = "skyblue";
    surprise.style.boxShadow = "" ;
});
 surprise.addEventListener("click",randPerson);

 function randPerson(){
    rand = Math.floor((Math.random()*3)+1);
    switch(rand){
        case 1:
            pic.src = "ibrapic.jpg";
            pname.textContent = "Ibrahim BENZEKRI ARABI";
            prof.textContent = "Software engineer";
            parag.textContent = `hello, I am a ${prof.textContent} . I study at the National School of Applied Sciences,Fes. I am in the third year and I love javascript`;
            person = 1;
            break;
        case 2:
            pic.src = "adam.jpeg";
            pname.textContent = "Adam HOULIHAL";
            prof.textContent = "Cyber security engineer";
            parag.textContent = `hello, I am a ${prof.textContent}. I study at the National School of Applied Sciences,Fes. I am in the third year and I love Linux`;
            person = 2;
            break;
        case 3:
            pic.src = "ayoub.jpeg";
            pname.textContent = "Ayoub BEN AYYAD";
            prof.textContent = "Software engineer";
            parag.textContent = `hello, I am a ${prof.textContent} . I study at the National School of Applied Sciences,Fes. I am in the third year and I love CSS`;
            person = 3;
            break;
    }
 }