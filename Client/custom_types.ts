export interface StandaardTekst {
    value : string;
}




export type AanbiedingProps = {}

export type AanbiedingState = 
{
    kind: "loading"
    // is_expanded: boolean
   
} |

   {
    kind:"loaded"
    titel : string
    gewijzigd : Date
    ingezonden : Date
    tonenvan : Date
    tonentot : Date
    // is_expanded: boolean
}