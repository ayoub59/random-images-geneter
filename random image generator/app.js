var btn = document.getElementById("btn");
var list = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg", "/images/9.jpg", "/images/10.jpg", "/images/11.jpg", "/images/12.jpg", "/images/13.png", "/images/14.png", "/images/15.png", "/images/16.png", "/images/17.jpg"]
var x = 0;
btn.addEventListener("click", function () {

    document.getElementById("image").src = list[Math.floor(Math.random() * list.length)];
})