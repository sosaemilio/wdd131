var year = new Date().getFullYear()
var lastModified = new Date(document.lastModified)

document.querySelector("#lastModified").innerHTML = `Last Modified: ${lastModified}`
document.querySelector("#currentyear").innerHTML = `&#169;${year}`;