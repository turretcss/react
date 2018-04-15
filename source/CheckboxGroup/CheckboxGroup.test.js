import React from 'react'
import renderer from 'react-test-renderer'
import { renderToStaticMarkup } from 'react-dom/server'

import CheckboxGroup from './CheckboxGroup'

const options = [
  {
    value: 's',
    text: 'Small',
  },
  {
    value: 'm',
    text: 'Medium',
  },
  {
    value: 'l',
    text: 'Large',
  },
]

describe('CheckboxGroup', () => {
  it('renders nothing if no options supplied', () => {
    const result = renderToStaticMarkup(<CheckboxGroup />)
    const expected = ''
    expect(result).toEqual(expected)
  })

  it('renders array of checkboxes', () => {
    const tree = renderer.create(<CheckboxGroup options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders array of checkboxes with "Small" option checked', () => {
    const tree = renderer.create(<CheckboxGroup value={['s']} options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders array of checkboxes with "Small" and "Large" option checked', () => {
    const tree = renderer.create(<CheckboxGroup value={['s', 'l']} options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('passes unknown props down to checkboxes', () => {
    const tree = renderer
      .create(<CheckboxGroup options={options} name="custom-name" size="xs" disabled color="error" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onChange when checkbox clicked', () => {
    let newValue = null
    const testInstance = renderer.create(<CheckboxGroup onChange={value => (newValue = value)} options={options} />)
      .root
    // click checkbox with value "s"
    testInstance.findAllByType('input')[0].props.onClick({ target: { checked: true } })
    expect(newValue).toEqual(['s'])
  })

  it('toggles value in array when checkbox clicked', () => {
    let newValue = null
    const testInstance = renderer.create(
      <CheckboxGroup value={['s', 'm']} onChange={value => (newValue = value)} options={options} />
    ).root
    // click checkbox with value "s"
    testInstance.findAllByType('input')[0].props.onClick({ target: { checked: false } })
    expect(newValue).toEqual(['m'])
  })

  it('ignores unknown values (ie. not in options list) when clicking checkbox', () => {
    let newValue = null
    const testInstance = renderer.create(
      <CheckboxGroup value={['unknown']} onChange={value => (newValue = value)} options={options} />
    ).root
    // click checkbox with value "s"
    testInstance.findAllByType('input')[0].props.onClick({ target: { checked: true } })
    expect(newValue).toEqual(['s'])
  })
})
