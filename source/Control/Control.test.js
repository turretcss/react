import React from 'react'
import renderer from 'react-test-renderer'

import { Checkbox, Radio, Switch } from './Control'

describe('Control', () => {
  it('renders checkbox', () => {
    const tree = renderer.create(<Checkbox>Hello</Checkbox>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders radio', () => {
    const tree = renderer.create(<Radio>Hello</Radio>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders switch', () => {
    const tree = renderer.create(<Switch>Hello</Switch>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders checkbox (label prop)', () => {
    const tree = renderer.create(<Checkbox label="Hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('prefers children over label prop', () => {
    const tree = renderer.create(<Checkbox label="Ignored">Hello</Checkbox>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders checked checkbox', () => {
    const tree = renderer
      .create(<Checkbox value={true} label="Hello" onChange={value => (response = value)} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders without span.control-label', () => {
    const tree = renderer.create(<Checkbox />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders custom className', () => {
    const tree = renderer.create(<Checkbox className="custom-do-dah" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders disabled', () => {
    const tree = renderer.create(<Checkbox disabled />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders disabled (readOnly prop)', () => {
    const tree = renderer.create(<Checkbox readOnly />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders name prop', () => {
    const tree = renderer.create(<Checkbox name="terms" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders size prop', () => {
    const tree = renderer.create(<Checkbox size="xl" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders size prop (alias)', () => {
    const tree = renderer.create(<Checkbox size="xlarge" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders color prop (indicator)', () => {
    const tree = renderer.create(<Checkbox color="success" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders inline prop', () => {
    const tree = renderer.create(<Checkbox inline />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders reversed prop', () => {
    const tree = renderer.create(<Checkbox reversed />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders complex', () => {
    const tree = renderer
      .create(
        <Checkbox
          value={true}
          onChange={value => {}}
          className="thing"
          color="error"
          size="small"
          name="hello"
          label="Checkbox label"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onChange when input clicked', () => {
    let newValue = null
    const testInstance = renderer.create(<Checkbox onChange={value => (newValue = value)} />).root
    // should execute
    testInstance.findByType('input').props.onClick({ target: { checked: true } })
    // should be ignored
    testInstance.findByType('input').props.onChange({ target: { checked: false } })
    expect(newValue).toEqual(true)
  })
})
