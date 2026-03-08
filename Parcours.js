document.addEventListener("DOMContentLoaded",()=>{

    const descriptions = {
        "Ecole.jpg":"2010-2018",
        "College.jpg":"2018-2022 - Brevet Mention Très Bien ",
        "Lycee.jpg":"2022-2025 - Spécialités Maths/Physique Chimie - Bac Mention Très Bien",
        "Ensibs.jpg":"2025 - 1ère année PEI-A - Spécialité envisagée -> Génie Civil",
        
    
    };

    const zone = document.getElementById("description-text");
    document.addEventListener("click",(e) => {

        const nom = e.target.getAttribute("src");
        zone.textContent = descriptions[nom]|| "Aucune description disponible.";
    });

});