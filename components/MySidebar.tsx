'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Archive,
  FolderOpen,
  LibraryBig,
  Network,
  Newspaper,
  Plus,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from './ui/sidebar'

const workspaceItems = [
  { title: 'The Desk', href: '/', icon: Newspaper },
  { title: 'Case Files', href: '/cases', icon: FolderOpen, count: 8 },
  { title: 'Source Library', href: '/sources', icon: LibraryBig, count: 42 },
  { title: 'Connections', href: '/connections', icon: Network, count: 19 },
  { title: 'Archive', href: '/archive', icon: Archive },
]

const MySidebar = () => {
  const pathname = usePathname()

  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size='lg'
              tooltip='Fieldnotes'
              render={<Link href='/' />}
            >
              <span className='size-3 shrink-0 bg-primary' />
              <div className='flex flex-col leading-tight group-data-[collapsible=icon]:hidden'>
                <span className='text-sm  font-semibold tracking-widest uppercase'>
                  Fieldnotes
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className='flex flex-col pl-2'>
          <span className='text-xs italic'>Say It Anyway</span>
          <span className='text-[10px] tracking-wider text-muted-foreground uppercase'>
            Investigations · Vol. VII
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              {/* TODO: wire up quick capture action */}
              <SidebarMenuButton tooltip='Quick capture'>
                <Plus />
                <span>Quick capture</span>
                <span className='ml-auto text-[10px] tracking-wider uppercase group-data-[collapsible=icon]:hidden'>
                  Lead
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {workspaceItems.map(({ title, href, icon: Icon, count }) => (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton
                    render={<Link href={href} />}
                    isActive={pathname === href}
                    tooltip={title}
                  >
                    <Icon />
                    <span>{title}</span>
                  </SidebarMenuButton>
                  {count !== undefined && (
                    <SidebarMenuBadge>
                      {String(count).padStart(2, '0')}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default MySidebar
