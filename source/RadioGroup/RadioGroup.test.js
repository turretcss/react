import React from 'react'
import renderer from 'react-test-renderer'
import { renderToStaticMarkup } from 'react-dom/server'

import RadioGroup from './RadioGroup'

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

describe('RadioGroup', () => {
  it('renders nothing if no options supplied', () => {
    const result = renderToStaticMarkup(<RadioGroup />)
    const expected = ''
    expect(result).toEqual(expected)
  })

  it('renders array of radios', () => {
    const tree = renderer.create(<RadioGroup options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders array of radios with "Small" option selected', () => {
    const tree = renderer.create(<RadioGroup value="s" options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders custom name prop', () => {
    const tree = renderer.create(<RadioGroup name="custom-name" options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('passes unknown props down to radios', () => {
    const tree = renderer.create(<RadioGroup options={options} size="xs" disabled color="error" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('spreads option attributes to radios', () => {
    const options = [
      {
        value: 'one',
        label: 'One',
        color: 'success',
      },
    ]
    const tree = renderer.create(<RadioGroup options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onChange when input clicked', () => {
    let newValue = null
    const testInstance = renderer.create(<RadioGroup onChange={value => (newValue = value)} options={options} />).root
    // click radio with value "s"
    testInstance.findAllByType('input')[1].props.onClick({ target: { checked: true } })
    expect(newValue).toEqual('s')
  })
})
