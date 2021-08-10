var c = 0;
var player1 = [];
var player2 = [];
var string1;
var string2;
var total1=0;
var total2=0;
var mark=0;
var turn=0;

function newgame(){
    location.reload();
}


$("button").click(
function show(){
    c++;

    var img = document.createElement('img');
    if(c%2!=0){
    img.src = 'round.png';
    }
    else{
    img.src = 'cross.png';
    }
    img.setAttribute('height', '100px');
    
    var start = 'block';
    var cont = (this.id);
    con = cont.charAt(5);
    var str = start + con;
    document.getElementById(str).appendChild(img);
    document.getElementById(str).style.backgroundColor = "whitesmoke";
    document.getElementById(str).disabled = true;
    
    if(c%2!=0){
    string1 = player1.push(con);
    }
    else{
    string2 = player2.push(con);
    }

    var n1 = player1.includes("1");
    var n2 = player1.includes("2");
    var n3 = player1.includes("3");
    var n4 = player1.includes("4");
    var n5 = player1.includes("5");
    var n6 = player1.includes("6");
    var n7 = player1.includes("7");
    var n8 = player1.includes("8");
    var n9 = player1.includes("9");

    var m1 = player2.includes("1");
    var m2 = player2.includes("2");
    var m3 = player2.includes("3");
    var m4 = player2.includes("4");
    var m5 = player2.includes("5");
    var m6 = player2.includes("6");
    var m7 = player2.includes("7");
    var m8 = player2.includes("8");
    var m9 = player2.includes("9");

    if(n1 & n2 & n3){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=1;
    }
    else if(m1 & m2 & m3){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=2;
    }
    if(n4 & n5 & n6){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=1;
    }
    else if(m4 & m5 & m6){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=2;
    }
    if(n7 && n8 && n9){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=1;
    }
    else if(m7 & m8 & m9){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=2;
    }
    if(n1 & n4 & n7){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=1;
    }
    else if(m1 & m4 & m7){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=2;
    }
    if(n2 & n5 & n8){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=1;
    }
    else if(m2 & m5 & m8){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=2;
    }
    if(n3 & n6 & n9){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=1;
    }
    else if(m3 & m6 & m9){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=2;
    }
    if(n1 & n5 & n9){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=1;
    }
    else if(m1 & m5 & m9){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=2;
    }
    if(n3 & n5 & n7){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=1;
    }
    else if(m3 & m5 & m7){
    document.getElementById("win").style.visibility="visible";
    document.getElementById("ok").style.visibility="visible";
    mark=2;
    }
    
    turn = turn + 1;

    if(mark==1){
        document.getElementById("win").innerHTML= "<h3>CONGRATULATIONS!</h3> <h5>ROUND WON</h5>";
    }
    if(mark==2){
        document.getElementById("win").innerHTML= "<h3>CONGRATULATIONS!</h3> <h5>CROSS WON</h5>";
    }
    if(turn==9){
        if(mark==0){
        document.getElementById("win").innerHTML= "<h2>GAME DRAWN!</h2>";
        document.getElementById("win").style.visibility="visible";
        document.getElementById("ok").style.visibility="visible";
        }
    }
}
)