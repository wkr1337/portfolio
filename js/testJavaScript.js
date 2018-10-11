function myFunction() {
    alert("you have clicked the fucking image!!!");
}


function changeImageToText(){
    var x = document.querySelector(".imageDiv");
    x.innerHTML = `<button type="button" onclick="changeTextToImage();">Show image</button>`;
}

function changeTextToImage(){
    document.querySelector(".imageDiv").innerHTML = `<img class="image" src="image/man.png" alt="avatar" onclick="myFunction();"></img><br />
                                                    <button type="button" onclick="changeImageToText();">Hide image</button>`;
}

function selectAllImageTags(duplicate){
    var x = document.querySelectorAll("img");
    var insertableDiv = document.querySelector(".testInsertDiv");
    if(duplicate == true){
        for (var index = 0; index < x.length; index ++){
            
            insertableDiv.innerHTML += x[index].outerHTML;
        }
    }
    else{
        // hide all images
        document.querySelector(".imageDiv").innerHTML =  `<button type="button" onclick="changeTextToImage();">Show image</button>`;
        // hide all duplicated images
        insertableDiv.innerHTML = "";
    }
}


function scrollBack(){
    window.scrollTo(500, 0);

}
function multiplyMyNumbers(){
        var x = document.getElementById("frm1");
        var text = "";
        var i;
        for (i = 0; i < (x.length -1);i++) {
            text += x.elements[i].value + " ";
        }
        document.querySelector("#outputMultiply").innerHTML = text;
    }

function getFileInfo(printContent = false){
    // alert("start!");
    // var uploadedFiles = document.getElementById("myFile");
    
    var uploadedFiles = document.querySelectorAll("#myFile");
    // alert("printContent= " + printContent + (printContent==true));
    var outputText = "";
    var fileContent = "";
    // alert(uploadedFiles.length);
    for (let index1 = 0; index1 < uploadedFiles.length; index1++) {
        // alert(uploadedFiles[index1]);
        var uploadedFile = uploadedFiles[index1];
        
        if('files' in uploadedFile){
            if (uploadedFile.files.length == 0){
                // alert("uploadedFile.files.length == 0");
                // outputText = "Select one or more files to upload.";
            } else{
                for (let index = 0; index < uploadedFile.files.length; index++) {
                    const currentFile = uploadedFile.files[index];
                    
                    if(printContent == true){
                        var fileReader = new FileReader();
                        
                        // alert("filereader")
                        fileReader.onload = function(e){
                            var text = e.target.result;
                            outputText += text;
                            document.getElementById("displayFileInfo").innerHTML += "'" + outputText + "'";
                            // alert("filereader" + outputText);

                        };
                        // alert("PRINT CONTENT = true")
                        outputText = fileReader.readAsText(currentFile);
                        // alert("filereader")
                        // fileReader.reset();
                    }else{
                        if("name" in currentFile){
                            outputText += "File name: " + currentFile.name + "<br>";
                        }
                        if("size" in currentFile){
                            outputText += "File size: " + currentFile.size + " bytes <br> <br>";
                        }
                    }
                }
            }
            // alert("in if('files' in uploadedFile)" + outputText);
        }

    }
    document.getElementById("displayFileInfo").innerHTML = outputText;
    // window.onload = function(){document.getElementById("displayFileInfo").innerHTML += "'" + outputText + "'";};
    // document.getElementById("displayFileInfo").innerHTML += "'" + outputText + "'";


}
