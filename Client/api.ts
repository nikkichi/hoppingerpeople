import * as Types from './custom_types'

function generateNumber(min: number, max:number) {
    return Math.floor(Math.random() * max - min + 1) + min 
}

export function get_categories() : Promise<Types.Category_Dagtocht[]>{
    return new Promise((resolve, reject) => {
        resolve(category)
    })
}

export function get_specialaanbieding() : Promise<Types.SpecialAanbieding[]>{
    return new Promise((resolve, reject)=> {
        resolve(speciale_aanbieding)
    })
}

function filter(id: number) {
   
    let value = dagTochten.filter((element) => element.categoryID == 1)
    return value

}
function filterAanbieding(id: number) {
   
    let value = aanbieding.filter((element) => element.id == 1)
    return value

}

export function get_categorienVragen(id: number): Promise<Types.categorienvragen[]>{
    console.log('get_categorienVragen', categorienVragen.filter((element)=>element.id == id))
    return new Promise((resolve, reject)=>{
         resolve(filter(id))
    })
}

    


export function get_dagtocht(id: number): Promise<Types.Dagtocht[]> {
   console.log('get_dagtocht', dagTochten.filter((element) => element.categoryID == id) )
   
    return new Promise((resolve, reject) => {
        // resolve(dagTochten)

        // if (dagTochten[categoryID] == undefined)
        //     reject("Id is not in array in dagtocht")
        // else
        
           resolve(filter(id))
    })
}
export function get_aanbiedingen(): Promise<Types.aanbieding[]> {
    return new Promise((resolve, reject) => {
        console.log("aanbiedingen", aanbieding)
         resolve(aanbieding)
    })
}
export function get_aanbieding(): Promise<Types.aanbieding[]> {
    return new Promise((resolve, reject) => {
        console.log("aanbiedingen", aanbieding)
         resolve(filterAanbieding(1))
    })
}



export function get_ooievaarsPas() : Promise<Types.InformatiePas[]>{
    return new Promise((resolve, reject) => {
        let random = generateNumber(0,10);
        if (informatiepas == undefined)
            reject("Foutmelding of some sort")
        else resolve(informatiepas)
    })

}
export function get_OverDeOoievaarspas(id: number) : Promise<Types.Uitleg_InformatiePas[]>{
    //let value = aanbieding.filter((element) => element.id == 1)
    // return value

    return new Promise((resolve, reject) => {
        if (OverDeOoievaarspas == undefined )
            reject("De titel komt niet voor")
        else {
            return resolve(OverDeOoievaarspas.filter((element) => element.id == id))
        }
    })
}

export function get_veelgesteldevragenonderwerp(): Promise<Types.vragen[]> {
   return new Promise((resolve, reject) => {
       if(vragen == undefined)
        reject("Foutmelding")
        else resolve(vragen)
   })
}

let dagTochten: Types.Dagtocht[] = [
    {
        name: "Dagtocht met Brouwer Travel naar de Efteling",
        description: "Zin om er deze zomer een dagje op uit te gaan? Met uw Ooievaarspas kunt u deelnemen aan een...",
        prijs: 25,
        categoryID: 0,
        text: "Ga mee naar het meest geliefde pretpark van Nederland: de Efteling. U gaat toch ook mee naar het meest geliefde pretpark van Nederland? De Efteling is een themapark geschikt voor alle leeftijden. U zult u hier absoluut niet vervelen; jong, oud, man of vrouw - voor iedereen is er entertainment."
    },
    {
        name: "Dagtocht voor senioren met Brouwer Travel: Op stap in ",
        description: "Bent u 50 jaar of ouder en heeft u zin om er deze zomer een dagje op uit te gaan? Met uw...",
        prijs: 25,
        categoryID: 1,
        text: ""
    },
    {
        name: "Dagtocht met BBD voor senioren tocht ",
        description: "Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! De activiteit is...",
        prijs: 25,
        categoryID: 2,
        text: ""
    },
        {
        name: "ROBERT met BBD voor senioren tocht ",
        description: "Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! De activiteit is...",
        prijs: 25,
        categoryID: 1,
        text: ""
    }
]

