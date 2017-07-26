import * as Types from './custom_types'

function generateNumber(min: number, max: number) {
    return Math.floor(Math.random() * max - min + 1) + min
}

export function get_categories(): Promise<Types.Category_Dagtocht[]> {
    return new Promise((resolve, reject) => {
        resolve(category)
    })
}

export function get_special(id: number): Promise<Types.SpecialAanbieding[]> {
    return new Promise((resolve, reject) => {
        resolve(speciale_aanbieding.filter((element) => element.id == id))
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


    return new Promise((resolve, reject) => {
        resolve(filter(id))
    })
}
export function get_dagtocht(id: number): Promise<Types.Dagtocht[]> {


    return new Promise((resolve, reject) => {
        resolve(filterDagtocht(id))
    })
}

export function get_OneDagtocht(id: number): Promise<Types.Dagtocht[]> {
    let value = dagTochten.filter((element) => element.id == id)

    return new Promise((resolve, reject) => {
        resolve(value)
    })
}
export function get_aanbiedingen(): Promise<Types.aanbieding[]> {
    return new Promise((resolve, reject) => {
        resolve(aanbieding)
    })
}
export function get_aanbieding(id: number): Promise<Types.aanbieding[]> {
    return new Promise((resolve, reject) => {
        resolve(filterAanbieding(id))
    })
}



export function get_ooievaarsPas(): Promise<Types.InformatiePas[]> {
    return new Promise((resolve, reject) => {
        let random = generateNumber(0, 10);
        if (informatiepas == undefined)
            reject("Something went wrong")
        else resolve(informatiepas)
    })

}
export function get_ExtraInformatie(): Promise<Types.Extra_Informatie[]> {
    return new Promise((resolve, reject) => {
        resolve(ExtraInformatie)

    })
}
export function get_SpecificExtraInformatie(title: string): Promise<Types.Extra_Informatie[]> {
    return new Promise((resolve, reject) => {
        if (ExtraInformatie == undefined)
            reject("De titel komt niet voor")
        else {
            return resolve(ExtraInformatie.filter((element) => element.title == title))
        }
    })
}
export function get_OverDeOoievaarspas(id: number): Promise<Types.Uitleg_InformatiePas[]> {
    //let value = aanbieding.filter((element) => element.id == 1)
    // return value

    return new Promise((resolve, reject) => {
        if (OverDeOoievaarspas == undefined)
            reject("De titel komt niet voor")
        else {
            return resolve(OverDeOoievaarspas.filter((element) => element.id == id))
        }
    })
}
export function get_InformatieDetail(title: string): Promise<Types.Detail_Uitleg[]> {
    return new Promise((resolve, reject) => {
        if (detailuitleg == undefined)
            reject("De titel komt niet voor")
        else {
            return resolve(detailuitleg.filter((element) => element.title == title))
        }
    })
}


export function get_cat1vragen(): Promise<Types.cat1vragen[]> {
    return new Promise((resolve, reject) => {
        if (cat1Vragen == undefined)
            reject("Foutmelding")
        else resolve(cat1Vragen)
    })
}
export function get_cat2vragen(): Promise<Types.cat2vragen[]> {
    return new Promise((resolve, reject) => {
        if (cat2Vragen == undefined)
            reject("Foutmelding")
        else resolve(cat2Vragen)
    })
}
export function get_cat3vragen(): Promise<Types.cat3vragen[]> {
    return new Promise((resolve, reject) => {
        if (cat3Vragen == undefined)
            reject("Foutmelding")
        else resolve(cat3Vragen)
    })
}



let dagTochten: Types.Dagtocht[] = [
    {
        image: "https://www.ooievaarspas.nl/uploads/daytrip/image/7/thumb_Efteling_Pirana.jpg",
        name: "Dagtocht met Brouwer Travel naar de Efteling",
        description: "Zin om er deze zomer een dagje op uit te gaan? Met uw Ooievaarspas kunt u deelnemen aan een...",
        prijs: 25,
        categoryID: 0,
        id: 0,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door.",
        text: "Ga mee naar het meest geliefde pretpark van Nederland: de Efteling. U gaat toch ook mee naar het meest geliefde pretpark van Nederland? De Efteling is een themapark geschikt voor alle leeftijden. U zult u hier absoluut niet vervelen; jong, oud, man of vrouw - voor iedereen is er entertainment."
    },
    {
        image: "https://www.ooievaarspas.nl/uploads/daytrip/image/8/thumb_orang-oetan.jpg",
        name: "Dagtocht met Brouwer Travel naar Apelheul in Apeldoorn",
        description: "Zin om er deze zomer een dagje op uit te gaan? Met uw Ooievaarspas kunt u deelnemen aan een...",
        prijs: 25,
        categoryID: 0,
        id: 1,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door.",
        text: "Ontdek de apen in Apenheul! Een bos vol loslopende apen, dát is Apenheul. Tussen het groen loopt meer dan de helft van de apen zomaar los tussen de bezoekers. Het dierenpark ligt aan de rand van Apeldoorn, midden in de natuur op de Veluwe."
    },

    {
        image: "https://www.ooievaarspas.nl/uploads/daytrip/image/10/thumb_contact_Petra_Barendse.jpg",
        name: "Dagtocht met BBD voor senioren tocht Vlaardingen/Schiedam en omgeving ",
        description: "Bent u 50 jaar of ouder en heeft u zin om er deze zomer een dagje op uit te gaan? Met uw...",
        prijs: 25,
        id: 2,
        categoryID: 1,
        text: "Tocht Vlaardingen/Schiedam en omgeving U wordt thuis opgehaald tussen 09.00 en 10.00 uur. Om 10.00 uur vertrekken we vanuit Den Haag met negenpersoonsbussen richting Vlaardingen. Daar bezoeken we het streekmuseum Jan Anderson, gelegen aan de eeuwenoude Kethelweg, de verbinding tussen Vlaardinger Ambacht en het dorp Kethel.",
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door."
    },
    {
        image: "https://www.ooievaarspas.nl/uploads/daytrip/image/11/thumb_xx.png",
        name: "Dagtocht voor senioren met Brouwer Travel: Zomer in Zeeland",
        description: "Bent u 50 jaar of ouder en heeft u zin om er deze zomer een dagje op uit te gaan? Met uw...",
        prijs: 25,
        categoryID: 1,
        id: 3,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door.",
        text: "Zomer in Zeeland!Vanuit Den Haag vertrekken we naar de provincie met de meeste zonuren: Zeeland. De koffie en een echte Zeeuwse Bolus staan klaar in Kruiningen aan de Westerschelde, waar we ook een filmvertoning over de mosselteelt bekijken. Yerseke Daarna maken we met een gids een rondrit in en om Yerseke, langs onder meer oesterputten en havens. Aansluitend heeft u de gelegenheid om een mosselfabriek te bezoeken en  uiteraard mosselen te eten."
    },

    {
        image: "https://www.ooievaarspas.nl/uploads/daytrip/image/26/thumb_boot.png",
        name: "Dagtocht met BBD voor senioren tocht ",
        description: "Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! De activiteit is...",
        prijs: 25,
        categoryID: 2,
        id: 4,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door.",
        text: "Tocht Vlaardingen/Schiedam en omgeving U wordt thuis opgehaald tussen 09.00 en 10.00 uur. Om 10.00 uur vertrekken we vanuit Den Haag met negenpersoonsbussen richting Vlaardingen. Daar bezoeken we het streekmuseum Jan Anderson, gelegen aan de eeuwenoude Kethelweg, de verbinding tussen Vlaardinger Ambacht en het dorp Kethel."
    },
    {
        image: "https://www.ooievaarspas.nl/uploads/daytrip/image/19/thumb_molen.png",
        name: "Dagtocht voor senioren met de BBD Bingo Boot ",
        description: "Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! De activiteit is...",
        prijs: 25,
        categoryID: 2,
        id: 5,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door.",
        text: "BBD Bingo Boot Samen met rederij Groene Hart Cruises nodigen wij u uit op de BBD Bingo Boot! U wordt tussen 09.00 en 10.00 thuis opgehaald. Met een bus vertrekken we richting Leiderdorp.Rondvaart en bingo. De boot vertrekt om 11.00 uur voor een 3 uur durende rondvaart en molentocht door het Groene Hart en de Kagerplassen. Gebruikt u een rolstoel of bent u slecht ter been? Geen probleem, de boot is uitgerust met een lift zodat u gemakkelijk aan boord kunt komen. Onderweg wordt u getrakteerd op een lunch: een broodje kaas, een broodje kroket en een drankje. Daarna vertrekken we met een bus vanuit Leiderdorp terug naar huis. Wij arriveren rond 15.00 uur terug in Den Haag."
    },


]

let category: Types.Category_Dagtocht[] = [

    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zJHGFfvm1zg4Rek_MWgK1YqOU7xu0RZEahIJn6Nlnzo5wHsirQ",
        title: "Zomerdagtochten voor gezinnen",
        description: "Iedere zomer wordt een dagtocht georganiseerd voor gezinnen. Er is altijd keus uit een wisselend aanbod aan bestemmingen waaronder het bezoek aan een pretpark, museum of show. Voor €10,- per persoon kun je al met de bus mee naar een topbestemming.De dagjes uit zijn tussen 10 juli en 16 augustus 2017 en kunt u kiezen uit een aantal leuke bestemmingen.",
        categoryID: 0

    },

    {
        image: "data:image/jpeg;base64,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",
        title: "Zomerdagtochten voor senioren",
        description: "Iedere zomer wordt een dagtocht georganiseerd voor senioren van 50 jaar of ouder. Met uw Ooievaarspas kunt u voor € 10 deelnemen aan een fantastische dagtocht. De dagjes uit zijn tussen 10 juli en 16 augustus 2017 en kunt u kiezen uit een aantal leuke bestemmingen.",
        categoryID: 1
    },
    {
        image: "data:image/jpeg;base64,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",
        title: "Zomerdagtochten voor personen met begeleidingsbehoefte",
        description: "Ook als u aangepast vervoer nodig heeft kunt u mee op zomerdagtocht! Deze zomerdagtochten zijn bedoeld voor senioren met een begeleidingsbehoefte",
        categoryID: 2
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
        id: 3
    },
    {
        title: 'Informatie over Ooievaarsregelingen',
        description: 'Bent u al bekend met de Ooievaarsregelingen? Of weet u niet precies hoe u er gebruik van kan maken? Dit en meer leest u hier.',
        id: 2
    },
    {
        title: 'Actuele Informatie',
        description: 'Op zoek naar contactinformatie of de laatste informatie? Zoals nieuwsberichten, onze interessante Ooievaarsnieuwsbrief of andere leuke nieuwtjes? Lees het hier.',
        id: 4
    }, {
        title: "Nieuws",
        description: "Hier kunt u jet laaste nieuws terug vinden! Wijzingen van regelingen, informatie over onze aannbieders en meer.",
        id: 5
    }

]


let speciale_aanbieding: Types.SpecialAanbieding[] = [
    {
        description: "In teamverband lekker actief zijn, dat kan in de Florence Clubs. Altijd al gedroomd om te kunnen...",
        image: 'https://www.ooievaarspas.nl/uploads/event/image/233/thumb_Florence-.jpg',
        title: 'Join the Florence club!',
        text: 'In teamverband lekker actief zijn, dat kan in de Florence Clubs. Altijd al gedroomd om te kunnen hardlopen of handboogschieten? Dit is nu mogelijk, gezellig in teamverband!',
        id: 1,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door."
    },
    {
        description: "Woon je in Leidschendam-Voorburg en ben je op zoek naar een nieuwe sport? De sportstrippenkaart...",
        image: "https://www.ooievaarspas.nl/uploads/event/image/205/thumb_sportstrippenkaart.jpg",
        title: 'Ontdek je sport met de sportstrippenkaart',
        text: 'Woon je in Leidschendam-Voorburg en ben je op zoek naar een nieuwe sport? De sportstrippenkaart helpt je op weg! Hardlopen, volleybal of zwemmen: weet jij niet welke sport bij je past? Dit is je kans! Met de sportstrippenkaart mag je vier sporten uitproberen bij meer dan 30 sportverenigingen in Leidschendam-Voorburg. Gewoon gratis!',
        id: 2,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door."
    },
    {
        description: "Wil je gratis hulp bij het afvallen? Neem je je voor om te gaan bewegen, maar komt het er steeds...",
        image: "https://www.ooievaarspas.nl/uploads/event/image/216/thumb_Gezinnen_project.jpg",
        title: 'Gratis online coaching voor Haagse pashouders',
        text: 'Wil je gratis hulp bij het afvallen? Neem je je voor om te gaan bewegen, maar komt het er steeds niet van? Heb je plannen om je leefstijl te verbeteren? Wil je graag stoppen met roken of wordt het hoog tijd om je stress te verminderen? Ben je toe aan gezinshulp? Zet dan nu de stap en meld je aan voor een jaar lang gratis online coaching!',
        id: 3,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door."
    },
    {
        description: "Familiepark Drievliet, plezier voor jong en oud. Drievliet is in 2017 aanbieder van de...",
        image: "https://www.ooievaarspas.nl/uploads/event/image/228/thumb_Drievliet.jpg",
        title: 'Ontdek Drievliet met de Ooievaarspas vanaf 1 april',
        text: 'Familiepark Drievliet, plezier voor jong en oud. Drievliet is in 2017 aanbieder van de Ooievaarspas en verwelkomt families! Ook heeft Drievliet er twee mooie attracties bij! Durf jij in de sportieve Tijdmachine en de snelle Chute?',
        id: 4,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door."
    }

]
let aanbieding: Types.aanbieding[] = [
    {
        description: "Dat badminton geen suffe sport is, bewijst badmintonclub DKC. Deze grote vereniging in Den Haag...",
        image: 'https://www.ooievaarspas.nl/uploads/offer_version/image/136/thumb_Badminton.jpg',
        title: 'Badmintonclub DKC',
        text: 'Dat badminton geen suffe sport is, bewijst badmintonclub DKC. Deze grote vereniging in Den Haag biedt speel- en trainingsmogelijkheden voor jong en oud. Lekker badmintonnen op elk niveau; van beginnend recreant tot fanatieke wedstrijdspeler. Wil je een keer vrijspelen of trainen? Ook dat kan.',
        id: 1,
        category: 'alle aanbiedingen',
        activity: 'badminton',
        location: 'centrum',
        target: 'ouder dan 17 jaar',
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door."
    },
    {
        description: "Badminton houdt iedereen fit, ook u. Want ook voor 55-plussers is badminton een ideale sport. Sla...",
        image: "https://www.ooievaarspas.nl/uploads/event/image/205/thumb_sportstrippenkaart.jpg",
        title: 'Badminton Club het Zandje 55',
        text: 'Badminton houdt iedereen fit, ook u. Want ook voor 55-plussers is badminton een ideale sport. Sla lekker een shuttletje mee en houd uw gewrichten en spieren soepel.Ook als u geen badmintonervaring heeft, bent u van harte welkom.',
        id: 2,
        category: 'alle aanbiedingen',
        activity: 'badminton',
        location: 'centrum',
        target: 'alle leeftijden',
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door."
    },
    {
        description: "Oefening baart kunst. Oftewel: door goed te oefenen, zet je de beste resultaten neer. Dat geldt...",
        image: "https://www.ooievaarspas.nl/uploads/offer_version/image/54/thumb_toneelstuk_heren_op_stoel.jpg",
        title: 'Oefening baart toneelkunst',
        text: 'Oefening baart kunst. Oftewel: door goed te oefenen, zet je de beste resultaten neer. Dat geldt ook voor deze toneelvereniging, de niet voor niets ‘Alles Door Oefening’ (ADO) in haar naam heeft.ADO-DVS is de oudste toneelvereniging van Den Haag. En dat zie je terug op het podium. Stukken van onder andere Ibsen, Sophocles, Bernlef en Wim T. Schippers zette ADO-DVS al op het podium neer. Lijkt het jou iets om daarin mee te spelen?',
        id: 3,
        category: 'alle aanbiedingen',
        activity: 'toneel',
        location: 'centrum',
        target: 'ouder dan 50 jaar',
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door."
    },
    {
        description: "Speelde je vroeger ook zo vaak filmscènes na? Of hang je thuis wel eens ‘de clown’ of...",
        image: "https://www.ooievaarspas.nl/uploads/offer_version/image/299/thumb_10356_1247960565.jpg",
        title: 'Theatergroep Wats',
        text: 'Speelde je vroeger ook zo vaak filmscènes na? Of hang je thuis wel eens ‘de clown’ of de ‘dramaqueen’ uit? Dan schuilt er misschien wel een heel goede acteur of actrice in je. En die kunnen ze bij Theatergroep Wats nu net goed gebruiken. De theatergroep staat regelmatig op de planken met uiteenlopende voorstellingen.Kom eens een repetitie bijwonen en kijk of het wat voor je is. Ben je overtuigd? Meld je aan en wie weet speel jij al mee in het volgende stuk!',
        id: 4,
        category: 'speciale aanbiedingen',
        activity: 'toneel',
        location: 'centrum',
        target: 'alle leeftijden',
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door."
    },
    {
        description: "Familiepark Drievliet, plezier voor jong en oud. Drievliet is in 2017 aanbieder van de...",
        image: "https://www.ooievaarspas.nl/uploads/event/image/228/thumb_Drievliet.jpg",
        title: 'Ontdek Drievliet met de Ooievaarspas vanaf 1 april Speciaal',
        text: 'Familiepark Drievliet, plezier voor jong en oud. Drievliet is in 2017 aanbieder van de Ooievaarspas en verwelkomt families! Ook heeft Drievliet er twee mooie attracties bij! Durf jij in de sportieve Tijdmachine en de snelle Chute?',
        id: 5,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door.",
        category: 'speciale aanbiedingen',
        activity: 'toneel',
        location: 'centrum',
        target: 'alle leeftijden'
    },
    {
        description: "Wil je gratis hulp bij het afvallen? Neem je je voor om te gaan bewegen, maar komt het er steeds...",
        image: "https://www.ooievaarspas.nl/uploads/event/image/216/thumb_Gezinnen_project.jpg",
        title: 'Gratis online coaching voor Haagse pashouders Speciaal',
        text: 'Wil je gratis hulp bij het afvallen? Neem je je voor om te gaan bewegen, maar komt het er steeds niet van? Heb je plannen om je leefstijl te verbeteren? Wil je graag stoppen met roken of wordt het hoog tijd om je stress te verminderen? Ben je toe aan gezinshulp? Zet dan nu de stap en meld je aan voor een jaar lang gratis online coaching!',
        id: 6,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door.",
        category: 'speciale aanbiedingen',
        activity: 'fitness',
        location: 'centrum',
        target: 'alle leeftijden'
    },
    {

        description: "In teamverband lekker actief zijn, dat kan in de Florence Clubs. Altijd al gedroomd om te kunnen...",
        image: 'https://www.ooievaarspas.nl/uploads/event/image/233/thumb_Florence-.jpg',
        title: 'Join the Florence club! Speciaal',
        text: 'In teamverband lekker actief zijn, dat kan in de Florence Clubs. Altijd al gedroomd om te kunnen hardlopen of handboogschieten? Dit is nu mogelijk, gezellig in teamverband!',
        id: 7,
        reserveren: "Reserveren dagtocht.Meld u aan in de week van maandag 26 juni tot en met vrijdag 30 juni 2017 tussen 09.00 uur tot 14.00 uur via telefoonnummer (070) 364 66 61. Geef bij het aanmelden uw geldige Ooievaarspasnummer door.",
        category: 'speciale aanbiedingen',
        activity: 'fitness',
        location: 'centrum',
        target: 'alle leeftijden'
    }





]



let cat1Vragen: Types.cat1vragen[] = [
    {   
        button: "<p><button onClick={(event) => thisRef.setState({...thisRef.state, antwoorden: thisRef.state.antwoorden.map(x => false)})}>klik mij</button></p>",
        pagina: "Veelgestelde vragen",
        categorie: "Aanvragen en/of wijzigingen Ooievaarspas",
        vraag: "Ik heb een Ooievaarspas. Hoef ik dan geen verlenging aan te vragen?",
        antwoord: " In principe moet u altijd een aanvraag doen voor verlenging van de Ooievaarspas. Er is een beperkt aantal groepen voor wie de Ooievaarspas automatisch wordt verlengd. Wilt u weten of u hiertoe behoort? Lees dan meer over de voorwaarden voor het aanvragen van een Ooievaarspas.",
        id: 1,
        idcat: 1
    },
    {
        button: "",
        pagina: "",
        categorie: "",
        vraag: "Wat gebeurt er nadat u een aanvraag voor een Ooievaarspas heeft gedaan?",
        antwoord: "Nadat u een aanvraag heeft gedaan ontvangt u schriftelijk een ontvangstbevestiging. De gemeente bekijkt binnen 8 weken of u voldoet aan de voorwaarden en stelt vast of u recht heeft op de Ooievaarspas. Mocht u na 8 weken geen bericht hebben ontvangen, dan kunt u contact opnemen met de klantenservice. ",
        id: 2,
         idcat: 1
    },
    {
        button: "",
        pagina: "",
        categorie: '',
        vraag:"Ik heb een toekenningsbrief gekregen, alle gevraagde stukken opgestuurd, maar de Ooievaarspas nog niet ontvangen?",
        antwoord:"De verwerking hiervan kan vier weken duren. Neem na deze vier weken contact op met Klantenservice SZW, telefoon (070) 353 75 00, bereikbaar op werkdagen van 08.30 tot 17.00 uur.Ooievaarspashouders uit Leidschendam-Voorburg en Rijswijk moeten hiervoor contact opnemen met hun eigen gemeente.",
        id: 3,
         idcat: 1

    
    }]
let cat2Vragen: Types.cat2vragen[]
    = [{

        categorie: "Gebruik Ooievaarspas",
        vraag: "Ik heb een Ooievaarspas, mag ik gratis reizen?",
        antwoord: "Gratis reizen kan alleen als u inwoner bent van Den Haag en de AOW-gerechtigde leeftijd heeft bereikt, over een persoonlijke OV-chipkaart beschikt en recht heeft op een Ooievaarspas in het huidige kalenderjaar (1 januari tot en met 31 december).",
        id: 4
    },
    {

        categorie: " ",
        vraag: "Ik heb een brief gekregen over het ophalen van het gratis reisproduct, maar het lukt niet?",
        antwoord: "Neem contact op met Klantenservice SZW, telefoon (070) 353 75 00, bereikbaar op werkdagen van 08.30 tot 17.00 uur of stuur een e-mail aan: ooievaarsregelingen@gemeentedenhaag.helptu.nl  ",
        id: 5
    },
        {
            categorie: " ",
        vraag: "Ik kan niet gratis reizen, hoe kan dat?",
        antwoord: "Gratis reizen kan alleen als u inwoner bent van Den Haag en de AOW-gerechtigde leeftijd heeft bereikt, over een persoonlijke OV-chipkaart beschikt en recht heeft op een Ooievaarspas in het huidige kalenderjaar (1 januari tot en met 31 december).Indien u wel aan de bovenstaande voorwaarden voldoet maar het niet lukt om gratis te reizen, kan dit verschillende oorzaken hebben. Neem daarom contact op met Klantenservice SZW, telefoon (070) 353 75 00, bereikbaar op werkdagen van 08.30 tot 17.00 uur.  ",
        id: 6

        }

    ]
let cat3Vragen: Types.cat3vragen[] = [
    {

        categorie: "Geblokkeerde Ooievaarspas",
        vraag: "Mijn Ooievaarspas is geblokkeerd. Wat is daarvan de reden?",
        antwoord: "Daar kunnen verschillende redenen voor zijn. Neem daarom contact op met Klantenservice SZW, telefoon (070) 353 75 00, bereikbaar op werkdagen van 08.30 tot 17.00 uur. Ooievaarspashouders uit Leidschendam-Voorburg en Rijswijk moeten hiervoor contact opnemen met hun eigen gemeente.",
        id: 7
    },

    {

        categorie: "",
        vraag: "Hoe lang duurt het voordat mijn Ooievaarspas (weer) is geactiveerd?",
        antwoord: "Als u een aanvraag heeft gedaan en het recht op de Ooievaarspas is vastgesteld, dan wordt uw pas binnen maximaal 15 werkdagen weer geactiveerd.Heeft u geen brief ontvangen? Neem dan contact op met Klantenservice SZW, telefoon (070) 353 75 00, bereikbaar op werkdagen van 08.30 tot 17.00 uur.Ooievaarspashouders uit Leidschendam-Voorburg en Rijswijk moeten hiervoor contact opnemen met hun eigen gemeente.",
        id: 8
    },
    {
        categorie: "",
        vraag: "Mijn Ooievaarspas is geblokkeerd. Kan ik nog gebruik maken van de Ooievaarspas activiteiten?",
        antwoord: "Nee, u kunt na het blokkeren geen gebruik meer maken van de activiteiten van de Ooievaarspas.Geen geldige Ooievaarspas betekent daarom geen korting.",
        id: 9
    }
]
let OverDeOoievaarspas: Types.Uitleg_InformatiePas[] = [
    {
        image: "",
        title: 'Over Ooievaarspas',
        description: 'De Ooievaarspas geeft korting op sport, cultuur, contributie, lidmaatschap en entree. De Ooievaarspas is voor inwoners van Den Haag, Leidschendam-Voorburg en Rijswijk, met een inkomen tot maximaal 130% van de bijstandsnorm. ',
        id: 1,
    },
    {
        image:"",
        title: 'Aanvragen Ooievaarspas',
        description: 'Woont u in Den Haag, Leidschendam-Voorburg of Rijswijk en heeft u een laag inkomen? Dan biedt de Ooievaarspas heel veel voordelen. Vraag daarom de Ooievaarspas aan.',
        id: 1,

    },
    {
        image:"",
        title: 'Verloop na aanvraag Ooievaarspas',
        description: 'Nadat u een aanvraag heeft gedaan ontvangt u schriftelijk een ontvangstbevestiging. De gemeente bekijkt binnen 8 weken of u voldoet aan de voorwaarden en stelt vast of u recht heeft op de Ooievaarspas.',
        id: 1,

    },
    {

        title: 'Computerset',
        image: "https://www.ooievaarspas.nl/uploads/ckeditor/pictures/63/content_Picture6.png",
        description: 'Om goed te kunnen leren is het belangrijk dat kinderen een computer hebben. Daarmee kunnen zij meedoen op school, spreekbeurten voorbereiden, werkstukken maken en spelletjes spelen',
        id: 2,

    },
    {
        image: "https://www.ooievaarspas.nl/uploads/ckeditor/pictures/62/content_Picture7.png",
        title: 'Fiets',
        description: '',
        id: 2,

    },
    {
        image:"",
        title: 'Aanbieder worden?',
        description: 'Wilt u aanbieder van de Ooievaarspas worden maar niet zeker of u voldoet aan ons aanbiedersprofiel? De voorwaarden kunt u hier vinden.',
        id: 3,

    },
    {
        image: "",
        title: 'Doel en Voorwaarden',
        description: 'Bent u gevestigd in Den Haag, Leidschendam-Voorburg of Rijswijk en wilt u een aanbod doen tegen gereduceerd tarief? Lees onze doel en de belangrijkste voorwaarden om aanbieder te kunnen worden.',
        id: 3,

    },
    {
        image: "",
        title: 'Nieuwsberichten Ooievaarspas',
        description: 'Wilt u op de meer weten over de laatste nieuwsberichten van onder andere lopende projecten, acties en informatie over aanbieders? Dat kan onze nieuws pagina.',
        id: 4,

    },
    {
        image:"",
        title: 'Aanmelden Ooievaarsnieuwsbrief',
        description: 'Wilt u op de meer weten over de laatste nieuwsberichten van onder andere lopende projecten, acties en informatie over aanbieders? Dat kan onze nieuws pagina.',
        id: 4
    },
    {
        image:"",
        title: 'Pinguïn geboren in Sea Life Scheveningen',
        description: 'Onze nieuwsbrieven staan altijd boordevol nieuws zoals nieuwe aanbieders, leuke aanbiedingen, (gratis) evenementen en dagtochten. Ook lees je meer over verschillende regelingen zoals pedicurebonnen, maaltijdvoorzieningen en de digitale wereld voor senioren. Onze eerdere nieuwsbrieven vind je hier. Meld je hieronder aan en blijf altijd als eerste op de hoogte van het laatste Ooievaarsnieuws. Veel leesplezier!',
        id: 5,

    }
]

let detailuitleg: Types.Detail_Uitleg[] = [
    {
        text: 'Als u een minimuminkomen heeft en uw kind is 10 jaar of ouder, maar nog geen 18 jaar, dan kunt u via Stichting Leergeld Den Haag een aanvraag voor een nieuwe fiets indienen. Voor een nieuwe fiets betaalt u een eigen bijdrage van € 25,-. Gaat deze fiets kapot? Dan komt de fiets mogelijk éénmalig in aanmerking voor reparatie. Meer informatie? Kijk op www.denhaag.nl/ooievaarsregelingen',
        image: 'https://www.ooievaarspas.nl/uploads/ckeditor/pictures/62/content_Picture7.png',
        title: 'Fiets'
    },
    {
        text: 'Na ruim 30 dagen is het dan zover – een Humboldt pinguïnkuiken is uit het ei gekropen. De gelukkige ouders zijn de 8 jarige pinguïn Janneke en vader Jip. Het is het allereerste kuiken dat we in Sea  Life Scheveningen mogen verwelkomen.',
        image: 'https://www.ooievaarspas.nl/uploads/news/image/18/thumb_pinguin_kuiken_2.jpg',
        title: 'Pinguïn geboren in Sea Life Scheveningen'
    },
    {
        title: 'Computerset',
        image: "https://www.ooievaarspas.nl/uploads/ckeditor/pictures/63/content_Picture6.png",
        text: 'Om goed te kunnen leren is het belangrijk dat kinderen een computer hebben. Daarmee kunnen zij meedoen op school, spreekbeurten voorbereiden, werkstukken maken en spelletjes spelen'
    },
    {
        title: 'Aanbieder worden?',
        text: 'Iedereen moet mee kunnen doen in de samenleving. Ook mensen voor wie dat moeilijk is, zoals mensen met een minimum inkomen. De gemeente biedt die mensen met een laag inkomen graag de mogelijkheid om met korting lid te worden van een sport of culturele vereniging of instelling. Ook kunnen tentoonstellingen en evenementen worden bezocht. Dat kan allemaal met de Ooievaarspas.',
        image: ''
    },
    {
        title: 'Doel en Voorwaarden',
        image: '',
        text: 'Het doel van de Ooievaarspas is er voor te zorgen dat iedereen mee moet kunnen doen in de samenleving. Ook mensen met een minimum inkomen voor wie dat moeilijk is. De gemeente biedt die mensen met een laag inkomen graag de mogelijkheid om met korting lid te worden van een sport, culture en/of recreatieve vereniging of organisatie. Dit gebeurt langs twee lijnen: 1. Door financiële drempels, die mensen met een minimuminkomen ervan weerhouden aan maatschappelijke activiteiten deel te nemen, weg te nemen dan wel te verlagen; 2. Door Ooievaarspas houders actief te stimuleren gebruik te maken van het aanbod van de Ooievaarspas.',
    },
    {
        title: 'Aanmelden Ooievaarsnieuwsbrief',
        image: '',
        text: 'Onze nieuwsbrieven staan altijd boordevol nieuws zoals nieuwe aanbieders, leuke aanbiedingen, (gratis) evenementen en dagtochten. Ook lees je meer over verschillende regelingen zoals pedicurebonnen, maaltijdvoorzieningen en de digitale wereld voor senioren. Onze eerdere nieuwsbrieven vind je hier. Meld je hieronder aan en blijf altijd als eerste op de hoogte van het laatste Ooievaarsnieuws. Veel leesplezier!',
    },
    {
        title: 'Nieuwsberichten Ooievaarspas',
        image: '',
        text: 'Wilt u op de meer weten over de laatste nieuwsberichten van onder andere lopende projecten, acties en informatie over aanbieders? Dat kan onze nieuws pagina.'
    },
    {
        title: 'Verloop na aanvraag Ooievaarspas',
        image: '',
        text: 'Wat gebeurt er nadat u een aanvraag voor een Ooievaarspas heeft gedaan? Nadat u een aanvraag heeft gedaan ontvangt u schriftelijk een ontvangstbevestiging. De gemeente bekijkt binnen 8 weken of u voldoet aan de voorwaarden en stelt vast of u recht heeft op de Ooievaarspas. Mocht u na 8 weken geen bericht hebben ontvangen, dan kunt u contact opnemen met de klantenservice. Als de gemeente onvoldoende gegevens van u heeft ontvangen om het recht op de Ooievaarspas te kunnen beoordelen, dan wordt u gebeld of krijgt u een brief waarin gevraagd wordt om informatie aan te leveren. Bij de brief zit een retour-enveloppe (u hoeft dus geen postzegel te plakken).'
    },
        {
        title: 'Over Ooievaarspas',
        image: '',
        text: 'De Ooievaarspas geeft korting op sport, cultuur, contributie, lidmaatschap en entree. De Ooievaarspas is voor inwoners van Den Haag, Leidschendam-Voorburg en Rijswijk, met een inkomen tot maximaal 130% van de bijstandsnorm. In 1989 begon de gemeente Den Haag met de Ooievaarspas. Inmiddels maken 53.000 gezinnen gebruik van de Ooievaarspas en zijn er 88.000 passen in omloop..'
    }
]

let ExtraInformatie: Types.Extra_Informatie[] = [
    {
        title: 'Onze vrienden van de Ooievaarspas',
        description: 'Heb jij al kennis gemaakt met onze vrienden? Ontmoet ze hier en lees gauw wat zij aanbieden!',
        text: 'Ooievaarspashouders krijgen belangeloos korting bij organisaties die aangesloten zijn als vrienden van de Ooievaarspas. De verleende korting wordt vastgesteld door de organisatie zelf en wijkt daardoor af van reguliere Ooievaarspaskortingen.',
        id: 1
    },
    {
        title: 'Vergroot uw digitale wereld',
        description: 'Bent u al digitaal of wilt u digitaal worden? Doe dan mee met onze cursus ‘Allemaal Digitaal’!',
        text: 'Bent u 60+ en nieuwsgierig naar het gebruik van een tablet? Dan is een cursus misschien iets voor u. Met het gebruik van internet blijft u langer zelfstandig en betrokken bij de maatschappij. Zo kunt u gemakkelijk in contact komen met familie en vrienden, maar ook organisaties benaderen en het nieuws volgen. De cursus ‘Allemaal Digitaal’ biedt u de kans om een kijkje te nemen in de digitale wereld. U hoeft geen ervaring te hebben om aan deze tabletcursus mee te doen.',
        id: 2
    },
    {
        title: '50% korting voor meer leuke dingen',
        description: 'Maak je gebruik van de regeling Kinderen Doen Mee? Wist je dat je hiernaast ook 50% korting op je volgende sport en volgende culturele activiteit krijgt?',
        text: 'Je kunt met de Ooievaarspas gebruik maken van de regeling Kinderen Doen Mee. Dit betekent dat je met 100% korting aan 1 sport + 1 creatieve activiteit kan meedoen. Daarnaast krijg je 50% korting op je volgende sport en volgende creatieve activiteit. Ben je lid van een voetbalvereniging, maar wil je ook graag op judo? Dan kun je gratis voetballen en krijg je 50% korting op het judoën. Zit je op gitaarles, maar wil je ook naar dansles? Dan kun je gratis gitaarles volgen en krijg je 50% korting op het dansen',
        id: 3
    }
]