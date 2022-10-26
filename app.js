// var getTextarea = document.getElementById("textarea");
var getTextarea = document.getElementById("divArea");




// Step 1


// function boldFun(){
//         getTextarea.style.fontWeight = "bold";
// }

// function italicFun(){
//         getTextarea.style.fontStyle = "italic";
// }

// function underlineFun(){
//         getTextarea.style.textDecoration = "underline";
// }

// function leftFun(){
//         getTextarea.style.textAlign = "left";
// }

// function centerFun(){
//         getTextarea.style.textAlign = "center";
// }

// function rightFun(){
//         getTextarea.style.textAlign = "right";
// }

function uppercaseFun(){
        getTextarea.style.textTransform = "uppercase";
}

function lowercaseFun(){
        getTextarea.style.textTransform = "lowercase";
}

function capitalizeFun(){
        getTextarea.style.textTransform = "capitalize";
}

// function clearFun(){
//         getTextarea.style.fontWeight = "normal";
//         getTextarea.style.fontStyle = "normal";
//         getTextarea.style.textDecoration = "none";
//         getTextarea.style.textAlign = "left";
//         getTextarea.value = "";
// }




// Step 2
                        //                         ,bool
// execCommand(commandName,showDefaultUI,valueArgument);


var getDivArea = document.getElementById("divArea");
getDivArea.contentEditable = "true";
getDivArea.spellcheck = "false";


var getBtns = document.querySelectorAll(".btn");
// console.log(getBtns);

getBtns.forEach(function(getBtn){
        getBtn.addEventListener("click",function(){
                // console.log("koooo");
                // var getCommand = getBtn.getAttribute("data-command");
                var getCommand = getBtn.dataset["command"];
                // console.log(getCommand);

                if(getCommand === "myClearText"){
                        getDivArea.innerHTML = "";
                }else if(getCommand === "createLink" || getCommand === "insertImage"){
                                                        // messages          default
                        let getUrl = prompt("Enter Your Link","https://");
                        document.execCommand(getCommand,false,getUrl);
                }else if(getCommand === "foreColor"){
                        // console.log(getBtn);
                        // console.log(getBtn.value);
                        document.execCommand(getCommand,false,getBtn.value);
                }else if(getCommand === "paste"){
                        navigator.clipboard.readText().then(function (cliptext) {
                                // console.log(cliptext);
                                getDivArea.innerHTML += cliptext;     // permission error

                        });
                }else{
                        document.execCommand(getCommand,false,null);
                }

        });
});