let category: Types.Category_Dagtocht[] = [

    {
        title: "Zomerdagtochten voor gezinnen",
        description: "Iedere zomer wordt een dagtocht georganiseerd voor gezinnen. Er is altijd keus uit een wisselend aanbod aan bestemmingen waaronder het bezoek aan een pretpark, museum of show. Voor €10,- per persoon kun je al met de bus mee naar een topbestemming.De dagjes uit zijn tussen 10 juli en 16 augustus 2017 en kunt u kiezen uit een aantal leuke bestemmingen.",
        id: 0
    },

    {
        title: "Zomerdagtochten voor senioren",
        description: "Iedere zomer wordt een dagtocht georganiseerd voor senioren van 50 jaar of ouder. Met uw Ooievaarspas kunt u voor € 10 deelnemen aan een fantastische dagtocht. De dagjes uit zijn tussen 10 juli en 16 augustus 2017 en kunt u kiezen uit een aantal leuke bestemmingen.",
        id: 1
},
    {
         title: "Zomerdagtochten voor personen met begeleidingsbehoefte",
         description: "Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! Deze zomerdagtochten zijn bedoeld voor senioren met een begeleidingsbehoefte",
         id: 2
    }
]

let informatiepas: Types.InformatiePas[] = [
       { 
            title:'Over de Ooievaarspas',
            description:'De Ooievaarspas biedt korting op allerlei activiteiten op het gebied van sport, cultuur, contributie, lidmaatschap en entree. De Ooievaarspas is voor inwoners van Den Haag, Leidschendam-Voorburg en Rijswijk met een laag inkomen. Dit en meer informatie over de Ooievaarspas kunt u onderstaand vinden.',
            id: 1
        },
       {
            title:'Informatie voor aanbieders',
            description:'Bent u een nieuwe aanbieder van de Ooievaarspas en nog niet helemaal thuis in het verzilveren van kortingen met de Ooievaarspas?',
            id: 3
        },
        {
            title: 'Informatie over Ooievaarsregelingen',
            description:'Bent u al bekend met de Ooievaarsregelingen? Of weet u niet precies hoe u er gebruik van kan maken? Dit en meer leest u hier.',
            id: 2
        },
        {
            title: 'Actuele Informatie',
            description:'Op zoek naar contactinformatie of de laatste informatie? Zoals nieuwsberichten, onze interessante Ooievaarsnieuwsbrief of andere leuke nieuwtjes? Lees het hier.',
            id: 4
        },
        {
            title: 'Nieuws',
            description: '',
            id: 5
        }

    ]
    let OverDeOoievaarspas: Types.Uitleg_InformatiePas[] = [
    {
        title: 'Over Ooievaarspas',
        description: 'De Ooievaarspas geeft korting op sport, cultuur, contributie, lidmaatschap en entree. De Ooievaarspas is voor inwoners van Den Haag, Leidschendam-Voorburg en Rijswijk, met een inkomen tot maximaal 130% van de bijstandsnorm. ',
        id: 1
    },
    {
        title:'Aanvragen Ooievaarspas',
        description:'Woont u in Den Haag, Leidschendam-Voorburg of Rijswijk en heeft u een laag inkomen? Dan biedt de Ooievaarspas heel veel voordelen. Vraag daarom de Ooievaarspas aan.',
        id: 1
    },
    {
        title: 'Verloop na aanvraag Ooievaarspas',
        description:'Nadat u een aanvraag heeft gedaan ontvangt u schriftelijk een ontvangstbevestiging. De gemeente bekijkt binnen 8 weken of u voldoet aan de voorwaarden en stelt vast of u recht heeft op de Ooievaarspas.',
        id: 1
    },
    {
        title: 'Computerset',
        description: 'Om goed te kunnen leren is het belangrijk dat kinderen een computer hebben. Daarmee kunnen zij meedoen op school, spreekbeurten voorbereiden, werkstukken maken en spelletjes spelen',
        id: 2
    },
    {
        title:'',
        description:'',
        id: 2
    },
    {
        title:'',
        description:'',
        id: 2
    },
    {
        title:'Aanbieder worden?',
        description:'Wilt u aanbieder van de Ooievaarspas worden maar niet zeker of u voldoet aan ons aanbiedersprofiel? De voorwaarden kunt u hier vinden.',
        id: 3
    },
    {
        title:'',
        description:'',
        id: 3
    },
    {
        title:'',
        description:'',
        id: 3
    },
    {
        title:'',
        description:'',
        id: 3
    },
    {
        title:'Nieuwsberichten Ooievaarspas',
        description:'Wilt u op de meer weten over de laatste nieuwsberichten van onder andere lopende projecten, acties en informatie over aanbieders? Dat kan onze nieuws pagina.',
        id: 4
    },
    {
        title:'',
        description:'',
        id: 4
    },
    {
        title:'',
        description:'',
        id: 4
    },
    {
        title:'',
        description:'',
        id: 4
    },
    {
        title:'Pinguïn geboren in Sea Life Scheveningen',
        description:'',
        id: 5
    },
    {
        title:'',
        description:'',
        id: 5
    },
    {
        title:'',
        description:'',
        id: 5
    },
    {
        title:'',
        description:'',
        id: 5
    }
]

