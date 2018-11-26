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
  Select,
} from '../source/'

import Wrap from './components/Wrap'
import Stateful from './components/Stateful'

// import 'turretcss/dist/'

// import './turretcss.min.css'
// import '../../turretcss/docs/dist/docs.css'
import 'turretcss/dist/turretcss.min.css'
import './storybook.css'

const sizes = ['xxl', 'xl', 'l', 'm', 's', 'xs', 'xxs']

const colors = ['error', 'warning', 'info', 'success']

const ButtonComponent = Button

const Buttons = ({ Button = ButtonComponent, ...props }) => (
  <div className="margin-l">
    <h3>Button Sizes</h3>
    <Wrap size="xl">
      <Button size="xxl" onClick={action('onClick')} label="Button XXL" {...props} />
      <Button size="xl" onClick={action('onClick')} label="Button XL" {...props} />
      <Button size="l" onClick={action('onClick')} label="Button L" {...props} />
      <Button onClick={action('onClick')} label="Button" {...props} />
      <Button size="s" onClick={action('onClick')} label="Button S" {...props} />
      <Button size="xs" onClick={action('onClick')} label="Button XS" {...props} />
      <Button size="xxs" onClick={action('onClick')} label="Button XXS" {...props} />
    </Wrap>
    <Wrap size="xl">
      <Button disabled size="xxl" onClick={action('onClick')} label="Button XXL" {...props} />
      <Button disabled size="xl" onClick={action('onClick')} label="Button XL" {...props} />
      <Button disabled size="l" onClick={action('onClick')} label="Button L" {...props} />
      <Button disabled onClick={action('onClick')} label="Button" {...props} />
      <Button disabled size="s" onClick={action('onClick')} label="Button S" {...props} />
      <Button disabled size="xs" onClick={action('onClick')} label="Button XS" {...props} />
      <Button disabled size="xxs" onClick={action('onClick')} label="Button XXS" {...props} />
    </Wrap>
    <h3>Button Shades</h3>
    <Wrap>
      <Button color="white" onClick={action('onClick')} label="White" {...props} />
      <Button color="light" onClick={action('onClick')} label="Light" {...props} />
      <Button color="grey" onClick={action('onClick')} label="Grey" {...props} />
      <Button color="dark" onClick={action('onClick')} label="Dark" {...props} />
      <Button color="black" onClick={action('onClick')} label="Black" {...props} />
      <Button border color="white" onClick={action('onClick')} label="White" {...props} />
      <Button border color="light" onClick={action('onClick')} label="Light" {...props} />
      <Button border color="grey" onClick={action('onClick')} label="Grey" {...props} />
      <Button border color="dark" onClick={action('onClick')} label="Dark" {...props} />
      <Button border color="black" onClick={action('onClick')} label="Black" {...props} />
    </Wrap>
    <Wrap>
      <Button disabled color="white" onClick={action('onClick')} label="White" {...props} />
      <Button disabled color="light" onClick={action('onClick')} label="Light" {...props} />
      <Button disabled color="grey" onClick={action('onClick')} label="Grey" {...props} />
      <Button disabled color="dark" onClick={action('onClick')} label="Dark" {...props} />
      <Button disabled color="black" onClick={action('onClick')} label="Black" {...props} />
      <Button border disabled color="white" onClick={action('onClick')} label="White" {...props} />
      <Button border disabled color="light" onClick={action('onClick')} label="Light" {...props} />
      <Button border disabled color="grey" onClick={action('onClick')} label="Grey" {...props} />
      <Button border disabled color="dark" onClick={action('onClick')} label="Dark" {...props} />
      <Button border disabled color="black" onClick={action('onClick')} label="Black" {...props} />
    </Wrap>
    <h3>Button Palettes</h3>
    <Wrap>
      <Button color="primary" onClick={action('onClick')} label="Primary" {...props} />
      <Button color="secondary" onClick={action('onClick')} label="Secondary" {...props} />
      <Button color="tertiary" onClick={action('onClick')} label="Tertiary" {...props} />
      <Button border color="primary" onClick={action('onClick')} label="Primary" {...props} />
      <Button border color="secondary" onClick={action('onClick')} label="Secondary" {...props} />
      <Button border color="tertiary" onClick={action('onClick')} label="Tertiary" {...props} />
    </Wrap>
    <Wrap>
      <Button disabled color="primary" onClick={action('onClick')} label="Primary" {...props} />
      <Button disabled color="secondary" onClick={action('onClick')} label="Secondary" {...props} />
      <Button disabled color="tertiary" onClick={action('onClick')} label="Tertiary" {...props} />
      <Button border disabled color="primary" onClick={action('onClick')} label="Primary" {...props} />
      <Button border disabled color="secondary" onClick={action('onClick')} label="Secondary" {...props} />
      <Button border disabled color="tertiary" onClick={action('onClick')} label="Tertiary" {...props} />
    </Wrap>
    <h3>Button Indicators</h3>
    <Wrap>
      <Button color="error" onClick={action('onClick')} label="Error" {...props} />
      <Button color="warning" onClick={action('onClick')} label="Warning" {...props} />
      <Button color="success" onClick={action('onClick')} label="Success" {...props} />
      <Button color="info" onClick={action('onClick')} label="Info" {...props} />
      <Button border color="error" onClick={action('onClick')} label="Error" {...props} />
      <Button border color="warning" onClick={action('onClick')} label="Warning" {...props} />
      <Button border color="success" onClick={action('onClick')} label="Success" {...props} />
      <Button border color="info" onClick={action('onClick')} label="Info" {...props} />
    </Wrap>
    <Wrap>
      <Button disabled color="error" onClick={action('onClick')} label="Error" {...props} />
      <Button disabled color="warning" onClick={action('onClick')} label="Warning" {...props} />
      <Button disabled color="success" onClick={action('onClick')} label="Success" {...props} />
      <Button disabled color="info" onClick={action('onClick')} label="Info" {...props} />
      <Button border disabled color="error" onClick={action('onClick')} label="Error" {...props} />
      <Button border disabled color="warning" onClick={action('onClick')} label="Warning" {...props} />
      <Button border disabled color="success" onClick={action('onClick')} label="Success" {...props} />
      <Button border disabled color="info" onClick={action('onClick')} label="Info" {...props} />
    </Wrap>
  </div>
)

