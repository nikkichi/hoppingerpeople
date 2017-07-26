export function ExternalFold<A,B>(a:A, b:B[], c:(a, b) => A) {
    for (var i = 0; i < b.length; i++) {
        a = c(a,b[i])
    }
    return a
}

export function AsyncExternalFoldWithCompletion<A,B>(a:A, b:B[], c:(a:A, b:B) => A, d:(a:A) => void) {
    for (var i = 0; i < b.length; i++) {
        c(a,b[i])
    }
    d(a)
}

export function flatten2D<A>(a:A[][]){
    let b : A[] = []
    a.forEach(listOfA =>
        listOfA.forEach(A =>
            b.push(A)))
            return b
}

export function sleep(duration){
    return new Promise(resolve => setTimeout(resolve, duration))
}