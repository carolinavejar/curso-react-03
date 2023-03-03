/**
* @jest-environment jsdom
*/

import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en First App', ()=> {
    test('Debe hacer tach con el snapshot', ()=> {
        const title = "Titulo ...";
        render(< FirstApp title= {title} />)
    });


})