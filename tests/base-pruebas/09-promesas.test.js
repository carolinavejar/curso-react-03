import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-Promesas', ()=> {

    test('getHeroeByIdAsync debe retornar un heroe', (done)=> {
        const id = 1;
        getHeroeByIdAsync(id).then( hero => {

            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },)
            done();
        })
    });

    test('getHeroeByIdAsync debe obtener error si el heroe no exite', (done)=> {
        const id = 1000;
        getHeroeByIdAsync(id).catch( err => {
            expect(err).toEqual('No se pudo encontrar el héroe ' + id )
            done();
        })
    });
})