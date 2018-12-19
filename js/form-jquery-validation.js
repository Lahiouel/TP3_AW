$( document ).ready(function() {
   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
   // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );
    
    // Y mettre le code jQuery pour valider tous les champs du formulaire
	
	
	
	$("#validate").on("click",function(event) {
	event.preventDefault();
	    //alert($("#nom").val().length);
	   if ($("#nom").val().length < 5)
    {
	   $("#resultat").attr('style','display:none');
	   $("#error").attr('style','display:block');
	   $("#error").html("La saisie du nom est obligatoire");
	   
	}
	else if ($("#prenom").val().length < 5)
    {
	   $("#resultat").attr('style','display:none');
	   $("#error").attr('style','display:block');
	   $("#error").html("La saisie du prénom est obligatoire");
	   
	}
	else if ($("#dateN").val().length < 5)
    {
	   $("#resultat").attr('style','display:none');
	   $("#error").attr('style','display:block');
	   $("#error").html("La saisie de la date est obligatoire");
	   
	}
	else if ($("#adr").val().length < 5)
    {
	  $("#resultat").attr('style','display:none');
	   $("#error").attr('style','display:block');
	   $("#error").html("La saisie de l'adresse est obligatoire");
	   
	}
	else if ($("#mail").val().length < 5)
    {
	   $("#resultat").attr('style','display:none');
	   $("#error").attr('style','display:block');
	   $("#error").html("La saisie du mail est obligatoire");
	   
	}
	else
	{
	 /*   $("#error").attr('style','display:none');
	   $("#resultat").attr('style','display:block');
	   $("#resultat").html("Bienvenue " + $("#nom").val() + "  " + $("#prenom").val());*/
	   
	   
	   
	    $('#titre').html("Bienvenue " + $("#nom").val());
	    $('#text').html("Vous etes né le " + $("#dateN").val());
		$('.modal-body').append("<img src='https://maps.googleapis.com/maps/api/staticmap?markers="+$("#adr").val()+"&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' >");
		
		
		
	    $('#myModal').modal("show");
	}
	
	});
	
	$("#dateN").datepicker({
	    dateFormat: "yy/mm/dd"
	});
	
	
});
