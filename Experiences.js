function experiences(nom_entreprise,Id_balise){
    var source_image;
    var url_site;
    var lien_element;
    var id_lien = (Id_balise == "image1")?"link1":"link2";

    if(nom_entreprise=="AIRBUS"){
        source_image="airbus.jpg";
        url_site= "https://www.airbus.com/fr";

    }
    else if (nom_entreprise=="FPV"){
        source_image="FPV.jpg";
        url_site= "https://www.bremaud.com/";

    }

    else if (nom_entreprise=="OG2L"){
        source_image="OG2L.jpg";
        url_site= "https://www.pagesjaunes.fr/pros/51602029";
    }

    else if (nom_entreprise=="JM"){
        source_image="JM.jpg";
        url_site= "https://www.pagesjaunes.fr/pros/02298747";
    }

    else if (nom_entreprise=="ADMR"){
        source_image="ADMR.jpg";
        url_site= "https://www.admr.org/";
    }

    else if (nom_entreprise=="PDF"){
        source_image="PDF.jpg";
        url_site= "https://www.puydufou.com/france/fr";
    }

    else if (nom_entreprise =="CB"){
        source_image="CB.jpg";
        url_site= "https://www.hotel-restaurant-cerizay.fr/";
    }

    document.getElementById(Id_balise).src=source_image;
    var lien_element= 
    document.getElementById(id_lien);
    lien_element.href = url_site;
    lien_element.style.display = "inline";
    
}