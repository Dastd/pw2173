// jquery = $
var inicia = function() {
	// json= JavaScript object notation
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	alert(data.results[0].name.first+" "+data.results[0].name.last);
    // console.log(data);
  }
});
// alert("Lista la pagina")
}
// iniciamos JQuery cuando la pagina esta lista
// ejecuta la funcion inicia
$(document).ready(inicia);