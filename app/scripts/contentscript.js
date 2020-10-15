var buttonDiv = createButton();
document.body.appendChild(buttonDiv);

function createButton() {
   var buttonDiv = document.createElement('div');
   buttonDiv.setAttribute('class', 'content-bottom-div');
   buttonDiv.innerText = 'SimpleJira is OFF';
   buttonDiv.addEventListener("click", updateView);
   return buttonDiv;
}

function updateView() {
    // right side of the view of single Jira ticket
    var rightside = document.getElementById("viewissuesidebar");
    if (rightside != null) {
        if (rightside.style.width === "0%") {
            rightside.style.width="35%";
            buttonDiv.innerText = "SimpleJira is OFF";
        } else {
            rightside.style.width="0%";
            buttonDiv.innerText = "SimpleJira is ON";
        }
    }
}