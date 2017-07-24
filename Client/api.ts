import * as Types from './custom_types'

function generateNumber(min: number, max: number) {
    return Math.floor(Math.random() * max - min + 1) + min
}

export function get_categories(): Promise<Types.Category_Dagtocht[]> {
    return new Promise((resolve, reject) => {
        resolve(category)
    })
}

export function get_specialaanbieding(): Promise<Types.SpecialAanbieding[]> {
    return new Promise((resolve, reject) => {
        resolve(speciale_aanbieding)
    })
}

function filter(id: number) {

    let value = dagTochten.filter((element) => element.categoryID == id)
    return value

}
function filterAanbieding(id: number) {

    let value = aanbieding.filter((element) => element.id == id)
    return value

}
function filterDagtocht(id: number) {

    let value = dagTochten.filter((element) => element.categoryID == id)
    return value

}

export function get_dagtochten(id: number): Promise<Types.Dagtocht[]> {
    console.log('get_dagtocht', dagTochten.filter((element) => element.categoryID == id))

    return new Promise((resolve, reject) => {
        resolve(filter(id))
    })
}
export function get_dagtocht(id: number): Promise<Types.Dagtocht[]> {
    console.log('get_dagtocht', dagTochten.filter((element) => element.categoryID == id))

    return new Promise((resolve, reject) => {
        resolve(filterDagtocht(id))
    })
}
export function get_aanbiedingen(): Promise<Types.aanbieding[]> {
    return new Promise((resolve, reject) => {
        console.log("aanbiedingen", aanbieding)
        resolve(aanbieding)
    })
}
export function get_aanbieding(id: number): Promise<Types.aanbieding[]> {
    return new Promise((resolve, reject) => {
        console.log("aanbiedingen", aanbieding)
        resolve(filterAanbieding(id))
    })
}



export function get_ooievaarsPas(): Promise<Types.InformatiePas[]> {
    return new Promise((resolve, reject) => {
        let random = generateNumber(0, 10);
        if (informatiepas == undefined)
            reject("Foutmelding of some sort")
        else resolve(informatiepas)
    })

}
export function get_uitleg(title): Promise<Types.Uitleg_InformatiePas[]> {
    return new Promise((resolve, reject) => {
        if ('Over Ooievaarspas' == undefined)
            reject("De titel komt niet voor")
        else resolve([{
            title: 'Over Ooievaarspas',
            description: 'De Ooievaarspas geeft korting op sport, cultuur, contributie, lidmaatschap en entree. De Ooievaarspas is voor inwoners van Den Haag, Leidschendam-Voorburg en Rijswijk, met een inkomen tot maximaal 130% van de bijstandsnorm. '
        }])
    })
}
export function get_veelgesteldevragenonderwerp(): Promise<Types.vragen[]> {
    return new Promise((resolve, reject) => {
        if (vragen == undefined)
            reject("Foutmelding")
        else resolve(vragen)
    })
}

let dagTochten: Types.Dagtocht[] = [
    {
        checkPage: 2,
        name: "Dagtocht met Brouwer Travel naar de Efteling",
        description: "Zin om er deze zomer een dagje op uit te gaan? Met uw Ooievaarspas kunt u deelnemen aan een...",
        prijs: 25,
        categoryID: 0,
        text: "Ga mee naar het meest geliefde pretpark van Nederland: de Efteling. U gaat toch ook mee naar het meest geliefde pretpark van Nederland? De Efteling is een themapark geschikt voor alle leeftijden. U zult u hier absoluut niet vervelen; jong, oud, man of vrouw - voor iedereen is er entertainment.",
        id: 0
    },
    {
        checkPage: 2,
        name: "Dagtocht voor senioren met Brouwer Travel: Op stap in ",
        description: "Bent u 50 jaar of ouder en heeft u zin om er deze zomer een dagje op uit te gaan? Met uw...",
        prijs: 25,
        categoryID: 1,
        text: "test......",
        id: 1

    },
    {
        
        checkPage: 2,
        name: "Dagtocht met BBD voor senioren tocht ",
        description: "Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! De activiteit is...",
        prijs: 25,
        categoryID: 2,
        text: "Test......",
        id: 2
    },
    {
        
        checkPage: 2,
        name: "ROBERT met BBD voor senioren tocht ",
        description: "Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! De activiteit is...",
        prijs: 25,
        categoryID: 1,
        text: "Test......",
        id: 3
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
        title: 'Over de Ooievaarspas',
        description: 'De Ooievaarspas biedt korting op allerlei activiteiten op het gebied van sport, cultuur, contributie, lidmaatschap en entree. De Ooievaarspas is voor inwoners van Den Haag, Leidschendam-Voorburg en Rijswijk met een laag inkomen. Dit en meer informatie over de Ooievaarspas kunt u onderstaand vinden.',
        id: 1
    },
    {
        title: 'Informatie voor aanbieders',
        description: 'Bent u een nieuwe aanbieder van de Ooievaarspas en nog niet helemaal thuis in het verzilveren van kortingen met de Ooievaarspas?',
        id: 2
    },
    {
        title: 'Informatie over Ooievaarsregelingen',
        description: 'Bent u al bekend met de Ooievaarsregelingen? Of weet u niet precies hoe u er gebruik van kan maken? Dit en meer leest u hier.',
        id: 3
    },
    {
        title: 'Actuele Informatie',
        description: 'Op zoek naar contactinformatie of de laatste informatie? Zoals nieuwsberichten, onze interessante Ooievaarsnieuwsbrief of andere leuke nieuwtjes? Lees het hier.',
        id: 4
    }

]
let Uitleg_InformatiePas: Types.Uitleg_InformatiePas[] = [
    {
        title: 'Over Ooievaarspas',
        description: 'De Ooievaarspas geeft korting op sport, cultuur, contributie, lidmaatschap en entree. De Ooievaarspas is voor inwoners van Den Haag, Leidschendam-Voorburg en Rijswijk, met een inkomen tot maximaal 130% van de bijstandsnorm. '
    }
]