const createButtons = (Button, label, buttonProps) =>
  range(0, 5).map(i => <Button key={i} onClick={action('clicked')} label={label} {...buttonProps} />)

const ButtonGroups = ({ Button = ButtonComponent, buttonProps = {}, ...props }) => (
  <div className="margin-l">
    <h3>Button Group Sizes</h3>

    <ButtonGroup className="margin-vertical-m" size="xxl" {...props}>
      {createButtons(Button, 'Button XXL', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" size="xl" {...props}>
      {createButtons(Button, 'Button XL', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" size="l" {...props}>
      {createButtons(Button, 'Button L', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" {...props}>
      {createButtons(Button, 'Button', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" size="s" {...props}>
      {createButtons(Button, 'Button S', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" size="xs" {...props}>
      {createButtons(Button, 'Button XS', buttonProps)}
    </ButtonGroup>
    <ButtonGroup className="margin-vertical-m" size="xxs" {...props}>
      {createButtons(Button, 'Button XXS', buttonProps)}
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
  .add('disabled', () => <ButtonGroups disabled />)
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
    label: 'One',
  },
  {
    value: 'two',
    label: 'Two',
  },
  {
    value: 'three',
    label: 'Three',
  },
  {
    value: 'four',
    label: 'Four',
  },
  {
    value: 'five',
    label: 'Five',
  },
]

const RadioButtonGroups = props => (
  <div className="margin-l">
    <h3>Radio Button Group Sizes</h3>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Button XXL' }))}
        size="xxl"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Button XL' }))}
        size="xl"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Button L' }))}
        size="l"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Button' }))}
        {...props}
      />
    </Stateful>
    <Stateful>
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Button S' }))}
        size="s"
        {...props}
      />
    </Stateful>
    <Stateful>
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Button XS' }))}
        size="xs"
        {...props}
      />
    </Stateful>
    <Stateful>
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Button XXS' }))}
        size="xxs"
        {...props}
      />
    </Stateful>

    <h3>Radio Button Group Shades</h3>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'White' }))}
        activeColor="white"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Light' }))}
        activeColor="light"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Grey' }))}
        activeColor="grey"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Dark' }))}
        activeColor="dark"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Black' }))}
        activeColor="black"
        {...props}
      />
    </Stateful>
    <h3>Radio Button Group Palettes</h3>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Primary' }))}
        activeColor="primary"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Secondary' }))}
        activeColor="secondary"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Tertiary' }))}
        activeColor="tertiary"
        {...props}
      />
    </Stateful>
    <h3>Radio Button Group Indicators</h3>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Error' }))}
        activeColor="error"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Warning' }))}
        activeColor="warning"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Info' }))}
        activeColor="info"
        {...props}
      />
    </Stateful>
    <Stateful initial="one">
      <RadioButtonGroup
        className="margin-vertical-m"
        options={options.map(option => ({ ...option, label: 'Success' }))}
        activeColor="success"
        {...props}
      />
    </Stateful>
    <h3>Option Props</h3>
    <Stateful initial="three">
      <RadioButtonGroup
        options={options.map((option, i) => ({
          ...option,
          size: sizes[i % sizes.length],
          color: colors[i % colors.length],
          disabled: i > 2,
        }))}
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
      <Component name="controls-1" label={componentName} {...props} />
    </Stateful>
    <Stateful>
      <Component
        name="controls-1"
        label={`${componentName} with a very long label that must wrap over multiple lines`}
        {...props}
      />
    </Stateful>
    <Stateful>
      <Component
        name="controls-1"
        label={
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
      <Component name="controls-1" label="Four" {...props} />
    </Stateful>
    <Stateful>
      <Component name="controls-1" label="Five" {...props} />
    </Stateful>
    <Stateful>
      <Component name="controls-1" label="Six" {...props} />
    </Stateful>
    <h3>{componentName} Sizes</h3>

    <Stateful initial={true}>
      <Component name="controls-2" label={`${componentName} XXL`} size="xxl" {...props} />
    </Stateful>
    <Stateful>
      <Component name="controls-2" label={`${componentName} XL`} size="xl" {...props} />
    </Stateful>
    <Stateful>
      <Component name="controls-2" label={`${componentName} L`} size="l" {...props} />
    </Stateful>
    <Stateful>
      <Component name="controls-2" label={`${componentName}`} {...props} />
    </Stateful>
    <Stateful>
      <Component name="controls-2" label={`${componentName} S`} size="s" {...props} />
    </Stateful>
    <Stateful>
      <Component name="controls-2" label={`${componentName} XS`} size="xs" {...props} />
    </Stateful>
    <Stateful>
      <Component name="controls-2" label={`${componentName} XXS`} size="xxs" {...props} />
    </Stateful>

    <h3>{componentName} Indicators</h3>

    <Stateful initial={true}>
      <Component name="controls-3" color="error" label="Error" {...props} />
    </Stateful>
    <Stateful initial={true}>
      <Component name="controls-3" color="warning" label="Warning" {...props} />
    </Stateful>
    <Stateful initial={true}>
      <Component name="controls-3" color="info" label="Info" {...props} />
    </Stateful>
    <Stateful initial={true}>
      <Component name="controls-3" color="success" label="Success" {...props} />
    </Stateful>
  </div>
)

const Radios = props => (
  <div
    style={{
      maxWidth: props.inline ? '30rem' : '15rem',
    }}>
    <Stateful initial={1}>
      {({ value, onChange }) => (
        <React.Fragment>
          <Radio name="controls-1" label="Radio" value={value === 1} onChange={() => onChange(1)} {...props} />
          <Radio
            name="controls-1"
            label={`Radio with a very long label that must wrap over multiple lines`}
            value={value === 2}
            onChange={() => onChange(2)}
            {...props}
          />
          <Radio
            name="controls-1"
            label={
              <span>
                Radio with a{' '}
                <a href="http://turretcss.com" target="_blank">
                  link
                </a>
              </span>
            }
            value={value === 3}
            onChange={() => onChange(3)}
            {...props}
          />
          <Radio name="controls-1" label="Four" value={value === 4} onChange={() => onChange(4)} {...props} />
          <Radio name="controls-1" label="Five" value={value === 5} onChange={() => onChange(5)} {...props} />
          <Radio name="controls-1" label="Six" value={value === 6} onChange={() => onChange(6)} {...props} />
        </React.Fragment>
      )}
    </Stateful>

    <h3>Radio Sizes</h3>

    <Stateful initial="xxl">
      {({ value, onChange }) => (
        <React.Fragment>
          <Radio
            name="controls-2"
            label="Radio XXL"
            size="xxl"
            value={value === 'xxl'}
            onChange={() => onChange('xxl')}
            {...props}
          />
          <Radio
            name="controls-2"
            label="Radio XL"
            size="xl"
            value={value === 'xl'}
            onChange={() => onChange('xl')}
            {...props}
          />
          <Radio
            name="controls-2"
            label="Radio L"
            size="l"
            value={value === 'l'}
            onChange={() => onChange('l')}
            {...props}
          />
          <Radio name="controls-2" label="Radio" value={value === 'm'} onChange={() => onChange('m')} {...props} />
          <Radio
            name="controls-2"
            label="Radio S"
            size="s"
            value={value === 's'}
            onChange={() => onChange('s')}
            {...props}
          />
          <Radio
            name="controls-2"
            label="Radio XS"
            size="xs"
            value={value === 'xs'}
            onChange={() => onChange('xs')}
            {...props}
          />
          <Radio
            name="controls-2"
            label="Radio XXS"
            size="xxs"
            value={value === 'xxs'}
            onChange={() => onChange('xxs')}
            {...props}
          />
        </React.Fragment>
      )}
    </Stateful>

    <h3>Radio Indicators</h3>

    <Stateful initial="error">
      {({ value, onChange }) => (
        <React.Fragment>
          <Radio
            name="controls-3"
            color="error"
            label="Error"
            value={value === 'error'}
            onChange={() => onChange('error')}
            {...props}
          />
          <Radio
            name="controls-3"
            color="warning"
            label="Warning"
            value={value === 'warning'}
            onChange={() => onChange('warning')}
            {...props}
          />
          <Radio
            name="controls-3"
            color="info"
            label="Info"
            value={value === 'info'}
            onChange={() => onChange('info')}
            {...props}
          />
          <Radio
            name="controls-3"
            color="success"
            label="Success"
            value={value === 'success'}
            onChange={() => onChange('success')}
            {...props}
          />
        </React.Fragment>
      )}
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
  .add('disabled', () => <Controls Component={Switch} componentName="Switch" disabled />)
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
  .add('disabled', () => <Controls Component={Checkbox} componentName="Checkbox" disabled />)
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
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Checkbox XXL' }))} size="xxl" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Checkbox XL' }))} size="xl" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Checkbox L' }))} size="l" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Checkbox' }))} {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Checkbox S' }))} size="s" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Checkbox XS' }))} size="xs" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Checkbox XXS' }))} size="xxs" {...props} />
      </Stateful>
    </div>

    <h3>Checkbox Group Indicators</h3>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Error' }))} color="error" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Warning' }))} color="warning" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Info' }))} color="info" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial={['one']}>
        <CheckboxGroup options={options.map(option => ({ ...option, label: 'Success' }))} color="success" {...props} />
      </Stateful>
    </div>

    <h3>Option Props</h3>
    <div className="margin-vertical-m">
      <Stateful initial={options.map(({ value }) => value)}>
        <CheckboxGroup
          options={options.map((option, i) => ({
            ...option,
            size: sizes[i % sizes.length],
            color: colors[i % colors.length],
          }))}
          {...props}
        />
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
  .add('disabled', () => <CheckboxGroups disabled />)
  .add('reversed', () => <CheckboxGroups reversed />)
  .add('inline', () => <CheckboxGroups inline />)
  .add('inline reversed', () => <CheckboxGroups inline reversed />)

