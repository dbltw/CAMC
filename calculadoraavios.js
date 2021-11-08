(function ($) {
    

//Enlaces de pdfs según contratación o fidelización. Sus variables se crean en Incio
var pholderib = "Nº Tarjeta: IB00000000";
var pholdervl = "Nº Tarjeta: 3081 4700 0000 0000";
var botonNoCliente = document.getElementById('botonNoCliente');

var enlace_pdf_avios = document.getElementsByClassName("znListItems-link")[0];
var enlace_pdf_mobile_avios = document.getElementsByClassName("znListItems-link")[7];
var enlace_pdf_privacidad = document.getElementsByClassName("znListItems-link")[1];
var enlace_pdf_mobile_privacidad = document.getElementsByClassName("znListItems-link")[8];


enlace_pdf_avios.href="../trastero/uploads/2019/09/Condiciones-generales-promoción-Endesa-Iberia-V3-IB.docx.pdf";
enlace_pdf_mobile_avios.href="../trastero/uploads/2019/09/Condiciones-generales-promoción-Endesa-Iberia-V3-IB.docx.pdf";
enlace_pdf_mobile_privacidad.href="../trastero/uploads/2019/09/POLITICA-DE-PROTECCIÓN-DE-DATOS-PROMOCIÓN-CTC-IBERIA-1.pdf";
enlace_pdf_privacidad.href="../trastero/uploads/2019/09/POLITICA-DE-PROTECCIÓN-DE-DATOS-PROMOCIÓN-CTC-IBERIA-1.pdf";


// Ocultamos todos los elementos del slide


//ahora c viene del slug
var c = $('#hdSlug').val();

//ñapa temporal... sobretodo para cuando se ejecuta Contratación
$('#hdC').val(c);
var o = $('#hdO').val();


var textoUnoSlide = document.getElementById("eluid02cdcc26");
var textoDosSlide = document.getElementById("eluid3369223d");
var textoTresSlide = document.getElementById("eluid1eaa193b");
var textoUnoBSlide = document.getElementById("eluid9a23f11e");
var textoDosBSlide = document.getElementById("eluidd3912669");
var textoTresBSlide = document.getElementById("eluid4380b53e");


// Definimos los textos del slide para Cliente y No Cliente en Mobile

var textoUnoSlideMobile = document.getElementById("eluidca2c446f");
var textoDosSlideMobile  = document.getElementById("eluid7108832e");
var textoTresSlideMobile  = document.getElementById("eluid93be4d8d");
var textoUnoBSlideMobile  = document.getElementById("eluidab3f90db");
var textoDosBSlideMobile  = document.getElementById("eluid496527f4");
var textoTresBSlideMobile  = document.getElementById("eluid1ac2bb8b");



// variables para mostrar u ocultar formulario

var formularioNoCliente = document.getElementById('formulario_cap');
var formularioCliente = document.getElementById('formulario_fid');



//Iniciamos las funciones que controlan los textos del slide

function Cliente() {

    textoUnoSlideMobile.style.display = 'block';
    textoDosSlideMobile.style.display = 'block';
    textoTresSlideMobile.style.display = 'block';
    textoUnoBSlideMobile.style.display = 'none';
    textoDosBSlideMobile.style.display = 'none';
    textoTresBSlideMobile.style.display = 'none';


    textoUnoSlide.style.display = 'block';
    textoDosSlide.style.display = 'block';
    textoTresSlide.style.display = 'block';
    textoUnoBSlide.style.display = 'none';
    textoDosBSlide.style.display = 'none';
    textoTresBSlide.style.display = 'none';
    stickyCliente.style.display = 'none';
    stickyNoCliente.style.display = 'block';
	

	
    enlace_pdf_privacidad.href="../trastero/uploads/2020/01/POLÍTICA-DE-PROTECCIÓN-DE-DATOS-DE-CARÁCTER-PERSONAL_programa-Avios_-tratamiento-email-IBERIA.pdf";
    enlace_pdf_mobile_privacidad.href="../trastero/uploads/2020/01/POLÍTICA-DE-PROTECCIÓN-DE-DATOS-DE-CARÁCTER-PERSONAL_programa-Avios_-tratamiento-email-IBERIA.pdf";
    enlace_pdf_avios.href="../trastero/uploads/2020/01/BBLL-Fidelización-concurso-FITUR.pdf";
    enlace_pdf_mobile_avios.href="../trastero/uploads/2020/01/BBLL-Fidelización-concurso-FITUR.pdf";

    
    if(c==="vueling"){
        //visita 
        $("#botonCliente").css('background-color','#004efe!important');
        $("#botonCliente").css('border-color','#004efe!important');
        enlace_pdf_privacidad.href="../trastero/uploads/2020/01/POLÍTICA-DE-PROTECCIÓN-DE-DATOS-DE-CARÁCTER-PERSONAL_programa-Avios_-tratamiento-email-20012020-VUELING.pdf";
        enlace_pdf_mobile_privacidad.href="../trastero/uploads/2020/01/POLÍTICA-DE-PROTECCIÓN-DE-DATOS-DE-CARÁCTER-PERSONAL_programa-Avios_-tratamiento-email-20012020-VUELING.pdf";
    }else if(c==="iberia"){
        enlace_pdf_privacidad.href="../trastero/uploads/2020/01/POLÍTICA-DE-PROTECCIÓN-DE-DATOS-DE-CARÁCTER-PERSONAL_programa-Avios_-tratamiento-email-IBERIA.pdf";
        enlace_pdf_mobile_privacidad.href="../trastero/uploads/2020/01/POLÍTICA-DE-PROTECCIÓN-DE-DATOS-DE-CARÁCTER-PERSONAL_programa-Avios_-tratamiento-email-IBERIA.pdf";
    }
    
    
    //metrica marcaje etc
    dynamic_dataLayer.push("clientType","cliente");
    console.log("cliente");
}


function NoCliente() {

    textoUnoSlide.style.display = 'none';
    textoDosSlide.style.display = 'none';
    textoTresSlide.style.display = 'none';
    textoUnoBSlide.style.display = 'block';
    textoDosBSlide.style.display = 'block';
    textoTresBSlide.style.display = 'block';

    textoUnoSlideMobile.style.display = 'none';
    textoDosSlideMobile.style.display = 'none';
    textoTresSlideMobile.style.display = 'none';
    textoUnoBSlideMobile.style.display = 'block';
    textoDosBSlideMobile.style.display = 'block';
    textoTresBSlideMobile.style.display = 'block';
    stickyCliente.style.display = 'block';
    stickyNoCliente.style.display = 'none';

    console.log("Pulsado");

    //enlace_pdf_privacidad.href="trastero/uploads/2019/10/TyCs-General-Tablas-vueling.pdf";
    //enlace_pdf_mobile_privacidad.href="trastero/uploads/2019/10/TyCs-General-Tablas-vueling.pdf";
    //enlace_pdf_avios.href="trastero/uploads/2019/11/TyCs-General-Tablas-VUELING.pdf";
    //enlace_pdf_mobile_avios.href="trastero/uploads/2019/11/TyCs-General-Tablas-VUELING.pdf";

    if(c==="vueling"){
        
        enlace_pdf_avios.href="../trastero/uploads/2019/12/Landing-Captacion-Vueling-Condiciones-generales-tablas.pdf";
        enlace_pdf_mobile_avios.href="../trastero/uploads/2019/12/Landing-Captacion-Vueling-Condiciones-generales-tablas.pdf";
        enlace_pdf_mobile_privacidad.href="/trastero/uploads/2019/10/POLITICA-DE-PROTECCIÓN-DE-DATOS-PROMOCIÓN-CTC-VUELING.pdf";
        enlace_pdf_privacidad.href="/trastero/uploads/2019/10/POLITICA-DE-PROTECCIÓN-DE-DATOS-PROMOCIÓN-CTC-VUELING.pdf";
    } else if(c==="iberia"){
        enlace_pdf_avios.href="../trastero/uploads/2019/09/Condiciones-generales-promoción-Endesa-Iberia-V3-IB.docx.pdf";
        enlace_pdf_mobile_avios.href="../trastero/uploads/2019/09/Condiciones-generales-promoción-Endesa-Iberia-V3-IB.docx.pdf";
        enlace_pdf_mobile_privacidad.href="/trastero/uploads/2019/09/POLITICA-DE-PROTECCIÓN-DE-DATOS-PROMOCIÓN-CTC-IBERIA-1.pdf";
        enlace_pdf_privacidad.href="../trastero/uploads/2019/09/POLITICA-DE-PROTECCIÓN-DE-DATOS-PROMOCIÓN-CTC-IBERIA-1.pdf";
    }

    //metrica marcaje etc
    dynamic_dataLayer.push("clientType","prospecto");
    console.log("prospecto");
}


function  mostrarFormularioNoCliente(){
    formularioNoCliente.style.display = 'block';
    formularioCliente.style.display = 'none';
}



function  mostrarFormularioCliente(){
    formularioNoCliente.style.display = 'none';
    formularioCliente.style.display = 'block';
}


	
	


//////////////Pantallas venta cruzada////////////////////////////////////////////////////////
var product =$("#hdproduct").val();
var fromfid =$("#hdfromfid").val();
var tbk__title;
var tbk__subtitle;
if(product!= ""){
   
   $("#menu").hide(); 
   
   if(product =="gas"){
       $("#popuppost .tbk__title").text("");
       $("#popuppost .tbk__subtitle").text("");
   }
   
    var texto1 = $(".kl-iconbox__title","#eluid9a23f11e,#eluid02cdcc26");
    var texto2 = $(".kl-iconbox__title","#eluid3369223d,#eluidd3912669");
    var texto3 = $(".kl-iconbox__title","#eluid4380b53e,#eluid1eaa193b");
    
    if(o=="cap"){
        $(".calculadorahide").hide();
        $("#calculadora,#titleCalculadora").show();   
    }

    
    switch(product){
        case "luz" :
           tbk__title = "¡Enhorabuena! Vas a empezar a acumular Avios.";
           tbk__subtitle = "¡Consigue 9.000 Avios más contratando ahora la Luz!";
           $("#eluidd7e55f6c").attr("href",$("#eluidd7e55f6c").attr("href")+ "?fromfid=1&o=cap&product="+ product);
           if(o==="cap" && fromfid == ""){
                texto1.text("¡Consigue 6.000 Avios más por contratar el gas con Endesa Energía!");
                texto2.hide();
                texto3.text("Y esto no es todo: si contratas nuevos productos con nosotros, ¡puedes conseguir muchos más!");
            }else if(o==="cap" && fromfid == "1"){
                texto1.text("¡Consigue 6.000 Avios más por contratar el gas con Endesa Energía!");
                texto2.hide();
                texto3.text("Y, si contratas otros productos, ¡puedes conseguir muchos más!");
            }else{
                texto3.text("¡Consigue 6.000 Avios más por contratar el gas con Endesa Energía!");
            }
           break;
        case "gas" :
            tbk__title = "¡Enhorabuena! Vas a empezar a acumular Avios.";
            tbk__subtitle = "¡Consigue 6.000 Avios más si contratas ahora el Gas!";
            if(o==="cap" && fromfid == ""){
                texto1.text(" ¡Consigue 9.000 Avios más por contratar la luz con Endesa Energía!");
                texto3.text("Y, si contratas otros productos, ¡puedes conseguir muchos más!");
            }else if(o==="cap" && fromfid == "1"){
                texto1.text("¡Consigue 6.000 Avios más por contratar el gas con Endesa Energía!");
                //texto2.hide();
                texto3.text("Y, si contratas otros productos, ¡puedes conseguir muchos más!");
            }else{
                texto1.text(" ¡Consigue 9.000 Avios más por contratar la luz con Endesa Energía!");
            }
            break;
        case "dual" :
            tbk__title = "¡Enhorabuena! Vas a empezar a acumular Avios.";
            tbk__subtitle = "¡Consigue hasta 5.500 Avios más por contratar nuestros productos de mantenimiento!";
            if(o==="cap" && fromfid == ""){
                
            }else if(o==="cap" && fromfid == "1"){
                texto1.text("¡Consigue hasta 5.500 Avios más por contratar nuestros productos de mantenimiento, OkLuz assist y OKGas, con Endesa Energía!");
                //texto2.hide();
                texto3.text("Viaja gratis contratando nuestros productos.");
            }else{
                texto3.text(" ¡Consigue hasta 5.500 Avios más por contratar nuestros productos de mantenimineto!");
            }
            break;
   }
   
   $("#popuppost .tbk__title").text(tbk__title);
   $("#popuppost .tbk__subtitle").text(tbk__subtitle);
}
/////////////End Venta Cruzada////////////////////////////////////////////////////////

// CAJAS PARA EMPRESAS
if (c === "" && o === "") {
 
    textoUnoSlide.style.display = 'none';
    textoDosSlide.style.display = 'none';
    textoTresSlide.style.display = 'none';
    textoUnoSlideMobile.style.display = 'none';
    textoDosSlideMobile.style.display = 'none';
    textoTresSldeMobile.style.display = 'none';
    
    var doblecajaSinValor = document.getElementById('cajaDinamica');
    doblecajaSinValor.style.display = 'block';
    mostrarFormularioNoCliente();

    $(".quform-field-5_47").attr("placeholder",pholderib);
    //tus movidas
	

	
	
	

} else if (c === "" && o === "cap") {

	var doblecajaSinValor = document.getElementById('cajaDinamica');
	doblecajaSinValor.style.display = 'none';
        botonNoCliente.style.background = '#CD2950';
	botonNoCliente.style.color = '#fff';
	botonCliente.style.background = '#fff';
	botonCliente.style.color = '#000';
	mostrarFormularioNoCliente(); 
	NoCliente();
	$(".quform-field-5_47").attr("placeholder",pholderib);

    


} else if (c === "" && o === "fid") {

	var doblecajaSinValor = document.getElementById('cajaDinamica');
	 
	botonCliente.style.background = '#CD2950';
	botonCliente.style.color = '#fff';
	botonNoCliente.style.background = '#fff';
	botonNoCliente.style.color = '#000';
	mostrarFormularioCliente();
	origen = c;
	Cliente();
	$(".quform-field-5_47").attr("placeholder",pholderib);



} else if (c === "iberia" && o === "cap") {

	
	mostrarFormularioNoCliente();
	origen = c;
	NoCliente();
        $(".quform-field-5_47").attr("placeholder",pholderib);


}else if (c === "iberia" && o === "") {

	
	mostrarFormularioNoCliente();
	origen = c;
	NoCliente();
        $(".quform-field-5_47").attr("placeholder",pholderib);


}
else if (c === "iberia" && o === "fid") {
    
	//var doblecajaVueling = document.getElementById('cajaDoble');
	
	
	botonCliente.style.background = '#CD2950';
	botonCliente.style.color = '#fff';
	botonNoCliente.style.background = '#fff';
	botonNoCliente.style.color = '#000';
	mostrarFormularioCliente();
	origen = c;
	Cliente();
	
	$(".quform-field-5_47").attr("placeholder",pholderib);


} else if (c === "vueling" && o === "cap") {
    
    mostrarFormularioNoCliente();
  
    NoCliente();
     
    $('.pf_vueling').show(); //muestro mediante id
    $('.pf_iberia').hide(); //muestro mediante id

    $(".quform-field-5_47").attr("placeholder",pholdervl);
    $("#botonMarca").attr("href","https://tickets.vueling.com/Register.aspx?stamp=MV");
    
    $("#botonNoCliente").css('background-color','#004efe');


} else if (c === "vueling" && o === "fid") {

	//var doblecajaVueling = document.getElementById('cajaDoble');
	//doblecajaVueling.style.display = 'none';
    $("#botonNoCliente").css('background-color','#004efe');
	
	botonCliente.style.background = '#004efe';
	botonCliente.style.color = '#fff';
	botonNoCliente.style.background = '#fff';
	botonNoCliente.style.color = '#000';
 
    
    mostrarFormularioCliente();
    Cliente();

    $('.pf_vueling').show(); //muestro mediante id
	$('.pf_iberia').hide(); //muestro mediante id
    $(".quform-field-5_47").attr("placeholder",pholdervl);
    $("#botonMarca").attr("href","https://tickets.vueling.com/Register.aspx?stamp=MV");
    /*
    
    // Cambios de estilos de los botones y tabs en Vueling 

    document.getElementById("eluid52c977cf").innerHTML = "¿Todavía no eres miembro de Vueling Club?";

$("#botonNoCliente").css('background-color','ffffff');

$(".numero2 div div .kl-iconbox__icon").css('color','#004efe');
$(".numero1 div div .kl-iconbox__icon").css('color','#004efe');


$("#eluidc8b7ddb5").css('background-color','#004efe');
$("#eluidc8b7ddb5").css('border-color','#004efe');
$("#botonNoCliente").css('border-color','#004efe');
$("#botonCliente").css('border-color','#004efe');
$("#botonCliente").css('background-color','#004efe');


  $("#eluidc8b7ddb5").hover(function(){
    $(this).css("background-color", "white");
    $(this).css("color", "#ffffff");
    }, function(){
    $(this).css("background-color", "#004efe");
    $(this).css("color", "white");
  });


$("#eluid53b02d97").css('background-color','#004efe');
$("#eluid53b02d97").css('border-color','#004efe');


  $("#eluid53b02d97").hover(function(){
    $(this).css("background-color", "white");
    $(this).css("color", "#004efe");
    }, function(){
    $(this).css("background-color", "#004efe");
    $(this).css("color", "white");
  });


$("#eluidb28f20a0").css('background-color','#004efe');
$("#eluidb28f20a0").css('border-color','#004efe');


  $("#eluidb28f20a0").hover(function(){
    $(this).css("background-color", "white");
    $(this).css("color", "#004efe");
    }, function(){
    $(this).css("background-color", "#004efe");
    $(this).css("color", "white");
  });
  
  
$("#eluidc0a3b338").css('background-color','#004efe');
$("#eluidc0a3b338").css('border-color','#004efe');


  $("#eluidc0a3b338").hover(function(){
    $(this).css("background-color", "white");
    $(this).css("color", "#004efe");
    }, function(){
    $(this).css("background-color", "#004efe");
    $(this).css("color", "white");
  });
  
  
$("#eluideb9e5594").css('background-color','#004efe');
$("#eluideb9e5594").css('border-color','#004efe');


  $("#eluideb9e5594").hover(function(){
    $(this).css("background-color", "white");
    $(this).css("color", "#004efe");
    }, function(){
    $(this).css("background-color", "#004efe");
    $(this).css("color", "white");
  });


$("#botonMarca").css('border-color','#004efe');
$("#botonMarca").css('color','#004efe');
*/


$(".quform-submit").css('background-color','white');
$(".quform-submit").css('border-color','#004efe');
$(".quform-submit").css('color','#004efe');


  $(".quform-submit").hover(function(){
    $(this).css("background-color", "#004efe");
    $(this).css("color", "white");
    }, function(){
    $(this).css("background-color", "white");
    $(this).css("color", "#004efe"); 
  });

// Fin cambio estilos en vueling
    
    $("#botonMarca").html('DARME DE ALTA');
    


} else if (c === "vueling") {


    //var doblecajaVueling = document.getElementById('cajaDoble');
    //doblecajaVueling.style.display = 'none';
    $("#botonMarca").attr("href","https://tickets.vueling.com/Register.aspx?stamp=MV");

    mostrarFormularioNoCliente();
    NoCliente();

    $('.pf_vueling').show(); //muestro mediante id
    $('.pf_iberia').hide(); //muestro mediante id

    $(".quform-field-5_47").attr("placeholder",pholdervl);

    enlace_pdf_avios.href="../trastero/uploads/2019/12/Landing-Captacion-Vueling-Condiciones-generales-tablas.pdf";
    enlace_pdf_mobile_avios.href="../trastero/uploads/2019/12/Landing-Captacion-Vueling-Condiciones-generales-tablas.pdf";
    enlace_pdf_mobile_privacidad.href="/trastero/uploads/2019/10/POLITICA-DE-PROTECCIÓN-DE-DATOS-PROMOCIÓN-CTC-VUELING.pdf";
    enlace_pdf_privacidad.href="/trastero/uploads/2019/10/POLITICA-DE-PROTECCIÓN-DE-DATOS-PROMOCIÓN-CTC-VUELING.pdf";

    $("#botonMarca").html('DARME DE ALTA');

    // Cambios de estilos de los botones y tabs en Vueling 

    document.getElementById("eluid52c977cf").innerHTML = "¿Todavía no eres miembro de Vueling Club?";

    $("#botonNoCliente").css('background-color','#004efe');

    $(".numero2 div div .kl-iconbox__icon").css('color','#004efe');
    $(".numero1 div div .kl-iconbox__icon").css('color','#004efe');


    $("#eluidc8b7ddb5").css('background-color','#004efe');
    $("#eluidc8b7ddb5").css('border-color','#004efe');
    $("#botonNoCliente").css('border-color','#004efe');
    $("#botonCliente").css('border-color','#004efe');
    
    $(".quform-submit").css('background-color','white');
    $(".quform-submit").css('border-color','#004efe');
    $(".quform-submit").css('color','#004efe');


  $(".quform-submit").hover(function(){
    $(this).css("background-color", "#004efe");
    $(this).css("color", "white");
    }, function(){
    $(this).css("background-color", "white");
    $(this).css("color", "#004efe"); 
  });

/*
    //esto con una clase ya flipas
    $("#eluidc8b7ddb5, #eluid53b02d97, #eluidb28f20a0, #eluidc0a3b338, #eluideb9e5594, .quform-submit").hover(function(){
        $(this).css("background-color", "white");
        $(this).css("color", "#004efe");
    }, function(){
        $(this).css("background-color", "#004efe");
        $(this).css("color", "white");
    });


    $("#eluid53b02d97, #eluidb28f20a0,#eluidc0a3b338, #eluideb9e5594, #botonMarca").css({"background-color":"#004efe","border-color":"#004efe"});
    $("#eluid53b02d97").css('border-color','#004efe');
*/
/*
    $(".quform-submit").css('background-color','white');
    $(".quform-submit").css('border-color','#004efe');
    $(".quform-submit").css('color','#004efe');

*/
    // Fin cambio estilos en vueling
    


} else if (c === "iberia") {
	//var doblecajaIberia = document.getElementById('cajaDoble');
	//doblecajaIberia.style.display = 'none';
	document.getElementById("botonMarca").innerHTML = "SOLICITAR TARJETA";
	document.querySelector('.logoMarca img').src = "/trastero/uploads/2019/06/titleIberiaPlus.jpg";
	document.querySelector('.imagenMarca img').src = "/trastero/uploads/2019/06/Capa-12.png";
	document.querySelector('.logoMarcaHeader img').src = "/trastero/uploads/2019/07/Logo-iberia3.png";
	mostrarFormularioNoCliente();
	NoCliente();

    $(".quform-field-5_47").attr("placeholder",pholderib);


}



// MODIFICACION PARA SLIDER





//funciones para Click de los botones


$(".quform-field-5_83").change(function(){
    var frase = " titular contrato Endesa";
    $(".quform-field-5_8").attr("placeholder",$(this).val() + frase)
});



botonNoCliente.addEventListener("click", function () {
	// Aquí todo el código que se ejecuta cuando se da click al botón

	NoCliente();
	botonNoCliente.style.background = '#CD2950';
	botonNoCliente.style.color = '#fff';
	botonCliente.style.background = '#fff';
	botonCliente.style.color = '#000';
	mostrarFormularioNoCliente();
	if(c==="vueling"){
        $("#botonNoCliente").css("cssText", "background-color:#004efe; border-color:#004efe;");
    }

});


$("#botonCliente").on("click", function () {
	// Aquí todo el código que se ejecuta cuando se da click al botón

	Cliente();
	botonCliente.style.background = '#CD2950';
	botonCliente.style.color = '#fff';
	botonNoCliente.style.background = '#fff';
	botonNoCliente.style.color = '#000';
	mostrarFormularioCliente();
	if(c==="vueling"){
        $("#botonCliente").css("cssText", "background-color:#004efe;border-color:#004efe; color:white");
        
    }
});


var cHref;
if(c==="vueling"){
    cHref = $(".btnContratar").attr("href");
    $(".btnContratar").attr("href",cHref + "?c=" + c);
}else{
    cHref = $(".btnContratar").attr("href");
    $(".btnContratar").attr("href",cHref + "?c=" + c);
}



// Limpiar la # del boton
var limpiarbotonCliente = document.getElementById("botonCliente");
var limpiarbotonNoCliente = document.getElementById("botonNoCliente");
limpiarbotonCliente.setAttribute('href', "javascript:void(0)");
limpiarbotonNoCliente.setAttribute('href', "javascript:void(0)");


// JavaScript Document


jQuery( ".boton_preguntas" ).click(function() {
    event.preventDefault();
  jQuery( ".caja_preguntas" ).fadeToggle( "slow", "linear" );
  
});

//***** acci ones plan de marcaje ******//
$("#eluidc8b7ddb5, #eluideb9e5594").click(function(){
  console.log("Quiero mi plan y virtual_page");
  var s_objectID="Quiero mi plan";
  
  //lo meto a piñon porque siempre esta visible
  dynamic_dataLayer.push("virtual_page", {
    "page_name":
    "landings/particulares/vuelaconendesa/home/solicitar-plan"
    });

});

$("#eluidb28f20a0, #eluidc0a3b338").click(function(){
  console.log("solicitar llamada");
    var s_objectID="solicitar llamada";
  
    //lo meto a piñon porque siempre esta visible
    dynamic_dataLayer.push("virtual_page", {
    "page_name":
    "landings/particulares/vuelaconendesa/home/solicitar-llamada"
    });
    console.log("landings/particulares/vuelaconendesa/home/solicitar-llamada");

  
});


$(".quform-button-submit-5_2").click(function(){
    dynamic_dataLayer.push("cta_solicitar_plan_vuelaconendesa");
    console.log("cta_solicitar_plan_vuelaconendesa");
});

$(".quform-button-submit-6_2").click(function(){
    dynamic_dataLayer.push("cta_solicitar_llamada_vuelaconendesa");
    console.log("cta_solicitar_llamada_vuelaconendesa");
});


//

//

																		 
})(jQuery);

