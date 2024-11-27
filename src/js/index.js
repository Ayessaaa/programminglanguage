window.onload = function(){
    const option1 = [{
        name:"Erlang",
        description: "A functional language designed for building highly concurrent, distributed systems, commonly used in telecoms.",
        link:"",
        correct: true
    }]
    const option2 = [{
        name:"LatticeQL",
        description: "A quantum-inspired query language for manipulating data in non-traditional database structures.",
        link:"",
        correct: false
    }]

    optionName1 = document.getElementById("option-name1")
    optionName1.innerText = option1[0].name
    optionDescription1 = document.getElementById("option-description1")
    optionDescription1.innerText = option1[0].description

    optionName2 = document.getElementById("option-name2")
    optionName2.innerText = option2[0].name
    optionDescription2 = document.getElementById("option-description2")
    optionDescription2.innerText = option2[0].description

    
}