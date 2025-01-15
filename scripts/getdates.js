var year = new Date().getFullYear()
var lastModified = new Date(document.lastModified)

document.querySelector("#currentyear").innerHTML = `Last Modified: ${lastModified}`
document.querySelector("#copyright").innerHTML = `${year}`;