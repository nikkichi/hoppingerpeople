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
    name: string,
    description: string,
    prijs: number,
    categoryID: number,
    text: string
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

export type ActivyKind =
    | { kind: 'cultuur', sub: string }
    | { kind: 'sport', sub: string }

export type aanbieding = {
    title: string,
    description: string, 
    id: number,
    category: string,
    activity: ActivyKind,
    location: string,
    target: string 
}

export type vragen={
   vraag: string
   antwoord: string
   title: string
   pagina: string
}

export type Uitleg_InformatiePas={
    title: string,
    description: string,
    id: number
}