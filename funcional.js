// The global 

var globalTitle = "  Winter Is   Coming";

// Only change code below this line
urlSlug(globalTitle);


function urlSlug(title) {
    let newArray = [];
    newArray = title.split(" ").filter(item => item !== "").join("-").toLowerCase()
    console.log(newArray)
}


