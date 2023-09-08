var professeurs = [];
const message = `Prière de choisir l'action souhaitée
1.Ajouter un proffesseur
2.Afficher les professeurs
3.Quitter`;

function Matiere(id){
    switch(parseInt(id)){
        case 1: return 'Francais';
        case 2: return 'Philosophie';
        case 3: return 'Arabe';
        case 4: return "Mathématique";
    }
}


const addProffeseur = () =>{
    let nom,prenom,numeroidentite,matiere;
    nom = prompt("Saisir Nom Professeur N°"+ (professeurs.length+1) );
    prenom = prompt("Saisir Prénom Professeur N°"+ (professeurs.length+1) );
    numeroidentite = prompt("Saisir Numéro Identité Professeur N°"+ (professeurs.length+1) );
    matiere = prompt("Saisir Matière Professeur N°"+ (professeurs.length+1)+`
    1. Français
    2.Philosophie
    3.Arabe
    4.Mathématique
    ` );
    matiere = Matiere(matiere);
    professeurs.push([nom,prenom,numeroidentite,matiere]);
}
function afficherProfesseurs(){
    let show="Choisir le proffesseur à afficher \n";
    for(let i=0;i<professeurs.length;i++){
        if(professeurs[i][3]=="Philosophie"){
            show+=(i+1)+"."+professeurs[i][0]+" "+professeurs[i][1]+"\n";
        }
      
    }
 
    let prof_index=prompt(show);
    if(professeurs.length>0 && prof_index!="" && prof_index >=0){
        prof_index=parseInt(prof_index)-1
        alert(`
        Information Professeur: 
        Nom et prénom : ${professeurs[prof_index][0]+" "+professeurs[prof_index][1]}
        Numéro identité : ${professeurs[prof_index][2] }
        Matière : ${professeurs[prof_index][3]}
        `);
    }
 

}



do{
    var choix = parseInt(prompt(message));
    switch(choix){
        case 1: 
            addProffeseur();
            break;
            case 2: 
            afficherProfesseurs();
            break;
    }
}while(choix!=3)


