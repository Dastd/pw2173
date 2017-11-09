// jquery = $
var inicia = function() {
	var nuevo = function(){
	// json= JavaScript object notation
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	// alert(data.results[0].name.first+" "+data.results[0].name.last);
    // console.log(data);
    $("#nombre").html("nombre: "+data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last);
    $("#foto").attr("src",data.results[0].picture.large);
    $("#Direccion").html("Direccion: "+data.results[0].location.state+" "+data.results[0].location.city+" "+data.results[0].location.street+" "+data.results[0].location.postcode)
  	$("#Correo").html("Correo: "+data.results[0].email);
  	$("#Genero").html("Genero: "+data.results[0].gender)
  	$("#User").html("Usuario: "+data.results[0].login.username)
  }
});}
// alert("Lista la pagina")
$("#btnNuevo").on("click",nuevo);
}
// iniciamos JQuery cuando la pagina esta lista
// ejecuta la funcion inicia
$(document).ready(inicia);