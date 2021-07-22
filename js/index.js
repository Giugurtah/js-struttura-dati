const card = {
    name : "Bloodfire colossus", //Nome carta 
    lounchCost: "6RR", //aCosto di lancio
    type : {
        type : "Creature", //Tipologia principale (necessaria)
        subtype : "Giant", //Sotto-tipologia (opzionale)
    },
    exspansionInfo : {
        release : 9, //Release d'appartenenza della carta
        rarity : "rare", //Rarità della carta
    },
    textBox : [
        {
            //Abilità passiva che non richiede mana
            ability : "lorem ipsum dolore...",
        },
        {
            //Abilità attiva che richiede mana
            ability : "lorem ipsum dolore...",
            lounchCost : "RT",
        },
        {
            flavourText : "lorem ipsum dolore...", //Testo di colore
        }
    ],
    imageSource : "./img/art1.jpg", //Sorgente dell'arte
    imageAuthor : "Pinco Pallo", //Nome dell'artista
    collectionNumber : "370/177",
    constitution: 13,
    strength: 13,
};