function startFunction() {
    console.log('Hello from inside the JS file!')

    //set pTag as paragraph 
    const pTag = document.getElementById('para')


    //get style.color of paragraph and display in console.log
    console.log(pTag.style.color)

    //change style.color from purple to blue after 2 sec
    setInterval(function() {
        let newColor = '#'+Math.floor(Math.random()*16777215).toString(16)
        console.log(newColor)
        pTag.style.color = newColor
    }, 850);
    
}


startFunction()

