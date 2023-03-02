describe('Pruebas en DemoComponent', ()=> {
    test('Esta prueba no puede fallar', ()=> {
    // 1. Inicializacion
    const message1 = "Hola Mundo";

    // 2. Estímulo
    const message2 = message1.trim();

    // 3. Observar comportamiento
    expect(message1).toBe(message2); 
})})

