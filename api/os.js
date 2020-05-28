// Create a file called os.html and a file called os.js. Link os.js from os.html.

// Create a simple dropdown with different names of operating systems

// When the users clicks submit get the data using the API and showcase the version numbers and names in the form of a table

// BONUS

// Try to complete the problem without the submit button (HINT: Event Listeners)
// Try the store the data if fetched once and store it in some variables to reduce the number of API calls made

//DOUBT: data is saved in localstorage but cant get how to save api call using local storage


function display(){
    var val = document.getElementById('sel')
    var xhr = new XMLHttpRequest()
    var link = 'http://localhost:8080/codenames/' + val.value
    xhr.open('GET',link)
    xhr.send()
    
    xhr.onload = function () {
        if (xhr.status == 200) {
            var result = JSON.parse(xhr.response)
            var div = document.querySelector('div')
            var p = document.createElement("p")
            p.textContent = "Operating System is : " + result.os
            div.appendChild(p)

            var ul = document.createElement("ul")
            var li1 = document.createElement("li")
            li1.textContent = "Version : " + result.codenames[0]["version"] + ", Name : " +  result.codenames[0].name
            var li2 = document.createElement("li")
            li2.textContent = "Version : " + result.codenames[1].version + ", Name : " + result.codenames[1].name
            var li3 = document.createElement("li")
            li3.textContent = "Version : " + result.codenames[2].version + ", Name : " + result.codenames[2].name

            ul.appendChild(li1)
            ul.appendChild(li2)
            ul.appendChild(li3)
            div.appendChild(ul)

            localStorage.setItem(result.os, JSON.stringify(result.codenames))


        }
        else {
            console.log("Error Code is:" + xhr.status)
        }
    }

}
