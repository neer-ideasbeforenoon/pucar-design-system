import type { Metadata } from "next";
import {
  ArchiveIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  BanknoteIcon,
  BellIcon,
  BellOffIcon,
  BookmarkIcon,
  BriefcaseIcon,
  Building2Icon,
  CalculatorIcon,
  CalendarCheckIcon,
  CalendarDaysIcon,
  CalendarIcon,
  CalendarXIcon,
  CameraIcon,
  ChartColumnIcon,
  ChartLineIcon,
  ChartPieIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleXIcon,
  ClipboardCheckIcon,
  ClipboardIcon,
  ClockIcon,
  ContactIcon,
  CopyIcon,
  CreditCardIcon,
  DatabaseIcon,
  DownloadIcon,
  EllipsisIcon,
  EllipsisVerticalIcon,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  FileCheckIcon,
  FileIcon,
  FilePlusIcon,
  FileSearchIcon,
  FileTextIcon,
  FileXIcon,
  FilesIcon,
  FilterIcon,
  FolderIcon,
  FolderOpenIcon,
  GavelIcon,
  GlobeIcon,
  HistoryIcon,
  HourglassIcon,
  HouseIcon,
  IdCardIcon,
  ImageIcon,
  InboxIcon,
  IndianRupeeIcon,
  InfoIcon,
  KeyRoundIcon,
  LandmarkIcon,
  LanguagesIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  LinkIcon,
  ListChecksIcon,
  ListIcon,
  LoaderCircleIcon,
  LockIcon,
  LockOpenIcon,
  LogInIcon,
  LogOutIcon,
  MailIcon,
  MailOpenIcon,
  MapIcon,
  MapPinIcon,
  Maximize2Icon,
  MegaphoneIcon,
  MenuIcon,
  MessageCircleIcon,
  MessageSquareIcon,
  MicIcon,
  Minimize2Icon,
  MinusIcon,
  MonitorIcon,
  MoonIcon,
  NavigationIcon,
  OctagonXIcon,
  PackageIcon,
  PanelLeftIcon,
  PaperclipIcon,
  PauseIcon,
  PenLineIcon,
  PencilIcon,
  PhoneIcon,
  PinIcon,
  PlayIcon,
  PlusIcon,
  PrinterIcon,
  QrCodeIcon,
  ReceiptIcon,
  Redo2Icon,
  RefreshCwIcon,
  RotateCcwIcon,
  SaveIcon,
  ScaleIcon,
  ScanIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  Share2Icon,
  ShieldCheckIcon,
  ShieldIcon,
  SignatureIcon,
  SlidersHorizontalIcon,
  SmartphoneIcon,
  StampIcon,
  StarIcon,
  SunIcon,
  TableIcon,
  TagIcon,
  TicketIcon,
  TimerIcon,
  Trash2Icon,
  TrendingDownIcon,
  TrendingUpIcon,
  TriangleAlertIcon,
  Undo2Icon,
  UploadIcon,
  UserCheckIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
  VideoIcon,
  Volume2Icon,
  WalletIcon,
  WifiIcon,
  WifiOffIcon,
  XIcon,
  ZoomInIcon,
  ZoomOutIcon,
  type LucideIcon,
} from "lucide-react";

import { Callout } from "@/components/docs/callout";
import { PageHeader } from "@/components/docs/page-header";
import { DocsSection } from "@/components/docs/section";
import { PUCAR_ICON_NAMES } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Icons",
};