storiesOf('Radio', module)
  .addDecorator(
    host({
      align: 'center',
    })
  )
  .add('default', () => <Radios />)
  .add('disabled', () => <Radios disabled />)
  .add('reversed', () => <Radios reversed />)
  .add('inline', () => <Radios inline />)
  .add('inline reversed', () => <Radios inline reversed />)

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
        <RadioGroup options={options.map(option => ({ ...option, label: 'Radio XXL' }))} size="xxl" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, label: 'Radio XL' }))} size="xl" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, label: 'Radio L' }))} size="l" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, label: 'Radio' }))} {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, label: 'Radio S' }))} size="s" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, label: 'Radio XS' }))} size="xs" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, label: 'Radio XXS' }))} size="xxs" {...props} />
      </Stateful>
    </div>

    <h3>Radio Group Indicators</h3>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, label: 'Error' }))} color="error" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, label: 'Warning' }))} color="warning" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, label: 'Info' }))} color="info" {...props} />
      </Stateful>
    </div>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup options={options.map(option => ({ ...option, label: 'Success' }))} color="success" {...props} />
      </Stateful>
    </div>

    <h3>Option Props</h3>
    <div className="margin-vertical-m">
      <Stateful initial="one">
        <RadioGroup
          options={options.map((option, i) => ({
            ...option,
            size: sizes[i % sizes.length],
            color: colors[i % colors.length],
          }))}
          {...props}
        />
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
  .add('disabled', () => <RadioGroups disabled />)
  .add('reversed', () => <RadioGroups reversed />)
  .add('inline', () => <RadioGroups inline />)
  .add('inline reversed', () => <RadioGroups inline reversed />)

