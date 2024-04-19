
setTimeout(() => {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const age = document.getElementById("age").value
    
    // const person = {
    //     firstName,
    //     lastName,
    //     age,
    // };

    const person = new Object();
    person.firstName = firstName
    person.lastName = lastName
    person.age = age
    
    const form = document.querySelector("form")
    
    form.setAttribute("data-person", JSON.stringify(person))  
}, 5000);