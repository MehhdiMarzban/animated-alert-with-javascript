let btnAlert = document.getElementById("btn-alert");
let alertDuration = 6000;
let alertHTML = "<div class='alert-container animation-in-alert-container'>";
alertHTML += "<div><button class='btn-close'>&times</button></div>";
alertHTML += "<p class='alert-header'></p><hr>";
alertHTML += "<p class='alert-message'></p>";
alertHTML += "<div class='alert-progress animation-progress'></div>";
alertHTML += "</div>";


btnAlert.addEventListener("click", customAlert);


function customAlert(e, headerMessage = "header", bodyMessage = "body"){    


   

    // making elements
    let alertDiv = createElement("div", "alert-container animation-in-alert-container");
    let btnClose = createElement("button", "btn-close", "&times");
    let alertHeader = createElement("p", "alert-header", headerMessage);
    let hr = createElement("hr","");
    let alertMessage = createElement("p", "alert-message", bodyMessage);
    let alertProgress = createElement("div", "alert-progress animation-progress");
    // append to alertDiv
    alertDiv.appendChild(btnClose);
    alertDiv.appendChild(alertHeader);
    alertDiv.appendChild(hr);
    alertDiv.appendChild(alertMessage);
    alertDiv.appendChild(alertProgress);
    document.body.appendChild(alertDiv);
    // set values
    btnClose.addEventListener("click", alertClose);
    setTimeout(alertClose, alertDuration);

    function alertClose(e){
        alertDiv.classList.add("animation-out-alert-container");
        setTimeout(() => {
            alertDiv.remove();
        },900);
    }
}


function createElement(type, classList, innerHtml = ""){
    let element = document.createElement(type);
    element.className = classList;
    element.innerHTML = innerHtml;
    return element;
}

setTimeout(()=>{
    customAlert("e", "Login", "You logined as Mohammad Mehdi Marzban");
}, 2000)

