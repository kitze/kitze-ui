when allowing components to be customized with classNames, use an optional classNames object and then allow all the parts of the component to be customized (using the cn utility)

- Don't bother with multiple classNames if the component has ONE part (like a simple button )

IMPORTANT: components shouldn't use default exports.
they should also export props from the file i.e export const Sidebar and export const SidebarProps

- if the component has multiple parts, all the individual parts should be able to be customized using optional xProps object (i.e if Sidebar has a <SocialMediaLinks/> and <SidebarFooter/> components within it, Sidebar should accept socialMediaLinksProps and sidebarFooterProps (optional, and spreaded over them)

### icons

for icons we use react-icons. ALWAYS. don't use tabler icons or lucide icons or heroicons directly. so always try to refactor any imports you find from @tabler/react-icons or 'lucide-icons' into the appropriate react-icons/tb or react-icons/lu import

### tailwind

- we use utils from @tailwind.css
- clases NOT TO USE: flex, col, row, items-center, justify-center, etc.
- classes to use:
- "v" if you need flex vertical, with space-y-2
- "h" if you need flex horizontal, with space-x-2
- 'vertical' if you need flex vertical with custom space-y-
- 'horizontal' if you need flex horizontal with custom space-x-
- DO NOT INVENT CLASSES LIKE v-10 and h-20, they don't exist
- we use cn for conditional styles (if needed, and prefer the cn object syntax like cn('default-classes-here', {
  'some-classes-here': booleanCondition
  }))
- we have to support dark mode. we use "foreground" and "background" colors with variations like bg-foreground/50 when needed, instead of hardcoding to shades of black/white
- when you REALLY need to hardcode to gray, use the 'zinc' color and not 'gray'
- _NEVER_ use margins !!! v/h/horizontal/vertical which will add appropriate spacing to all the children

### imports

import { cn } from "@kitze/ui"

- ReactFC
  The new React.FC in react 19 is annoying. so we use a custom one, always.

import { ReactFC } from "@kitze/ui"

### extracting to @kitze/ui

- if you're extracting new components or creating new components inside @kitze/ui you need to pay attention that imports are:
- import { cn } from "@/cn";
- import {ReactFC} from '@/types";
- also if you add a new component you have to export it in the relevant /index.tsx file so then projects can use it
- if you add a new component (or update an old component) make sure to update the storybook stories
