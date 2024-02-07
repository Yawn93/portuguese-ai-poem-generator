function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    let loadingElement = document.querySelector("#loading");

    loadingElement.innerHTML = "Your poem is being generated... ⌛";
    loadingElement.style.display = "block";
    poemElement.style.display = "none";

    let apiKey = "b8453383f75c0afafd7ft88f33789o5a";
    let inputValue = document.getElementById("input-prompt").value;
    let prompt = `generate a four-line poem in PT/PT about ${inputValue}. I want one verse per line.`;
    let context = "make sure you write one poem-verse per line. It needs to have four lines of text. Use the <br> elements to separate the lines of the poem.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then((response) => {

        console.log(prompt);
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

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
