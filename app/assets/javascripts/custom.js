$(document).ready(function(){

  $("a[rel=tooltip]").tooltip();

  $("body").html($("body").html().replace(/Bacon|bacon/g,'<a href="#" data-toggle="tooltip" title="Bacon Beercan">$&</a>'));

});