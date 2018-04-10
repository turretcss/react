import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { host } from 'storybook-host'
import range from 'lodash/range'

import {
  Button,
  ButtonLink,
  ButtonGroup,
  RadioGroup,
  RadioButtonGroup,
  CheckboxGroup,
  Radio,
  Switch,
  Checkbox,
} from '../src/'

import Wrap from './components/Wrap'
import Stateful from './components/Stateful'

import './turretcss.min.css'
// import '../../turretcss/docs/dist/docs.css'
// import 'turretcss/dist/turretcss.min.css'
import './storybook.css'

const ButtonComponent = Button

const Buttons = ({ Button = ButtonComponent, ...props }) => (
  <div className="margin-l">
    <h3>Button Sizes</h3>
    <Wrap>
      <Button size="xl" onClick={action('onClick')} text="Extra Large" {...props} />
      <Button size="l" onClick={action('onClick')} text="Large" {...props} />
      <Button onClick={action('onClick')} text="Medium" {...props} />
      <Button size="s" onClick={action('onClick')} text="Small" {...props} />
      <Button size="xs" onClick={action('onClick')} text="Extra Small" {...props} />
    </Wrap>
    <Wrap>
      <Button disabled size="xl" onClick={action('onClick')} text="Extra Large" {...props} />
      <Button disabled size="l" onClick={action('onClick')} text="Large" {...props} />
      <Button disabled onClick={action('onClick')} text="Medium" {...props} />
      <Button disabled size="s" onClick={action('onClick')} text="Small" {...props} />
      <Button disabled size="xs" onClick={action('onClick')} text="Extra Small" {...props} />
    </Wrap>
    <h3>Button Shades</h3>
    <Wrap>
      <Button color="white" onClick={action('onClick')} text="White" {...props} />
      <Button color="light" onClick={action('onClick')} text="Light" {...props} />
      <Button color="grey" onClick={action('onClick')} text="Grey" {...props} />
      <Button color="dark" onClick={action('onClick')} text="Dark" {...props} />
      <Button color="black" onClick={action('onClick')} text="Black" {...props} />
      <Button border color="white" onClick={action('onClick')} text="White" {...props} />
      <Button border color="light" onClick={action('onClick')} text="Light" {...props} />
      <Button border color="grey" onClick={action('onClick')} text="Grey" {...props} />
      <Button border color="dark" onClick={action('onClick')} text="Dark" {...props} />
      <Button border color="black" onClick={action('onClick')} text="Black" {...props} />
    </Wrap>
    <Wrap>
      <Button disabled color="white" onClick={action('onClick')} text="White" {...props} />
      <Button disabled color="light" onClick={action('onClick')} text="Light" {...props} />
      <Button disabled color="grey" onClick={action('onClick')} text="Grey" {...props} />
      <Button disabled color="dark" onClick={action('onClick')} text="Dark" {...props} />
      <Button disabled color="black" onClick={action('onClick')} text="Black" {...props} />
      <Button border disabled color="white" onClick={action('onClick')} text="White" {...props} />
      <Button border disabled color="light" onClick={action('onClick')} text="Light" {...props} />
      <Button border disabled color="grey" onClick={action('onClick')} text="Grey" {...props} />
      <Button border disabled color="dark" onClick={action('onClick')} text="Dark" {...props} />
      <Button border disabled color="black" onClick={action('onClick')} text="Black" {...props} />
    </Wrap>
    <h3>Button Palettes</h3>
    <Wrap>
      <Button color="primary" onClick={action('onClick')} text="Primary" {...props} />
      <Button color="secondary" onClick={action('onClick')} text="Secondary" {...props} />
      <Button color="tertiary" onClick={action('onClick')} text="Tertiary" {...props} />
      <Button border color="primary" onClick={action('onClick')} text="Primary" {...props} />
      <Button border color="secondary" onClick={action('onClick')} text="Secondary" {...props} />
      <Button border color="tertiary" onClick={action('onClick')} text="Tertiary" {...props} />
    </Wrap>
    <Wrap>
      <Button disabled color="primary" onClick={action('onClick')} text="Primary" {...props} />
      <Button disabled color="secondary" onClick={action('onClick')} text="Secondary" {...props} />
      <Button disabled color="tertiary" onClick={action('onClick')} text="Tertiary" {...props} />
      <Button border disabled color="primary" onClick={action('onClick')} text="Primary" {...props} />
      <Button border disabled color="secondary" onClick={action('onClick')} text="Secondary" {...props} />
      <Button border disabled color="tertiary" onClick={action('onClick')} text="Tertiary" {...props} />
    </Wrap>
    <h3>Button Indicators</h3>
    <Wrap>
      <Button color="error" onClick={action('onClick')} text="Error" {...props} />
      <Button color="warning" onClick={action('onClick')} text="Warning" {...props} />
      <Button color="success" onClick={action('onClick')} text="Success" {...props} />
      <Button color="info" onClick={action('onClick')} text="Info" {...props} />
      <Button border color="error" onClick={action('onClick')} text="Error" {...props} />
      <Button border color="warning" onClick={action('onClick')} text="Warning" {...props} />
      <Button border color="success" onClick={action('onClick')} text="Success" {...props} />
      <Button border color="info" onClick={action('onClick')} text="Info" {...props} />
    </Wrap>
    <Wrap>
      <Button disabled color="error" onClick={action('onClick')} text="Error" {...props} />
      <Button disabled color="warning" onClick={action('onClick')} text="Warning" {...props} />
      <Button disabled color="success" onClick={action('onClick')} text="Success" {...props} />
      <Button disabled color="info" onClick={action('onClick')} text="Info" {...props} />
      <Button border disabled color="error" onClick={action('onClick')} text="Error" {...props} />
      <Button border disabled color="warning" onClick={action('onClick')} text="Warning" {...props} />
      <Button border disabled color="success" onClick={action('onClick')} text="Success" {...props} />
      <Button border disabled color="info" onClick={action('onClick')} text="Info" {...props} />
    </Wrap>
  </div>
)

