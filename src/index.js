let apiKey = "b8453383f75c0afafd7ft88f33789o5a";
let inputElement = document.querySelector("#input");
let context = `user instructions are: generate a poem about ${inputElement.value}, they need to be in PT/PT not PT/BR. Please sign with ShecodesAI at the end of the poem. Make sure to not repeat the same poem. I want four lines: one verse per line.`;
let prompt = "generate a four-line poem in Portuguese in basic HTML, I want one verse line and then, <br>, and then the other. Make sure to follow the user instructions.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    let loadingElement = document.querySelector("#loading");

    loadingElement.innerHTML = "Your poem is being generated... ⌛";
    loadingElement.style.display = "block";
    poemElement.style.display = "none";

    axios.get(apiUrl).then((response) => {
        console.log(response); 
        poemElement.innerHTML = response.data.answer;
        loadingElement.style.display = "none";
        poemElement.style.display = "block";

        new Typewriter("#poem", {
            strings: [response.data.answer],
            autoStart: true,
            pauseFor: 100000,
            cursor: "",
            delay: 50,
        });
    });
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generatePoem);
