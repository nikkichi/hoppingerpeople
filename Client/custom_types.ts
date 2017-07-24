export interface StandaardTekst { value: string }
export type AanbiedingProps = {}
export type AanbiedingState =
    {
        kind: "loading"
        // is_expanded: boolean

    } |
    {
        kind: "loaded"
        titel: string
        gewijzigd: Date
        ingezonden: Date
        tonenvan: Date
        tonentot: Date
        // is_expanded: boolean
    }

export type Dagtocht = {
    checkPage: number,
    name: string,
    description: string,
    prijs: number,
    categoryID: number,
    text: string,
    id:number
}
export type Category_Dagtocht={

    title: string,
    description: string,
    id:number
}

export type InformatiePas = {
    title: string, 
    description: string,
    id: number
}

export type SpecialAanbieding = {
    title: string,
    description: string, 
    id: number
}
export type aanbieding = {
    checkPage: number
    title: string,
    description: string, 
    id: number
}
export type vragen={
   vraag: string
   antwoord: string
   title: string
   
   
}

export type Uitleg_InformatiePas={
    title: string,
    description: string
}