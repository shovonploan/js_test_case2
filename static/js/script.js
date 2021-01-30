//! Challenge 1
function age(){
    var h1=document.createElement('h1');
    
    var birthYear=prompt("Age ?"); 
    var age = birthYear*365;
    var textAnswer = document.createTextNode("Age in days is " + age)

    h1.setAttribute('id','age')
    h1.style.border = "1px solid black"
    h1.appendChild(textAnswer);

    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('age').remove();
}

//! Challenge 2
function generate(){
    var image = document.createElement('img');    
    var div=document.getElementById('flex-box-gen');
    image.src ="static/img/car.jpg";
    image.setAttribute('id','car_img')
    div.appendChild(image);
}
function removeimg(){
    document.getElementById('car_img').remove();
}

//! Challenge 3
function rpsGame(yourChoice){
    var humanChoice = yourChoice.id;
    console.log(humanChoice);
    var botChoice=makedecision();
    console.log(botChoice);
    var result = decideWinner(humanChoice,botChoice);
    console.log(result);
    var message= finalMessage(result);
    console.log(message);
    rpsFinal(humanChoice,botChoice,message);
}

var rpsDatabase1=["rock","paper","scissor"];
function makedecision(){
    return rpsDatabase1[Math.floor(Math.random()*Math.floor(3))];
}

function decideWinner(yourChoice,botChoice){
    var rpsDatabase2={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'scissor':0,'rock':1,'paper':0.5},
        'scissor':{'scissor':0.5,'rock':0,'paper':1}
    }
    var yourScore = rpsDatabase2[yourChoice][botChoice];
    var botScore = rpsDatabase2[botChoice][yourChoice];
    return [yourScore, botScore];
}

function finalMessage(result){
    if(result[0]==0)
    return {'message': 'You lost', 'color':'red'};
    if(result[0]==0.5)
    return {'message': 'You tied', 'color':'yellow'};
    if(result[0]==1)
    return {'message': 'You Won', 'color':'green'};
}
function rpsFinal(humanChoice,botChoice,message)
{
    var rpsDatabase3={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    var humanDiv= document.createElement('div');
    var messageDiv= document.createElement('div');
    var botDiv= document.createElement('div');
    humanDiv.innerHTML="<img src='"+rpsDatabase3[humanChoice]+"' width=100 height=140 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>";
    messageDiv.innerHTML="<h1 style='color:"+message['color']+"; font-size: 60px; padding: 30px;'>"+message['message']+"</h1>"
    botDiv.innerHTML="<img src='"+rpsDatabase3[botChoice]+"' width=100 height=140 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

function reset3(){
    document.getElementById('flex-box-rps-div').innerHTML= "<img id='rock' src='static/img/rock.png' alt='rock' width=100 height=140 onClick='rpsGame(this)'><img id='paper' src='static/img/paper.jpg' alt='rock' width=100 height=140 onClick='rpsGame(this)'><img id='scissor' src='static/img/scissors.png' alt='rock' width=100 height=140 onClick='rpsGame(this)'>";
}

//! Challenge 4
var all_buttons = document.getElementsByTagName('button')
var copyAllButtons = [];
for(let i = 5; i < all_buttons.length; i++)
{
    copyAllButtons.push(all_buttons[i].classList[1])
}
function buttonColorChange(option){
    if(option.value == 'red')  
        buttonRed();
    else if(option.value == 'green')
        buttonGreen();
    else if(option.value =='random')
        buttonRandom();
    else 
        buttonReset();    
}

function buttonRed(){
    for(let i=5;i < all_buttons.length;++i)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i=5;i < all_buttons.length;++i)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonReset(){
    for(let i=5,j=0;i < all_buttons.length;++i,++j)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[j]);
    }
}

function buttonRandom(){
    var choices = ['btn-danger','btn-primary','btn-success','btn-warning'];
    for(let i=5,j=0;i < all_buttons.length;++i,++j)
    {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[Math.floor(Math.random()*Math.floor(4))]);
    }
}
