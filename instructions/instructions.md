when allowing components to be customized with classNames, use an optional classNames object and then allow all the parts of the component to be customized (using the cn utility)

components shouldn't use default exports.
they should also export props from the file i.e export const Sidebar and export const SidebarProps

- if the component has multiple parts, all the individual parts should be able to be customized using optional xProps object (i.e if Sidebar has a <SocialMediaLinks/> and <SidebarFooter/> components within it, Sidebar should accept socialMediaLinksProps and sidebarFooterProps (optional, and spreaded over them)

### tailwind

- we use utils from @tailwind.css
- we prefer v/h classnames (which center things properly and add spacing by default) instead of flex flex-col etc. syntax
- we use cn for conditional styles (if needed, and prefer the cn object syntax)

### imports

import {cn} from "@kitze-ui"
