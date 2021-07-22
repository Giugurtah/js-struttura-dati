const card = {
    name : "Bloodfire colossus", //Nome carta 
    lounchCost: "6RR", //aCosto di lancio
    type : {
        type : "Creature", //Tipologia principale (necessaria)
        subtype : "Giant", //Sotto-tipologia //?opzionale
    },
    exspansionInfo : {
        release : 9, //Release d'appartenenza della carta
        rarity : "rare", //Rarità della carta
    },
    textBox : [
        {
            //Abilità passiva che non richiede mana
            ability : "lorem ipsum dolor...", //?opzionale
        },
        {
            //Abilità attiva che richiede mana
            ability : "lorem ipsum dolor...", //?opzionale
            lounchCost : "RT",
        },
        {
            flavourText : "lorem ipsum dolor...", //Testo di colore
        }
    ],
    imageSource : "./img/art1.jpg", //Sorgente dell'arte
    imageAuthor : "Pinco Pallo", //Nome dell'artista
    collectionNumber : "370/177",
    constitution: 13, //?Opzionale
    strength: 13, //?Opzionale
    borderColor : "#000", //Colore del bordo
};

//Preparo l'elemento HTML
const cardDisplayElement = document.getElementById("card_display");
//Inserisco nell'elemento appena creato il codice generato dall afunzione in modo da stampare la carta
cardDisplayElement.innerHTML = printCard(card);

function printCard (object) {
    //Gestisco il sottotipo della carta essendo opzionale
    const auxSubtype = card.type.subtype ? `- ${card.type.subtype}` : ``;
    let auxAbility = "";
    //Gestisco la sezione abilità essendo opzionale
    if(card.textBox[0]["ability"].length){
        auxAbility += `<br>${card.textBox[0]["ability"]}`;
    }
    if(card.textBox[1]["ability"].length){
        auxAbility += `
        <br>${card.textBox[1]["ability"]}`;
    }
    auxAbility += `
        <br>${card.textBox[2]["flavourText"]}`;
    //Gestisco i valori di forza e costituzione essendo opzionali
    const auxStrengthConstitution = (card.strength && card.constitution) ? `${card.strength}/${card.constitution}` : "Questa non è una carta creatura";
    //Creazione del messaggio di stampa in linguaggio HTML
    HTMLcode = `
<h2>Infos</h2>
<img src="${card.imageSource}" alt="artwork della carte">
<ul>
    <li><span>Nome:</span> ${card.name}</li>
    <li><span>Costo di lancio:</span> ${card.lounchCost}</li>
    <li><span>Tipo:</span> ${card.type.type} ${auxSubtype}</li>
    <li><span>Info espansione:</span>
        <ul>
            <li><span>Release:</span> ${card.exspansionInfo.release}</li>
            <li><span>Rarità:</span> ${card.exspansionInfo.rarity}</li>
        </ul>
    </li>
    <li><span>Contenuto riquadro di testo:</span>
        ${auxAbility}
    </li>
    <li><span>Art author:</span> ${card.imageAuthor}</li>
    <li><span>Numero collezione:</span> ${card.collectionNumber}</li>
    <li><span>Forza e costituzione:</span> ${auxStrengthConstitution}</li>
    <li><span>Colore del bordo:</span> ${card.borderColor}</li>
</ul> 
`;
    return HTMLcode;
}