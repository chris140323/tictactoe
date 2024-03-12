let gameHasEnded;
let clicks;
let player;
let draw;
let click;

// const x = new Set();
// const o = new Set();
// let winningLines = [
//     ["top-left", "top-middle", "top-right"],
//     ["middle-left", "middle-middle", "middle-right"],
//     ["bottom-left", "bottom-middle", "bottom-right"],
//     ["top-left", "middle-left", "bottom-left"],
//     ["top-middle", "middle-middle", "bottom-middle"],
//     ["top-right", "middle-right", "bottom-right"],
//     ["top-left", "middle-middle", "bottom-right"],
//     ["top-right", "middle-middle", "bottom-left"]
// ];
// let turn = 1;
// let end;

// function picked(ev) {
//     ev.preventDefault();

//     let hey = ev.target.id;
//     if (end == null && hey != "tile" && !x.has(hey) && !o.has(hey)) {
//         if (turn == 1) {
//             x.add(hey), turn = -1;          // learned how to use JS question mark e.g. if X is true, then y, else z  (if set x has hey, then say duplicate, else add it to the set and change turn)
//             document.getElementById(hey).innerHTML = "<div id='tile'>X</div>";
//         }
//         else {
//             o.add(hey), turn = 1;           // if set o has hey, then say duplicate, else add it to the set and change turn
//             document.getElementById(hey).innerHTML = "<div id='tile'>O</div>";
//         }
//         // turn == 1 ? console.log(o) : console.log(x);
//         console.log("X: ", x, " and O: ", o);
//         end = checkForWinner();
//     }
// }

// function checkForWinner() {
//     let count = 0;
//     if (x.size > 2 || o.size > 2) {
//         console.log("possible winner ", turn);
//         if (turn == -1) {
//             for (let i = 0; i < winningLines.length; i++) {
//                 count = 0;
//                 for (let j = 0; j < winningLines[i].length; j++) {
//                     console.log(winningLines[i][j]);
//                     if (x.has(winningLines[i][j])) {
//                         count++;
//                         if (count == 3) {
//                             console.log("PLayer 1 wins");
//                             return "Player 1";
//                         }
//                     }
//                     else {
//                         break;
//                     }
//                 }
//             }
//         }
//         else {
//             for (let i = 0; i < winningLines.length; i++) {
//                 count = 0;
//                 for (let j = 0; j < winningLines[i].length; j++) {
//                     console.log(winningLines[i][j]);
//                     if (o.has(winningLines[i][j])) {
//                         count++;
//                         if (count == 3) {
//                             console.log("PLayer 2 wins");
//                             return "Player 2";
//                         }
//                     }
//                     else {
//                         break;
//                     }
//                 }
//             }
//         }
//     }
// }

function restart() {
    let list = document.getElementsByClassName("squares");
    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = "";
    }

    document.getElementById("result").innerText = "";
    document.getElementById("restart").innerHTML = "";

    gameHasEnded = false;
    clicks = 0;
    player = 1;
    draw = false;
    click = {
        "top-left": [0, 0],
        "top-middle": [0, 0],
        "top-right": [0, 0],
        "middle-left": [0, 0],
        "middle-middle": [0, 0],
        "middle-right": [0, 0],
        "bottom-left": [0, 0],
        "bottom-middle": [0, 0],
        "bottom-right": [0, 0],
    }

    // x.clear();
    // o.clear();
}

restart();

/* variable that states if game has ended or not (false at start)
    every time an x or o appears, we will call function that checks if its a winning move or not
    if it is, then change variable to true
    stuff inside of selected will be inside an if statement checking if game has ended is true or not
*/


function selected(ev) {
    ev.preventDefault();

    let wyw = ev.target.id;
    if (!gameHasEnded && wyw != "") {
        if (click[wyw][0] == 0) {
            clicks += 1;
            click[wyw][0] += 1;
            if (player == 1) {
                document.getElementById(wyw).innerHTML = "<div class='tile-purple'>X</div>";
                player = 2;
                click[wyw][1] = 1;
            }
            else {
                document.getElementById(wyw).innerHTML = "<div class='tile-mint'>O</div>";
                player = 1;
                click[wyw][1] = 2;
            }
            gameHasEnded = winner();
            if (gameHasEnded) {
                if (draw) {
                    document.getElementById("result").innerText = "The game is a draw!";
                }
                else {
                    document.getElementById("result").innerText = "Player " + click[wyw][1] + " won!";
                }
                document.getElementById("restart").innerHTML = "<button onclick='restart()'>Restart</button>";
            }
        }
    }
}

/*
    winner will check if there is 3 X's or O's in a vertical, horizontal, or diagonal line
    if it is, then return true

*/

function winner() {
    if (clicks > 4) {
        if ((click["top-left"][1] === click["top-middle"][1]) && (click["top-left"][1] === click["top-right"][1]) && (click["top-left"][1] !== 0)) {
            return true;
        }
        else if ((click["middle-left"][1] === click["middle-middle"][1]) && (click["middle-left"][1] === click["middle-right"][1]) && (click["middle-left"][1] !== 0)) {
            return true;
        }
        else if ((click["bottom-left"][1] === click["bottom-middle"][1]) && (click["bottom-left"][1] === click["bottom-right"][1]) && (click["bottom-left"][1] !== 0)) {
            return true;
        }
        else if ((click["top-left"][1] === click["middle-left"][1]) && (click["top-left"][1] === click["bottom-left"][1]) && (click["top-left"][1] !== 0)) {
            return true;
        }
        else if ((click["top-middle"][1] === click["middle-middle"][1]) && (click["top-middle"][1] === click["bottom-middle"][1]) && (click["top-middle"][1] !== 0)) {
            return true;
        }
        else if ((click["top-right"][1] === click["middle-right"][1]) && (click["top-right"][1] === click["bottom-right"][1]) && (click["top-right"][1] !== 0)) {
            return true;
        }
        else if ((click["top-left"][1] === click["middle-middle"][1]) && (click["top-left"][1] === click["bottom-right"][1]) && (click["top-left"][1] !== 0)) {
            return true;
        }
        else if ((click["top-right"][1] === click["middle-middle"][1]) && (click["top-right"][1] === click["bottom-left"][1]) && (click["top-right"][1] !== 0)) {
            return true;
        }
        else if (clicks >= 9) {
            draw = true;
            return true;
        }
    }
    return false;
}