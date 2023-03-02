import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', ()=> {

    test('getHeroeById debe retornar heroe por ID', ()=> {
        const id = 1;
        const hero = getHeroeById(id);
        expect (hero).toEqual({id: 1, name: "Batman", owner: "DC"})
    });

    test('getHeroeById debe undefined si no existe', ()=> {
        const id = 100;
        const hero = getHeroeById(id);
        expect (hero).toBeFalsy();
    });

    test('getHeroesByOwner debe ser undefined si no existe', ()=> {
        const owner = "DC";
        const heros = getHeroesByOwner(owner);
        expect (heros.length).toBe(3);
        expect (heros).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]
      );
    });

    test('getHeroesByOwner debe retornar arreglo con heroes marvel', ()=> {
        const owner = "Marvel";
        const heros = getHeroesByOwner(owner);
        expect(heros).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]
    )
        expect (heros.length).toBe(2);
    });
})
