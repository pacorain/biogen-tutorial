// currently unused space

if (process.argv[2] == "generate") {
    generateBio();
} else if (process.argv[2] == "update") {
    updateBio(generateBio());
} else {
    console.log('No valid arguments provided.  Please run "biogen generate" or "biogen update".')
}

function generateBio() {
    console.log("Generate a bio.");
    return "generated bio";
}

function updateBio(bio) {
    console.log('Update your Twitter bio with "' + bio + '".');
}