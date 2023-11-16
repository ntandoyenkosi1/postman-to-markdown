let markdown = null
document.querySelector("button").addEventListener("click", (e) => {
    if (markdown) {
        document.querySelector(".right").innerText = markdown
        let actions = document.querySelector(".actions")
        actions.style.display = "flex"
        let button = document.querySelector('button')
        let left = document.querySelector('.left')
        button.style.marginBottom = "0px"
        left.style.marginBottom = "0px"
    }
})

document.querySelector("input[type=file]").addEventListener("change", (e) => {
    let file = e.target.files[0]
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: evt.target.result,
        };

        fetch("/api/convert", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.error) {
                    let label = document.querySelector("body>label")
                    label.style.display = "flex"
                    setTimeout(() => document.location.reload(), 4000)
                    return
                }
                markdown = result.file
            })
            .catch(error => console.log('error', error));
    }
    reader.onerror = function (evt) {
        console.log("error reading file");
    }
})

function downloadURI(uri, name) {
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}
//https://stackoverflow.com/a/57692196
function downloader(data, type, name) {
    let blob = new Blob([data], { type });
    let url = window.URL.createObjectURL(blob);
    downloadURI(url, name);
    window.URL.revokeObjectURL(url);
}

document.querySelector("#copy").addEventListener("click", () => {
    let rightContent = document.querySelector(".right")
    let label = document.querySelector(".actions label")
    navigator.clipboard.writeText(rightContent.innerText)
    label.style.display = "block"
    setTimeout(() => label.style.display = "none", 2000)
})
document.querySelector("#download").addEventListener("click", () => {
    let rightContent = document.querySelector(".right")
    downloader(data = rightContent.innerText, type = "application/markdown", name = "testfile.md")
})