//var UrlApi = "http://localHost:50030/api/";
//var UrlApi = "http://localHost:62062/api/";
//var UrlApi = "https://www.api-quixchan.cetcom.edu.gt/api/";
var UrlApi = "https://api-ef-quixchan.cetcom.edu.gt/api/";

function AgregarPais(){
    var settings = {
        "url": UrlApi + "AgregarPais",
        "method": "POST",  
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdContinente": $("#continente2").val(),
            "TxtPais": $("#Pais").val(),
            "TxtCapital": $("#Capital").val(),
            "IntAnioIndependencia": $("#Independencia").val(),
            "IntPoblacion": $("#Poblacion").val(),
            "TxtPresidenteActual": $("#Presidente").val(),
            "TxtIdiomaOficial": $("#Idioma").val(),
            "TxtMoneda": $("#Moneda").val(),
            
        }),
      };
      
      $.ajax(settings).done(function (response) {
        $.each(response, function(index, data){
            if(data.Resultado>0){
              alert("Pais Agregado ")
              
              LimpiarFormulario();
              ObtenerUsuarios();
            }else{
              alert("Opss... Algo salio mal :( ")
            }
        });
      });
}

function LimpiarFormulario(){
        $("#Pais").val("");
        $("#Capital").val("");
        $("#Independencia").val("");
        $("#Poblacion").val("");
        $("#Presidente").val("");
        $("#Idioma").val("");
        $("#Moneda").val("");
}

function ObtenerPaisesAfrica(){
    $("#TblPaises td").remove();
    $("#TblInformacion td").remove();
    $("#continente label").remove();
    var settings = {
        "url": UrlApi + "ObtenerPaises",
        "method": "Post",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        $.each(response, function(index, data){
          if(data.IdContinente == '1'){
            var paises = "<tr class='row100 body'><td class='cell100 column1'>" + data.TxtPais +"</td></tr>";
            var informacion = "<tr class='row100 body'><td class='cell100 column2'>" + data.TxtCapital +
            "</td><td class='cell100 column3'>" + data.IntAnioIndependencia +
            "</td><td class='cell100 column4'>" + data.IntPoblacion +
            "</td><td class='cell100 column5'>" + data.TxtPresidenteActual +
            "</td><td class='cell100 column6'>" + data.TxtIdiomaOficial +
            "</td><td class='cell100 column7'>" + data.TxtMoneda +
            "</td><td class ='Text-center cell100 column8'><a href='#' onclick='ObtenerDatosPais(" + data.IdUPais + ");'>Editar</a>" + 
            "</td><td class ='Text-center cell100 column8'><a href='#' onclick='EliminarPais(" + data.IdPais + ");'>Eliminar</a></td></tr>";
            var continente = "<label> Continente: Africa </label>"
           }
            
            $(paises).appendTo("#TblPaises");
            $(informacion).appendTo("#TblInformacion");  
            $(continente).appendTo("#continente")  ;     
        });
      });
}

function ObtenerPaisesAmerica(){
  $("#TblPaises td").remove();
  $("#TblInformacion td").remove();
  $("#continente label").remove();
  var settings = {
      "url": UrlApi + "ObtenerPaises",
      "method": "Post",
      "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
      $.each(response, function(index, data){
        if(data.IdContinente == '2'){
          var paises = "<tr class='row100 body'><td class='cell100 column1'>" + data.TxtPais +"</td></tr>";
          var informacion = "<tr class='row100 body'><td class='cell100 column2'>" + data.TxtCapital +
          "</td><td class='cell100 column3'>" + data.IntAnioIndependencia +
          "</td><td class='cell100 column4'>" + data.IntPoblacion +
          "</td><td class='cell100 column5'>" + data.TxtPresidenteActual +
          "</td><td class='cell100 column6'>" + data.TxtIdiomaOficial +
          "</td><td class='cell100 column7'>" + data.TxtMoneda +
          "</td><td class ='Text-center cell100 column7'><a href='#' onclick='ObtenerDatosPais(" + data.IdPais + ");'>Editar</a>" + 
          "</td><td class ='Text-center cell100 column7'><a href='#' onclick='EliminarPais(" + data.IdPais + ");'>Eliminar</a></td></tr>";
          var continente = "<label> Continente: America </label>"
         }
          $(paises).appendTo("#TblPaises");
          $(informacion).appendTo("#TblInformacion");  
          $(continente).appendTo("#continente")  ;     
      });
    });
}


