var rock = document.getElementById("rock");
var papper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var display = document.querySelector("[data-display]");
var attempts = document.querySelector("[data-attempts]");
var success = document.querySelector("[data-success]");
var failure = document.querySelector("[data-failure]");

var count = 0;
let successdisplay = 0;
let failuredisplay = 0;

papper.addEventListener('click', function() {
    
//1 is papper
//2 is scissors
//3 is rock
    let computer = Math.floor(Math.random() * 3) + 1;
    switch (computer) {
        case computer = 1:
            display.textContent = "it's a tie, papper";
            break;
            case computer = 2:
                display.textContent = "you lost, scissors";
                failuredisplay += 1
                break;
                case computer = 3:
                     display.textContent = "you won, rock";
                    successdisplay += 1
                     break;
        default:
           display.textContent = "game is broken";
            break;
       }
    count += 1
    attempts.innerHTML = count; 
    success.innerHTML = successdisplay;
    failure.innerHTML = failuredisplay;
})


scissors.addEventListener('click', function() {
    
    //1 is papper
    //2 is scissors
    //3 is rock
        let computerscissors = Math.floor(Math.random() * 3) + 1;
        switch (computerscissors) {
            case computerscissors = 1:
                display.textContent = "you won, papper";
                successdisplay += 1
                break;
                case computerscissors = 2:
                    display.textContent = "it's a tie, scissors";
                    
                    break;
                    case computerscissors = 3:
                         display.textContent = "you lost, rock";
                         failuredisplay += 1
                         break;
            default:
               display.textContent = "game is broken";
                break;
           }
        count += 1
        attempts.innerHTML = count; 
        success.innerHTML = successdisplay;
        failure.innerHTML = failuredisplay;
    })
    
    
    rock.addEventListener('click', function() {
    
        //1 is papper
        //2 is scissors
        //3 is rock
            let compute = Math.floor(Math.random() * 3) + 1;
            switch (compute) {
                case compute = 1:
                    display.textContent = "you lost, papper";
                    failuredisplay += 1
                    break;
                    case compute = 2:
                        display.textContent = "you won, scissors";
                        successdisplay += 1;
                        break;
                        case compute = 3:
                             display.textContent = "it's tie, rock";
                             break;
                default:
                   display.textContent = "game is broken";
                    break;
               }
            count += 1
            attempts.innerHTML = count; 
            success.innerHTML = successdisplay;
            failure.innerHTML = failuredisplay;
        })

attempts.innerHTML = count; 
success.innerHTML = successdisplay;
failure.innerHTML = failuredisplay;

