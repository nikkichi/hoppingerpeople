export function externalFold<A,B>(a:A, b:B[], c:(A, B) => A) {
    for (var i = 0; i < b.length; i++) {
        a = c(a,b[i])
    }
    return c
}

export function flatten2D<A>(a:A[][]){
    let b : A[] = []
    a.forEach(listOfA =>
        listOfA.forEach(A =>
            b.push(A)))
            return b
}