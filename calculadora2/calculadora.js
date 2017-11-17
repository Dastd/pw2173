//constantes de electron
const {BrowserWindow}=require('electron').remote
const app = require('electron').app
const path = require('path')
const url = require('url')
//otra ventana
let ventanaCalcCient;
function calculadoraCientifica(){
	ventanaCalcCient = new BrowserWindow({width:380,heigth:380});
	ventanaCalcCient.loadURL(url.format({
		pathname: path.join(__dirname,'calccientifica.html'),
		protocol: 'file',
		slashes: true
	}));
	ventanaCalcCient.webContents.openDevTools();
	ventanaCalcCient.show();
}


//variable global
var operador = "";
function numeros(num){
 if (operador == ""){ //operando1
 	var valorInicial=document.calculadora.operando1.value;
 	if(valorInicial == "0"){
 		document.calculadora.operando1.value="";
 	}

 	document.calculadora.operando1.value=
 	document.calculadora.operando1.value + num;
 }
 else{
 	var valorInicial=document.calculadora.operando2.value;
 	if(valorInicial == "0"){
 		document.calculadora.operando2.value="";
 	}
 	
 	document.calculadora.operando2.value=
 	document.calculadora.operando2.value + num;
 }
}
function operadores(ope){
	operador = ope
}
function igual(){
	var valor1=document.calculadora.operando1.value;
	var valor2=document.calculadora.operando2.value;
	
	// if(operador == '+'){
	// 	document.calculadora.resultado.value=valor1+valor2;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
	}
function borrar(){
	operador = "";
	document.calculadora.operando1.value = 0;
	document.calculadora.operando2.value = 0;
	document.calculadora.resultado.value = 0;
}