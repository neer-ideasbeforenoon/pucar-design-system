export type DocsNavItem = {
  title: string;
  href: string;
};

export type DocsNavSection = {
  title: string;
  items: DocsNavItem[];
};

export const docsNav: DocsNavSection[] = [
  {
    title: "Overview",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Getting started", href: "/getting-started" },
      { title: "Principles", href: "/principles" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { title: "Colors", href: "/foundations/colors" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Radius", href: "/foundations/radius" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Elevation", href: "/foundations/elevation" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/components/accordion" },
      { title: "Alert", href: "/components/alert" },
      { title: "Alert Dialog", href: "/components/alert-dialog" },
      { title: "Avatar", href: "/components/avatar" },
      { title: "Badge", href: "/components/badge" },
      { title: "Breadcrumb", href: "/components/breadcrumb" },
      { title: "Button", href: "/components/button" },
      { title: "Calendar", href: "/components/calendar" },
      { title: "Card", href: "/components/card" },
      { title: "Carousel", href: "/components/carousel" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Command", href: "/components/command" },
      { title: "Dialog", href: "/components/dialog" },
      { title: "Drawer", href: "/components/drawer" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      { title: "Hover Card", href: "/components/hover-card" },
      { title: "Input", href: "/components/input" },
      { title: "Label", href: "/components/label" },
      { title: "Menubar", href: "/components/menubar" },
      { title: "Navigation Menu", href: "/components/navigation-menu" },
      { title: "Pagination", href: "/components/pagination" },
      { title: "Popover", href: "/components/popover" },
      { title: "Progress", href: "/components/progress" },
      { title: "Radio Group", href: "/components/radio-group" },
      { title: "Select", href: "/components/select" },
      { title: "Separator", href: "/components/separator" },
      { title: "Sheet", href: "/components/sheet" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Slider", href: "/components/slider" },
      { title: "Sonner", href: "/components/sonner" },
      { title: "Spinner", href: "/components/spinner" },
      { title: "Switch", href: "/components/switch" },
      { title: "Table", href: "/components/table" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Textarea", href: "/components/textarea" },
      { title: "Toggle", href: "/components/toggle" },
      { title: "Toggle Group", href: "/components/toggle-group" },
      { title: "Tooltip", href: "/components/tooltip" },
    ],
  },
];

export function getComponentNavItem(slug: string) {
  return docsNav
    .flatMap((section) => section.items)
    .find((item) => item.href === `/components/${slug}`);
}

export function getAllComponentSlugs() {
  const section = docsNav.find((item) => item.title === "Components");
  if (!section) return [];
  return section.items.map((item) => item.href.replace("/components/", ""));
}
