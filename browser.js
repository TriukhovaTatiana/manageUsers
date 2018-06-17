"use strict"

let users = [];


document.getElementById("add").addEventListener("click", function(){
    let nameInput = document.getElementById("Imya").value;
    let ageInput = document.getElementById("Age").value;
    let countryInput = document.getElementById("Country").value;

    let user = {name:nameInput,
                age:ageInput,
                country:countryInput};

    users.push(user);

    return users;
    });


document.getElementById("ok").addEventListener("click", function(){
    for(let i = 0;i<users.length;i++){
        let user = users[i];
        let nameInput = document.getElementById("Imya").value;
        let ageInput = document.getElementById("Age").value;
        let countryInput = document.getElementById("Country").value;

        if(user.name.includes(nameInput)){
            alert("Yes!");
            document.getElementById("out").innerHTML = user["name"]+"   "+user["age"]+"   "+user["country"];

        }
    }});

    document.getElementById("btnAll").addEventListener("click",function(){
        alert("Showing!");
        
        for(let i = 0;i<users.length;i++){
            let user = users[i];
            console.log(user);
            let u = user["name"]+"   "+user["age"]+"   "+user["country"];
            document.getElementById("out").innerHTML +=`<p>${u}</p>`;
            ;

        }
    })

    document.getElementById("clear").addEventListener("click",function(){
        for(let i = 0;i<document.getElementsByClassName("fieldT").length;i++){
            document.getElementsByClassName("fieldT")[i].value = " ";
        }
    })

