import type { SidebarMenuItem } from './SidebarMenu'
import { SidebarMenuItemSingle } from './SidebarMenuItemSingle'

interface SidebarMenuItemsProps {
  items: SidebarMenuItem[]
  level?: number
  expanded: Record<string, boolean>
  handleExpand: (label: string) => void
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
          item={item}
          level={level}
          expanded={expanded}
          handleExpand={handleExpand}
        />
      ))}
    </ul>
  )
}
