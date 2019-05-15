(function () {

    var activeConfig = {};

    var arcConfig = {
        "Green 1": {
            "c1n1": 10,
            "c1n2": 11,
            "c2n1": 3,
            "c2n2": 2,
            "c3n1": 8,
            "c3n2": 7
        },
        "Green 2": {
            "c1n1": 2,
            "c1n2": 9,
            "c2n1": 4,
            "c2n2": 3,
            "c3n1": 2,
            "c3n2": 11
        },
        "Green 3": {
            "c1n1": 2,
            "c1n2": 4,
            "c2n1": 12,
            "c2n2": 10,
            "c3n1": 8,
            "c3n2": 6
        },
        "Green 4": {
            "c1n1": 12,
            "c1n2": 12,
            "c2n1": 1,
            "c2n2": 6,
            "c3n1": 4,
            "c3n2": 1
        },
        "Green 5": {
            "c1n1": 10,
            "c1n2": 12,
            "c2n1": 8,
            "c2n2": 4,
            "c3n1": 12,
            "c3n2": 4
        },
        "Green 6": {
            "c1n1": 4,
            "c1n2": 12,
            "c2n1": 2,
            "c2n2": 7,
            "c3n1": 2,
            "c3n2": 10 
        },
        "Green 7": {
            "c1n1": 8,
            "c1n2": 9,
            "c2n1": 9,
            "c2n2": 12,
            "c3n1": 11,
            "c3n2": 1
        },
        "White 1": {
            "c1n1": 6,
            "c1n2": 3,
            "c2n1": 10,
            "c2n2": 3,
            "c3n1": 7,
            "c3n2": 3
        },
        "White 2": {
            "c1n1": 11,
            "c1n2": 1,
            "c2n1": 2,
            "c2n2": 10,
            "c3n1": 7,
            "c3n2": 1
        },
        "White 3": {
            "c1n1": 10,
            "c1n2": 12,
            "c2n1": 9,
            "c2n2": 6,
            "c3n1": 5,
            "c3n2": 7
        },
        "White 4": {
            "c1n1": 4,
            "c1n2": 5,
            "c2n1": 9,
            "c2n2": 7,
            "c3n1": 1,
            "c3n2": 6
        },
        "White 5": {
            "c1n1": 4,
            "c1n2": 8,
            "c2n1": 8,
            "c2n2": 7,
            "c3n1": 4,
            "c3n2": 8 
        },
        "White 6": {
            "c1n1": 11,
            "c1n2": 11,
            "c2n1": 9,
            "c2n2": 11,
            "c3n1": 3,
            "c3n2": 6
        },
        "White 7": {
            "c1n1": 4,
            "c1n2": 5,
            "c2n1": 9,
            "c2n2": 7,
            "c3n1": 1,
            "c3n2": 6
        },
        "Yellow 1": {
            "c1n1": 4,
            "c1n2": 12,
            "c2n1": 5,
            "c2n2": 6,
            "c3n1": 4,
            "c3n2": 4
        },
        "Yellow 2": {
            "c1n1": 9,
            "c1n2": 10,
            "c2n1": 11,
            "c2n2": 4,
            "c3n1": 7,
            "c3n2": 11
        },
        "Yellow 3": {
            "c1n1": 9,
            "c1n2": 1,
            "c2n1": 12,
            "c2n2": 4,
            "c3n1": 11,
            "c3n2": 4
        },
        "Yellow 4": {
            "c1n1": 3,
            "c1n2": 8,
            "c2n1": 1,
            "c2n2": 8,
            "c3n1": 3,
            "c3n2": 7 
        },
        "Yellow 5": {
            "c1n1": 7,
            "c1n2": 9,
            "c2n1": 5,
            "c2n2": 12,
            "c3n1": 10,
            "c3n2": 4
        },
        "Yellow 6": {
            "c1n1": 10,
            "c1n2": 11,
            "c2n1": 9,
            "c2n2": 3,
            "c3n1": 4,
            "c3n2": 9
        },
        "Yellow 7": {
            "c1n1": 1,
            "c1n2": 6,
            "c2n1": 11,
            "c2n2": 3,
            "c3n1": 5,
            "c3n2": 1
        },        
        "Red 1": {
            "c1n1": 5,
            "c1n2": 9,
            "c2n1": 1,
            "c2n2": 1,
            "c3n1": 5,
            "c3n2": 11 
        },
        "Red 2": {
            "c1n1": 8,
            "c1n2": 1,
            "c2n1": 11,
            "c2n2": 2,
            "c3n1": 7,
            "c3n2": 4
        },
        "Red 3": {
            "c1n1": 10,
            "c1n2": 8,
            "c2n1": 11,
            "c2n2": 6,
            "c3n1": 4,
            "c3n2": 2 
        },
        "Red 4": {
            "c1n1": 5,
            "c1n2": 9,
            "c2n1": 5,
            "c2n2": 8,
            "c3n1": 2,
            "c3n2": 2
        },
        "Red 5": {
            "c1n1": 5,
            "c1n2": 4,
            "c2n1": 5,
            "c2n2": 2,
            "c3n1": 8,
            "c3n2": 5
        },
        "Red 6": {
            "c1n1": 1,
            "c1n2": 4,
            "c2n1": 5,
            "c2n2": 7,
            "c3n1": 6,
            "c3n2": 7 
        },
        "Red 7": {
            "c1n1": 5,
            "c1n2": 8,
            "c2n1": 3,
            "c2n2": 2,
            "c3n1": 2,
            "c3n2": 11
        },
        "Cyan 1": {
            "c1n1": 4,
            "c1n2": 4,
            "c2n1": 10,
            "c2n2": 3,
            "c3n1": 4,
            "c3n2": 1
        },
        "Cyan 2": {
            "c1n1": 3,
            "c1n2": 5,
            "c2n1": 7,
            "c2n2": 6,
            "c3n1": 4,
            "c3n2": 12 
        },
        "Cyan 3": {
            "c1n1": 7,
            "c1n2": 3,
            "c2n1": 2,
            "c2n2": 9,
            "c3n1": 9,
            "c3n2": 5
        },
        "Cyan 4": {
            "c1n1": 8,
            "c1n2": 11,
            "c2n1": 7,
            "c2n2": 9,
            "c3n1": 9,
            "c3n2": 5
        },
        "Cyan 5": {
            "c1n1": 4,
            "c1n2": 9,
            "c2n1": 1,
            "c2n2": 1,
            "c3n1": 11,
            "c3n2": 5
        },
        "Cyan 6": {
            "c1n1": 12,
            "c1n2": 5,
            "c2n1": 11,
            "c2n2": 4,
            "c3n1": 5,
            "c3n2": 1
        },
        "Cyan 7": {
            "c1n1": 5,
            "c1n2": 4,
            "c2n1": 11,
            "c2n2": 8,
            "c3n1": 9,
            "c3n2": 8
        },
        "Blue 1": {
            "c1n1": 6,
            "c1n2": 5,
            "c2n1": 2,
            "c2n2": 12,
            "c3n1": 7,
            "c3n2": 3
        },
        "Blue 2": {
            "c1n1": 12,
            "c1n2": 8,
            "c2n1": 1,
            "c2n2": 8,
            "c3n1": 8,
            "c3n2": 3
        },
        "Blue 3": {
            "c1n1": 6,
            "c1n2": 2,
            "c2n1": 12,
            "c2n2": 5,
            "c3n1": 9,
            "c3n2": 3
        },
        "Blue 4": {
            "c1n1": 9,
            "c1n2": 11,
            "c2n1": 12,
            "c2n2": 6,
            "c3n1": 3,
            "c3n2": 7
        },
        "Blue 5": {
            "c1n1": 4,
            "c1n2": 7,
            "c2n1": 3,
            "c2n2": 5,
            "c3n1": 5,
            "c3n2": 1
        },
        "Blue 6": {
            "c1n1": 10,
            "c1n2": 9,
            "c2n1": 3,
            "c2n2": 7,
            "c3n1": 7,
            "c3n2": 12
        },
        "Blue 7": {
            "c1n1": 9,
            "c1n2": 11,
            "c2n1": 1,
            "c2n2": 3,
            "c3n1": 7,
            "c3n2": 11
        },
        "Purple 1": {
            "c1n1": 9,
            "c1n2": 12,
            "c2n1": 7,
            "c2n2": 6,
            "c3n1": 4,
            "c3n2": 9
        },
        "Purple 2": {
            "c1n1": 4,
            "c1n2": 6,
            "c2n1": 6,
            "c2n2": 12,
            "c3n1": 9,
            "c3n2": 8
        },
        "Purple 3": {
            "c1n1": 12,
            "c1n2": 7,
            "c2n1": 1,
            "c2n2": 8,
            "c3n1": 5,
            "c3n2": 7
        },
        "Purple 4": {
            "c1n1": 9,
            "c1n2": 6,
            "c2n1": 5,
            "c2n2": 3,
            "c3n1": 8,
            "c3n2": 7
        },
        "Purple 5": {
            "c1n1": 6,
            "c1n2": 2,
            "c2n1": 1,
            "c2n2": 7,
            "c3n1": 7,
            "c3n2": 5 
        },
        "Purple 6": {
            "c1n1": 2,
            "c1n2": 9,
            "c2n1": 5,
            "c2n2": 9,
            "c3n1": 1,
            "c3n2": 8
        },
        "Purple 7": {
            "c1n1": 8,
            "c1n2": 3,
            "c2n1": 4,
            "c2n2": 9,
            "c3n1": 5,
            "c3n2": 9
        }
    }

    var voidConfig = {
        "Green 1": {
            "c1n1": 4,
            "c1n2": 3,
            "c2n1": 2,
            "c2n2": 4,
            "c3n1": 2,
            "c3n2": 9
        },
        "Green 2": {
            "c1n1": 2,
            "c1n2": 4,
            "c2n1": 1,
            "c2n2": 6,
            "c3n1": 3,
            "c3n2": 10
        },
        "Green 3": {
            "c1n1": 9,
            "c1n2": 3,
            "c2n1": 12,
            "c2n2": 7,
            "c3n1": 12,
            "c3n2": 12
        },
        "Green 4": {
            "c1n1": 10,
            "c1n2": 3,
            "c2n1": 2,
            "c2n2": 3,
            "c3n1": 7,
            "c3n2": 11
        },
        "Green 5": {
            "c1n1": 7,
            "c1n2": 4,
            "c2n1": 2,
            "c2n2": 7,
            "c3n1": 7,
            "c3n2": 9
        },
        "Green 6": {
            "c1n1": 10,
            "c1n2": 12,
            "c2n1": 11,
            "c2n2": 5,
            "c3n1": 8,
            "c3n2": 12
        },
        "Green 7": {
            "c1n1": 3,
            "c1n2": 3,
            "c2n1": 1,
            "c2n2": 3,
            "c3n1": 6,
            "c3n2": 8
        },
        "White 1": {
            "c1n1": 1,
            "c1n2": 1,
            "c2n1": 2,
            "c2n2": 12,
            "c3n1": 8,
            "c3n2": 10
        },
        "White 2": {
            "c1n1": 10,
            "c1n2": 2,
            "c2n1": 3,
            "c2n2": 8,
            "c3n1": 9,
            "c3n2": 3
        },
        "White 3": {
            "c1n1": 8,
            "c1n2": 6,
            "c2n1": 2,
            "c2n2": 9,
            "c3n1": 2,
            "c3n2": 10
        },
        "White 4": {
            "c1n1": 12,
            "c1n2": 5,
            "c2n1": 7,
            "c2n2": 1,
            "c3n1": 5,
            "c3n2": 7
        },
        "White 5": {
            "c1n1": 4,
            "c1n2": 8,
            "c2n1": 12,
            "c2n2": 8,
            "c3n1": 9,
            "c3n2": 3
        },
        "White 6": {
            "c1n1": 7,
            "c1n2": 12,
            "c2n1": 8,
            "c2n2": 3,
            "c3n1": 3,
            "c3n2": 12
        },
        "White 7": {
            "c1n1": 6,
            "c1n2": 9,
            "c2n1": 12,
            "c2n2": 10,
            "c3n1": 8,
            "c3n2": 5
        },
        "Yellow 1": {
            "c1n1": 4,
            "c1n2": 9,
            "c2n1": 9,
            "c2n2": 4,
            "c3n1": 5,
            "c3n2": 5
        },
        "Yellow 2": {
            "c1n1": 2,
            "c1n2": 5,
            "c2n1": 11,
            "c2n2": 2,
            "c3n1": 3,
            "c3n2": 5
        },
        "Yellow 3": {
            "c1n1": 1,
            "c1n2": 7,
            "c2n1": 12,
            "c2n2": 3,
            "c3n1": 8,
            "c3n2": 4
        },
        "Yellow 4": {
            "c1n1": 7,
            "c1n2": 9,
            "c2n1": 6,
            "c2n2": 5,
            "c3n1": 5,
            "c3n2": 12
        },
        "Yellow 5": {
            "c1n1": 8,
            "c1n2": 6,
            "c2n1": 9,
            "c2n2": 12,
            "c3n1": 12,
            "c3n2": 12
        },
        "Yellow 6": {
            "c1n1": 2,
            "c1n2": 7,
            "c2n1": 2,
            "c2n2": 11,
            "c3n1": 9,
            "c3n2": 10
        },
        "Yellow 7": {
            "c1n1": 11,
            "c1n2": 4,
            "c2n1": 4,
            "c2n2": 11,
            "c3n1": 12,
            "c3n2": 3
        },
        "Red 1": {
            "c1n1": 1,
            "c1n2": 2,
            "c2n1": 1,
            "c2n2": 4,
            "c3n1": 11,
            "c3n2": 4
        },
        "Red 2": {
            "c1n1": 1,
            "c1n2": 1,
            "c2n1": 4,
            "c2n2": 5,
            "c3n1": 6,
            "c3n2": 5
        },
        "Red 3": {
            "c1n1": 8,
            "c1n2": 10,
            "c2n1": 5,
            "c2n2": 6,
            "c3n1": 11,
            "c3n2": 11
        },
        "Red 4": {
            "c1n1": 11,
            "c1n2": 4,
            "c2n1": 5,
            "c2n2": 4,
            "c3n1": 7,
            "c3n2": 6
        },
        "Red 5": {
            "c1n1": 5,
            "c1n2": 6,
            "c2n1": 7,
            "c2n2": 3,
            "c3n1": 7,
            "c3n2": 10
        },
        "Red 6": {
            "c1n1": 1,
            "c1n2": 10,
            "c2n1": 7,
            "c2n2": 11,
            "c3n1": 3,
            "c3n2": 12
        },
        "Red 7": {
            "c1n1": 11,
            "c1n2": 6,
            "c2n1": 12,
            "c2n2": 8,
            "c3n1": 11,
            "c3n2": 11
        },
        "Cyan 1": {
            "c1n1": 2,
            "c1n2": 6,
            "c2n1": 5,
            "c2n2": 4,
            "c3n1": 10,
            "c3n2": 3
        },
        "Cyan 2": {
            "c1n1": 8,
            "c1n2": 4,
            "c2n1": 5,
            "c2n2": 8,
            "c3n1": 9,
            "c3n2": 4
        },
        "Cyan 3": {
            "c1n1": 1,
            "c1n2": 12,
            "c2n1": 1,
            "c2n2": 1,
            "c3n1": 5,
            "c3n2": 4
        },
        "Cyan 4": {
            "c1n1": 6,
            "c1n2": 11,
            "c2n1": 11,
            "c2n2": 4,
            "c3n1": 12,
            "c3n2": 4
        },
        "Cyan 5": {
            "c1n1": 12,
            "c1n2": 2,
            "c2n1": 11,
            "c2n2": 4,
            "c3n1": 2,
            "c3n2": 11
        },
        "Cyan 6": {
            "c1n1": 8,
            "c1n2": 12,
            "c2n1": 5,
            "c2n2": 9,
            "c3n1": 5,
            "c3n2": 4
        },
        "Cyan 7": {
            "c1n1": 8,
            "c1n2": 5,
            "c2n1": 11,
            "c2n2": 8,
            "c3n1": 11,
            "c3n2": 11
        },
        "Blue 1": {
            "c1n1": 12,
            "c1n2": 5,
            "c2n1": 12,
            "c2n2": 11,
            "c3n1": 4,
            "c3n2": 4
        },
        "Blue 2": {
            "c1n1": 10,
            "c1n2": 5,
            "c2n1": 6,
            "c2n2": 2,
            "c3n1": 3,
            "c3n2": 9
        },
        "Blue 3": {
            "c1n1": 11,
            "c1n2": 11,
            "c2n1": 7,
            "c2n2": 3,
            "c3n1": 8,
            "c3n2": 11
        },
        "Blue 4": {
            "c1n1": 4,
            "c1n2": 6,
            "c2n1": 5,
            "c2n2": 6,
            "c3n1": 5,
            "c3n2": 12
        },
        "Blue 5": {
            "c1n1": 7,
            "c1n2": 12,
            "c2n1": 1,
            "c2n2": 2,
            "c3n1": 5,
            "c3n2": 4
        },
        "Blue 6": {
            "c1n1": 11,
            "c1n2": 1,
            "c2n1": 5,
            "c2n2": 7,
            "c3n1": 10,
            "c3n2": 2
        },
        "Blue 7": {
            "c1n1": 11,
            "c1n2": 4,
            "c2n1": 2,
            "c2n2": 8,
            "c3n1": 4,
            "c3n2": 8
        },
        "Purple 1": {
            "c1n1": 6,
            "c1n2": 5,
            "c2n1": 6,
            "c2n2": 10,
            "c3n1": 1,
            "c3n2": 1
        },
        "Purple 2": {
            "c1n1": 9,
            "c1n2": 9,
            "c2n1": 8,
            "c2n2": 10,
            "c3n1": 8,
            "c3n2": 6
        },
        "Purple 3": {
            "c1n1": 11,
            "c1n2": 7,
            "c2n1": 6,
            "c2n2": 3,
            "c3n1": 12,
            "c3n2": 5
        },
        "Purple 4": {
            "c1n1": 9,
            "c1n2": 7,
            "c2n1": 7,
            "c2n2": 8,
            "c3n1": 12,
            "c3n2": 7
        },
        "Purple 5": {
            "c1n1": 2,
            "c1n2": 9,
            "c2n1": 12,
            "c2n2": 3,
            "c3n1": 10,
            "c3n2": 2
        },
        "Purple 6": {
            "c1n1": 4,
            "c1n2": 3,
            "c2n1": 2,
            "c2n2": 11,
            "c3n1": 4,
            "c3n2": 7
        },
        "Purple 7": {
            "c1n1": 5,
            "c1n2": 9,
            "c2n1": 11,
            "c2n2": 7,
            "c3n1": 12,
            "c3n2": 10
        }
    }

    window.onload = function() {
        document.getElementById("console1num1").onkeyup = checkNums;
        document.getElementById("console1num2").onkeyup = checkNums;
        document.getElementById("console2num1").onkeyup = checkNums;
        document.getElementById("console2num2").onkeyup = checkNums;
        document.getElementById("console3num1").onkeyup = checkNums;
        document.getElementById("console3num2").onkeyup = checkNums;
        document.getElementById("solar").onclick = throwError;
        document.getElementById("arc").onclick = runArc;
        document.getElementById("clear").onclick = clear;
        document.getElementById("void").onclick = runVoid;
        document.getElementById("solar2").onclick = throwError;
        document.getElementById("arc2").onclick = runArc2;
        document.getElementById("clear").onclick = clear;
        document.getElementById("void2").onclick = runVoid2;
    }

    function runArc2() {
        let hold2 = document.getElementById("void2");
        hold2.classList.remove("focus");
        hold2.classList.remove("active");
        let hold = document.getElementById("arc2")
        hold.classList.add("focus");
        hold.classList.add("active");
        Object.assign(activeConfig, arcConfig);
        clear();
    }

    function runAndSet() {
        let myArr = ["void", "arc", "solar", "void2", "arc2", "solar2"]
        this.classList.add("focus");
        this.classList.add("active");
        var filtered = myArr.filter(function(value, index, arr){

            return value != this.id;
        
        });
        console.log(filtered)
        for(let i = 0; i < filtered.length; i++) {
            let hold = document.getElementById(filtered[i]);
            hold.classList.remove("focus");
            hold.classList.remove("active");
        }
        if(this.id == "void" || this.id == "void2") {
            console.log("void!!!")
            activeConfig = voidConfig;
        }
        else if(this.id == "arc" || this.id == "arc2") {
            console.log("arc!!!")
            activeConfig = voidConfig;
        }
        else if(this.id == "solar" || this.id == "solar2") {
            console.log("solr!!!")
            activeConfig = voidConfig;
        }
    }

    function runVoid2() {
        let hold = document.getElementById("void2")
        hold.classList.add("focus");
        hold.classList.add("active");
        let hold2 = document.getElementById("arc2");
        hold2.classList.remove("focus");
        hold2.classList.remove("active");
        Object.assign(activeConfig, voidConfig);
        clear();
    }

    function runVoid() {
        let hold = document.getElementById("void")
        hold.classList.add("focus");
        hold.classList.add("active");
        let hold2 = document.getElementById("arc");
        hold2.classList.remove("focus");
        hold2.classList.remove("active");
        Object.assign(activeConfig, voidConfig);
        clear();
    }

    function runArc() {
        let hold2 = document.getElementById("void");
        hold2.classList.remove("focus");
        hold2.classList.remove("active");
        let hold = document.getElementById("arc")
        hold.classList.add("focus");
        hold.classList.add("active");
        Object.assign(activeConfig, arcConfig);
        clear();
    }

    function throwError() {
        alert("The selected configuration has not yet been discovered by r/raidsecrets. Please check back in some time next week after the reset to see if this configuration has been implemented. If you have questions, email hunterberrytechnologies@gmail.com.")
    }

    function clear() {
        document.getElementById("console1num1").value = "";
        document.getElementById("console1num2").value = "";
        document.getElementById("console2num1").value = "";
        document.getElementById("console2num2").value = "";
        document.getElementById("console3num1").value = "";
        document.getElementById("console3num2").value = "";
        let list = document.getElementById("items");
        list.innerHTML = ""
    }

    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    
    function checkNums() {

        if (isEmpty(activeConfig)) {
            alert("You have not selected a configuration. Please do so before entering numbers into the consoles.");
            clear();
            return;
        }

        let dict = {};
        Object.assign(dict, activeConfig);

        let num1, num2, num3, num4, num5, num6;
        let arr;

        num1 = document.getElementById("console1num1").value;
        num2 = document.getElementById("console1num2").value;
        num3 = document.getElementById("console2num1").value;
        num4 = document.getElementById("console2num2").value;
        num5 = document.getElementById("console3num1").value;
        num6 = document.getElementById("console3num2").value;

        if(num1 != "") {
            let keys = Object.keys(dict)
            for(let i = 0; i <keys.length; i++) {
                if (dict[keys[i]]["c1n1"] != num1) { 
                    delete dict[keys[i]];
                }
            }
        }

        if(num2 != "") {
            let keys = Object.keys(dict)
            for(let i = 0; i <keys.length; i++) {
                if (dict[keys[i]]["c1n2"] != num2) { 
                    delete dict[keys[i]];
                }
            }
        }

        if(num3 != "") {
            let keys = Object.keys(dict)
            for(let i = 0; i <keys.length; i++) {
                if (dict[keys[i]]["c2n1"] != num3) { 
                    delete dict[keys[i]];
                }
            }
        }

        if(num4 != "") {
            let keys = Object.keys(dict)
            for(let i = 0; i < keys.length; i++) {
                if (dict[keys[i]]["c2n2"] != num4) { 
                    delete dict[keys[i]];
                }
            }
        }

        if(num5 != "") {
            let keys = Object.keys(dict)
            for(let i = 0; i <keys.length; i++) {
                if (dict[keys[i]]["c3n1"] != num5) { 
                    delete dict[keys[i]];
                }
            }
        }

        if(num6 != "") {
            let keys = Object.keys(dict)
            for(let i = 0; i <keys.length; i++) {
                if (dict[keys[i]]["c3n2"] != num6) { 
                    delete dict[keys[i]];
                }
            }
        }

        let keys = Object.keys(dict);
        let list = document.getElementById("items");
        list.innerHTML = ""
        for(let i = 0; i < keys.length; i++) {
            let t = document.createElement("li");
            t.innerText = keys[i];
            t.id = keys[i];
            t.classList.add("list-group-item");
            t.onclick = function() {
                delete activeConfig[this.id];
                clear();
            }
            list.appendChild(t);
        }
    }

})();
