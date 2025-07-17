import type { SidebarMenuItem } from './SidebarMenu'

import { getExpandIcon, hasChildren } from './SidebarMenu.utils'
import { SidebarMenuItems } from './SidebarMenuItems'

interface SidebarMenuItemSingleProps {
  expanded: Record<string, boolean>
  handleExpand: (label: string) => void
  item: SidebarMenuItem
  level: number
}

export const SidebarMenuItemSingle = ({
  item,
  level,
  expanded,
  handleExpand
}: SidebarMenuItemSingleProps) => {
  const childrenExist = hasChildren(item)
  const isExpanded = expanded[item.label]

  const handleItemClick = () => {
    if (item.onClick) {
      item.onClick()
    } else if (childrenExist) {
      handleExpand(item.label)
    }
  }

  const getLevelClass = (level: number) => {
    return `sidebar-menu-item__container--level-${Math.min(level, 3)}`
  }

  return (
    <li className='sidebar-menu-item'>
      <div className={`sidebar-menu-item__container ${getLevelClass(level)}`}>
        {item.icon}
        <button className='sidebar-menu-item__button' onClick={handleItemClick}>
          {item.label}
        </button>
        {childrenExist && (
          <button
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
            className='sidebar-menu-item__expand-button'
            onClick={() => handleExpand(item.label)}
          >
            {getExpandIcon(isExpanded)}
          </button>
        )}
      </div>
      {childrenExist && isExpanded && (
        <div className='sidebar-menu-item__children'>
          <SidebarMenuItems
            expanded={expanded}
            handleExpand={handleExpand}
            items={item.children!}
            level={level + 1}
          />
        </div>
      )}
    </li>
  )
}
