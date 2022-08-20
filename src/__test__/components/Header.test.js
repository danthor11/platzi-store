/**
 * @jest-environment jsdom
*/

import React from "react"
import { shallow , mount} from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock"
import Header from "../../components/Header";
import { create } from "react-test-renderer";


const header = shallow(
    <ProviderMock>
        <Header/>
    </ProviderMock>
)

describe('<Header/>', () => {
    test('Render del componente', () => { 
        expect(header.length).toEqual(1)
    })
    test('Render del titulo', () => { 
        const header2 = mount(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )
        expect(header2.find(".Header-title")?.text()).toEqual("Platzi Store")
    })

});


describe('Header SnapShot', () => { 
    test('Comprobar el snapshot de Header', () => {
        const header2 = create(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )        
        expect(header2.toJSON()).toMatchSnapshot()
    });

})