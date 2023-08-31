import { SidebarItem } from "./SidebarItem";

interface Props {
  isOpen: boolean
}

export function Sidebar({ isOpen }: Props) {
  return (
    <div className={'w-max absolute h-full lg:h-auto bg-allpagebg lg:bg-none lg:relative lg:block z-20 ' + (isOpen ? '' : 'hidden')}>
      <div className='line' />
      <SidebarItem name="Schedule" image="./images/schedule.svg" />
      <SidebarItem name="Analytics" image="./images/analytics.svg" />
      <SidebarItem name="Stories" image="./images/stories.svg" />
      <SidebarItem name="Engagement Units" image="./images/units.svg" />
      <SidebarItem name="Ads" image="./images/ads.svg" />
      <div className='line' />
      <SidebarItem name="CMS Users" image="./images/cmsUsers.svg" />
      <SidebarItem name="Roles" image="./images/roles.svg" />
      <SidebarItem name="Apps" image="./images/apps.svg" />
      <div className='line' />
      <SidebarItem name="User guide" image="./images/userGuide.svg" />
    </div>
  )
}
