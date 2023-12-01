const music=new Audio('audio/7 years.mp3');         //music variable declared which cann't be changed
// music.play();

const songs=[{                  //made array for the songs and the cover of songs and it will be allocated through id
	id:'1', 
	songName:`Snap <br>
            <div class="subtitle">Rona linn</div>`,
	image:'img/1.jpg'
	},
	{
	id:'2', 
	songName:`Glass Animals <br>
            <div class="subtitle">Heat waves</div>`,
	image:'img/2.jpg'
	},
{
	id:'3', 
	songName:`Love is gone <br>
            <div class="subtitle">Dylan Matthew and SLANDER</div>`,
	image:'img/3.jpg'
	},
{
	id:'4', 
	songName:`Jugnu <br>
            <div class="subtitle">Baadshah</div>`,
	image:'img/4.jpg'
	},
{
	id:'5', 
	songName:`Let Me Love You <br>
            <div class="subtitle">DJ Snake
</div>`,
	image:'img/5.jpg'
	},
{
	id:'6', 
	songName:`Mausam Mausam Tha Suhana Bada  <br>
            <div class="subtitle">Mayank Maurya</div>`,
	image:'img/6.jpg'
	},
{
	id:'7', 
	songName:`One Kiss <br>
            <div class="subtitle">Scottish DJ</div>`,
	image:'img/7.jpg'
	},
{
	id:'8', 
	songName:`Mood <br>
            <div class="subtitle">Mood</div>`,
	image:'img/8.jpg'
	},
{
	id:'9', 
	songName:`Dil Ko Karar Aaya <br>
            <div class="subtitle">Neha Kakkar and Yasser Desai</div>`,
	image:'img/9.jpg'
	},
{
	id:'10', 
	songName:`Heeriye <br>
            <div class="subtitle">Arjit Sing</div>`,
	image:'img/10.jpg'
	},
{
	id:'11', 
	songName:`Krishna Flute <br>
            <div class="subtitle">Youtuber</div>`,
	image:'img/11.jpg'
	},
{
	id:'12', 
	songName:`Ram Siya Ram <br>
            <div class="subtitle">Ajay-Atul</div>`,
	image:'img/12.jpg'
	},
{
	id:'13', 
	songName:`perfect <br>
            <div class="subtitle">Ed Sheeran</div>`,
	image:'img/13.jpg'
	},
{
	id:'14', 
	songName:`Tu Aake Dekh Le <br>
            <div class="subtitle">King</div>`,
	image:'img/14.jpg'
	},
{
	id:'15', 
	songName:`Summertime Sadness <br>
            <div class="subtitle">Lana Del Rey</div>`,
	image:'img/15.jpg'
	},
	{
	id:'16', 
	songName:`Tu Hai Kahan <br>
            <div class="subtitle">AUR</div>`,
	image:'img/16.jpg'
	},
	{
	id:'17', 
	songName:`Chaleya <br>
            <div class="subtitle">Arjit Singh</div>`,
	image:'img/17.jpg'
	},
	{
	id:'18', 
	songName:`Kesariya <br>
            <div class="subtitle">Arjit Singh</div>`,
	image:'img/18.jpg'
	},
	{
	id:'19', 
	songName:`On My Way <br>
            <div class="subtitle">Alan Walker, Sabrina Carpenter, Farruko</div>`,
	image:'img/19.jpg'
	},
	{
	id:'20', 
	songName:`Libianca - People <br>
            <div class="subtitle">Libianca</div>`,
	image:'img/20.jpg'
	}	
]

Array.from(document.getElementsByClassName('songitem')).forEach((e, i)=>{       //This part of code will allocate the songs and covers with the help of "foreach" loop  
    e.getElementsByTagName('img')[0].src= songs[i].image;
    e.getElementsByTagName('h5')[0].innerHTML= songs[i].songName;
})


//search data 
// let search_result = document.getElementsByClassName('search_result')[0];

// songs.forEach(element => {
// 	const {id, songName, image} = element;
// 	console.log(id,songName,image);
// 	let card = document.createElement('a');
// 	card.classList.add('card');

// 	card.innerHTML = `
// 	<img src="${image}" alt="">
//                             <div class="container">
//                                 ${songName}
//                             </div>`;
	
// 	search_result.appendChild(card);
// });

//search end





let masterplay=document.getElementById('masterplay'); //This is about the master_play button