function weboVueling(cp){
//(function () {
    var tss = document.createElement('script');
    tss.type = 'text/javascript';
    tss.async = true;
    tss.src = 'http'+('https:'==document.location.protocol?'s':'')+'://cstatic.weborama.fr/js/advertiserv2/adperf_conversion.js';
    var ss = document.getElementsByTagName('script')[0];
    ss.parentNode.insertBefore(tss, ss);
    var timer = window.setInterval(function(){
    if (typeof(window.adperfTracker) != "undefined") {

    var adperftrackobj = {
        client : ""      /* set your client id here */
        ,amount : "0.0"   /* set the total price here */
        ,invoice_id : ""  /* set your invoice id here */
        ,quantity : 0     /* set the number of items purchased */
        ,is_client : 0    /* set to 1 if the client is a new client */
        ,optional_parameters : {
            "N1" : "0" /* to set */
            ,"N2" : "0" /* to set */
            ,"N3" : "0" /* to set */
            /* to set free parameter follow this pattern : */
            /* ,"customer_type" : "abc" */
        }

        /* don't edit below this point */
        ,fullhost : 'endesa.solution.weborama.fr'
        ,site : 282
        ,conversion_page : cp
    };
    try{window.adperfTracker.track( adperftrackobj );}catch(err){}
    window.clearInterval(timer);
    }}, 2000);
//})();
}