const createButtons = (Button, text, buttonProps) =>
  range(0, 5).map(i => <Button key={i} onClick={action('clicked')} text={text} {...buttonProps} />)

const ButtonGroups = ({ Button = ButtonComponent, buttonProps = {}, ...props }) => (
  <div className="margin-l">
    <h3>Button Group Sizes</h3>

    <ButtonGroup className="margin-vertical-m" size="xl" {...props}>
      {createButtons(Button, 'Extra Large', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" size="l" {...props}>
      {createButtons(Button, 'Large', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" {...props}>
      {createButtons(Button, 'Medium', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" size="s" {...props}>
      {createButtons(Button, 'Small', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" size="xs" {...props}>
      {createButtons(Button, 'Extra Small', buttonProps)}
    </ButtonGroup>

    <h3>Button Group Shades</h3>
    <ButtonGroup className="margin-vertical-m" color="white" {...props}>
      {createButtons(Button, 'White', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="light" {...props}>
      {createButtons(Button, 'Light', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="grey" {...props}>
      {createButtons(Button, 'Grey', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="dark" {...props}>
      {createButtons(Button, 'Dark', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="black" {...props}>
      {createButtons(Button, 'Black', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="white" border {...props}>
      {createButtons(Button, 'White', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="light" border {...props}>
      {createButtons(Button, 'Light', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="grey" border {...props}>
      {createButtons(Button, 'Grey', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="dark" border {...props}>
      {createButtons(Button, 'Dark', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="black" border {...props}>
      {createButtons(Button, 'Black', buttonProps)}
    </ButtonGroup>

    <h3>Button Group Palettes</h3>
    <ButtonGroup className="margin-vertical-m" color="primary" {...props}>
      {createButtons(Button, 'Primary', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="secondary" {...props}>
      {createButtons(Button, 'Secondary', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="tertiary" {...props}>
      {createButtons(Button, 'Tertiary', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="primary" border {...props}>
      {createButtons(Button, 'Primary', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="secondary" border {...props}>
      {createButtons(Button, 'Secondary', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="tertiary" border {...props}>
      {createButtons(Button, 'Tertiary', buttonProps)}
    </ButtonGroup>

    <h3>Button Group Indicators</h3>
    <ButtonGroup className="margin-vertical-m" color="error" {...props}>
      {createButtons(Button, 'Error', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="warning" {...props}>
      {createButtons(Button, 'Warning', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="success" {...props}>
      {createButtons(Button, 'Success', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="info" {...props}>
      {createButtons(Button, 'Info', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="error" border {...props}>
      {createButtons(Button, 'Error', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="warning" border {...props}>
      {createButtons(Button, 'Warning', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="success" border {...props}>
      {createButtons(Button, 'Success', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" color="info" border {...props}>
      {createButtons(Button, 'Info', buttonProps)}
    </ButtonGroup>
  </div>
)
const Anchor = props => <ButtonLink href="http://turretcss.com/" target="_blank" {...props} />

storiesOf('Button', module)
  .add('default', () => <Buttons />)
  .add('anchors', () => <Buttons Button={Anchor} />)
  .add('spinner', () => <Buttons spinner />)
  .add('pill', () => <Buttons pill />)
  .add('block', () => <Buttons block />)
  .add('square', () => <Buttons square />)
  .add('square pill', () => <Buttons square pill />)
  .add('block pill', () => <Buttons block pill />)
  .add('anchors square pill', () => <Buttons Button={Anchor} square pill />)

storiesOf('ButtonGroup', module)
  .add('default', () => <ButtonGroups />)
  .add('anchors', () => <ButtonGroups Button={Anchor} />)
  .add('pill', () => <ButtonGroups pill />)
  .add('block', () => <ButtonGroups block />)
  .add('square', () => <ButtonGroups square />)
  .add('square pill', () => <ButtonGroups square pill />)
  .add('block pill', () => <ButtonGroups block pill />)
  .add('anchors square pill', () => <ButtonGroups Button={Anchor} square pill />)

const options = [
  {
    value: 'one',
    text: 'One',
  },
  {
    value: 'two',
    text: 'Two',
  },
  {
    value: 'three',
    text: 'Three',
  },
  {
    value: 'four',
    text: 'Four',
  },
  {
    value: 'five',
    text: 'Five',
  },
]

const RadioButtonGroups = props => (
  <div className="margin-l">
    <h3>Radio Button Group Sizes</h3>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Extra Large' }))}
        size="xl"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Large' }))}
        size="l"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Medium' }))}
        {...props}
      />
    </Stateful>
    <Stateful>
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Small' }))}
        size="s"
        {...props}
      />
    </Stateful>
    <Stateful>
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Extra Small' }))}
        size="xs"
        {...props}
      />
    </Stateful>

    <h3>Radio Button Group Shades</h3>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'White' }))}
        activeColor="white"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Light' }))}
        activeColor="light"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Grey' }))}
        activeColor="grey"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Dark' }))}
        activeColor="dark"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Black' }))}
        activeColor="black"
        {...props}
      />
    </Stateful>

    <h3>Radio Button Group Palettes</h3>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Primary' }))}
        activeColor="primary"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Secondary' }))}
        activeColor="secondary"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Tertiary' }))}
        activeColor="tertiary"
        {...props}
      />
    </Stateful>

    <h3>Radio Button Group Indicators</h3>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Error' }))}
        activeColor="error"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Warning' }))}
        activeColor="warning"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Info' }))}
        activeColor="info"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, text: 'Success' }))}
        activeColor="success"
        {...props}
      />
    </Stateful>

    <h3>Radio Button Group Experimental</h3>
    <Stateful initial="three">
      <RadioButtonGroup className="margin-vertical-m" options={options} color="success" activeColor="info" {...props} />
    </Stateful>
    <Stateful initial="three">
      <RadioButtonGroup className="margin-vertical-m" options={options} color="grey" activeColor="black" {...props} />
    </Stateful>
  </div>
)

storiesOf('RadioButtonGroup', module)
  .add('default', () => <RadioButtonGroups />)
  .add('pill', () => <RadioButtonGroups pill />)
  .add('block', () => <RadioButtonGroups block />)
  .add('square', () => <RadioButtonGroups square />)
  .add('square pill', () => <RadioButtonGroups square pill />)
  .add('block pill', () => <RadioButtonGroups block pill />)

const Controls = ({ Component, componentName, ...props }) => (
  <div
    style={{
      maxWidth: props.inline ? '30rem' : '15rem',
    }}>
    <Stateful initial={true}>
      <Component text={componentName} {...props} />
    </Stateful>
    <Stateful>
      <Component text={`${componentName} with a very long label that must wrap over multiple lines`} {...props} />
    </Stateful>
    <Stateful>
      <Component
        text={
          <span>
            {componentName} with a{' '}
            <a href="http://turretcss.com" target="_blank">
              link
            </a>
          </span>
        }
        {...props}
      />
    </Stateful>
    <Stateful>
      <Component text="Four" {...props} />
    </Stateful>
    <Stateful>
      <Component text="Five" {...props} />
    </Stateful>
    <Stateful>
      <Component text="Six" {...props} />
    </Stateful>
    <h3>{componentName} Sizes</h3>

    <Stateful initial={true}>
      <Component text="Extra Large" size="xl" {...props} />
    </Stateful>
    <Stateful>
      <Component text="Large" size="l" {...props} />
    </Stateful>
    <Stateful>
      <Component text="Medium" {...props} />
    </Stateful>
    <Stateful>
      <Component text="Small" size="s" {...props} />
    </Stateful>
    <Stateful>
      <Component text="Extra Small" size="xs" {...props} />
    </Stateful>

    <h3>{componentName} Indicators</h3>

    <Stateful initial={true}>
      <Component color="error" text="Error" {...props} />
    </Stateful>
    <Stateful initial={true}>
      <Component color="warning" text="Warning" {...props} />
    </Stateful>
    <Stateful initial={true}>
      <Component color="info" text="Info" {...props} />
    </Stateful>
    <Stateful initial={true}>
      <Component color="success" text="Success" {...props} />
    </Stateful>
  </div>
)

storiesOf('Switch', module)
  .addDecorator(
    host({
      align: 'center',
    })
  )
  .add('default', () => <Controls Component={Switch} componentName="Switch" />)
  .add('reversed', () => <Controls Component={Switch} componentName="Switch" reversed />)
  .add('inline', () => <Controls Component={Switch} componentName="Switch" inline />)
  .add('inline reversed', () => <Controls Component={Switch} componentName="Switch" inline reversed />)

storiesOf('Checkbox', module)
  .addDecorator(
    host({
      align: 'center',
    })
  )
  .add('default', () => <Controls Component={Checkbox} componentName="Checkbox" />)
  .add('reversed', () => <Controls Component={Checkbox} componentName="Checkbox" reversed />)
  .add('inline', () => <Controls Component={Checkbox} componentName="Checkbox" inline />)
  .add('inline reversed', () => <Controls Component={Checkbox} componentName="Checkbox" inline reversed />)

const CheckboxGroups = props => (
  <div
    style={{
      maxWidth: props.inline ? '30rem' : '15rem',
    }}>
    <Stateful initial={['one']}>
      <CheckboxGroup options={options} {...props} />
    </Stateful>

    <h3>Checkbox Group Sizes</h3>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, text: 'Extra Large' }))} size="xl" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, text: 'Large' }))} size="l" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, text: 'Medium' }))} {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, text: 'Small' }))} size="s" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, text: 'Extra Small' }))} size="xs" {...props} />
      </Stateful>
    </div>

    <h3>Checkbox Group Indicators</h3>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, text: 'Error' }))} color="error" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, text: 'Warning' }))} color="warning" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, text: 'Info' }))} color="info" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, text: 'Success' }))} color="success" {...props} />
      </Stateful>
    </div>
  </div>
)

storiesOf('CheckboxGroup', module)
  .addDecorator(
    host({
      align: 'center',
    })
  )
  .add('default', () => <CheckboxGroups />)
  .add('reversed', () => <CheckboxGroups reversed />)
  .add('inline', () => <CheckboxGroups inline />)
  .add('inline reversed', () => <CheckboxGroups inline reversed />)

storiesOf('Radio', module)
  .addDecorator(
    host({
      align: 'center',
    })
  )
  .add('default', () => <Controls Component={Radio} componentName="Radio" />)
  .add('reversed', () => <Controls Component={Radio} componentName="Radio" reversed />)
  .add('inline', () => <Controls Component={Radio} componentName="Radio" inline />)
  .add('inline reversed', () => <Controls Component={Radio} componentName="Radio" inline reversed />)

const RadioGroups = props => (
  <div
    style={{
      maxWidth: props.inline ? '30rem' : '15rem',
    }}>
    <Stateful initial="one">
      <RadioGroup options={options} {...props} />
    </Stateful>

    <h3>Radio Group Sizes</h3>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, text: 'Extra Large' }))} size="xl" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, text: 'Large' }))} size="l" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, text: 'Medium' }))} {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, text: 'Small' }))} size="s" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, text: 'Extra Small' }))} size="xs" {...props} />
      </Stateful>
    </div>

    <h3>Radio Group Indicators</h3>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, text: 'Error' }))} color="error" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, text: 'Warning' }))} color="warning" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, text: 'Info' }))} color="info" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, text: 'Success' }))} color="success" {...props} />
      </Stateful>
    </div>
  </div>
)

storiesOf('RadioGroup', module)
  .addDecorator(
    host({
      align: 'center',
    })
  )
  .add('default', () => <RadioGroups />)
  .add('reversed', () => <RadioGroups reversed />)
  .add('inline', () => <RadioGroups inline />)
  .add('inline reversed', () => <RadioGroups inline reversed />)
