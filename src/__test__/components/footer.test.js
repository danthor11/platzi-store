/**
 * @jest-environment jsdom
*/
import React from "react"
import { mount } from "enzyme"
import Footer from "../../components/Footer"
import {create} from "react-test-renderer"
const footer = mount(<Footer/>)

describe('<Footer/>', () => {
    test('Render del component footer', () => {
        
        expect(footer.length).toEqual(1)

    });
    test('Render del titulo', () => {
        expect(footer.find(".Footer-title").text()).toEqual("Platzi Store")
    }); 
    
    
});

describe('Footer SnapShot', () => {
    test('Comprobar UI del Footer', () => { 
        const footer = create(<Footer/>)
        expect(footer.toJSON()).toMatchSnapshot()
    })
});
