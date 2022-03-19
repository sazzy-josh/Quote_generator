let baseurl = 'https://type.fit/api/quotes'
let newQuote = document.getElementById('getQuote');
let tweet = document.getElementById('tweet');
let authur = document.getElementById('authur'); 
let quoteText = document.getElementById('text');
let result = []
let container = document.getElementById('quote')
let loader = document.getElementById("load")
let rotate = document.getElementById('rotate')
var rot = 360;
//remove loader on load of window
 window.addEventListener("load", () =>{
    loader.classList.add('vanish')
} )

rotate.addEventListener('click',() => {
  rotate.style = 'transform: rotate(' + rot + 'deg)';
  rot +=360;
  newQuote.style.color = "black" 
})

//generate new quote and render it to the DOM
function generateQuote(data){
      // newQuote.style.transform = "rotate(-360deg)"
      result = data[Math.floor(Math.random()*data.length)];
    setTimeout(()=>{
      if (result.text.length > 130) {
        quoteText.textContent = result.text
        quoteText.style.fontSize = "18px"
        container.style.height = "65vh"
       }else if(result.text.length <50){
        quoteText.textContent = result.text
        quoteText.style.fontSize = "20px"
        container.style.height = "30vh"
       }
       else {
        quoteText.textContent = result.text
        quoteText.style.fontSize = "20px"
       container.style.height = "45vh"
  
       }
       if (!result.author) {
        authur.textContent = "-Rene ✨" 
       } else {
        authur.textContent = "-"+result.author + "💭" 
       }  
    },2000)    
}

//tweet button sends quote to twitter
function retweet(){
  let query = `https://twitter.com/intent/tweet/?text=${quoteText.textContent} -${authur.textContent}`
  window.open( query, '_blank')
}
tweet.addEventListener('click', retweet)


 
newQuote.addEventListener('click',getQuote)

//Fetch API
 async function getQuote(){  
     try {
         let response = await fetch(baseurl);
         let data = await response.json();
         generateQuote(data);
     } catch(error) {
       console.log(error)
     }
 }

getQuote()




 