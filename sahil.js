console.log("gaana");
let songIndex=0;

let audioElement=new Audio("Go-Down-Deh(PagalWorld).mp3");
let masterPlay= document.getElementById('masterPlay');
let myProgressbar=document.getElementById('mayProgressbar');


let songs=[
    {songName:"go down deh",filepath:"gaana\Go-Down-Deh(PagalWorld).mp3" , coverpath:"gaana\maxresdefault.jpg "},
]

masterPlay.addEventListener('click',()=>{
    if audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})


myProgressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})

