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



export type InformatiePas = {
    title: string, 
    description: string,
    id: number
}

export type SpecialAanbieding = {
    
    text: string,
    image: string,
    title: string,
    description: string, 
    id: number,
    reserveren: string
}

export type aanbieding = {
    text: string,
    image: string,
    title: string,
    description: string, 
    id: number,
    category: string,
    activity: string,
    location: string,
    target: string ,
    reserveren: string
}

export type titelprinten = {
    pagina: string
}

export type cat1vragen={
    button: string
    pagina: string
    categorie: string
    vraag : string
    antwoord: string
    id: number
    idcat: number
}
export type cat2vragen={
    categorie: string
    vraag : string
    antwoord: string
    id: number
    
}
export type cat3vragen={
    categorie: string
    vraag : string
    antwoord: string
    id: number
}

export type Uitleg_InformatiePas={
    image: string,
    title: string,
    description: string,
    id: number
}

export type Detail_Uitleg={
    text: string,
    image: string,
    title: string
}
export type Dagtocht = {
    image: string,
    name: string,
    description: string,
    prijs: number,
    categoryID: number,
    text: string,
    id:number,
    reserveren: string
}
export type Category_Dagtocht={
    image: string
    title: string,
    description: string,
    categoryID:number
}
export type Extra_Informatie={
    title: string,
    description: string,
    text: string,
    id: number
}
