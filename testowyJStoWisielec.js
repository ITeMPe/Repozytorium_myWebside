function StartGry()
{
	var haslo= document.getElementById("Haslo").value;
	var wskazowka= document.getElementById("wsk").value;
	
	
	if(isNaN(haslo)&& isNaN(wskazowka))
	{
		document.getElementById("Rozgrywka").innerHTML=wskazowka;
	}
	else
	{
		document.getElementById("Rozgrywka").innerHTML="Błędnie podane hasło lub wskazówka";
	}
	
}