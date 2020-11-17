import App from '../App'
import {sum} from '../utils'

import {render} from '@testing-library/react'

describe('Test Arj', () => {
    const {getByTestId, getByText} = render(<App />);

    
    it('should render text', () => {
        expect(getByTestId("test-p")).toContainElement(getByText('Teste, testando.'))
    })
    
    test('also should render text', () => {
        expect(sum(2,2)).toBe(4)
    })
})