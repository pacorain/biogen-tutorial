var facts = require("./facts.json");

if (process.argv[2] == "generate") {
    generateBio();
} else if (process.argv[2] == "update") {
    updateBio(generateBio());
} else {
    console.log('No valid arguments provided.  Please run "biogen generate" or "biogen update".')
}

function generateBio() {
    var bio = randomItem(facts.bio).text;
    console.log('Generated: "' + bio + '"');
    return bio;
}

function randomItem(list) {
    var randomItemNumber = randomInt(list.length)
    return list[randomItemNumber];
}

function randomInt(limit) {
    return Math.floor(Math.random() * limit);
}

function updateBio(bio) {
    console.log('Update your Twitter bio with "' + bio + '".');
}