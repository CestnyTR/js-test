const bob=document.querySelector('.face')
let count=0
function moveBob() {
    count+=50
   bob.style.left = count+'px';
   if (count==500) {
    count=0
   }
    console.log("tıklandı")
}
bob.addEventListener('click',moveBob)

const balls = document.querySelectorAll('.ball')
console.log(balls)

//.concat-.join
const array1=[1,2,3]
const array2=[4,5,6]
const array3=[7,8,9]
const newArray=array1.concat(array2,array3)
console.log(newArray);
const newArray2= newArray.join('')
console.log(newArray2);
const show=[
    {name:"lupin series",series:1,episodes:5},
    {name:"Cobra Kai",series:3,episodes:30},
    {name:"24",series:5,episodes:50},
    {name:"Mr.Robot",series:3,episodes:24}]
    const showFilter= show.filter(x=>x.series>2)
    console.log(showFilter);

//.reduce array.reduce((value1, value2)=>value1+ value2)
const scores=[34,56,24,31]
const total=scores.reduce((x,y)=> x+y)
console.log(total);

//some,every
const num=[30,45,60,65,85,90,50]
const evryNum=num.every(x=>x>50)
console.log(evryNum);
const someNum=num.some(x=>x>30)
console.log(someNum);

// split
const sentence="this is split verb"
console.log(sentence.split(" "));

//DEMOs
//map: dize içindeki değerler hesaplanabilir ve değiştirlibelir
function getCelcius(){       
    const fahrenheit=[23,140,212,41]
    return fahrenheit.map(x=>(x-32) * 5/9);
}
console.log(getCelcius());   
//some : istenilen koşuldan bir tanesi bile sağlanıyorsa true döner
function checkForFalsey(){
    const check=["rabit","Footboll","cracking"]
    return check.some(x=>x==="rbit")
}
console.log(checkForFalsey()); 

//reduce: dizede toplam değerler gösterilir
function getTotal(){
    const all=["rabbit","Football","cracking"]
   // way 1
    return all.reduce((x,y)=> x+y).split("").length
    // way 2
    return all.reduce((total,word)=> total + all.length, 0)
}
console.log(getTotal()); 

//every: istenilen koşullardan bir tanesi bile sağlanmıyorsa false döner
function checkSquares() {
    const check=[9,16,81,2]
    return check.every(x=>Math.sqrt(x)%1===0)
}
console.log(checkSquares());

// filter: dizeden istenilen koşularrı sağlıyan verileri çekmemizi sağlar
function getWords() {
    const words=["Florida","dog","phone",5]
    return words.filter(x=> x.length>=5)
}
console.log(getWords());

function getValues(number){
    return number.map(value=> parseFloat(value))
}
console.log(getValues(["23cm","5.6cm","1000cm"]));

function getVowelCount(sentenceV){
    const vowels=["a","e","ı","o","ü","i","ö","u","A","E","I","O","Ü","İ","Ö","U"]
    return sentenceV.split("").filter(x=> vowels.includes(x)).length   
}
console.log(getVowelCount("In west philadelphia , born and raised"));

function capitalise(sentence){
    return sentence.split(" ").map(x=>x.charAt(0).toUpperCase()+x.substr(1)).join(" ")
}
console.log(capitalise("the quinn gambit"));

// .addEventListener()
//target.addEventListener(event,function)
const ball=document.getElementById("ball")
function alertMe() {
    console.log("clicked")
}
ball.addEventListener('click',alertMe)
ball.addEventListener('mouseover',alertMe)

//remove EventListener
//color change
let count1=0
function toggleColor(){
ball.classList.toggle("red-ball") 
count1++
if(count1>10){ball.removeEventListener("click",toggleColor)
}
}
ball.addEventListener("click",toggleColor)

// height change
let height=0;
function styleHeight(){
height+=50
ball.style.top=height+"px";
if(height>300){ball.removeEventListener("click",styleHeight)
}
}
ball.addEventListener("click",styleHeight)

//.querySelector()

//Math
//Math.random()
console.log(Math.random())//0 to <1 aroun
//Math.floor()
console.log(Math.floor(1.9)); // virgüllü sayıları yuvarlar düşük sayıya
//Math.ceil() 
console.log(Math.ceil(1.1)); // virgüllü sayıları yuvarlar yüksek sayıya
//Math.round()
console.log(Math.round(1.4)); //virgüllü sayıları yuvarlar en yakın sayıya 0.5'i 1'e yuvarlar 
//random DEMOs
function randomList(menu) {
    return menu[Math.round(Math.random()*(menu.length-1))]
} 
console.log(randomList(["vodka","vine","beer","mocktail"]));

//Date 
 const today= new Date() //bugünün tarihi
const date=today.getDate()// ayın kaçıncı gününde olduğumuzu gösterir
const day=today.getFullYear()// yıl gösterir
const hour=today.getHours()//sistem saatini gösterir
const isoString=today.toISOString()// yıll,ay,gün ve saati gösterir
console.log(isoString);
const  displayDate=document.querySelector(".ball")
const christmas=new Date("2023-12-24T14:42:17.544Z")
const millSecounsToXmas=christmas-today
const minutes=millSecounsToXmas/60000
displayDate.innerHTML=Math.round(minutes)

//setTimeOut(function,millisecounds)
const  timersShow=document.querySelector(".ball")
const time=3000
function showText(){
    timersShow.innerHTML=" timers work succesfuly congrats"
}
setTimeout(showText,time)
const time2=6000
function deleteText(){
    timersShow.innerHTML=""
}
setTimeout(deleteText,time2)

//setInterval() verilen mili saniyede tekrar eder
//setInterval(function,millisecounds)
const ballSetInterval=document.querySelector(".ball")
const textAlert="Alert"
const time1=2000
let count2=0
let height1=100

//way1
//setInterval(function(){console.log(text);},time),
function showAlert(){
    height1+=50
    ballSetInterval.style.top=height1+"px"
    const textDisplay=document.createElement('div')
    textDisplay.innerHTML=textAlert   
    ballSetInterval.appendChild(textDisplay)
    console.log("working") 
    count2++ 
    if (count2==5) {
        clearInterval(timerID) // sonsuz setInterval döngüsünü bitrmek için kullanılır
    }
}
const timerID=setInterval(showAlert,time1)
//clearInvertal()
//clearInterval(timerID)
