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

type ActivityKind = "cultuur" | "sport"

export type Activy = { kind: ActivityKind, sub: string }

export type aanbieding = {
    title: string,
    description: string, 
    id: number,
    category: string,
    activity: Activy,
    location: string,
    target: string 
}
export type vragen={
   pagina: string
   vraag: string
   antwoord: string
   title: string
   id: number
}

export type categorienvragen = {
    categorie: string
    id : number

}

export type Uitleg_InformatiePas={
    title: string,
    description: string,
    id: number,
    text: string,
    Image: ''
}

