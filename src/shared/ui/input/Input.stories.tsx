import { Input } from './Input'

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number'],
      description: 'Input type'
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input'
    }
  },
  args: {
    type: 'text',
    clearable: false,
    placeholder: 'Enter value',
    disabled: false
  }
}

export const Default = {
  args: {
    placeholder: 'Default input',
    type: 'text',
    clearable: false
  },
  parameters: {
    controls: {
      include: ['type', 'placeholder', 'clearable', 'disabled']
    }
  }
}

export const Text = {
  args: {
    type: 'text',
    placeholder: 'Text input',
    onChange: () => {},
    clearable: false
  },
  parameters: {
    controls: {
      include: ['type', 'placeholder', 'clearable', 'disabled']
    }
  }
}

export const TextClearable = {
  args: {
    type: 'text',
    placeholder: 'Clearable text',
    clearable: true
  },
  parameters: {
    controls: {
      include: ['type', 'placeholder', 'clearable', 'disabled', 'value']
    }
  }
}

export const Number = {
  args: {
    type: 'number',
    placeholder: 'Number input',
    clearable: false
  },
  parameters: {
    controls: {
      include: ['type', 'placeholder', 'clearable', 'disabled', 'value']
    }
  }
}
