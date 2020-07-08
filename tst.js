const fSound = new Audio('sounds/cash.mp3');
const sSound = new Audio('sounds/swish.m4a');
const tSound = new Audio('sounds/aww.mp3');

document.querySelector('#btn-1').addEventListener('click', One);

//the function for an overlay
function One() {

    document.querySelector('#btn-1').removeEventListener('click', One);
    let rcrt = document.querySelector('#inpt1').value;
    let prcsr = document.createTextNode('Thank you ' + rcrt + " and have a good One");
    let h3 = document.createElement('h3');
    h3.appendChild(prcsr);
    document.querySelector('#bdy').appendChild(h3);

    let image = document.createElement('img');
    image.src = "images/t.jpeg";
    document.querySelector('#bdy').appendChild(image);
}

let Alter = new box();
document.querySelector('#btn-1').addEventListener('click', Alter.show);

function box() {

    this.show = function() {
        let w = window.innerWidth;
        let h = window.innerHeight;

        let box = document.querySelector('#result');

        box.style.display = "block";
        box.style.top = "180px";
        box.style.left = (w / 2) - (550 * .5) + "px";

        document.querySelector('#hd').innerHTML = " NYU Grade Table<img src='images/im.png' onclick = 'Alter.wipe()';>";
    }

    this.wipe = function() {
        document.querySelector('#result').style.display = "none";
    }

}

document.querySelector('#btn-1').addEventListener('click', strngInpt);

// the function for input string
function strngInpt() {

    var input = document.querySelector('#inpt1').value.trim();
    let hldr = input.split(" ");
    let cpy = [];

    for (let i = 0; i < hldr.length; i++) {

        if (hldr[i] != " ") {
            hldr[i] = hldr[i].charAt(0).toUpperCase() + hldr[i].substring(1).toLowerCase();
            cpy.push(hldr[i]);

        }
    }

    let ans1 = cpy.sort();
    document.querySelector('#rsps1').value = ans1.join(" ");
}
document.querySelector('#btn-1').addEventListener('click', grdStd);

///THe function with soted, average and grades
function grdStd() {

    document.querySelector('#btn-1').removeEventListener('click', grdStd);
    let input = document.querySelector('#inpt2').value.trim();
    let grd = input.split(" ");
    let cpGrd = [];
    for (let i = 0; i < grd.length; i++) {
        if (grd[i] != " ") cpGrd.push(grd[i]);
    }

    let sorted = cpGrd.sort(function(a, b) { return a - b });

    let higher = sorted[sorted.length - 1];
    document.querySelector('#rsps5').value = higher;

    let lower = sorted[0];
    document.querySelector('#rsps6').value = lower;

    let sum = 0;

    for (let i = 0; i < sorted.length; i++) {
        sum += parseInt(sorted[i]);
    }
    let average = Math.round((sum / sorted.length));

    if (average >= 93) {
        document.querySelector('#rsps4').value = "A";
        fSound.play();

        let d1 = document.createElement('h2');
        let d2 = document.createTextNode("You Won a Gift!");
        d1.appendChild(d2);

        document.querySelector('#bdy').appendChild(d1);

        let items = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg'];
        let single = Math.floor(Math.random() * 4);

        let pictur = document.createElement('img');
        pictur.src = `images/${items[single]}`;
        document.querySelector('#bdy').appendChild(pictur);

    } else if (average >= 80 && average <= 93) {
        document.querySelector('#rsps4').value = "B";
        sSound.play();

    } else if (average >= 70 && average <= 80) {
        document.querySelector('#rsps4').value = "C";

    } else if (average >= 60 && average <= 70) {
        document.querySelector('#rsps4').value = "D";

    } else {
        document.querySelector('#rsps4').value = "F";
        tSound.play();
    }

    document.querySelector('#rsps3').value = average;
    document.querySelector('#rsps2').value = sorted.join("/");
}

document.querySelector('#btn-2').addEventListener('click', dllAll);

function dllAll() {
    document.querySelector('#inpt1').remove();
    document.querySelector('#inpt2').remove();

}

document.querySelector('#btn-1').addEventListener('click', wipper);

function wipper() {

    let cnt1 = document.querySelector('#inpt1').value = ' ';
    let cnt2 = document.querySelector('#inpt2').value = ' ';

}

//document.querySelector('#btn-1').addEventListener('click', shw);

function shw() {
    //let num = Math.floor(Math.random() * 2);
    //let holders = ['me.jpg', 'tub.jpg'];
    //let img1 = document.createElement('img');
    //img1.src = `images/${holders[num]}`;
    let h1 = document.createElement('h1');
    let hh = document.createTextNode('Mamadou B Diallo');
    h1.appendChild(hh);
    document.querySelector('#pctrs').appendChild(h1);
}
/*
//document.querySelector('#btn-1').addEventListener('click', generate);
// this is for generating pictures randomly functions

function generate() {
    let items = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg'];
    let single = Math.floor(Math.random() * 4);

    let pictur = document.createElement('img');
    pictur.src = `images/${items[single]}`;
    document.querySelector('#bdy').appendChild(pictur);
}
//this function is how to print all the pictures
//document.querySelector('#btn-1').addEventListener('click', printer);

function printer() {
    let items = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg'];
    for (let i = 0; i < items.length; i++) {
        let image = document.createElement('img');
        image.src = `images/${items[i]}`;
        document.querySelector('#bdy').appendChild(image);
    }
}
*/