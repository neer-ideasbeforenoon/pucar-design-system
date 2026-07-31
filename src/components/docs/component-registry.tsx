"use client";

import {
  AlertCircleIcon,
  CheckCircle2Icon,
  InfoIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar } from "@/components/ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import type { ComponentDoc } from "@/lib/component-doc-types";

function available(
  slug: string,
  title: string,
  description: string,
  preview: ComponentDoc["preview"],
  tokens: string[] = ["border", "background", "foreground", "muted"]
): ComponentDoc {
  return {
    slug,
    title,
    description,
    importPath: `@/components/ui/${slug}`,
    whenToUse: [
      "Reach for this when an existing product pattern already needs it.",
      "Prefer simpler components first if they already solve the job.",
    ],
    tokens,
    usageNotes: [
      "Installed from the upstream shadcn registry and themed via CSS variables.",
      "Compose with tokens — do not restyle with hardcoded colors.",
    ],
    preview,
  };
}

export const componentRegistry: Record<string, ComponentDoc> = {
  button: {
    slug: "button",
    title: "Button",
    description:
      "Primary interactive control for actions. Variants map directly to semantic color tokens.",
    importPath: "@/components/ui/button",
    whenToUse: [
      "Trigger an action (submit, navigate, open a dialog).",
      "Use one primary button per visual region to preserve hierarchy.",
      "Pair destructive with confirmation (Alert Dialog) for irreversible work.",
    ],
    tokens: [
      "primary",
      "secondary",
      "destructive",
      "success",
      "warning",
      "info",
      "muted",
      "ring",
    ],
    usageNotes: [
      "Default variant is brand teal (primary) — ration it to one per view.",
      "destructive is the soft/at-rest treatment; use destructive-solid only for a confirmed irreversible action.",
      "success / warning / info are solid treatments — the action IS the status.",
      "Sizes follow the control-metrics ladder: xs 32 · sm 36 · default 40 · lg 44.",
      "Icon-only buttons need an accessible name (aria-label).",
    ],
    doItems: [
      "Use primary for the single highest-emphasis action.",
      "Use outline/ghost for secondary or tertiary actions.",
    ],
    dontItems: [
      "Place multiple primary buttons side by side competing for attention.",
      "Hardcode button background colors outside the variants.",
    ],
    preview: (
      <>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive-solid">Destructive solid</Button>
        <Button variant="destructive-ghost">Destructive ghost</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="link">Link</Button>
      </>
    ),
    variants: (
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra small · 32</Button>
          <Button size="sm">Small · 36</Button>
          <Button size="default">Default · 40</Button>
          <Button size="lg">Large · 44</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled outline
          </Button>
        </div>
      </div>
    ),
  },

  badge: {
    slug: "badge",
    title: "Badge",
    description:
      "Compact status and metadata labels. Keep copy short — usually one or two words.",
    importPath: "@/components/ui/badge",
    whenToUse: [
      "Show status (Paid, Pending) or category chips.",
      "Annotate counts or metadata next to headings.",
    ],
    tokens: [
      "primary",
      "secondary",
      "destructive",
      "success-muted",
      "warning-muted",
      "info-muted",
      "border",
    ],
    usageNotes: [
      "success / warning / info use the muted tint pair — badges are metadata, not an action, so they never carry the solid treatment.",
      "Avoid nesting interactive controls inside badges.",
    ],
    preview: (
      <>
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </>
    ),
  },

  alert: {
    slug: "alert",
    title: "Alert",
    description:
      "Inline feedback that stays on the page. Use for persistent notices, not transient toasts.",
    importPath: "@/components/ui/alert",
    whenToUse: [
      "Surface form or page-level messages the user should not miss.",
      "Explain system state without blocking the rest of the UI.",
    ],
    tokens: ["card", "destructive", "success", "warning", "info", "border"],
    usageNotes: [
      "Destructive variant is built-in; success/warning/info use semantic token classes.",
      "Keep titles short; put detail in the description.",
    ],
    preview: (
      <div className="flex w-full max-w-lg flex-col gap-3">
        <Alert>
          <InfoIcon />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>
            You can add components using the shadcn CLI.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Payment failed</AlertTitle>
          <AlertDescription>
            Check the card details and try again.
          </AlertDescription>
        </Alert>
        <Alert className="border-success/30 bg-success/5 text-foreground">
          <CheckCircle2Icon className="text-success" />
          <AlertTitle>Synced</AlertTitle>
          <AlertDescription>
            Changes were saved to the design system.
          </AlertDescription>
        </Alert>
      </div>
    ),
  },

  input: {
    slug: "input",
    title: "Input",
    description: "Single-line text field. Always pair with a Label for accessibility.",
    importPath: "@/components/ui/input",
    whenToUse: [
      "Collect short text: names, emails, search queries.",
      "Use Textarea for multi-line content.",
    ],
    tokens: ["input", "border", "ring", "muted-foreground", "destructive"],
    usageNotes: [
      "Focus uses the ring token (teal).",
      "Mark invalid fields with aria-invalid for destructive styling.",
    ],
    preview: (
      <div className="flex w-full max-w-sm flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="name@pucar.com" />
      </div>
    ),
  },

  textarea: {
    slug: "textarea",
    title: "Textarea",
    description: "Multi-line text entry for notes, descriptions, and messages.",
    importPath: "@/components/ui/textarea",
    whenToUse: ["Anything longer than a single line of input."],
    tokens: ["input", "border", "ring", "muted-foreground"],
    usageNotes: ["Pairs with Label the same way Input does."],
    preview: (
      <div className="flex w-full max-w-sm flex-col gap-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" placeholder="Add context for the client…" />
      </div>
    ),
  },

  select: {
    slug: "select",
    title: "Select",
    description: "Choose a single option from a list. Prefer over native select for consistent styling.",
    importPath: "@/components/ui/select",
    whenToUse: [
      "Finite option sets (status, role, region).",
      "Use Combobox when options are searchable or very long.",
    ],
    tokens: ["input", "popover", "accent", "ring"],
    usageNotes: ["Trigger width should match form layout — often max-w-xs or full."],
    preview: (
      <Select defaultValue="paid">
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="paid">Paid</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="unpaid">Unpaid</SelectItem>
        </SelectContent>
      </Select>
    ),
  },

  checkbox: {
    slug: "checkbox",
    title: "Checkbox",
    description: "Binary or multi-select control. Label should be clickable via association.",
    importPath: "@/components/ui/checkbox",
    whenToUse: [
      "Toggle independent options.",
      "Use Radio Group when choices are mutually exclusive.",
    ],
    tokens: ["primary", "input", "ring"],
    usageNotes: ["Checked state uses primary (teal)."],
    preview: (
      <div className="flex items-center gap-2">
        <Checkbox id="terms" defaultChecked />
        <Label htmlFor="terms">Accept terms</Label>
      </div>
    ),
  },

  "radio-group": {
    slug: "radio-group",
    title: "Radio Group",
    description: "Mutually exclusive options in a set.",
    importPath: "@/components/ui/radio-group",
    whenToUse: ["Pick exactly one value from a short list."],
    tokens: ["primary", "input", "ring"],
    usageNotes: ["Keep option lists short; use Select for longer lists."],
    preview: (
      <RadioGroup defaultValue="monthly" className="gap-3">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="monthly" id="r-monthly" />
          <Label htmlFor="r-monthly">Monthly</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="yearly" id="r-yearly" />
          <Label htmlFor="r-yearly">Yearly</Label>
        </div>
      </RadioGroup>
    ),
  },

  switch: {
    slug: "switch",
    title: "Switch",
    description: "Immediate on/off setting. Prefer for settings that take effect right away.",
    importPath: "@/components/ui/switch",
    whenToUse: [
      "Preferences and feature flags.",
      "Use Checkbox for form fields that submit with a form.",
    ],
    tokens: ["primary", "input"],
    usageNotes: ["Always pair with a Label describing the setting."],
    preview: (
      <div className="flex items-center gap-3">
        <Switch id="notifications" defaultChecked />
        <Label htmlFor="notifications">Email notifications</Label>
      </div>
    ),
  },

  label: {
    slug: "label",
    title: "Label",
    description: "Accessible caption for form controls. Required for Input, Checkbox, Switch, and similar.",
    importPath: "@/components/ui/label",
    whenToUse: ["Every form control that needs a visible name."],
    tokens: ["foreground"],
    usageNotes: ["Use htmlFor matching the control id."],
    preview: (
      <div className="flex w-full max-w-sm flex-col gap-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" placeholder="Pucar" />
      </div>
    ),
  },

  table: {
    slug: "table",
    title: "Table",
    description: "Structured data display. Keep columns scannable; use Badge for status cells.",
    importPath: "@/components/ui/table",
    whenToUse: ["Compare rows of structured records (invoices, users, jobs)."],
    tokens: ["border", "muted", "foreground", "card"],
    usageNotes: [
      "Wrap in a bordered container for page-level tables.",
      "Right-align numeric columns.",
    ],
    preview: (
      <div className="w-full overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>INV-001</TableCell>
              <TableCell>
                <Badge className="bg-success text-success-foreground">Paid</Badge>
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>INV-002</TableCell>
              <TableCell>
                <Badge variant="secondary">Pending</Badge>
              </TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  },

  tabs: {
    slug: "tabs",
    title: "Tabs",
    description: "Switch between related views in the same context without navigating away.",
    importPath: "@/components/ui/tabs",
    whenToUse: [
      "Alternate panels that share the same page chrome.",
      "Avoid for primary navigation across routes — use links instead.",
    ],
    tokens: ["muted", "background", "foreground"],
    usageNotes: ["Default variant sits on muted; line variant for quieter UI."],
    preview: (
      <Tabs defaultValue="account" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
          Manage profile and security settings.
        </TabsContent>
        <TabsContent value="billing" className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
          Invoices, payment methods, and plans.
        </TabsContent>
      </Tabs>
    ),
  },

  card: {
    slug: "card",
    title: "Card",
    description:
      "Grouped content surface. In Pucar product UI, prefer cards only when they contain a clear interactive unit.",
    importPath: "@/components/ui/card",
    whenToUse: [
      "Settings panels, form sections, or selectable units.",
      "Avoid decorative cards that only wrap static marketing copy.",
    ],
    tokens: ["card", "card-foreground", "muted-foreground", "border"],
    usageNotes: ["Uses a subtle ring for separation instead of heavy shadows."],
    preview: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Workspace</CardTitle>
          <CardDescription>Invite teammates and manage access.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          12 members · 3 pending invites
        </CardContent>
        <CardFooter>
          <Button size="sm">Manage</Button>
        </CardFooter>
      </Card>
    ),
  },

  avatar: {
    slug: "avatar",
    title: "Avatar",
    description: "User or entity identity. Always provide a fallback initial.",
    importPath: "@/components/ui/avatar",
    whenToUse: ["People lists, comments, account menus."],
    tokens: ["border", "muted"],
    usageNotes: ["Fallback should be initials from the display name."],
    preview: (
      <>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>PC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>NC</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>PU</AvatarFallback>
        </Avatar>
      </>
    ),
  },

  separator: {
    slug: "separator",
    title: "Separator",
    description: "Visual divider between related content groups.",
    importPath: "@/components/ui/separator",
    whenToUse: ["Split sections in menus, sidebars, and stacked layouts."],
    tokens: ["border"],
    usageNotes: ["Prefer semantic structure first; separators are visual only."],
    preview: (
      <div className="flex w-full max-w-sm flex-col gap-3">
        <p className="text-sm text-foreground">Account</p>
        <Separator />
        <p className="text-sm text-muted-foreground">Billing</p>
      </div>
    ),
  },

  progress: {
    slug: "progress",
    title: "Progress",
    description: "Determinate progress for uploads, onboarding, and multi-step flows.",
    importPath: "@/components/ui/progress",
    whenToUse: ["When completion percentage is known."],
    tokens: ["primary", "muted"],
    usageNotes: ["Indicator uses primary (teal). Pair with a text percentage when helpful."],
    preview: <Progress value={66} className="w-full max-w-sm" />,
  },

  spinner: {
    slug: "spinner",
    title: "Spinner",
    description: "Indeterminate loading indicator for in-progress operations.",
    importPath: "@/components/ui/spinner",
    whenToUse: ["Short waits where progress percentage is unknown."],
    tokens: ["foreground"],
    usageNotes: ["Include accessible labeling (role=status is built in)."],
    preview: <Spinner className="size-6" />,
  },

  skeleton: {
    slug: "skeleton",
    title: "Skeleton",
    description: "Placeholder shapes that reserve layout while content loads.",
    importPath: "@/components/ui/skeleton",
    whenToUse: ["Initial page or card loading states."],
    tokens: ["muted"],
    usageNotes: ["Match skeleton geometry to the final content layout."],
    preview: (
      <div className="flex w-full max-w-sm items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    ),
  },

  tooltip: {
    slug: "tooltip",
    title: "Tooltip",
    description: "Short clarifying text on hover or focus. Keep to a single concise phrase.",
    importPath: "@/components/ui/tooltip",
    whenToUse: [
      "Icon-only controls that need a name.",
      "Never put critical info only in a tooltip.",
    ],
    tokens: ["popover", "foreground"],
    usageNotes: ["TooltipProvider is already wrapped at the app root."],
    preview: (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <InfoIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>More information</TooltipContent>
      </Tooltip>
    ),
  },

  dialog: {
    slug: "dialog",
    title: "Dialog",
    description: "Modal surface for focused tasks that require attention without leaving the page.",
    importPath: "@/components/ui/dialog",
    whenToUse: [
      "Short forms and confirmations that stay in context.",
      "Use Alert Dialog specifically for destructive confirmation.",
    ],
    tokens: ["popover", "border", "muted-foreground"],
    usageNotes: ["Always provide a clear title and dismiss path."],
    preview: (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to the profile. Save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 py-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Neer" />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
  },

  "alert-dialog": {
    slug: "alert-dialog",
    title: "Alert Dialog",
    description: "Interruptive confirmation for irreversible or high-impact actions.",
    importPath: "@/components/ui/alert-dialog",
    whenToUse: ["Delete, revoke, or otherwise destructive confirmations."],
    tokens: ["destructive", "popover", "muted-foreground"],
    usageNotes: [
      "Action button should make the consequence clear (Delete, Remove).",
      "Cancel must always be available.",
    ],
    preview: (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
  },

  sheet: {
    slug: "sheet",
    title: "Sheet",
    description: "Slide-over panel for secondary flows — filters, details, mobile nav.",
    importPath: "@/components/ui/sheet",
    whenToUse: [
      "Detail views that should not fully obscure the page.",
      "Mobile navigation drawers.",
    ],
    tokens: ["popover", "border", "muted-foreground"],
    usageNotes: ["Choose side deliberately (left nav, right details)."],
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Details</SheetTitle>
            <SheetDescription>
              Review the record without leaving the list view.
            </SheetDescription>
          </SheetHeader>
          <div className="px-4 text-sm text-muted-foreground">
            Sheet content goes here.
          </div>
        </SheetContent>
      </Sheet>
    ),
  },

  "dropdown-menu": {
    slug: "dropdown-menu",
    title: "Dropdown Menu",
    description: "Contextual actions anchored to a trigger.",
    importPath: "@/components/ui/dropdown-menu",
    whenToUse: [
      "Row actions, overflow menus, account menus.",
      "Prefer Select for choosing a value rather than triggering actions.",
    ],
    tokens: ["popover", "accent", "destructive"],
    usageNotes: ["Group related items; separate destructive actions."],
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },

  popover: {
    slug: "popover",
    title: "Popover",
    description: "Non-modal floating content for lightweight interactions.",
    importPath: "@/components/ui/popover",
    whenToUse: ["Filters, date pickers, short forms that should not block the page."],
    tokens: ["popover", "border", "muted-foreground"],
    usageNotes: ["Use Dialog when the task needs stronger focus trapping."],
    preview: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <p className="text-sm font-medium text-foreground">Dimensions</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Set width and height for the canvas.
          </p>
        </PopoverContent>
      </Popover>
    ),
  },

  breadcrumb: {
    slug: "breadcrumb",
    title: "Breadcrumb",
    description: "Show hierarchy and wayfinding for nested pages.",
    importPath: "@/components/ui/breadcrumb",
    whenToUse: ["Deep IA where users need a path back to parent pages."],
    tokens: ["muted-foreground", "foreground"],
    usageNotes: ["Current page should not be a link."],
    preview: (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components/button">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Button</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
  },

  pagination: {
    slug: "pagination",
    title: "Pagination",
    description: "Navigate across pages of results.",
    importPath: "@/components/ui/pagination",
    whenToUse: ["Tables and search results with discrete pages."],
    tokens: ["border", "muted", "foreground"],
    usageNotes: ["Mark the current page with isActive."],
    preview: (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
  },

  accordion: available(
    "accordion",
    "Accordion",
    "Vertically stacked disclosure sections for FAQs and progressive detail.",
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Pucar DS?</AccordionTrigger>
        <AccordionContent>
          Tokens and components that keep product UI consistent.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is dark mode supported?</AccordionTrigger>
        <AccordionContent>
          Yes — every color token has light and dark values.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),

  calendar: available(
    "calendar",
    "Calendar",
    "Date selection built on react-day-picker, themed with Pucar tokens.",
    <Calendar mode="single" className="rounded-lg border border-border" />,
    ["primary", "accent", "muted", "border"]
  ),

  carousel: available(
    "carousel",
    "Carousel",
    "Horizontally paging content for galleries and feature strips.",
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {["One", "Two", "Three"].map((item) => (
          <CarouselItem key={item}>
            <div className="flex h-28 items-center justify-center rounded-lg border border-border bg-muted text-sm font-medium">
              {item}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),

  command: available(
    "command",
    "Command",
    "Command palette / combobox list powered by cmdk.",
    <Command className="max-w-md rounded-lg border border-border">
      <CommandInput placeholder="Search components…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Button</CommandItem>
          <CommandItem>Dialog</CommandItem>
          <CommandItem>Table</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>,
    ["popover", "accent", "muted"]
  ),

  drawer: available(
    "drawer",
    "Drawer",
    "Mobile-friendly bottom sheet built with Vaul.",
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move goal</DrawerTitle>
          <DrawerDescription>Set your daily activity target.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),

  "hover-card": available(
    "hover-card",
    "Hover Card",
    "Preview content on hover — useful for profiles and compact references.",
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@pucar</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <p className="text-sm font-medium">Pucar</p>
        <p className="text-sm text-muted-foreground">
          Design system documentation for product teams.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),

  menubar: available(
    "menubar",
    "Menubar",
    "Horizontal application menu for desktop-style chrome.",
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),

  "navigation-menu": available(
    "navigation-menu",
    "Navigation Menu",
    "Site or app navigation with optional rich link panels.",
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Foundations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1 p-2">
              <li>
                <NavigationMenuLink href="/foundations/colors">
                  Colors
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/foundations/typography">
                  Typography
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),

  slider: available(
    "slider",
    "Slider",
    "Select a numeric value from a continuous range.",
    <Slider defaultValue={[40]} max={100} step={1} className="w-full max-w-sm" />,
    ["primary", "muted"]
  ),

  sonner: available(
    "sonner",
    "Sonner",
    "Toast notifications for transient success and error feedback.",
    <div className="flex flex-col items-center gap-3">
      <Toaster />
      <Button
        variant="outline"
        onClick={() => toast.success("Saved", { description: "Profile updated." })}
      >
        Show toast
      </Button>
    </div>,
    ["popover", "success", "destructive"]
  ),

  toggle: available(
    "toggle",
    "Toggle",
    "Pressed/unpressed control for formatting and view modes.",
    <Toggle aria-label="Bold">B</Toggle>
  ),

  "toggle-group": available(
    "toggle-group",
    "Toggle Group",
    "Group of toggles for mutually exclusive or multi-select mode switching.",
    <ToggleGroup type="single" defaultValue="day">
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export function getComponentDoc(slug: string) {
  return componentRegistry[slug];
}