const iconMap: Record<string, LucideIcon> = {
  archive: ArchiveIcon,
  "arrow-down": ArrowDownIcon,
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
  "arrow-up": ArrowUpIcon,
  "arrow-up-right": ArrowUpRightIcon,
  banknote: BanknoteIcon,
  bell: BellIcon,
  "bell-off": BellOffIcon,
  bookmark: BookmarkIcon,
  briefcase: BriefcaseIcon,
  "building-2": Building2Icon,
  calculator: CalculatorIcon,
  calendar: CalendarIcon,
  "calendar-check": CalendarCheckIcon,
  "calendar-days": CalendarDaysIcon,
  "calendar-x": CalendarXIcon,
  camera: CameraIcon,
  "chart-column": ChartColumnIcon,
  "chart-line": ChartLineIcon,
  "chart-pie": ChartPieIcon,
  check: CheckIcon,
  "chevron-down": ChevronDownIcon,
  "chevron-left": ChevronLeftIcon,
  "chevron-right": ChevronRightIcon,
  "chevron-up": ChevronUpIcon,
  "chevrons-up-down": ChevronsUpDownIcon,
  "circle-alert": CircleAlertIcon,
  "circle-check": CircleCheckIcon,
  "circle-help": CircleHelpIcon,
  "circle-x": CircleXIcon,
  clipboard: ClipboardIcon,
  "clipboard-check": ClipboardCheckIcon,
  clock: ClockIcon,
  contact: ContactIcon,
  copy: CopyIcon,
  "credit-card": CreditCardIcon,
  database: DatabaseIcon,
  download: DownloadIcon,
  ellipsis: EllipsisIcon,
  "ellipsis-vertical": EllipsisVerticalIcon,
  "external-link": ExternalLinkIcon,
  eye: EyeIcon,
  "eye-off": EyeOffIcon,
  file: FileIcon,
  "file-check": FileCheckIcon,
  "file-plus": FilePlusIcon,
  "file-search": FileSearchIcon,
  "file-text": FileTextIcon,
  "file-x": FileXIcon,
  files: FilesIcon,
  filter: FilterIcon,
  folder: FolderIcon,
  "folder-open": FolderOpenIcon,
  gavel: GavelIcon,
  globe: GlobeIcon,
  history: HistoryIcon,
  hourglass: HourglassIcon,
  house: HouseIcon,
  "id-card": IdCardIcon,
  image: ImageIcon,
  inbox: InboxIcon,
  "indian-rupee": IndianRupeeIcon,
  info: InfoIcon,
  "key-round": KeyRoundIcon,
  landmark: LandmarkIcon,
  languages: LanguagesIcon,
  "layout-dashboard": LayoutDashboardIcon,
  "layout-grid": LayoutGridIcon,
  link: LinkIcon,
  list: ListIcon,
  "list-checks": ListChecksIcon,
  "loader-circle": LoaderCircleIcon,
  lock: LockIcon,
  "lock-open": LockOpenIcon,
  "log-in": LogInIcon,
  "log-out": LogOutIcon,
  mail: MailIcon,
  "mail-open": MailOpenIcon,
  map: MapIcon,
  "map-pin": MapPinIcon,
  "maximize-2": Maximize2Icon,
  megaphone: MegaphoneIcon,
  menu: MenuIcon,
  "message-circle": MessageCircleIcon,
  "message-square": MessageSquareIcon,
  mic: MicIcon,
  "minimize-2": Minimize2Icon,
  minus: MinusIcon,
  monitor: MonitorIcon,
  moon: MoonIcon,
  navigation: NavigationIcon,
  "octagon-x": OctagonXIcon,
  package: PackageIcon,
  "panel-left": PanelLeftIcon,
  paperclip: PaperclipIcon,
  pause: PauseIcon,
  "pen-line": PenLineIcon,
  pencil: PencilIcon,
  phone: PhoneIcon,
  pin: PinIcon,
  play: PlayIcon,
  plus: PlusIcon,
  printer: PrinterIcon,
  "qr-code": QrCodeIcon,
  receipt: ReceiptIcon,
  "redo-2": Redo2Icon,
  "refresh-cw": RefreshCwIcon,
  "rotate-ccw": RotateCcwIcon,
  save: SaveIcon,
  scale: ScaleIcon,
  scan: ScanIcon,
  search: SearchIcon,
  send: SendIcon,
  settings: SettingsIcon,
  "share-2": Share2Icon,
  shield: ShieldIcon,
  "shield-check": ShieldCheckIcon,
  signature: SignatureIcon,
  "sliders-horizontal": SlidersHorizontalIcon,
  smartphone: SmartphoneIcon,
  stamp: StampIcon,
  star: StarIcon,
  sun: SunIcon,
  table: TableIcon,
  tag: TagIcon,
  ticket: TicketIcon,
  timer: TimerIcon,
  "trash-2": Trash2Icon,
  "trending-down": TrendingDownIcon,
  "trending-up": TrendingUpIcon,
  "triangle-alert": TriangleAlertIcon,
  "undo-2": Undo2Icon,
  upload: UploadIcon,
  user: UserIcon,
  "user-check": UserCheckIcon,
  "user-plus": UserPlusIcon,
  users: UsersIcon,
  video: VideoIcon,
  "volume-2": Volume2Icon,
  wallet: WalletIcon,
  wifi: WifiIcon,
  "wifi-off": WifiOffIcon,
  x: XIcon,
  "zoom-in": ZoomInIcon,
  "zoom-out": ZoomOutIcon,
};

export default function IconsPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Icons"
        description="Lucide icon set as used across Pucar. 16px default in controls; stroke inherits currentColor."
      />

      <Callout>
        Prefer icons from this allowlist ({PUCAR_ICON_NAMES.length} names). Import
        from <code>lucide-react</code>. Color via text utilities —{" "}
        <code>text-foreground</code>, <code>text-muted-foreground</code>, or
        status ink — never decorative teal.
      </Callout>

      <DocsSection
        title="Sizes"
        description="Controls use size-4 (16px). Larger only when the icon is the primary content."
      >
        <div className="flex items-end gap-6 text-foreground">
          <div className="flex flex-col items-center gap-2">
            <SearchIcon className="size-3.5" />
            <span className="text-caption text-muted-foreground">14</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SearchIcon className="size-4" />
            <span className="text-caption text-muted-foreground">16</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SearchIcon className="size-5" />
            <span className="text-caption text-muted-foreground">20</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SearchIcon className="size-6" />
            <span className="text-caption text-muted-foreground">24</span>
          </div>
        </div>
      </DocsSection>

      <DocsSection
        title="Allowlist"
        description="Names match the Abhiram Figma Icons page. Use isPucarIcon() from @/lib/icons when validating agent output."
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {PUCAR_ICON_NAMES.map((name) => {
            const Icon = iconMap[name];
            if (!Icon) return null;
            return (
              <div
                key={name}
                className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm"
              >
                <Icon className="size-4 shrink-0 text-foreground" aria-hidden />
                <span className="truncate font-mono text-xs text-muted-foreground">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </DocsSection>
    </div>
  );
}
