var bg = [
    './assets/background/1.jpg',
    './assets/background/images.jpg',
    './assets/background/tải xuống.jpg'
];
document.querySelector("#bg1").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[0];
});
document.querySelector("#bg2").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[1];
});
document.querySelector("#bg3").addEventListener("click",function(){
    document.querySelector("#background_image img").src= bg[2];
});
var audioSources = [
    'assets/audio/1.mp3',
    'assets/audio/2.mp3','assets/audio/3.mp3'
];
document.querySelector("#sound1").addEventListener("click",function(){
    document.querySelector("#amthanhcuabienca source").src = audioSources[0];
    document.querySelector("#amthanhcuabienca").load();
    document.querySelector("#amthanhcuabienca").play();
});
document.querySelector("#sound2").addEventListener("click",function(){
    document.querySelector("#amthanhcuabienca source").src = audioSources[1];
    document.querySelector("#amthanhcuabienca").load();
    document.querySelector("#amthanhcuabienca").play();
});
document.querySelector("#sound3").addEventListener("click",function(){
    document.querySelector("#amthanhcuabienca source").src = audioSources[2];
    document.querySelector("#amthanhcuabienca").load();
    document.querySelector("#amthanhcuabienca").play();
});