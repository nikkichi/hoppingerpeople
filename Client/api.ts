import * as Types from './custom_types'


function generateNumber(min: number, max:number) {
    return Math.floor(Math.random() * max - min + 1) + min 
}

export function get_categories() : Promise<Types.Category_Dagtocht[]>{
 return new Promise((resolve, reject) => {
        // let random = generateNumber(0, 10);
        // if (random > 10) reject("API failed");
        // else 
        resolve(category)
    })
}

function filter() {
    console.log("olaa", dagTochten.filter((element) => element.categoryID == 1) )
    return dagTochten.filter((element) => element.categoryID == 1)

}

export function get_dagtocht(): Promise<Types.Dagtocht[]> {
   console.log( dagTochten.filter((element) => element.categoryID == 1) )
   
    return new Promise((resolve, reject) => {
        // resolve(dagTochten)

        // if (dagTochten[categoryID] == undefined)
        //     reject("Id is not in array in dagtocht")
        // else
        
           resolve(filter())
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
            id: 2 
        },
        {
            title: 'Informatie over Ooievaarsregelingen',
            description:'Bent u al bekend met de Ooievaarsregelingen? Of weet u niet precies hoe u er gebruik van kan maken? Dit en meer leest u hier.',
            id: 3
        },
        {
            title: 'Actuele Informatie',
            description:'Op zoek naar contactinformatie of de laatste informatie? Zoals nieuwsberichten, onze interessante Ooievaarsnieuwsbrief of andere leuke nieuwtjes? Lees het hier.',
            id: 4
        }

    ]
