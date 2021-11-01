const submitNote = document.getElementById("submit-note");
submitNote.addEventListener("click", submitNotes);

function submitNotes() {
    const inputNoteName = document.getElementById("input-note-name");
    const inputNote = inputNoteName.value;

    const mainTextArea = document.getElementById("main-text-area");
    const mainText = mainTextArea.value;

    const noteDiv =  document.getElementById("note-div");

    const createClass = document.createAttribute("class");

    createClass.value = "class-note";

    noteDiv.setAttributeNode(createClass);

    if (inputNote == 0 || mainText == 0) {
        const errorContainer = document.getElementById("error-container");
        if (errorContainer.children.length == 0) {
            const newDiv = document.createElement("div");

            const newId = document.createAttribute("id");

            newId.value = "div-error-id"

            newDiv.setAttributeNode(newId);

            const fragmento = document.createDocumentFragment();

            newDiv.innerHTML = "<p id=error-p class=class-p-error>Fill all inputs</p>"

            fragmento.appendChild(newDiv);

            errorContainer.appendChild(fragmento);
        }
        }else {
            const divErrorId = document.getElementById("div-error-id");

            const errorContainers = document.getElementById("error-container");
            if (errorContainers.children.length == 1) {
                errorContainers.removeChild(divErrorId);
            }

            const createDiv = document.createElement("div");

            const createAnotherFknClass = document.createAttribute("class");

            createAnotherFknClass.value = "class-end";

            createDiv.setAttributeNode(createAnotherFknClass);

            const createButton = document.createElement("button");

            createButton.innerText="details"

            const createButton2 = document.createElement("button");

            const createClassButton = document.createAttribute("class");

            createClassButton.value="classButton"

            createButton.setAttributeNode(createClassButton);

            const createClassButton2 = document.createAttribute("class");

            createClassButton2.value="classButton-2"

            createButton2.setAttributeNode(createClassButton2);

            createButton2.innerText="delete"

            createButton.addEventListener("click", viewDetails = () =>{
                document.getElementsByClassName("popup")
            [0].classList.add("active");

            const divOverlay = document.getElementById("overlay");
            
            const createClassOverlay = document.createAttribute("class");

            createClassOverlay.value = "class-overlay";

            divOverlay.setAttributeNode(createClassOverlay);

            const divContainer = document.getElementById("div-container");

            const createDiv = document.createElement("div");

            const fragmento = document.createDocumentFragment();

            fragmento.appendChild(createDiv);
            divContainer.appendChild(fragmento);

            divContainer.innerHTML = title + paragraph;
            })

            const dismissPopupBtn = document.getElementById("dismiss-popup-btn");
                dismissPopupBtn.addEventListener("click", function(){
                    const removeClass = document.getElementById("overlay");
                    removeClass.classList.remove("class-overlay");
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
}