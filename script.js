let player = 1;
let click = {
    "top-left": 0,
    "top-middle": 0,
    "top-right": 0,
    "middle-left": 0,
    "middle-middle": 0,
    "middle-right": 0,
    "bottom-left": 0,
    "bottom-middle": 0,
    "bottom-right": 0,
}

function selected(ev) {
    ev.preventDefault();
    // alert("Hello World!");

    let wyw = ev.target.id;
    if (click[wyw] == 0)
    {
        click[wyw] += 1;
        if (player == 1)
        {
            document.getElementById(wyw).innerHTML = "<div class='tile'>X</div>";
            player = 2;
        }
        else{
            document.getElementById(wyw).innerHTML = "<div class='tile'>O</div>";
            player = 1;
        }
    }
    else
    {
        alert("Already Clicked");
    }
    console.log(wyw);
    console.log(click[wyw]);
}