let speciale_aanbieding: Types.SpecialAanbieding[] = [
    {
        title: 'Join the Florence club!',
        description: 'In teamverband lekker actief zijn, dat kan in de Florence Clubs. Altijd al gedroomd om te kunnen hardlopen of handboogschieten? Dit is nu mogelijk, gezellig in teamverband!',
        id: 1
    },
    {
        title: 'Ontdek je sport met de sportstrippenkaart',
        description: 'Woon je in Leidschendam-Voorburg en ben je op zoek naar een nieuwe sport? De sportstrippenkaart helpt je op weg! Hardlopen, volleybal of zwemmen: weet jij niet welke sport bij je past? Dit is je kans! Met de sportstrippenkaart mag je vier sporten uitproberen bij meer dan 30 sportverenigingen in Leidschendam-Voorburg. Gewoon gratis!',
        id: 2
    },
    {
        title: 'Gratis online coaching voor Haagse pashouders',
        description: 'Wil je gratis hulp bij het afvallen? Neem je je voor om te gaan bewegen, maar komt het er steeds niet van? Heb je plannen om je leefstijl te verbeteren? Wil je graag stoppen met roken of wordt het hoog tijd om je stress te verminderen? Ben je toe aan gezinshulp? Zet dan nu de stap en meld je aan voor een jaar lang gratis online coaching!',
        id: 3
    },
    {
        title: 'Ontdek Drievliet met de Ooievaarspas vanaf 1 april',
        description: 'Familiepark Drievliet, plezier voor jong en oud. Drievliet is in 2017 aanbieder van de Ooievaarspas en verwelkomt families! Ook heeft Drievliet er twee mooie attracties bij! Durf jij in de sportieve Tijdmachine en de snelle Chute?',
        id: 4
    }

]
let aanbieding: Types.aanbieding[] = [
    {
        checkPage: 1,
        title: 'Join the Florence club!',
        description: 'In teamverband lekker actief zijn, dat kan in de Florence Clubs. Altijd al gedroomd om te kunnen hardlopen of handboogschieten? Dit is nu mogelijk, gezellig in teamverband!',
        id: 1
    },
    {
        checkPage: 1,
        title: 'Ontdek je sport met de sportstrippenkaart',
        description: 'Woon je in Leidschendam-Voorburg en ben je op zoek naar een nieuwe sport? De sportstrippenkaart helpt je op weg! Hardlopen, volleybal of zwemmen: weet jij niet welke sport bij je past? Dit is je kans! Met de sportstrippenkaart mag je vier sporten uitproberen bij meer dan 30 sportverenigingen in Leidschendam-Voorburg. Gewoon gratis!',
        id: 2
    },
    {
        checkPage: 1,
        title: 'Gratis online coaching voor Haagse pashouders',
        description: 'Wil je gratis hulp bij het afvallen? Neem je je voor om te gaan bewegen, maar komt het er steeds niet van? Heb je plannen om je leefstijl te verbeteren? Wil je graag stoppen met roken of wordt het hoog tijd om je stress te verminderen? Ben je toe aan gezinshulp? Zet dan nu de stap en meld je aan voor een jaar lang gratis online coaching!',
        id: 3
    },
    {
        
        checkPage: 1 ,  
        title: 'Ontdek Drievliet met de Ooievaarspas vanaf 1 april',
        description: 'Familiepark Drievliet, plezier voor jong en oud. Drievliet is in 2017 aanbieder van de Ooievaarspas en verwelkomt families! Ook heeft Drievliet er twee mooie attracties bij! Durf jij in de sportieve Tijdmachine en de snelle Chute?',
        id: 4
    }

]

let vragen: Types.vragen[] = [
    {
        title: "Aanvragen en/of wijzigingen Ooievaarspas",
        vraag: "Ik heb een Ooievaarspas. Hoef ik dan geen verlenging aan te vragen?",
        antwoord: " In principe moet u altijd een aanvraag doen voor verlenging van de Ooievaarspas. Er is een beperkt aantal groepen voor wie de Ooievaarspas automatisch wordt verlengd. Wilt u weten of u hiertoe behoort? Lees dan meer over de voorwaarden voor het aanvragen van een Ooievaarspas.",


    },
    {
        title: "Gebruik Ooievaarspas",
        vraag: "Ik heb een Ooievaarspas, mag ik gratis reizen?",
        antwoord: "Gratis reizen kan alleen als u inwoner bent van Den Haag en de AOW-gerechtigde leeftijd heeft bereikt, over een persoonlijke OV-chipkaart beschikt en recht heeft op een Ooievaarspas in het huidige kalenderjaar (1 januari tot en met 31 december).",

    },
    {
        title: "Geblokkeerde Ooievaarspas",
        vraag: "Mijn Ooievaarspas is geblokkeerd. Wat is daarvan de reden?",
        antwoord: "Daar kunnen verschillende redenen voor zijn. Neem daarom contact op met Klantenservice SZW, telefoon (070) 353 75 00, bereikbaar op werkdagen van 08.30 tot 17.00 uur. Ooievaarspashouders uit Leidschendam-Voorburg en Rijswijk moeten hiervoor contact opnemen met hun eigen gemeente.",

    }
]