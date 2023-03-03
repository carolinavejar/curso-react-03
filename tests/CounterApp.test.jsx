/**
* @jest-environment jsdom
*/
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

const initialValue = 100;

describe('Pruebas en Counter App', ()=> {
    test('Debe hacer match con el snapshot', ()=> {
        const { container } = render(< CounterApp value= {100} />);

        expect (container).toMatchSnapshot();
    });

    test('Debe mostrar el valor enviado por props', ()=> {
        
        render(
        < CounterApp value = { initialValue } />);

        expect (screen.getByText(100)).toBeTruthy();
        // expect( screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')
    });

    test('Debe incrementar con el botón +1', ()=> {
        render(< CounterApp value = { initialValue } />);
        
        fireEvent.click( screen.getByText("+1") );
        expect(screen.getByText("101")).toBeTruthy();
    });

    test('Debe decrementar con el botón -1', ()=> {
        render(< CounterApp value = { initialValue } />);
        
        fireEvent.click( screen.getByText("-1") );
        expect(screen.getByText("99")).toBeTruthy();
    });

    test('Debe funcionar el botón Reset', ()=> {
        render(< CounterApp value = { initialValue } />);
        fireEvent.click( screen.getByText("+1") );
        fireEvent.click( screen.getByText("+1") );
        fireEvent.click( screen.getByText("+1") );
        
        // fireEvent.click( screen.getByText("Reset") );
        fireEvent.click( screen.getByRole("button", {name: "btn-reset"}));
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
})