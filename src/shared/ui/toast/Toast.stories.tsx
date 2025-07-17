import { Toast } from './Toast'

export default {
  title: 'Components/Inputs/Toast',
  component: Toast,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error']
    },
    duration: {
      control: { type: 'number' },
      description: 'Auto-dismiss duration (ms)'
    },
    message: { control: 'text' },
    closable: { control: 'boolean' }
  },
  args: {
    message: 'This is a toast message',
    type: 'info',
    duration: 3000,
    closable: true
  }
}

export const Info = {
  args: {
    message: 'Info toast',
    type: 'info',
    closable: true,
    onClose: () => {
      console.log('close beep')
    }
  }
}
export const Success = {
  args: {
    message: 'Success toast',
    type: 'success',
    closable: true,
    onClose: () => {
      console.log('close beep')
    }
  }
}
export const Warning = {
  args: {
    message: 'Warning toast',
    type: 'warning',
    closable: true,
    onClose: () => {
      console.log('close beep')
    }
  }
}
export const Error = {
  args: {
    message: 'Error toast',
    type: 'error',
    closable: true,
    onClose: () => {
      console.log('close beep')
    }
  }
}
export const Closable = {
  args: {
    message: 'Closable toast',
    closable: true,
    duration: 0,
    onClose: () => {
      console.log('close beep')
    }
  }
}
export const NotClosable = {
  args: {
    message: 'Not closable',
    closable: false,
    onClose: () => {
      console.log('close beep')
    }
  }
}
export const LongDuration = {
  args: {
    message: 'Long duration',
    duration: 7000,
    onClose: () => {
      console.log('close beep')
    }
  }
}
export const ManualClose = {
  args: {
    message: 'Manual close only',
    duration: 0,
    closable: true,
    onClose: () => {
      console.log('close beep')
    }
  }
}
