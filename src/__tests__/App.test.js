import App from '../App'
import {sum} from '../utils'

import {fireEvent, render} from '@testing-library/react'

describe('Test component App', () => {
    it('should be able to add new item', () => {
        const {getByTestId, getByText, getByLabelText} = render(<App />);

        //debug();

        fireEvent.change(getByLabelText('List'), { target: { value: 'Item 01' } } );
        fireEvent.submit(getByTestId('list-form'));

        //debug();

        expect(getByTestId("test-p")).toContainElement(getByText('List Title'))
        expect(getByTestId("item-list")).toContainElement(getByText('Item 01'))
        expect(getByLabelText('List')).toHaveValue('');
    })
    
    test('also should render 4', () => {
        expect(sum(2,2)).toBe(4)
    })
})