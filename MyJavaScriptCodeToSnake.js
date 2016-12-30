
var x=550;
var y=425;
var poziom=1;
var kierunek="right";
var oldDirection= "right";






// Wyswietlenie pierwszego kwadracka //
function StartSnake( )
{

	 document.getElementById("infoSnake").innerHTML = "Poziom Snake'a: "+poziom;

   MoveSnake(kierunek);
   losowanieKwadratu();
   wykrywanieKwadrata();
}


//    Podstawowy ruch Snake'a
function MoveSnake(direction)
{
   kierunek=direction;
  //  alert("Kierunek  "+kierunek+"   x: "+x+"   y: "+y);
    //  var posX = document.getElementById("snake").style.marginLeft;
    //var posY = document.getElementById("snake").style.marginTop;
    //  alert("Kierunek  "+kierunek+"x: "+posX+"   y: "+posY);
    switch (direction)
      {
        case "left":
            x=x-1;
            break;
        case "right":
              x=x+1;
              break;
        case "up":
               y=y-1;
               break;
          case "down":
                y=y+1;
                break;
          default:
                 break;
      }
    //  alert("Kierunek  "+kierunek+"   x: "+x+"   y: "+y);
      document.getElementById("snake").style.marginLeft = x+'px';
      document.getElementById("snake").style.marginTop = y+'px';

      //  alert("Kierunek  "+kierunek+"x: "+posX+"   y: "+posY);

            //alert("Przed if'em          y= "+ posY +" ,x= "+ posX);
            if(x>-10 &&x<1090 &&y>-10 &&  y <840)
            {
                  //  alert("W if'ie            x= "+ x +" ,y= "+ y);
                   setTimeout("MoveSnake(kierunek)",15);
            }
            else      //  alert("W else'ie         x= "+ x +" ,y= "+ y);
            {
                  plik="<img src=\"img/gameover.png\"/>";
                  document.getElementById("Plansza").innerHTML =  '<div id="OknoRestartowe">'+plik+
                  ' <br/><br/><br/><span id="Informacja">Niestety, musisz jeszcze poćwiczyć .. !!<br/></span><br/> '+"" +
                  '<input type="submit" value="ZACZNIJ OD NOWA" id="Restart" onclick="location.reload()" ></div>';
            }
  }

window.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37: // Left
    case 65:
      //alert('Lewo');
    //  MoveSnake("left");
    if(oldDirection == "right")break;
    kierunek="left";
    oldDirection="left";
    break;

    case 38: // Up
    case 87:
      //alert('Góra');
      //MoveSnake("up");
      if(oldDirection == "down")break;
      kierunek="up";
      oldDirection="up";
    break;

    case 39: // Right
    case 68:
      //alert('Prawo');
    //MoveSnake("right");
    if(oldDirection == "left")break;
    kierunek="right";
    oldDirection="right";
    break;

    case 40: // Down
    case 83:
      //alert('Dół');
      //MoveSnake("down");
      if(oldDirection == "up")break;
      kierunek="down";
      oldDirection="down";
    break;
  }
}, false);


function wykrywanieKwadrata()
{

  var xkw=document.getElementById("square").style.marginLeft;
  var ykw=document.getElementById("square").style.marginTop;
//  alert("JESTES W FUNKCJI WYKRYWANIA ZJEDZENIA KWADRATA, \n wsp kwadrata: "+xkw+"  , "+ykw);
   var x = document.getElementById("snake").style.marginLeft;
   var y = document.getElementById("snake").style.marginTop;
   //alert("Wsp  snake'a:  "+x+" , "+y);
  // document.getElementById("infoSnake").innerHTML=   xkw[0]+''+xkw[1]+'=='+x[0]+''+x[1]+'       '+ ykw[0]+''+ykw[1]+'=='+y[0]+''+y[1];     //Math.abs(xkw-x)+",  " + Math.abs(ykw-y);     //xkw+","+ykw+"       "+x+" x,  "+y+" y";

   if( (xkw[0] == x[0] && xkw[1]==x[1] ) && (ykw[0] == y[0] && ykw[1]==y[1] ) )      //Math.abs(xkw-x)<10 || Math.abs(ykw-y)<10
   {
     alert("Zjadłes go!!  Punkt dla Ciebie ;) ");
     poziom++;
     dodajKwadrat();
     document.getElementById("infoSnake").innerHTML = "Poziom Snake'a: "+poziom;
    losowanieKwadratu();
   }
setTimeout( "wykrywanieKwadrata()",1);
}




function losowanieKwadratu()
{
  var posX=Math.floor((Math.random() * 1090) + 5);  // losowanie od 5 do 835
  var posY=Math.floor((Math.random()*830)+5);   // losowanie od 5 do 1095

document.getElementById("square").style.display='block';
alert(posX+"   "+posY);
document.getElementById("square").style.marginLeft=posX;
document.getElementById("square").style.marginTop=posY;


}




function dodajKwadrat()
{
  var posX1 = x;
  var posY1 = y;
  var posX2 =   1;
  var posY2 =   1;

  document.getElementById("Plansza").innerHTML += ' <div id="snake'+poziom +'" ></div>'
var elem =document.getElementById("snake2");
elem.style.width=20+"px";
elem.style.height=20+"px";
elem.style.position="absolute";
elem.style.marginTop=20+"px";
elem.style.marginLeft=20+"px";
elem.style.background="red";
}
