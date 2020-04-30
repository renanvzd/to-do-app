document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter you desired new text")
        axios.post('/update-item', {text: userInput}).then(function (){
            // do something interest here in the next video
        }).catch(function(){
            console.log("Please")
        })     
    }
})