function ObtenerPaisesEuropa(){
$("#TblPaises td").remove();
$("#TblInformacion td").remove();
$("#continente label").remove();
var settings = {
    "url": UrlApi + "ObtenerPaises",
    "method": "Post",
    "timeout": 0,
  };  
  $.ajax(settings).done(function (response) {
    $.each(response, function(index, data){
      if(data.IdContinente == '3'){
        var paises = "<tr class='row100 body'><td class='cell100 column1'>" + data.TxtPais +"</td></tr>";
        var informacion = "<tr class='row100 body'><td class='cell100 column2'>" + data.TxtCapital +
        "</td><td class='cell100 column3'>" + data.IntAnioIndependencia +
        "</td><td class='cell100 column4'>" + data.IntPoblacion +
        "</td><td class='cell100 column5'>" + data.TxtPresidenteActual +
        "</td><td class='cell100 column6'>" + data.TxtIdiomaOficial +
        "</td><td class='cell100 column7'>" + data.TxtMoneda +
        "</td><td class ='Text-center cell100 column8'><a href='#' onclick='ObtenerDatosPais(" + data.IdPais + ");'>Editar</a>" + 
        "</td><td class ='Text-center cell100 column8'><a href='#' onclick='EliminarPais(" + data.IdPais + ");'>Eliminar</a></td></tr>";
        var continente = "<label> Continente: Europa </label>"
       }
        $(paises).appendTo("#TblPaises");
        $(informacion).appendTo("#TblInformacion");    
        $(continente).appendTo("#continente")  ;   
    });
  });
}

function ObtenerPaisesAsia(){
$("#TblPaises td").remove();
$("#TblInformacion td").remove();
$("#continente label").remove();
var settings = {
    "url": UrlApi + "ObtenerPaises",
    "method": "Post",
    "timeout": 0,
  };
  $.ajax(settings).done(function (response) {
    $.each(response, function(index, data){
      if(data.IdContinente == '4'){
        var paises = "<tr class='row100 body'><td class='cell100 column1'>" + data.TxtPais +"</td></tr>";
        var informacion = "<tr class='row100 body'><td class='cell100 column2'>" + data.TxtCapital +
        "</td><td class='cell100 column3'>" + data.IntAnioIndependencia +
        "</td><td class='cell100 column4'>" + data.IntPoblacion +
        "</td><td class='cell100 column5'>" + data.TxtPresidenteActual +
        "</td><td class='cell100 column6'>" + data.TxtIdiomaOficial +
        "</td><td class='cell100 column7'>" + data.TxtMoneda +
        "</td><td class ='Text-center cell100 column8'><a href='#' onclick='ObtenerDatosPais(" + data.IdPais + ");'>Editar</a>" + 
        "</td><td class ='Text-center cell100 column8'><a href='#' onclick='EliminarPais(" + data.IdUPais  + ");'>Eliminar</a></td></tr>";
        var continente = "<label> Continente: Asia </label>"
       }
        $(paises).appendTo("#TblPaises");
        $(informacion).appendTo("#TblInformacion");    
        $(continente).appendTo("#continente");     
    });
  });
}