/////////////////////////////////////////////////Calculadora Avios
(function($) {

//Establecemos valores Avios

var urlForms = "https://www.endesaclientes.com/fotocontratacion?idProduct=[p]&productName=IBERIA ";
var selProd;


$(".click_luz").attr("data-valor","9000");
$(".click_luz").attr("data-strName","Luz");

$(".click_gas").attr("data-valor","6000");
$(".click_gas").attr("data-strName","Gas");

$(".click_ok_luz").attr("data-valor","2500");
$(".click_ok_luz").attr("data-strName","OkLuz");
 
$(".click_ok_gas").attr("data-valor","3000");
$(".click_ok_gas").attr("data-strName","OkGas");
//

//$(".click_luz").remove();

var totalAvios = 0;
//totalAvios = 0
 var eso=0;
$(".click_luz, .click_gas, .click_ok_luz, .click_ok_gas").each(function(){
var attr = $(this).attr('data-valor');
    if (typeof attr !== typeof undefined && attr !== false) {
            totalAvios += parseInt($(this).data("valor"));
    }
    

    
});

console.log("La suma totalAvios es:  "+ totalAvios)


//nAvios seleccionados
var nAvios = 0;

//valor inicial barra de carga
$(".barraCarga .zn-transition-down-after").css("width", "0px");
$(".barraCarga .skill-bar .stg-corners--").data("loaded", "0");
$(".barraCarga .zn-transition-down-after").data("percentage", "0");


//Porcentaje barra de carga
function percentage(partialValue, totalValue) {
   var per = ((100 * partialValue) / totalValue);
    $(".barraCarga .zn-transition-down-after").css("width", per + "%");
    $(".barraCarga .skill-bar .stg-corners--").attr("data-loaded", parseInt(per) + "%");
    $(".barraCarga .zn-transition-down-after").attr("data-percentage", parseInt(per)+ "%"); 
} 


//click botones
$(".click_luz, .click_ok_luz, .click_gas, .click_ok_gas").click(function() {
    selProd = urlForms;

//Establezco todos a estado normal. ¿lo hay de otra clase?...  ordenó usted el código rojo!!! :)
    if($(this).hasClass("chk")){
        $(this).removeClass("chk");
        nAvios = parseInt(nAvios) - parseInt($(this).data("valor"));
       
        //$(".numero_avios").text(nAvios.toLocaleString('de-DE'));
        sumaRestaAvios(parseInt(nAvios), parseInt($(this).data("valor")), 0);
         percentage(parseInt(nAvios),totalAvios);
    }else{
        //reslato el botón seleccionado
        $(this).addClass("chk");
        nAvios = parseInt(nAvios) + parseInt($(this).data("valor"));
        //$(".numero_avios").text(nAvios.toLocaleString('de-DE'));
       
        sumaRestaAvios(parseInt(nAvios), parseInt($(this).data("valor")), 1);
        
        percentage(parseInt(nAvios),totalAvios);
    }

    //monta la url que va al formulario con las opciones seleccionadas
    var i = 0;
    var prodConcat="";
    $(".click_luz, .click_ok_luz, .click_gas, .click_ok_gas").each(function(){

        if($(this).hasClass("chk")){
         
            if (i>0){
               prodConcat += "-" + $(this).attr("data-strName");
               selProd += "-" + $(this).attr("data-strName"); 
               
               if(prodConcat === "Gas" || selProd === "Gas-OKLuz" || selProd === "Gas-OKGas" || selProd === "OKLuz-OkGas"){
                  selProd = selProd.replace("[p]","1383164481758")
               }else if(prodConcat === "OkLuz-OkGas"){
                  selProd = selProd.replace("[p]","1500543990100")
               }else{
                  selProd = selProd.replace("[p]","1383361327212") 
               }
               
          }else{
               prodConcat = $(this).attr("data-strName");
               selProd += $(this).attr("data-strName");
               
               if(prodConcat === "Gas"){
                  selProd = selProd.replace("[p]","1383164481758")
               }else if(prodConcat === "OkLuz"){
                  selProd = selProd.replace("[p]","1500543990100")
               }else{
                  selProd = selProd.replace("[p]","1383361327212") 
               }
          }

          i++;

     }

    });
  
  console.log(selProd);
  console.log(prodConcat);
  
  
});


function sumaRestaAvios(_nAvios,_valor,sumaResta){
    //total avios
    _nAvios = parseInt(_nAvios);
    //incremento exponencial máximo
    var incremento = 1;
    //ultimo valor avios
    var lastAvios = 0;
    //tiempo del setInterval()
    var tiempoIntervalo = 2;
    
    if(sumaResta == 1){
        lastAvios = (_nAvios - _valor);
        var suma = setInterval(function(){
           $(".numero_avios").text(lastAvios.toLocaleString('de-DE'));
           if(lastAvios >= _nAvios){
               clearInterval(suma);
               $(".numero_avios").text(_nAvios.toLocaleString('de-DE'));
           }
           incremento++;
           lastAvios+=incremento;
        }, tiempoIntervalo);
    
    }else{
       lastAvios = (_nAvios + _valor);
       var resta = setInterval(function(){
            $(".numero_avios").text(lastAvios.toLocaleString('de-DE'));
            if(lastAvios <= _nAvios){
               clearInterval(resta);
               $(".numero_avios").text(_nAvios.toLocaleString('de-DE'));
            }
            incremento++;
            lastAvios-=incremento;
       
        }, tiempoIntervalo);
   }
}

//botones contratar web y movil. Solo dinámico
$("#btnContratarAvios").click(function(e){
    if(nAvios<=0){
        alert("Debes elegir algun producto");
        e.preventDefault();
    }else{
        location.href = selProd; 
    }
    
});



})(jQuery);