let speciale_aanbieding: Types.SpecialAanbieding[] = [
       { 
            title:'Join the Florence club!',
            description:'In teamverband lekker actief zijn, dat kan in de Florence Clubs. Altijd al gedroomd om te kunnen hardlopen of handboogschieten? Dit is nu mogelijk, gezellig in teamverband!',
            id: 1
        },
       {
            title:'Ontdek je sport met de sportstrippenkaart',
            description:'Woon je in Leidschendam-Voorburg en ben je op zoek naar een nieuwe sport? De sportstrippenkaart helpt je op weg! Hardlopen, volleybal of zwemmen: weet jij niet welke sport bij je past? Dit is je kans! Met de sportstrippenkaart mag je vier sporten uitproberen bij meer dan 30 sportverenigingen in Leidschendam-Voorburg. Gewoon gratis!',
            id: 2 
        },
        {
            title: 'Gratis online coaching voor Haagse pashouders',
            description:'Wil je gratis hulp bij het afvallen? Neem je je voor om te gaan bewegen, maar komt het er steeds niet van? Heb je plannen om je leefstijl te verbeteren? Wil je graag stoppen met roken of wordt het hoog tijd om je stress te verminderen? Ben je toe aan gezinshulp? Zet dan nu de stap en meld je aan voor een jaar lang gratis online coaching!',
            id: 3
        },
        {
            title: 'Ontdek Drievliet met de Ooievaarspas vanaf 1 april',
            description:'Familiepark Drievliet, plezier voor jong en oud. Drievliet is in 2017 aanbieder van de Ooievaarspas en verwelkomt families! Ook heeft Drievliet er twee mooie attracties bij! Durf jij in de sportieve Tijdmachine en de snelle Chute?',
            id: 4
        }

    ]


