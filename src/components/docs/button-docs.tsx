"use client";

import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const BUTTON_VARIANTS = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "destructive-solid",
  "success",
  "warning",
  "info",
  "destructive-ghost",
  "link",
] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_SIZES = ["xs", "sm", "default", "lg"] as const;
export type ButtonSize = (typeof BUTTON_SIZES)[number];

export const BUTTON_ICON_SIZES = [
  "icon-xs",
  "icon-sm",
  "icon",
  "icon-lg",
] as const;
export type ButtonIconSize = (typeof BUTTON_ICON_SIZES)[number];

const SIZE_LABEL: Record<ButtonSize, string> = {
  xs: "XS",
  sm: "SM",
  default: "MD",
  lg: "LG",
};

const ICON_SIZE_LABEL: Record<ButtonIconSize, string> = {
  "icon-xs": "XS",
  "icon-sm": "SM",
  icon: "MD",
  "icon-lg": "LG",
};

/** Forced hover composites — mirrors `hover:*` on each variant. */
const HOVER_CLASS: Record<ButtonVariant, string> = {
  default: "bg-primary-hover",
  outline: "bg-muted text-foreground",
  secondary: "bg-secondary-hover",
  ghost: "bg-muted text-foreground",
  destructive: "bg-destructive-muted-hover",
  "destructive-solid": "bg-destructive-hover",
  "destructive-ghost":
    "bg-destructive-muted text-destructive-muted-foreground",
  success: "bg-success-hover",
  warning: "bg-warning-hover",
  info: "bg-info-hover",
  link: "underline",
};

function focusClass(variant: ButtonVariant) {
  if (variant === "destructive") {
    return "border-destructive ring-3 ring-focus-ring-destructive";
  }
  return "border-ring ring-3 ring-ring/50";
}

type DemoState = "default" | "hover" | "focus" | "disabled";

function stateClass(variant: ButtonVariant, state: DemoState) {
  if (state === "hover") return HOVER_CLASS[variant];
  if (state === "focus") return focusClass(variant);
  return undefined;
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-caption font-medium text-muted-foreground">
      {children}
    </p>
  );
}

function LabeledExample({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      {children}
      <Caption>{label}</Caption>
    </div>
  );
}

/** Figma Examples frame — realistic labels under each sample. */
export function ButtonExamples() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <p className="text-caption font-medium text-muted-foreground">
          Variants — one teal default per view; soft destructive at rest
        </p>
        <div className="flex flex-wrap gap-3">
          <LabeledExample label="default">
            <Button>File a complaint</Button>
          </LabeledExample>
          <LabeledExample label="outline">
            <Button variant="outline">Save draft</Button>
          </LabeledExample>
          <LabeledExample label="secondary">
            <Button variant="secondary">View details</Button>
          </LabeledExample>
          <LabeledExample label="ghost">
            <Button variant="ghost">Cancel</Button>
          </LabeledExample>
          <LabeledExample label="destructive">
            <Button variant="destructive">Remove party</Button>
          </LabeledExample>
          <LabeledExample label="destructive-solid">
            <Button variant="destructive-solid">Delete case</Button>
          </LabeledExample>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <p className="text-caption font-medium text-muted-foreground">
          Sizes — default is MD 40px; LG 44px for citizen-facing primary actions
        </p>
        <div className="flex flex-wrap items-end gap-3">
          <LabeledExample label="XS · 32px">
            <Button size="xs">Filter</Button>
          </LabeledExample>
          <LabeledExample label="SM · 36px">
            <Button size="sm">Apply</Button>
          </LabeledExample>
          <LabeledExample label="MD · 40px">
            <Button size="default">Continue</Button>
          </LabeledExample>
          <LabeledExample label="LG · 44px">
            <Button size="lg">Continue to filing</Button>
          </LabeledExample>
        </div>
      </div>
    </div>
  );
}

