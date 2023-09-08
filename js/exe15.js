


var choix=parseInt(prompt(`Choisir la langue
1.Français
2.Anglais
3.Arabe
4.Spanish;`));


while(choix <1 || choix >4){
    choix=parseInt(prompt(`Choisir la langue -
    1.Français
    2.Anglais
    3.Arabe
    4.Spanish;`));

}
switch(choix){
case 1:
    console.log("Bonjour");
    break;
    case 2:
        console.log("Hello");
        break;
        case 3:
            console.log("Marhaba");
            break;
            case 4: 
            console.log("Hola");
            break;
}