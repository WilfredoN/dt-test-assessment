import type {ReactNode} from 'react';

import {  useCallback, useState } from 'react'

import { SidebarMenuItems } from './SidebarMenuItems'
import './SidebarMenu.scss'

export interface SidebarMenuItem {
  children?: SidebarMenuItem[]
  icon?: ReactNode
  label: string
  onClick?: () => void
}

export interface SidebarMenuProps {
  items: SidebarMenuItem[]
  onClose: () => void
  open: boolean
}

export const SidebarMenu = ({ open, onClose, items }: SidebarMenuProps) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const handleExpand = useCallback((label: string) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }))
  }, [])

  return (
    <>
      {open && <div className='sidebar-menu__overlay' onClick={onClose} />}
      <aside
        aria-hidden={!open}
        className={`sidebar-menu__panel ${
          open ? 'sidebar-menu__panel--open' : ''
        }`}
      >
        <header className='sidebar-menu__header'>
          <button
            aria-label='Close sidebar'
            className='sidebar-menu__close-button'
            onClick={onClose}
          >
            ×
          </button>
        </header>
        <nav className='sidebar-menu__nav'>
          <SidebarMenuItems
            expanded={expanded}
            handleExpand={handleExpand}
            items={items}
          />
        </nav>
      </aside>
    </>
  )
}
