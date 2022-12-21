/* Declare variables below to save the different sections (divs) of your story*/
let button1 = document.querySelector(".option-one")
let button2 = document.querySelector(".option-two")
let Div = document.querySelector("div")
let optiononescreen = document.querySelector(".option-one-screen")
let h1 = document.querySelector("h1")
let img = document.querySelector("img")
let optiontwoscreen = document.querySelector(".option-two-screen")
let optiononeend = document.querySelector(".option-one-end")
let optiontwoend = document.querySelector(".option-two-end")
let yes1 = document.querySelector(".yes1")
let yes2 = document.querySelector(".yes2")
let no1 = document.querySelector(".no1")
let no2 = document.querySelector(".no2")
let noend = document.querySelector(".no-end")
let refresh = document.querySelector(".Refresh")
let thunder = document.querySelector(".Thunder")
let spell1 = document.querySelector(".Spell1")
let beam = document.querySelector(".Beam")
let spell2 = document.querySelector(".Spell2")
let click = document.querySelector(".Click")
let surprise =  document.querySelector(".surprise")
let blade = document.querySelector(".Blade")
let spell3 = document.querySelector(".Spell3")
let slam = document.querySelector(".Slam")
let spell4 = document.querySelector(".Spell4")



button1.onclick=function(){
  optiononescreen.style.display = "block"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
   click.style.display = "none"
  secret.style.display = "none"
};


button2.onclick=function(){
  optiontwoscreen.style.display = "block"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
   click.style.display = "none"
  secret.style.display = "none"
};


yes1.onclick=function(){
optiononeend.style.display = "block"
  optiononescreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
   click.style.display = "none"
  secret.style.display = "none"
};

yes2.onclick=function(){
optiontwoend.style.display = "block"
  optiontwoscreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
   click.style.display = "none"
  secret.style.display = "none"
};

no1.onclick=function(){
  noend.style.display = "block"
    optiononescreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
  refresh.style.display = "block"
   click.style.display = "none"
  secret.style.display = "none"
}

no2.onclick=function(){
  noend.style.display = "block"
    optiontwoscreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
  refresh.style.display = "block"
   click.style.display = "none"
  secret.style.display = "none"
}

thunder.onclick=function(){
  spell1.style.display = "block"
  optiononeend.style.display = "none"
  optiononescreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
  refresh.style.display = "block"
   click.style.display = "none"
  secret.style.display = "none"
}

beam.onclick=function(){
  spell2.style.display = "block"
  optiononeend.style.display = "none"
  optiononescreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
  refresh.style.display = "block"
  click.style.display = "none"
  secret.style.display = "none"
}

click.onclick=function(){
  surprise.style.display = "block"
    Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
   click.style.display = "none"
  secret.style.display = "none"
}




blade.onclick=function(){
  spell3.style.display = "block"
  optiontwoend.style.display = "none"
  optiontwoscreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
  refresh.style.display = "block"
  click.style.display = "none"
  secret.style.display = "none"
}


slam.onclick=function(){
  spell4.style.display = "block"
  optiontwoend.style.display = "none"
  optiontwoscreen.style.display = "none"
  Div.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  h1.style.display = "none"
  img.style.display = "none"
   refresh.style.display = "block"
  click.style.display = "none"
  secret.style.display = "none"
}

button1.onmouseover=function(){
  button1.innerHTML = "🧙"
}

button2.onmouseover=function(){
  button2.innerHTML = "🤺"
}