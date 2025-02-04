when allowing components to be customized with classNames, use an optional classNames object and then allow all the parts of the component to be customized (using the cn utility)

- Don't bother with multiple classNames if the component has ONE part (like a simple button )

IMPORTANT: components shouldn't use default exports.
they should also export props from the file i.e export const Sidebar and export const SidebarProps

- if the component has multiple parts, all the individual parts should be able to be customized using optional xProps object (i.e if Sidebar has a <SocialMediaLinks/> and <SidebarFooter/> components within it, Sidebar should accept socialMediaLinksProps and sidebarFooterProps (optional, and spreaded over them)

### icons

for icons we use react-icons. so always try to refactor any imports you find from @tabler/react-icons or 'lucide-icons' into the appropriate react-icons/tb or react-icons/lu import

### tailwind

- we use utils from @tailwind.css
- we prefer v/h classnames (which center things properly and add spacing by default) instead of flex flex-col etc. syntax
- we use cn for conditional styles (if needed, and prefer the cn object syntax)
- we have to support dark mode. we use "foreground" and "background" colors with variations like bg-foreground/50 when needed, instead of hardcoding to shades of black/white
- when you REALLY need to hardcode to gray, use the 'zinc' color and not 'gray'
- almost _NEVER_ use margins !!! always use "v" or "h" from tailwind.css along with space-x or space-y when you need to space something

### imports

import { cn } from "@kitze/ui"

- ReactFC
  The new React.FC in react 19 is annoying. so we use a custom one, always.

import { ReactFC } from "@kitze/ui"
