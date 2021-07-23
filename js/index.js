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
        collectionNumber : "370/177",
    },
    ability : [
        {
            ability : "lorem ipsum dolor...", //?opzionale
            lounchCost : "RT",
        },
        {
            ability : "lorem ipsum dolor...", //?opzionale
            lounchCost : "RT",
        }
    ],
    flavourText : {
        text : "lorem ipsum dolor....",
        author : "Pinco Pallo",
    },
    image : {
        source : "./img/art1.jpg", //Sorgente dell'arte
        author : "Pinco Pallo", //Nome dell'artista
    },
    constitution: 13, //?Opzionale
    strength: 13, //?Opzionale
    borderColor : "#000", //Colore del bordo
};

const cardDeck = [
    {
        name : "Bloodfire colossus", //Nome carta 
        lounchCost: "6RR", //aCosto di lancio
        type : {
            type : "Creature", //Tipologia principale (necessaria)
            subtype : "Giant", //Sotto-tipologia //?opzionale
        },
        exspansionInfo : {
            release : 9, //Release d'appartenenza della carta
            rarity : "rare", //Rarità della carta
            collectionNumber : "370/177",
        },
        ability : [
            {
                ability : "lorem ipsum dolor...", //?opzionale
                lounchCost : "RT",
            },
            {
                ability : "lorem ipsum dolor...", //?opzionale
                lounchCost : "RT",
            }
        ],
        flavourText : {
            text : "lorem ipsum dolor....",
            author : "Pinco Pallo",
        },
        image : {
            source : "./img/art1.jpg", //Sorgente dell'arte
            author : "Pinco Pallo", //Nome dell'artista
        },
        constitution: 13, //?Opzionale
        strength: 13, //?Opzionale
        borderColor : "#000", //Colore del bordo
    },
    {
        name : "Witch troll", //Nome carta 
        lounchCost: "5BW", //aCosto di lancio
        type : {
            type : "Creature", //Tipologia principale (necessaria)
            subtype : "Troll", //Sotto-tipologia //?opzionale
        },
        exspansionInfo : {
            release : 9, //Release d'appartenenza della carta
            rarity : "rare", //Rarità della carta
            collectionNumber : "370/177",
        },
        ability : [
            {
                ability : "", //?opzionale
                lounchCost : "",
            },
            {
                ability : "", //?opzionale
                lounchCost : "",
            }
        ],
        flavourText : {
            text : "lorem ipsum dolor....",
            author : "Pinco Pallo",
        },
        image : {
            source : "./img/art2.jpg", //Sorgente dell'arte
            author : "Pinco Pallo", //Nome dell'artista
        },
        constitution: 9, //?Opzionale
        strength: 3, //?Opzionale
        borderColor : "#000", //Colore del bordo
    },
    {
        name : "Paladin light", //Nome carta 
        lounchCost: "9BB", //aCosto di lancio
        type : {
            type : "Magic", //Tipologia principale (necessaria)
            subtype : "", //Sotto-tipologia //?opzionale
        },
        exspansionInfo : {
            release : 4, //Release d'appartenenza della carta
            rarity : "super-rare", //Rarità della carta
            collectionNumber : "370/177",
        },
        ability : [
            {
                ability : "lorem ipsum dolor...", //?opzionale
                lounchCost : "",
            },
            {
                ability : "", //?opzionale
                lounchCost : "",
            }
        ],
        flavourText : {
            text : "lorem ipsum dolor....",
            author : "Pinco Pallo",
        },
        image : {
            source : "./img/art3.jpg", //Sorgente dell'arte
            author : "Pinco Pallo", //Nome dell'artista
        },
        constitution: 0, //?Opzionale
        strength: 0, //?Opzionale
        borderColor : "#000", //Colore del bordo
    },
    {
        name : "Bloodfire colossus", //Nome carta 
        lounchCost: "6RR", //aCosto di lancio
        type : {
            type : "Creature", //Tipologia principale (necessaria)
            subtype : "Giant", //Sotto-tipologia //?opzionale
        },
        exspansionInfo : {
            release : 9, //Release d'appartenenza della carta
            rarity : "rare", //Rarità della carta
            collectionNumber : "370/177",
        },
        ability : [
            {
                ability : "lorem ipsum dolor...", //?opzionale
                lounchCost : "RT",
            },
            {
                ability : "lorem ipsum dolor...", //?opzionale
                lounchCost : "RT",
            }
        ],
        flavourText : {
            text : "lorem ipsum dolor....",
            author : "Pinco Pallo",
        },
        image : {
            source : "./img/art1.jpg", //Sorgente dell'arte
            author : "Pinco Pallo", //Nome dell'artista
        },
        constitution: 13, //?Opzionale
        strength: 13, //?Opzionale
        borderColor : "#000", //Colore del bordo
    },
]

