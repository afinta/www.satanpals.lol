window.addEventListener('load', alCargarPagina);

var nombresParametros = new Array();
var valoresParametros = new Array();

function alCargarPagina()
{

	//NAVEGATION TRANSITION
	subCat = document.querySelectorAll(".dd");
	subCat[0].addEventListener('mouseover',function(){show("0")});
	//subCat[1].addEventListener('mouseover',function(){show("1")});
	subCat[0].addEventListener('mouseout',function(){unshow("0")});
	//subCat[1].addEventListener('mouseout',function(){unshow("1")});

	//PAGINA DEL CARRITO CON PARAMETROS
  	if(document.URL.split("/")[document.URL.split("/").length-1].split("?")[0]=="Carrito.html" && document.URL.split("/")[document.URL.split("/").length-1].split("?")[1]!=null){

		tablaCarrito = document.getElementById("carrito");
	  	laptopNameRow = document.getElementById("nombreLaptop")

	  	//AQUI TENEMOS LA FUNCION DE GET
		arrayParametros=document.URL.split("/")[document.URL.split("/").length-1].split("?")[1].split("&");
		for(x=0;x<arrayParametros.length;x++){
			nombresParametros[x] = arrayParametros[x].split("=")[0];
			valoresParametros[x] = arrayParametros[x].split("=")[1];
		}

		//alert(getParameterValue("product"));
		//alert(test1());

		//aqui hay que poner la funcion de elegir producto
		switch(getParameterValue("product")){
			case "0":
				//alert("has elegido es prime portatil");
				newRow = tablaCarrito.insertRow(laptopNameRow.rowIndex+1);
				newRow.insertCell(0).innerHTML="Portatil Force QAL51-FHD"
				newRow.insertCell(1).innerHTML="560€";
				newRow.insertCell(2).innerHTML="1";
				newRow.insertCell(3).innerHTML="560€";
				break;

			case "1":
				//alert("has elegido es prime portatil");
				newRow = tablaCarrito.insertRow(laptopNameRow.rowIndex+1);
				newRow.insertCell(0).innerHTML="Portatil Force 16GA-005"
				newRow.insertCell(1).innerHTML="660€";
				newRow.insertCell(2).innerHTML="1";
				newRow.insertCell(3).innerHTML="660€";
				break;

			case "2":
				//alert("has elegido es prime portatil");
				newRow = tablaCarrito.insertRow(laptopNameRow.rowIndex+1);
				newRow.insertCell(0).innerHTML="Portatil MSI GX60 1AC-021US"
				newRow.insertCell(1).innerHTML="1200€";
				newRow.insertCell(2).innerHTML="1";
				newRow.insertCell(3).innerHTML="1200€";
				break;

			case "3":
				//alert("has elegido es prime portatil");
				newRow = tablaCarrito.insertRow(laptopNameRow.rowIndex+1);
				newRow.insertCell(0).innerHTML="Portatil SAGER-NP9170"
				newRow.insertCell(1).innerHTML="1425€";
				newRow.insertCell(2).innerHTML="1";
				newRow.insertCell(3).innerHTML="1425€";
				break;

			case "4":
				//alert("has elegido es prime portatil");
				newRow = tablaCarrito.insertRow(laptopNameRow.rowIndex+1);
				newRow.insertCell(0).innerHTML="Portatil GE60 0ND-257US"
				newRow.insertCell(1).innerHTML="1430€";
				newRow.insertCell(2).innerHTML="1";
				newRow.insertCell(3).innerHTML="1430€";
				break;
		}
		//newRow = tablaCarrito.insertRow(laptopName.rowIndex+1);
		//newRow.insertCell(0).innerHTML=document.URL.split("/")[document.URL.split("/").length-1].split("?")[1];
		//newRow.insertCell(1).innerHTML="cacas";
  	}


  	//IF NO PARAMETRO
	//if(document.URL.split("/")[document.URL.split("/").length-1].split("?")[0]=="index.html"){
	if( document.URL.split("/")[document.URL.split("/").length-1].split("?")[1]==null){
		loginButton = document.getElementById("loginButton");
		loginButton.style.opacity="1";
		loginButton.addEventListener("click",showLogin);


		loginSubmit = document.getElementById("loginSubmit");
		loginSubmit.addEventListener("click",login);
	}

	//TIENDA
	if(document.URL.split("/")[document.URL.split("/").length-1].split("?")[0]=="Tienda.html" && document.URL.split("/")[document.URL.split("/").length-1].split("?")[1]!=null){
		//if( document.URL.split("/")[document.URL.split("/").length-1].split("?")[1]!=null){
	  	botonesTienda = document.getElementsByClassName('buyButton');

	  	for(x=0;x<=4;x++){
	  		botonesTienda[x].style.opacity="1";
	  	}

		//carritoTable[0].addEventListener('onclick',goToCarrito);
		botonesTienda[0].addEventListener('click',function(){goToCarrito("0")});
		botonesTienda[1].addEventListener('click',function(){goToCarrito("1")});
		botonesTienda[2].addEventListener('click',function(){goToCarrito("2")});
		botonesTienda[3].addEventListener('click',function(){goToCarrito("3")});
		botonesTienda[4].addEventListener('click',function(){goToCarrito("4")});
  	}

  

}

