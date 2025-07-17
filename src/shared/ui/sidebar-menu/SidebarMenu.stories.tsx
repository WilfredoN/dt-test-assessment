import { useState } from 'react'

import type { SidebarMenuItem } from './SidebarMenu'

import { SidebarMenu } from './SidebarMenu'

export default {
  title: 'Components/Inputs/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen'
  }
}

const items1: SidebarMenuItem[] = [
  { label: 'Dashboard', onClick: () => alert('Dashboard') },
  { label: 'Profile', onClick: () => alert('Profile') },
  { label: 'Settings', onClick: () => alert('Settings') }
]

const items2: SidebarMenuItem[] = [
  {
    label: 'Projects',
    children: [
      { label: 'Project A', onClick: () => alert('Project A') },
      { label: 'Project B', onClick: () => alert('Project B') }
    ]
  },
  {
    label: 'Team',
    children: [
      { label: 'Members', onClick: () => alert('Members') },
      {
        label: 'Roles',
        children: [
          { label: 'Admin', onClick: () => alert('Admin') },
          { label: 'User', onClick: () => alert('User') }
        ]
      }
    ]
  },
  { label: 'Logout', onClick: () => alert('Logout') }
]

export const OneLevel = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <button
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 50,
          padding: '8px 16px',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={() => setOpen(true)}
      >
        Open Sidebar
      </button>
      <SidebarMenu items={items1} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export const TwoLevel = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <button
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 50,
          padding: '8px 16px',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={() => setOpen(true)}
      >
        Open Sidebar
      </button>
      <SidebarMenu items={items2} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export const Closed = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 50,
          padding: '8px 16px',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={() => setOpen(true)}
      >
        Open Sidebar
      </button>
      <SidebarMenu items={items2} open={open} onClose={() => setOpen(false)} />
    </>
  )
}
