/**
* @jest-environment jsdom
*/
import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en Counter App', ()=> {
    test('Debe hacer match con el snapshot', ()=> {
        const { container } = render(< CounterApp value= {100} />);

        expect (container).toMatchSnapshot();
    });

    test('Debe mostrar el valor enviado por props', ()=> {
        const value = 100;
        render(
        < CounterApp value = { value } />);

        expect (screen.getByText(100)).toBeTruthy();
        // expect( screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')
    });


})