const Selects = props => (
  <div
    style={{
      width: '25rem',
    }}>
    <h3>With options array</h3>
    <Stateful>
      <Select options={options} {...props} />
    </Stateful>

    <h3>With optgroups/options as children</h3>
    <Stateful>
      <Select {...props}>
        <option value="">Please select ...</option>
        <optgroup label="Group 1">
          <option value="1.1">Item 1.1</option>
          <option value="1.2" disabled>
            Item 1.2 (disabled)
          </option>
          <option value="1.3">Item 1.3</option>
        </optgroup>
        <optgroup label="Disabled" disabled>
          <option value="2.1">Item 2.1</option>
          <option value="2.2">Item 2.2</option>
          <option value="2.3">Item 2.3</option>
        </optgroup>
      </Select>
    </Stateful>

    <h3>With option props</h3>
    <Stateful>
      <Select options={options.map((option, i) => ({ ...option, disabled: i % 2 === 0 }))} {...props} />
    </Stateful>

    <h3>Select Sizes</h3>

    <Stateful>
      <Select options={options} empty="Select XXL" size="xxl" {...props} />
    </Stateful>
    <Stateful>
      <Select options={options} empty="Select XL" size="xl" {...props} />
    </Stateful>
    <Stateful>
      <Select options={options} empty="Select L" size="l" {...props} />
    </Stateful>
    <Stateful>
      <Select options={options} empty="Select" {...props} />
    </Stateful>
    <Stateful>
      <Select options={options} empty="Select S" size="s" {...props} />
    </Stateful>
    <Stateful>
      <Select options={options} empty="Select XS" size="xs" {...props} />
    </Stateful>
    <Stateful>
      <Select options={options} empty="Select XXS" size="xxs" {...props} />
    </Stateful>

    <h3>Select Indicators</h3>

    <Stateful>
      <Select options={options} empty="Error" color="error" {...props} />
    </Stateful>
    <Stateful>
      <Select options={options} empty="Warning" color="warning" {...props} />
    </Stateful>
    <Stateful>
      <Select options={options} empty="Info" color="info" {...props} />
    </Stateful>
    <Stateful>
      <Select options={options} empty="Success" color="success" {...props} />
    </Stateful>
  </div>
)

storiesOf('Select', module)
  .addDecorator(
    host({
      align: 'center',
    })
  )
  .add('default', () => <Selects />)
  .add('disabled', () => <Selects disabled />)
  .add('readOnly', () => <Selects readOnly />)
  .add('.inline-flex', () => <Selects className="inline-flex" />)
