import React from 'react'
import renderer from 'react-test-renderer'
import { renderToStaticMarkup } from 'react-dom/server'

import RadioButtonGroup from './RadioButtonGroup'

const options = [
  {
    value: null,
    label: 'Auto',
  },
  {
    value: 's',
    label: 'Small',
  },
  {
    value: 'l',
    label: 'Large',
  },
]

describe('RadioButtonGroup', () => {
  it('renders', () => {
    const result = renderToStaticMarkup(<RadioButtonGroup />)
    const expected = '<div class="button-group"></div>'
    expect(result).toEqual(expected)
  })

  it('renders block prop', () => {
    const result = renderToStaticMarkup(<RadioButtonGroup block />)
    const expected = '<div class="button-group button-group-block"></div>'
    expect(result).toEqual(expected)
  })

  it('renders className prop', () => {
    const result = renderToStaticMarkup(<RadioButtonGroup className="custom" />)
    const expected = '<div class="button-group custom"></div>'
    expect(result).toEqual(expected)
  })

  it('renders options as buttons with "Auto" option selected (button-primary)', () => {
    const tree = renderer.create(<RadioButtonGroup options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders options as buttons with "Small" option selected (button-primary)', () => {
    const tree = renderer.create(<RadioButtonGroup value="s" options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('passes button props down to children buttons', () => {
    const tree = renderer.create(<RadioButtonGroup options={options} size="xs" disabled pill square border />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('spreads option attributes to buttons', () => {
    const options = [
      {
        value: 'one',
        label: 'One',
        color: 'success',
      },
    ]
    const tree = renderer.create(<RadioButtonGroup options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders color and activeColor props', () => {
    const tree = renderer
      .create(<RadioButtonGroup options={options} color="primary" activeColor="secondary" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onChange when input clicked', () => {
    let newValue = null
    const testInstance = renderer.create(<RadioButtonGroup onChange={value => (newValue = value)} options={options} />)
      .root
    // click button with value "s"
    testInstance.findAllByType('button')[1].props.onClick()
    expect(newValue).toEqual('s')
  })
})