function show(argumento){
	//subCat1 = document.querySelectorAll("#izquierda ul .dd");
	subCat[argumento].style.height = "120px";
	subCat[argumento].style.transition = "height 1s";

	subCatLi = document.querySelectorAll(".hiddenL");

	subCatLi[argumento].style.opacity = "1";
	//subCatLi[argumento].style.top = "50px";
	subCatLi[argumento].style.transition = "opacity 1s";
}

function unshow(argumento){
	subCat[argumento].style.height = "20px";
	subCat[argumento].style.transition = "height 1s";

	subCatLi[argumento].style.opacity = "0";
	subCatLi[argumento].style.transition = "opacity 1s;"
}

function goToCarrito(idLaptop){

	switch(idLaptop){

		case "0":
			document.location.href="Carrito.html?product=0";
			break;
		case "1":
			document.location.href="Carrito.html?product=1";
			break;
		case "2":
			document.location.href="Carrito.html?product=2";
			break;
		case "3":
			document.location.href="Carrito.html?product=3";
			break;
		case "4":
			document.location.href="Carrito.html?product=4";
			break;
	}

	//alert("cacas");

	/*if(idLaptop==1){
		alert("cacas");
	}*/

	//document.location.href="Carrito.html";
	//alert("que es esto");
}

function getParameterValue(ParName){
	for(x=0;x<nombresParametros.length;x++){
		if(nombresParametros[x]==ParName){
			return valoresParametros[x];
		}
	}
	//return ("stringValue");
}

function showLogin(){
	loginDIV = document.getElementById("login");
	loginDIV.style.opacity = "1";
}

function login(){
	
	username = document.querySelector("#login input[name='username']").value;
	password = document.querySelector("#login input[name='password']").value;

	userArray=["Client","Admin"];
	passArray=["pass","1234"];

	//alert(username);

	for(x=0;x<userArray.length;x++){

		if(username==userArray[0] && password==passArray[0]){
			document.location.href=document.URL.split("/")[document.URL.split("/").length-1].split("?")[0]+"?user=client";
		}

		if(username==userArray[1] && password==passArray[1]){
			document.location.href=document.URL.split("/")[document.URL.split("/").length-1].split("?")[0]+"?user=admin";
		}
	}
}



document.onclick=function(e){
	//alert(e.target.getAttribute("href"));
	//paginaNueva=e.target.getAttribute("href");
	if(e.target.tagName=="A"){
		//PRUEBAS
		//document.getElementsByTagName('a')[0].removeAttribute('href');
		//alert(document.URL.split("/")[document.URL.split("/").length-1].split("?")[1]);
		//window.location="index.html";
		//alert(e.target);
		//anchors = document.get

		

		//paginaNueva=e.target.getAttribute("href");
		//alert(paginaNueva);

		//anchorQueDesactivo=document.querySelector("[href="+"'"+paginaNueva+"'"+"]");

		//anchorQueDesactivo.removeAttribute("href");

		//alert(paginaNueva);

		//alert("ha funcionado. has parado es anco");
		if(document.URL.split("/")[document.URL.split("/").length-1].split("?")[1]!=null){
			paginaNueva=e.target.getAttribute("href");
			anchorQueDesactivo=document.querySelector("[href="+"'"+paginaNueva+"'"+"]");
			anchorQueDesactivo.removeAttribute("href");
			window.location.href=paginaNueva+"?"+document.URL.split("/")[document.URL.split("/").length-1].split("?")[1];
		}
		
	}
}