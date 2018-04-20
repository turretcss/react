import React from 'react'
import renderer from 'react-test-renderer'
import { renderToStaticMarkup } from 'react-dom/server'

import Select from './Select'

const options = [
  {
    value: 's',
    label: 'Small',
  },
  {
    value: 'm',
    label: 'Medium',
  },
  {
    value: 'l',
    label: 'Large',
  },
]

describe('Select', () => {
  it('renders', () => {
    const tree = renderer.create(<Select />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders array of options', () => {
    const tree = renderer.create(<Select options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders array of options with "Small" option selected', () => {
    const tree = renderer.create(<Select value="s" options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders custom empty option label', () => {
    const tree = renderer.create(<Select empty="All" options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders without empty option', () => {
    const tree = renderer.create(<Select empty={false} options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('spreads option attributes to options', () => {
    const options = [
      {
        value: 'one',
        label: 'One',
        disabled: true,
        'data-custom': 'yep',
      },
    ]
    const tree = renderer.create(<Select empty={false} options={options} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders children if specified', () => {
    const tree = renderer
      .create(
        <Select>
          <optgroup label="Group 1">
            <option value="1.1">Item 1.1</option>
            <option value="1.2">Item 1.2</option>
            <option value="1.3">Item 1.3</option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="2.1">Item 2.1</option>
            <option value="2.2">Item 2.2</option>
            <option value="2.3">Item 2.3</option>
          </optgroup>
        </Select>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('spreads unknown props to select', () => {
    const tree = renderer.create(<Select name="thing" data-custom="on-select" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onChange when select changed', () => {
    let newValue = null
    const testInstance = renderer.create(<Select onChange={value => (newValue = value)} options={options} />).root
    testInstance.findByType('select').props.onChange({ target: { value: 's' } })
    expect(newValue).toEqual('s')
  })

  it('does not call onChange when readOnly', () => {
    let newValue = null
    const testInstance = renderer.create(<Select onChange={value => (newValue = value)} readOnly options={options} />)
      .root
    testInstance.findByType('select').props.onChange({ target: { value: 's' } })
    expect(newValue).toEqual(null)
  })

  it('respects value type when calling onChange', () => {
    let newValue = null
    const options = [{ value: 1, label: 'One' }]
    const testInstance = renderer.create(<Select onChange={value => (newValue = value)} options={options} />).root
    testInstance.findByType('select').props.onChange({ target: { value: '1' } })
    expect(newValue).toEqual(1)
  })

  it('converts empty string to null when calling onChange', () => {
    let newValue = false
    const options = [{ value: 1, label: 'One' }]
    const testInstance = renderer.create(<Select onChange={value => (newValue = value)} options={options} />).root
    testInstance.findByType('select').props.onChange({ target: { value: '' } })
    expect(newValue).toEqual(null)
  })

  it('does not respects value type when calling onChange if children supplied', () => {
    let newValue = null
    const testInstance = renderer.create(
      <Select onChange={value => (newValue = value)}>
        <option value={1}>One</option>
      </Select>
    ).root
    testInstance.findByType('select').props.onChange({ target: { value: '1' } })
    expect(newValue).toEqual('1')
  })
})
