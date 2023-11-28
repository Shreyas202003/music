const music=new Audio('audio/7 years.mp3');
// music.play();














let pop_song_left = document.getElementById('pop_song_left'); //fetching id from html
let pop_song_right = document.getElementById('pop_song_right');//fetching id from html
let pop_song = document.getElementsByClassName('pop_song')[0];//fetching id from html

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330; //330 is of about pixel which means length
})


let pop_art_left = document.getElementById('pop_art_left'); //fetching id from html
let pop_art_right = document.getElementById('pop_art_right');//fetching id from html
let item = document.getElementsByClassName('item')[0];//fetching id from html

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330; //330 is of about pixel which means length
})