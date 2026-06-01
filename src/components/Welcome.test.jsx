import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Welcome from './Welcome'

test('показывает приветствие с именем', () => {
 render(<Welcome name="Алия" />)

 expect(screen.getByText('Привет, Алия!')).toBeInTheDocument()
})
