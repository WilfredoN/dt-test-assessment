import type { SidebarMenuItem } from './SidebarMenu'

export const hasChildren = (item: SidebarMenuItem) => {
  return Array.isArray(item.children) && item.children.length > 0
}

export const getExpandIcon = (expanded?: boolean) => {
  return expanded ? '▾' : '▸'
}
