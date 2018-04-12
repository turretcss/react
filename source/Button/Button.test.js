import React from 'react'
import renderer from 'react-test-renderer'
import { renderToStaticMarkup } from 'react-dom/server'

import Button, { ButtonLink } from './Button'

describe('Button', () => {
  it('renders', () => {
    const result = renderToStaticMarkup(<Button>Hello</Button>)
    const expected = '<button type="button">Hello</button>'
    expect(result).toEqual(expected)
  })

  it('renders with text prop', () => {
    const result = renderToStaticMarkup(<Button text="Hello" />)
    const expected = '<button type="button">Hello</button>'
    expect(result).toEqual(expected)
  })

  it('prefers children over text prop', () => {
    const result = renderToStaticMarkup(<Button text="Ignored">Hello</Button>)
    const expected = '<button type="button">Hello</button>'
    expect(result).toEqual(expected)
  })

  it('renders type prop', () => {
    const result = renderToStaticMarkup(<Button type="submit" text="Submit" />)
    const expected = '<button type="submit">Submit</button>'
    expect(result).toEqual(expected)
  })

  it('renders size prop', () => {
    const result = renderToStaticMarkup(<Button size="l" />)
    const expected = '<button type="button" class="button-l"></button>'
    expect(result).toEqual(expected)
  })

  it('renders size prop (alias)', () => {
    const result = renderToStaticMarkup(<Button size="large" />)
    const expected = '<button type="button" class="button-l"></button>'
    expect(result).toEqual(expected)
  })

  it('renders color prop (palette)', () => {
    const result = renderToStaticMarkup(<Button color="secondary" />)
    const expected = '<button type="button" class="button-secondary"></button>'
    expect(result).toEqual(expected)
  })

  it('renders color prop (indicator)', () => {
    const result = renderToStaticMarkup(<Button color="error" />)
    const expected = '<button type="button" class="error"></button>'
    expect(result).toEqual(expected)
  })

  it('renders block prop', () => {
    const result = renderToStaticMarkup(<Button block />)
    const expected = '<button type="button" class="button-block"></button>'
    expect(result).toEqual(expected)
  })

  it('renders border prop', () => {
    const result = renderToStaticMarkup(<Button border />)
    const expected = '<button type="button" class="button-border"></button>'
    expect(result).toEqual(expected)
  })

  it('renders pill prop', () => {
    const result = renderToStaticMarkup(<Button pill />)
    const expected = '<button type="button" class="button-pill"></button>'
    expect(result).toEqual(expected)
  })

  it('renders square prop', () => {
    const result = renderToStaticMarkup(<Button square />)
    const expected = '<button type="button" class="button-square"></button>'
    expect(result).toEqual(expected)
  })

  it('renders spinner prop', () => {
    const result = renderToStaticMarkup(<Button spinner />)
    const expected = '<button type="button" class="spinner"></button>'
    expect(result).toEqual(expected)
  })

  it('renders className prop', () => {
    const result = renderToStaticMarkup(<Button className="custom-do-dah" />)
    const expected = '<button type="button" class="custom-do-dah"></button>'
    expect(result).toEqual(expected)
  })

  it('spreads additional props', () => {
    const result = renderToStaticMarkup(<Button data-name="Adam" style={{ margin: 'auto' }} />)
    const expected = '<button data-name="Adam" style="margin:auto" type="button"></button>'
    expect(result).toEqual(expected)
  })

  it('renders complex button', () => {
    const tree = renderer
      .create(
        <Button
          type="submit"
          className="custom-do-dah"
          aria-role="button"
          color="primary"
          size="xs"
          block
          border
          onClick={event => {}}>
          Hello
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('ButtonLink', () => {
  it('renders anchor tag', () => {
    const result = renderToStaticMarkup(<ButtonLink href="http://turretcss.com">Hello</ButtonLink>)
    const expected = '<a href="http://turretcss.com" class="button">Hello</a>'
    expect(result).toEqual(expected)
  })

  it('renders complex anchor', () => {
    const tree = renderer
      .create(
        <ButtonLink
          href="http://turretcss.com"
          target="_blank"
          className="custom-do-dah"
          aria-role="button"
          color="primary"
          size="xs"
          block
          border
          onClick={() => {}}>
          Hello
        </ButtonLink>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
