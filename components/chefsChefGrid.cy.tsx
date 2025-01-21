import React from 'react'
import ChefGrid from './chefs'

describe('<ChefGrid />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ChefGrid />)
  })
})