masterplay.addEventListener('click', ()=>{      //We are suppose to add the event listener click to play the music
    if(music.paused || music.currentTime <=0){
        music.play();                        //this will play the music
        wave.classList.add('active1');                  //This will activate the wave div which indicate that the music is on
        masterplay.classList.add('bi-pause');            //it will add the pause button 
        masterplay.classList.remove('bi-play-fill');        //it will remove the play button
    }
    else{
        music.pause();                      //this will pause the music
        wave.classList.remove('active1');           //This will deactivate the wave div which indicate that the music is on
        masterplay.classList.add('bi-play-fill');           //it will add the play button
        masterplay.classList.remove('bi-pause');            //it will remove the pause button
    }
})


const makeallbackground = ()=>{ 			//To make the background of the song list active while it is playing
	Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
		el.style.background = "rgb(105, 105, 105, .0)";	//here the opacity is 0
	})
}


const makeplay = ()=>{ 			
	Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
		el.classList.remove("bi-pause-circle-fill");           
        el.classList.add("bi-play-circle-fill");
	})
}



let index=0;
let poster_master_play = document.getElementById('poster_master_play');	//getting the id "poster_master_play"
let download_music = document.getElementById('download_music');	//getting the id "download_music"
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e, i)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;	//change the song from the default music audio to clicked one 
        poster_master_play.src = `img/${index}.jpg`;	//change the image from the default image to current song 
        music.play();
        masterplay.classList.add('bi-pause');            
        masterplay.classList.remove('bi-play-fill');
		download_music.href = `audio/${index}.mp3`;
        let songtitles = songs.filter((els) =>{
            return els.id == index;
        });

        songtitles.forEach(elss =>{  	//with the help filter we were fetch the data from the 'songs array' for changing the name from default master-play
            let {songName} = elss;
            title.innerHTML = songName;
			download_music.setAttribute('download',songName);

        })


		makeallbackground(); 	//Function called 
		Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105,105,105,.1)"; //here we made the opacity to 1

		makeplay();
		el.target.classList.add("bi-pause-circle-fill");
		el.target.classList.remove("bi-play-circle-fill");
		wave.classList.add('active1');


    })
})


//control the bar 

let currentstart = document.getElementById("currentstart"); //timing of music
let currentend = document.getElementById("currentend");
let seek = document.getElementById("seek");	// input html progress bar
let bar2 = document.getElementById("bar2");		// designed progress bar with the help of css
let dot = document.getElementsByClassName("dot")[0]; 

music.addEventListener('timeupdate', ()=>{
	let music_curr = music.currentTime;	//assigning the current time of music
	let music_dur = music.duration;		//assigning the duration of music

	let min1 = Math.floor(music_dur/60);	//round down and returns the largest integer less than or equal to a given number
	let sec1 = Math.floor(music_dur%60);

	// console.log(min1 , sec1);

	if(sec1<10){     //here if the time span is 0:0 then it will add zero and convert to 0:00
		sec1 = `0${sec1}`;
	}
	currentend.innerHTML = `${min1}:${sec1}`; //It will the actual time duration of the music which will present at the last
	
	let min2 = Math.floor(music_curr / 60);
	let sec2 = Math.floor(music_curr % 60);
	if (sec2 <10){
		sec2 = `0${sec2}`;
	}
	currentstart.innerHTML = `${min2}:${sec2}`;

	let progrebar = parseInt((music_curr / music_dur)*100);
	seek.value = progrebar;
	// console.log(seek.value);


	let seekbar = seek.value;
	bar2.style.width = `${seekbar}%`;
	dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
	let music_curr = music.currentTime;	
	let music_dur = music.duration;
	music_curr = seek.value * music_dur /100
})





//To increase and decrease the volume 

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
	if(vol.value == 0){
		vol_icon.classList.remove('bi-volume-up-fill');
		vol_icon.classList.remove('bi-volume-down-fill');
		vol_icon.classList.add('bi-volume-off-fill');
	}
	if(vol.value > 0){
		vol_icon.classList.remove('bi-volume-up-fill');
		vol_icon.classList.add('bi-volume-down-fill');
		vol_icon.classList.remove('bi-volume-off-fill');
	}
	if(vol.value > 50){
		vol_icon.classList.add('bi-volume-up-fill');
		vol_icon.classList.remove('bi-volume-down-fill');
		vol_icon.classList.remove('bi-volume-off-fill');
	}
	let vol_a = vol.value;
	vol_bar.style.width = `${vol_a}%`;
	vol_dot.style.left = `${vol_a}%`;
	music.volume = vol_a/100;
	
})


let back = document.getElementById("back");
let next = document.getElementById("next");

