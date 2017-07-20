import * as Custom_Types from './custom_types'

let aanbieding1 = {titel:"voorbeeldtitel1", lg:"datum1", tgi:"datum2", gv: "datum3", gt:"datum4"};

let json = JSON.stringify(aanbieding1);

export function getAanbiedingPromise() {
    let promise : Promise<Custom_Types.AanbiedingState> = new Promise(
        function(resolve, reject){
            setTimeout(
                () => {return {
                        titel : Custom_Types.CreateValue("nieuwe titel"),
                        gewijzigd : Custom_Types.CreateValue(new Date(2000,10,10)),
                        ingezonden : Custom_Types.CreateValue(new Date(2000,10,10)),
                        tonenvan : Custom_Types.CreateValue(new Date(2000,10,10)),
                        tonentot : Custom_Types.CreateValue(new Date(2000,10,10))
                        }}
                , 2500)
        }
    )
    return promise;
}

export function getAllAanbieding(){
    return JSON.parse(JSON.stringify({
                        titel : Custom_Types.CreateValue("nieuwe titel"),
                        gewijzigd : Custom_Types.CreateValue(new Date(2000,10,10)),
                        ingezonden : Custom_Types.CreateValue(new Date(2000,10,10)),
                        tonenvan : Custom_Types.CreateValue(new Date(2000,10,10)),
                        tonentot : Custom_Types.CreateValue(new Date(2000,10,10))
                        }))//later change the stringify to something that retrieves data from a database
}





/*export function addNumberPromise (x : number){
    let promise : Promise<number> = new Promise(
        function(resolve, reject){
        if(Math.random() > 0.5){
            return resolve(x);
        }else{
            return reject(x);
        }
    })
    return promise.then(
        (
            (x:number) => {
                return x + 1;}
        ),
        (
            (x:number) => {
                console.log("FAILED!!");
                return x;}
        )
    );
}*/