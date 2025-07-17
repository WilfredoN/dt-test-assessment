import type { SidebarMenuItem } from './SidebarMenu'

import { SidebarMenuItemSingle } from './SidebarMenuItemSingle'

interface SidebarMenuItemsProps {
  expanded: Record<string, boolean>
  handleExpand: (label: string) => void
  items: SidebarMenuItem[]
  level?: number
}

export const SidebarMenuItems = ({
  items,
  level = 0,
  expanded,
  handleExpand
}: SidebarMenuItemsProps) => {
  return (
    <ul className='sidebar-menu-items__list'>
      {items.map((item) => (
        <SidebarMenuItemSingle
          key={item.label}
          expanded={expanded}
          handleExpand={handleExpand}
          item={item}
          level={level}
        />
      ))}
    </ul>
  )
}