function ObtenerPaisesOseania(){
$("#TblPaises td").remove();
$("#TblInformacion td").remove();
$("#continente label").remove();
var settings = {
    "url": UrlApi + "ObtenerPaises",
    "method": "Post",
    "timeout": 0,
  };
  $.ajax(settings).done(function (response) {
    $.each(response, function(index, data){
      if(data.IdContinente == '5'){
        var paises = "<tr class='row100 body'><td class='cell100 column1'>" + data.TxtPais +"</td></tr>";
        var informacion = "<tr class='row100 body'><td class='cell100 column2'>" + data.TxtCapital +
        "</td><td class='cell100 column3'>" + data.IntAnioIndependencia +
        "</td><td class='cell100 column4'>" + data.IntPoblacion +
        "</td><td class='cell100 column5'>" + data.TxtPresidenteActual +
        "</td><td class='cell100 column6'>" + data.TxtIdiomaOficial +
        "</td><td class='cell100 column7'>" + data.TxtMoneda +
        "</td><td class ='Text-center cell100 column8'><a href='#' onclick='ObtenerDatosPais(" + data.IdPais + ");'>Editar</a>" + 
        "</td><td class ='Text-center cell100 column8'><a href='#' onclick='EliminarPais(" + data.IdPais + ");'>Eliminar</a></td></tr>";
        var continente = "<label> Continente: Oseania </label>"
       }
        $(paises).appendTo("#TblPaises");
        $(informacion).appendTo("#TblInformacion");     
        $(continente).appendTo("#continente")    
    });
  });
}

function EliminarPais(IdPais){
    var settings = {
        "url": UrlApi + "EliminarPais",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdPais": IdPais,           
        }),
      };
      
      $.ajax(settings).done(function (response) {
        $.each(response, function(index, data){
            if(data.Resultado>0){
              alert("Error: EL Usuario si fue eliminado")
              if(data.IdContinente == '1'){
                ObtenerPaisesAfrica();
              }if(data.IdContinente == '2'){
                ObtenerPaisesAmerica();
              }if(data.IdContinente == '3'){
                ObtenerPaisesEuropa();
              }if(data.IdContinente == '4'){
                ObtenerPaisesAsia();
              }if(data.IdContinente == '5'){
                ObtenerPaisesOseania();
              }
            }else{
                alert("Error: EL Pais no fue eliminado")
            }
        });
      });
}

function ObtenerDatosPais(IdPais){
    var settings = {
        "url": UrlApi + "ObtenerDatosPais",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdPais": IdPais
        }),
      };
      
      $.ajax(settings).done(function (response) {
        LimpiarFormulario();
        $.each(response, function(index, data){
            $("#Pais").val(data.TxtPais);
            $("#Capital").val(data.TxtCapital);
            $("#Independencia").val(data.IntAnioIndependencia);
            $("#Poblacion").val(data.IntPoblacion);
            $("#Presidente").val(data.TxtPresidenteActual);
            $("#Idioma").val(data.TxtIdiomaOficial);
            $("#Moneda").val(data.TxtMoneda);

        });
      });
}

function ActualizarUsuario(){
    var settings = {
        "url": UrlApi + "ActualizarUsuario",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "IdUsuario": $("#IdOculto").val(),
            "TxtNombres": $("#TxtNombres").val(),
            "TxtApellidos": $("#TxtApellidos").val(),
            "TxtDireccion": $("#TxtDireccion").val(),
            "TxtEmail": $("#TxtEmail").val(),
            "TxtPassword": $("#TxtPassword").val(),
            "TxtToken": sessionStorage.getItem("inicio")
        }),
      };
      
      $.ajax(settings).done(function (response) {
        $.each(response, function(index, data){
            if(data.Resultado>0){
                alert("Usuario Actualizado Correctamente");
                LimpiarFormulario();
                ObtenerUsuarios();
            }else{
                alert("Error: EL Usuario no fue actualizado")
            }
        });
      });
}

function Guardar(){
    if($("#IdOculto").val() > 0){
        ActualizarUsuario();

    }else{
        AgregarUsuario();
    }
}