//To play the previous song
back.addEventListener('click', ()=>{
	index -= 1;

	if (index < 1) {
		index = Array.from(document.getElementsByClassName('songitem')).length;
	}
	music.src = `audio/${index}.mp3`;	//change the song from the default music audio to clicked one 
	poster_master_play.src = `img/${index}.jpg`;	//change the image from the default image to current song 
	music.play();
	masterplay.classList.add('bi-pause');            
	masterplay.classList.remove('bi-play-fill');

	let songtitles = songs.filter((els) =>{
		return els.id == index;
	});

	songtitles.forEach(elss =>{  	//with the help filter we were fetch the data from the 'songs array' for changing the name from default master-play
		let {songName} = elss;
		title.innerHTML = songName;
	})

	makeallbackground(); 	//Function called 
	Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105,105,105,.1)"; //here we made the opacity to 1

	makeplay();
	el.target.classList.add("bi-pause-circle-fill");
	el.target.classList.remove("bi-play-circle-fill");
	wave.classList.add('active1');
})


//To play the next song 
next.addEventListener('click', (el)=>{
	index += 1;
	if (index > Array.from(document.getElementsByClassName('songitem')).length) {
		index = 1; 
	}
	music.src = `audio/${index}.mp3`;	//change the song from the default music audio to clicked one 
	poster_master_play.src = `img/${index}.jpg`;	//change the image from the default image to current song 
	music.play();
	masterplay.classList.add('bi-pause');            
	masterplay.classList.remove('bi-play-fill');

	let songtitles = songs.filter((els) =>{
		return els.id == index;
	});

	songtitles.forEach(elss =>{  	//with the help filter we were fetch the data from the 'songs array' for changing the name from default master-play
		let {songName} = elss;
		title.innerHTML = songName;
	})

	makeallbackground(); 	//Function called 
	Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105,105,105,.1)"; //here we made the opacity to 1

	makeplay();
	el.target.classList.add("bi-pause-circle-fill");
	el.target.classList.remove("bi-play-circle-fill");
	wave.classList.add('active1');
})



//Popular song div...  to scroll the music

let pop_song_left = document.getElementById('pop_song_left'); //fetching id from html
let pop_song_right = document.getElementById('pop_song_right');//fetching id from html
let pop_song = document.getElementsByClassName('pop_song')[0];//fetching id from html

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330; //330 is of about pixel which means length
})


 //popular artists div .... to scroll the photos

let pop_art_left = document.getElementById('pop_art_left'); //fetching id from html
let pop_art_right = document.getElementById('pop_art_right');//fetching id from html
let item = document.getElementsByClassName('item')[0];//fetching id from html

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330; //330 is of about pixel which means length
})




//When the music gets end the next music is automatically it will run
music.addEventListener('ended', (el)=>{

	index ++;
	if( index > Array.from(document.getElementsByClassName('songitem')).length){
		index = 1;
	}
	music.src = `audio/${index}.mp3`;	//change the song from the default music audio to clicked one 
	poster_master_play.src = `img/${index}.jpg`;	//change the image from the default image to current song 
	music.play();
	masterplay.classList.add('bi-pause');            
	masterplay.classList.remove('bi-play-fill');

	let songtitles = songs.filter((els) =>{
		return els.id == index;
	});

	songtitles.forEach(elss =>{  	//with the help filter we were fetch the data from the 'songs array' for changing the name from default master-play
		let {songName} = elss;
		title.innerHTML = songName;
	})

	makeallbackground(); 	//Function called 
	Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105,105,105,.1)"; //here we made the opacity to 1

	makeplay();
	el.target.classList.add("bi-pause-circle-fill");
	el.target.classList.remove("bi-play-circle-fill");
	wave.classList.add('active1');
})



// down side of the nav bar song XXTentaction 

// let container_play = document.getElementById('container_play');

// container_play.addEventListener('click', ()=>{
// 	// console.log(ele);
// 	const sv =new Audio('audio/XXXTENTACION - HOPE.mp3');
// 	if(music.paused || music.currentTime <=0){
//         sv.play();   
// 		// music.pause();                     //this will play the music
//         wave.classList.add('active1');                  //This will activate the wave div which indicate that the music is on
//         container_play.innerHTML = "PAUSE";
// 		masterplay.classList.remove('bi-play-fill');           //it will add the play button
//         masterplay.classList.add('bi-pause'); 
// 		title.innerHTML = 'XXXTENTACION'
// 		poster_master_play.src = "xxx.jpg"
//     }
// 	else{
//         sv.pause();    
// 		// music .play();                  //this will pause the music
//         wave.classList.remove('active1');           //This will deactivate the wave div which indicate that the music is on
//         masterplay.classList.add('bi-play-fill');           //it will add the play button
//         masterplay.classList.remove('bi-pause');            //it will remove the pause button
//     }
// })