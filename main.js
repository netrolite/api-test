async function fetchImage() {
    const res = await fetch("media/dev.jpg");
    const blob = await res.blob();
    document.querySelector("#image").src = URL.createObjectURL(blob)
}

fetchImage()
.then(res => {
    console.log("Successful")
})
.catch(error => {
    console.log("Failed");
    console.error(error)
})