let aanbieding: Types.aanbieding[] = [
       {
            title:'Join the Florence club!',
            description:'In teamverband lekker actief zijn, dat kan in de Florence Clubs. Altijd al gedroomd om te kunnen hardlopen of handboogschieten? Dit is nu mogelijk, gezellig in teamverband!',
            id: 1,
            category: 'alle aanbiedingen',
            activity: 'sport',
            location: 'centrum',
            target: 'ouder dan 17 jaar'
        },
       {
            title:'Ontdek je sport met de sportstrippenkaart',
            description:'Woon je in Leidschendam-Voorburg en ben je op zoek naar een nieuwe sport? De sportstrippenkaart helpt je op weg! Hardlopen, volleybal of zwemmen: weet jij niet welke sport bij je past? Dit is je kans! Met de sportstrippenkaart mag je vier sporten uitproberen bij meer dan 30 sportverenigingen in Leidschendam-Voorburg. Gewoon gratis!',
            id: 2,
            category: 'alle aanbiedingen',
            activity: { kind: 'sport', subKind: 'badminton' },
            location: 'centrum',
            target: 'alle leeftijden'
        },
        {
            title: 'Gratis online coaching voor Haagse pashouders',
            description:'Wil je gratis hulp bij het afvallen? Neem je je voor om te gaan bewegen, maar komt het er steeds niet van? Heb je plannen om je leefstijl te verbeteren? Wil je graag stoppen met roken of wordt het hoog tijd om je stress te verminderen? Ben je toe aan gezinshulp? Zet dan nu de stap en meld je aan voor een jaar lang gratis online coaching!',
            id: 3,
            category: 'alle aanbiedingen',
            activity: 'cultuur',
            location: 'centrum',
            target: 'ouder dan 50 jaar'
        },
        {
            title: 'Ontdek Drievliet met de Ooievaarspas vanaf 1 april',
            description:'Familiepark Drievliet, plezier voor jong en oud. Drievliet is in 2017 aanbieder van de Ooievaarspas en verwelkomt families! Ook heeft Drievliet er twee mooie attracties bij! Durf jij in de sportieve Tijdmachine en de snelle Chute?',
            id: 4,
            category: 'speciale aanbiedingen',
            activity: 'cultuur',
            location: 'centrum',
            target: 'alle leeftijden'
        }

   ]

   let vragen: Types.vragen[]=[
    {
       pagina: "Veelgestelde vragen",
       title:" ",
       vraag: " ",
       antwoord: " ",
       id: 0
                
   },
   {    
       pagina: " ",
       title: "Aanvragen en/of wijzigingen Ooievaarspas",
       vraag: "Ik heb een Ooievaarspas. Hoef ik dan geen verlenging aan te vragen?",
       antwoord:" In principe moet u altijd een aanvraag doen voor verlenging van de Ooievaarspas. Er is een beperkt aantal groepen voor wie de Ooievaarspas automatisch wordt verlengd. Wilt u weten of u hiertoe behoort? Lees dan meer over de voorwaarden voor het aanvragen van een Ooievaarspas.",
       id: 1
                
  },
  {
      pagina: " ",
       title: "",
       vraag: "Wat gebeurt er nadat u een aanvraag voor een Ooievaarspas heeft gedaan?"  ,    
       antwoord:"Nadat u een aanvraag heeft gedaan ontvangt u schriftelijk een ontvangstbevestiging. De gemeente bekijkt binnen 8 weken of u voldoet aan de voorwaarden en stelt vast of u recht heeft op de Ooievaarspas. Mocht u na 8 weken geen bericht hebben ontvangen, dan kunt u contact opnemen met de klantenservice. ",        
      id: 1

  },
   {
       pagina: " ",
       title: "Gebruik Ooievaarspas",
       vraag: "Ik heb een Ooievaarspas, mag ik gratis reizen?"  ,    
       antwoord:"Gratis reizen kan alleen als u inwoner bent van Den Haag en de AOW-gerechtigde leeftijd heeft bereikt, over een persoonlijke OV-chipkaart beschikt en recht heeft op een Ooievaarspas in het huidige kalenderjaar (1 januari tot en met 31 december).",        
      id : 2
   },
   {
       pagina: "",
       title: "",
       vraag: "Ik heb een brief gekregen over het ophalen van het gratis reisproduct, maar het lukt niet?",
       antwoord: "Neem contact op met Klantenservice SZW, telefoon (070) 353 75 00, bereikbaar op werkdagen van 08.30 tot 17.00 uur of stuur een e-mail aan: ooievaarsregelingen@gemeentedenhaag.helptu.nl  ",
       id : 2

   },
   {
       pagina: " ",
       title: "Geblokkeerde Ooievaarspas",
       vraag: "Mijn Ooievaarspas is geblokkeerd. Wat is daarvan de reden?",
       antwoord: "Daar kunnen verschillende redenen voor zijn. Neem daarom contact op met Klantenservice SZW, telefoon (070) 353 75 00, bereikbaar op werkdagen van 08.30 tot 17.00 uur. Ooievaarspashouders uit Leidschendam-Voorburg en Rijswijk moeten hiervoor contact opnemen met hun eigen gemeente.",
      id: 3
   },

   {
       pagina: " ",
       title: "",
       vraag: "Hoe lang duurt het voordat mijn Ooievaarspas (weer) is geactiveerd?",
       antwoord: "Als u een aanvraag heeft gedaan en het recht op de Ooievaarspas is vastgesteld, dan wordt uw pas binnen maximaal 15 werkdagen weer geactiveerd.Heeft u geen brief ontvangen? Neem dan contact op met Klantenservice SZW, telefoon (070) 353 75 00, bereikbaar op werkdagen van 08.30 tot 17.00 uur.Ooievaarspashouders uit Leidschendam-Voorburg en Rijswijk moeten hiervoor contact opnemen met hun eigen gemeente.",
      id: 3

   }
]

let categorienVragen : Types.categorienvragen[]=[
    {
        categorie: "Aanvragen en/of wijzigingen Ooievaarspas",
        id: 1
    },
    {
       categorie: "Gebruik Ooievaarspas",
       id: 2
    },
    {
        categorie: "Geblokkeerde Ooievaarspas",
        id: 3

    }

]