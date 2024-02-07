let apiKey = "b8453383f75c0afafd7ft88f33789o5a";
let inputElement = document.querySelector("#input");
let context = `generate poems about ${inputElement.value}, they need to be in PT/PT not PT/BR. Please sign with ShecodesAI at the end of the poem`;
let prompt = "generate poems in Portuguese";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

function showAnswer() {
    let buttonElement = document.querySelector("#submit");
    let poemElement = document.querySelector("#poem");
    let loading = document.querySelector("#loading");
  
    buttonElement.addEventListener("click", () => {
      loading.innerHTML = "Your poem is being generated... ⌛";
      loading.style.display = "block";
      poemElement.style.display = "none";
      
      axios.get(apiUrl).then((response) => {
        poemElement.innerHTML = response.data.answer;
        loading.style.display = "none";
        poemElement.style.display = "block";
  
        new Typewriter("#poem", {
          strings: [response.data.answer],
          autoStart: true,
          pauseFor: 100000,
          cursor: "",
          delay: 50,
        });
      });
    });
  }
  
  showAnswer();