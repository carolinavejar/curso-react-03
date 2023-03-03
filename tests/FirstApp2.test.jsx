/**
* @jest-environment jsdom
*/

import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en First App', ()=> {
    const title = "Titulo ...";
    test('Debe hacer match con el snapshot', ()=> {
        const { container } = render(< FirstApp title= {title} />);

        expect (container).toMatchSnapshot();
    });

    test('Debe mostrar titulo: Titulo ...', ()=> {
        render(< FirstApp title= {title} />);

        expect (screen.getByText(title)).toBeTruthy();
    });

    test('Debe mostrar el titulo en un h1', ()=> {
        render(< FirstApp title= {title} />);

        expect (screen.getByRole('heading', 
        { level: 1}).innerHTML).toContain

    });

    test('Debe mostrar el subtitulo enviado por props', ()=> {
        const subtitle = "Subtitulo";
        render(
        < FirstApp title= {title} subTitle={subtitle} />);

        expect (screen.getAllByText(subtitle).length).toBe(1);

    });


})