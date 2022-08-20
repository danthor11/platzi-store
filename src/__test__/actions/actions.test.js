/**
 * @jest-environment jsdom
*/

import actions from "../../actions/"
import ProductMock from "../../__mocks__/ProductMock.js"

describe('Actions', () => {
    test('addToCart Action', () => {
        const payload = ProductMock
        const expeted = {
            type:"ADD_TO_CART",
            payload
        }

        expect(actions.addToCart(payload)).toEqual(expeted)
    });

    test('RemoveFromCartAction', () => {
        const payload = ProductMock
        const expeted = {
            type:"REMOVE_FROM_CART",
            payload
        }

        expect(actions.removeFromCart(payload)).toEqual(expeted)

    });
    
    
});
