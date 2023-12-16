function downloadScriptFromIdeoneAndPopulateDatabase() {
    // this was an old function

    console.log("Old function implementation");
}


// more code  8000 lines
downloadScriptFromIdeoneAndPopulateDatabase();
// somewhere between



// intern by mistake makes the same function
if(true) {
    function downloadScriptFromIdeoneAndPopulateDatabase() {
        console.log("New function created");
    }
    console.log("Calling intern code")
    downloadScriptFromIdeoneAndPopulateDatabase();
}


downloadScriptFromIdeoneAndPopulateDatabase();