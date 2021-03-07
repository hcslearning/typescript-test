const obj = require('../dist/util.js')

test("Sumar 1 + 2", () => {
    expect( obj.sumar(1, 2) ).toBe( 3 )
})

test("Sumar 13 + 87", () => {
    expect( obj.sumar(13, 87) ).toBe( 100 )
})

test("Restar 13 + 8", () => {
    expect( obj.restar(13, 8) ).toBe( 5 )
})

