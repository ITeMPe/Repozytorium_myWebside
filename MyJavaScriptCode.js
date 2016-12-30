

var wynik="";
var stanGry=0;
var haslo
var haslo_do_odgadniecia="";
var poprawneHaslo=false;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

function zegar()
{
	var time = new Date();
	var hour=time.getHours(); if(hour<10)hour="0"+hour;
	var minute=time.getMinutes() ; if(minute<10)minute="0"+minute;
	var second=time.getSeconds() ; if(second<10)second="0"+second;

	document.getElementById("zegar").innerHTML=hour+":"+minute+":"+second;
	setTimeout("zegar()",1000);
}

function StartGry()
{
	haslo= document.getElementById("Haslo").value;
	haslo=haslo.toUpperCase();
	var wskazowka= document.getElementById("wskazowka").value;


	SprPoprawnoscHasla();


	if(poprawneHaslo)
	{
		wynik=wskazowka;
		wynik=wynik.toUpperCase();
		document.getElementById("wsk").innerHTML+= wynik;
		var plik="<img src=\"img/s"+stanGry+".jpg\"/>";
		document.getElementById("Image").innerHTML = plik;

			var dlugosc=document.getElementById("Haslo").value.length;

			for(i=0;i<dlugosc;i++)
			{
				if(haslo.charAt(i) !=" ")
				{
					haslo_do_odgadniecia+="-";
				}
				else
				{
					haslo_do_odgadniecia+=" ";
				}
			}
			document.getElementById("Haslo_Odgadywane").innerHTML=haslo_do_odgadniecia;
			generujAlfabet();
	}
	else
	{
		document.getElementById("wsk").innerHTML="Błędnie podane hasło lub wskazówka"+ '<br/><br/> <span   class="Restart" onclick= "location.reload()">JESZCZE RAZ ?? </span>';
	}

}

function Restart()
{
	location.reload();
}

function SprPoprawnoscHasla()
{
for(i=0;i<haslo.length -1;i++)
{
	if(haslo[0]!=' ' && haslo[i] >='A' && haslo[i]<='Z'||haslo[i]==' ' ||haslo[i]=='Ą'||haslo[i]=='Ć'||haslo[i]=='Ę'||haslo[i]=='Ł'||haslo[i]=='Ń'||haslo[i]=='Ó'||haslo[i]=='Ś'||haslo[i]=='Ź'||haslo[i]=='Ż')
	{
		poprawneHaslo=true;
	}
	else
	{
		return poprawneHaslo=false;
	}
}
}


function ZablokujPrzycisk(nazwaPrzycisku)
{
	//document.getElementById(nazwaPrzycisku).style="readonly";
}



var znaki = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";
function generujAlfabet()
{
		var litery="";
		for(i=0;i<35;i++)
		{
			var element="lit"+i;
			litery+='<div class="litera" id="'+element+'"  onclick="SprawdzLitere('+i+')">'+znaki.charAt(i)+'</div>';
			if(((i+1)%7)==0 ) litery+='<div style="clear:both;"></div>';
		}
		document.getElementById("LiteryAlfabetu").innerHTML=litery;
}


function SprawdzLitere(WcisnietaLitera)
{
	var Litera=znaki.charAt(WcisnietaLitera);
	var dlugosc_hasla =document.getElementById("Haslo").value.length;
	var flaga=0;
	//var flaga2=1;
	var trafienie=false;

	for(i=0;i<dlugosc_hasla;i++)
	{

		if(Litera  == haslo.charAt(i).toUpperCase() )
		{
			trafienie=true;
			flaga=1;
		    haslo_do_odgadniecia=haslo_do_odgadniecia.zamienZnak(i,Litera);
			document.getElementById("Haslo_Odgadywane").innerHTML=haslo_do_odgadniecia;
		}
	}
	sprTrafienie(WcisnietaLitera,trafienie,dlugosc_hasla);

				if(flaga==0)
				{
					stanGry++;
					if(stanGry<9)
					{
						var plik="<img src=\"img/s"+stanGry+".jpg\"/>";
						document.getElementById("Image").innerHTML = plik;

					}
					else // GAMEOVER
					{
						var plik="<img src=\"img/s"+stanGry+".jpg\"/>";
						document.getElementById("Image").innerHTML = plik;
						plik="<img src=\"img/gameover.png\"/>";
						document.getElementById("LiteryAlfabetu").innerHTML = plik;
						document.getElementById("LiteryAlfabetu").innerHTML = plik+'<br/><span class="Tekst">Niestety, musiszjeszcze poćwiczyć .. !!<br/> Hasło to: '+haslo+'</span><br/><br/><br/> <span   class="Restart" onclick= "location.reload()">  JESZCZE RAZ ?? </span>';
					}
				}
}


function sprTrafienie(nr,traf,dl_hasla)
{
	var flag=0;
	var element="lit"+nr;
	if(traf)
	{
		document.getElementById(element).style.background="#008800";
		yes.play();
		for(i=0;i<dl_hasla;i++)
		{
			if("-"==haslo_do_odgadniecia.charAt(i))
			{
				flag = 0;break;
			}
			else flag=1;
		}
		if(flag )
		{
			plik="<img src=\"img/winner.jpg\"/>";
			document.getElementById("LiteryAlfabetu").innerHTML = plik+'<br/><span class="Tekst">BRAWO Udao Ci się odgadnąć hasło !!</span><br/><br/><br/> <span   class="Restart" onclick= "location.reload()">  JESZCZE RAZ ?? </span>';
		}
	}
	else
	{
		no.play();
		document.getElementById(element).style.background="#880000";
		document.getElementById(element).setAttribute("onclick",";");  // rozbrojenie onclick'a :D
	}
}


String.prototype.zamienZnak = function (nrIndeks, znakDoPodmiany)
{
	 if(nrIndeks>this.length-1)return this.toString();
	 else return this.substr(0,nrIndeks)+znakDoPodmiany+this.substr(nrIndeks+1);

}
