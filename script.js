const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

document.addEventListener("click", e => {
    console.log("Button Clicked");
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.document = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "Download File";
    }).catch(() => {
        downloadBtn.innerText = "Download File";
        alert("Failed to download file!");
    });
}