//Preparo l'elemento HTML
const cardDeckElement = document.getElementById("card_deck");
//Inserisco nell'elemento appena creato il codice generato dalla funzione in modo da stampare le carte
cardDeckElement.innerHTML = printDeck(cardDeck);

function printCard (object) {
    //Gestisco il sottotipo della carta essendo opzionale
    const auxSubtype = object.type.subtype ? `- ${object.type.subtype}` : ``;
    //Gestisco la sezione abilità essendo opzionale
    let auxAbility = "";
    for(let i = 0; i < object.ability.length; i++) {
        if(object.ability[i]["ability"].length){
            const auxLounchCost =  object.ability[i]["lounchCost"] ? `<br>${object.ability[i]["lounchCost"]} -` : "<br>";
            auxAbility += `${auxLounchCost} ${object.ability[0]["ability"]}`;
        }
    }
    if (!auxAbility) {
        auxAbility = "<br><em>Nessuna abilità</em>"
    }
    //Gestisco i valori di forza e costituzione essendo opzionali
    const auxStrengthConstitution = (object.strength && object.constitution) ? `${object.strength}/${object.constitution}` : "<br>Questa non è una carta creatura";
    //Creazione del messaggio di stampa in linguaggio HTML
    const HTMLcode = `
<div id="card_display" class="card_display">
    <img src="${object.image.source}" alt="artwork della carte">
    <ul>
        <li><span>Nome:</span> ${object.name}</li>
        <li><span>Costo di lancio:</span> ${object.lounchCost}</li>
        <li><span>Tipo:</span> ${object.type.type} ${auxSubtype}</li>
        <li><span>Info espansione:</span>
            <ul>
                <li><span>Release:</span> ${object.exspansionInfo.release}</li>
                <li><span>Rarità:</span> ${object.exspansionInfo.rarity}</li>
                <li><span>Numero collezione:</span> ${object.exspansionInfo.collectionNumber}</li>
            </ul>
        </li>
        <li><span>Contenuto riquadro di testo:</span>
            ${auxAbility}
        </li>
        <li><span>Info testo di colore:</span>
            <ul>
                <li><span>Testo di colore:</span> 
                <br>${object.flavourText.text}</li>
                <li><span>Autore testo di colore:</span> 
                <br>${object.flavourText.author}</li>
            </ul>
        </li>
        <li><span>Info artwork:</span>
            <ul>
                <li><span>Fonte artwork:</span> ${object.image.source}</li>
                <li><span>Autore artwork:</span> ${object.image.author}</li>
            </ul>
        </li>
        <li><span>Forza e costituzione:</span> ${auxStrengthConstitution}</li>
        <li><span>Colore del bordo:</span> ${object.borderColor}</li>
    </ul> 
</div>
`;
    return HTMLcode;
}

function printDeck (array) {
    let HTMLcode = "";
    for (let i = 0; i < array.length; i++){
        HTMLcode += printCard(array[i]);
    }
    return HTMLcode;
}