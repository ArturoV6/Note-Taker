const submitNote = document.getElementById("submit-note");
submitNote.addEventListener("click", submitNotes);

function submitNotes() {
    const inputNoteName = document.getElementById("input-note-name");
    const inputNote = inputNoteName.value;

    const mainTextArea = document.getElementById("main-text-area");
    const mainText = mainTextArea.value;

    const noteDiv =  document.getElementById("note-div");

    const createDiv = document.createElement("div");

    const createButton = document.createElement("button");

    createButton.innerText="details"

    const createButton2 = document.createElement("button");

    createButton2.innerText="delete"

    createButton.addEventListener("click", viewDetails = () =>{
        document.getElementsByClassName("popup")
    [0].classList.add("active");

    const divContainer = document.getElementById("div-container");

    const createDiv = document.createElement("div");

    const fragmento = document.createDocumentFragment();

    fragmento.appendChild(createDiv);
    divContainer.appendChild(fragmento);

    divContainer.innerHTML = title + paragraph;
    })

    const dismissPopupBtn = document.getElementById("dismiss-popup-btn");
        dismissPopupBtn.addEventListener("click", function(){
        document.getElementsByClassName("popup")
    [0].classList.remove("active");
})


    createButton2.addEventListener("click", viewDetails = (evento) =>{
        evento.target.parentNode.remove();
    })

    const fragmento = document.createDocumentFragment();
    const fragmento2 = document.createDocumentFragment();
    const fragmento3 = document.createDocumentFragment();

    let title = `<h2> ${inputNote} </h2>`;
    let paragraph = `<p> ${mainText} </p>`;

    createDiv.innerHTML = title;

    fragmento.appendChild(createDiv);
    noteDiv.appendChild(fragmento);
    
    fragmento2.appendChild(createButton);
    createDiv.appendChild(fragmento2)

    fragmento3.appendChild(createButton2);
    createDiv.appendChild(fragmento3)

}