function MatrixHeader({
  states,
  sizeLabels,
  columns,
}: {
  states: DemoState[];
  sizeLabels: string[];
  columns: string;
}) {
  return (
    <div className="sticky top-0 z-10 flex flex-col gap-1 border-b border-border bg-card pb-2">
      <div className="grid items-center gap-2" style={{ gridTemplateColumns: columns }}>
        <span className="text-caption font-medium text-muted-foreground">
          Variant
        </span>
        {states.map((state) => (
          <span
            key={state}
            className="text-center text-caption font-medium capitalize text-muted-foreground"
            style={{ gridColumn: `span ${sizeLabels.length}` }}
          >
            {state}
          </span>
        ))}
      </div>
      <div className="grid items-center gap-2" style={{ gridTemplateColumns: columns }}>
        <span />
        {states.flatMap((state) =>
          sizeLabels.map((label) => (
            <span
              key={`${state}-${label}`}
              className="text-center font-mono text-[10px] text-muted-foreground"
            >
              {label}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

/** Figma Button master — variant × size × state. */
export function ButtonMasterMatrix() {
  const states: DemoState[] = ["default", "hover", "focus", "disabled"];
  const columns = `8.5rem repeat(${states.length * BUTTON_SIZES.length}, minmax(2.75rem, auto))`;

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex min-w-max flex-col gap-2">
        <MatrixHeader
          states={states}
          sizeLabels={["XS", "SM", "MD", "LG"]}
          columns={columns}
        />
        {BUTTON_VARIANTS.map((variant) => (
          <div
            key={variant}
            className="grid items-center gap-2"
            style={{ gridTemplateColumns: columns }}
          >
            <span className="truncate font-mono text-xs text-muted-foreground">
              {variant}
            </span>
            {states.flatMap((state) =>
              BUTTON_SIZES.map((size) => (
                <Button
                  key={`${variant}-${state}-${size}`}
                  variant={variant}
                  size={size}
                  disabled={state === "disabled"}
                  tabIndex={-1}
                  className={cn(
                    "pointer-events-none min-w-16",
                    stateClass(variant, state)
                  )}
                >
                  {SIZE_LABEL[size]}
                </Button>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Figma Button Icon master — icon-only × variant × size × state. */
export function ButtonIconMatrix() {
  const states: DemoState[] = ["default", "hover", "focus", "disabled"];
  const columns = `8.5rem repeat(${states.length * BUTTON_ICON_SIZES.length}, minmax(2.75rem, auto))`;

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex min-w-max flex-col gap-2">
        <MatrixHeader
          states={states}
          sizeLabels={["XS", "SM", "MD", "LG"]}
          columns={columns}
        />
        {BUTTON_VARIANTS.map((variant) => (
          <div
            key={variant}
            className="grid items-center gap-2"
            style={{ gridTemplateColumns: columns }}
          >
            <span className="truncate font-mono text-xs text-muted-foreground">
              {variant}
            </span>
            {states.flatMap((state) =>
              BUTTON_ICON_SIZES.map((size) => (
                <Button
                  key={`${variant}-${state}-${size}`}
                  variant={variant}
                  size={size}
                  disabled={state === "disabled"}
                  tabIndex={-1}
                  aria-label={`${variant} ${ICON_SIZE_LABEL[size]} ${state}`}
                  className={cn(
                    "pointer-events-none",
                    stateClass(variant, state)
                  )}
                >
                  <PlusIcon />
                </Button>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Leading / trailing icon samples across variants. */
export function ButtonWithIconsMatrix() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex min-w-max flex-col gap-3">
        <div className="grid grid-cols-[8.5rem_repeat(3,minmax(0,auto))] items-center gap-3">
          <span className="text-caption font-medium text-muted-foreground">
            Variant
          </span>
          <span className="text-caption font-medium text-muted-foreground">
            Icon start
          </span>
          <span className="text-caption font-medium text-muted-foreground">
            Icon end
          </span>
          <span className="text-caption font-medium text-muted-foreground">
            Both
          </span>
        </div>
        {BUTTON_VARIANTS.filter((v) => v !== "link").map((variant) => (
          <div
            key={variant}
            className="grid grid-cols-[8.5rem_repeat(3,minmax(0,auto))] items-center gap-3"
          >
            <span className="truncate font-mono text-xs text-muted-foreground">
              {variant}
            </span>
            <Button variant={variant}>
              <PlusIcon data-icon="inline-start" />
              Label
            </Button>
            <Button variant={variant}>
              Label
              <PlusIcon data-icon="inline-end" />
            </Button>
            <Button variant={variant}>
              <PlusIcon data-icon="inline-start" />
              Label
              <PlusIcon data-icon="inline-end" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
