/**
* @jest-environment jsdom
*/

import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en First App', ()=> {
    test('Debe hacer tach con el snapshot', ()=> {
        const title = "Titulo ...";
        const { container } = render(< FirstApp title= {title} />);

        expect (container).toMatchSnapshot();
    });

    test('Debe mostrar titulo en h1', ()=> {
        const title = "Titulo ...";
        const { container, getByText } = render(< FirstApp title= {title} />);

        expect (getByText(title)).toBeTruthy();

        const h2 = container.querySelector('h2');
        expect (h2.innerHTML).toContain(title);
    });


})