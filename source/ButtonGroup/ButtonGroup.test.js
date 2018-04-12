import React from 'react'
import renderer from 'react-test-renderer'
import { renderToStaticMarkup } from 'react-dom/server'

import ButtonGroup from './ButtonGroup'
import Button from '../Button'

describe('ButtonGroup', () => {
  it('renders', () => {
    const result = renderToStaticMarkup(<ButtonGroup />)
    const expected = '<div class="button-group"></div>'
    expect(result).toEqual(expected)
  })

  it('renders block prop', () => {
    const result = renderToStaticMarkup(<ButtonGroup block />)
    const expected = '<div class="button-group button-group-block"></div>'
    expect(result).toEqual(expected)
  })

  it('renders className prop', () => {
    const result = renderToStaticMarkup(<ButtonGroup className="custom" />)
    const expected = '<div class="button-group custom"></div>'
    expect(result).toEqual(expected)
  })

  it('renders children', () => {
    const result = renderToStaticMarkup(
      <ButtonGroup>
        <Button />
      </ButtonGroup>
    )
    const expected = '<div class="button-group"><button type="button"></button></div>'
    expect(result).toEqual(expected)
  })

  it('handles false children', () => {
    const result = renderToStaticMarkup(<ButtonGroup>{false}</ButtonGroup>)
    const expected = '<div class="button-group"></div>'
    expect(result).toEqual(expected)
  })

  it('handles false children alongside non-false children', () => {
    const result = renderToStaticMarkup(
      <ButtonGroup>
        <Button />
        {false}
      </ButtonGroup>
    )
    const expected = '<div class="button-group"><button type="button"></button></div>'
    expect(result).toEqual(expected)
  })

  it('spreads unknown props to the div', () => {
    const result = renderToStaticMarkup(
      <ButtonGroup data-custom-attr="Yeh">
        <Button />
      </ButtonGroup>
    )
    const expected = '<div data-custom-attr="Yeh" class="button-group"><button type="button"></button></div>'
    expect(result).toEqual(expected)
  })

  it('assigns button props to the children', () => {
    const tree = renderer
      .create(
        <ButtonGroup color="primary" size="s" pill square border disabled>
          <Button />
          <Button />
          <Button />
        </ButtonGroup>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('child props take priority over parent props', () => {
    const tree = renderer
      .create(
        <ButtonGroup size="s" color="primary" disabled>
          <Button />
          <Button size="l" color="secondary" disabled={false} />
          <Button />
        </ButtonGroup>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
