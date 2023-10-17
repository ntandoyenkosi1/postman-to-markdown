let markdown=null
document.querySelector("button").addEventListener("click", (e) => {
    document.querySelector(".right").innerText=markdown
})

document.querySelector("input[type=file]").addEventListener("change", (e) => {
    let f = e.target.files[0]
    var reader = new FileReader();
    reader.readAsText(f, "UTF-8");
    reader.onload = function (evt) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(evt.target.result);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: evt.target.result,
        };

        fetch("/api/convert", requestOptions)
            .then(response => response.json())
            .then(result => markdown=result.file)
            .catch(error => console.log('error', error));
    }
    reader.onerror = function (evt) {
        console.log("error reading file");
    }
})