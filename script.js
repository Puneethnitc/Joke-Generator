const jokeBtn=document.querySelector("#joke-gen");
let joke=document.querySelector("p");
async function getJoke()
{
  const  response= await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
const data=await response.json();
return data;
}
jokeBtn.addEventListener("click",async ()=>{
    let data=await getJoke();
    if(joke.innerText=='')
    joke.innerText=data["joke"];
    else
    {
        joke.innerText='';
        joke.innerText=data["joke"];
    }
});
