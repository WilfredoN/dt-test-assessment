import { useState, useCallback, type ReactNode } from 'react'
import { SidebarMenuItems } from './SidebarMenuItems'
import './SidebarMenu.scss'

export interface SidebarMenuItem {
  label: string
  icon?: ReactNode
  onClick?: () => void
  children?: SidebarMenuItem[]
}

export interface SidebarMenuProps {
  open: boolean
  onClose: () => void
  items: SidebarMenuItem[]
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
        className={`sidebar-menu__panel ${
          open ? 'sidebar-menu__panel--open' : ''
        }`}
        aria-hidden={!open}
      >
        <header className='sidebar-menu__header'>
          <button
            className='sidebar-menu__close-button'
            onClick={onClose}
            aria-label='Close sidebar'
          >
            ×
          </button>
        </header>
        <nav className='sidebar-menu__nav'>
          <SidebarMenuItems
            items={items}
            expanded={expanded}
            handleExpand={handleExpand}
          />
        </nav>
      </aside>
    </>
  )
}
