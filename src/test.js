function* generatorFunction() {
    for(let i = 0; i < 5; i++) {
        yield i
    }
}

const iter = generatorFunction()

iter.next()