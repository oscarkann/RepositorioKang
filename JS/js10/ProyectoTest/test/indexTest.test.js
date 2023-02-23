//prueba efectiva
//const indexTest = require ("../calculadora") //EXPORTA - me trae el artefacto de puebra
import { indexTest } from "../calculadora"; //ecma6
test('test suma', () => {
    const r = indexTest.suma(20,2);
    expect (r).toBe(22);
})

test.todo('test resta');
test.todo('test multi');
test.todo('test divi');