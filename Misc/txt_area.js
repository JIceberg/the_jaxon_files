function save() {
    var user = document.getElementById("user").value ;
    localStorage["user"] = user ;
    localStorage.setItem("user", user) ;
    var name = document.getElementById("name").value ;
    localStorage["name"] = name ;
    localStorage.setItem("name", name) ;
    console.log("Saved Successfully")
    window.location.href = "#saved"
}
function clear() {
    var user = document.getElementById("user").value ;
    localStorage["user"] = "" ;
    var name = document.getElementById("name").value ;
    localStorage["name"] = "" ;
    console.log("Cleared Save")
    window.location.href = "#saved"

}
function download() {
    var textToWrite = localStorage["user"];
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = localStorage["name"];
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
	downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
	downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
	downloadLink.onclick = destroyClickedElement;
	downloadLink.style.display = "none";
	document.body.appendChild(downloadLink);
    }
    downloadLink.click();
    window.location.href = "#saved";
    console.log("Downloaded File");

}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}
function remove() {
    var text = document.getElementById("user");
    var name = document.getElementById("name");
    name.value = "";
    text.value = "";
    console.log("Removed Text")

}
