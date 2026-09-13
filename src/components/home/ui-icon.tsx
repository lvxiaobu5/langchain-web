type IconProps = {
  name: string;
  className?: string;
};

const commonProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8,
  viewBox: "0 0 24 24",
};

export function UiIcon({ name, className }: IconProps) {
  switch (name) {
    case "compose":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></svg>;
    case "image":
      return <svg aria-hidden="true" className={className} {...commonProps}><rect height="16" rx="2" width="18" x="3" y="4" /><circle cx="8.5" cy="9" r="1.5" /><path d="m21 15-5-5L5 21" /></svg>;
    case "library":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="M4 19V5" /><path d="M8 19V5" /><path d="m12 19-2-14" /><path d="m18 19-4-14" /><path d="M4 19h16" /></svg>;
    case "folder":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5Z" /></svg>;
    case "clock":
      return <svg aria-hidden="true" className={className} {...commonProps}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l-3 2" /></svg>;
    case "plugin":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="M8 8V5a3 3 0 0 1 6 0v3" /><path d="M7 8h10v5a5 5 0 0 1-10 0Z" /><path d="M12 18v3" /></svg>;
    case "more":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="M5 12h.01" /><path d="M12 12h.01" /><path d="M19 12h.01" /></svg>;
    case "search":
      return <svg aria-hidden="true" className={className} {...commonProps}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
    case "sidebar":
      return <svg aria-hidden="true" className={className} {...commonProps}><rect height="16" rx="2" width="18" x="3" y="4" /><path d="M9 4v16" /></svg>;
    case "plus":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="M12 5v14" /><path d="M5 12h14" /></svg>;
    case "mic":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z" /><path d="M19 11a7 7 0 0 1-14 0" /><path d="M12 18v3" /></svg>;
    case "wave":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="M6 14v-4" /><path d="M10 17V7" /><path d="M14 15V9" /><path d="M18 13v-2" /></svg>;
    case "pen":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="m16 4 4 4L9 19l-5 1 1-5Z" /></svg>;
    case "globe":
      return <svg aria-hidden="true" className={className} {...commonProps}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></svg>;
    case "refresh":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="M20 12a8 8 0 1 1-2.3-5.7" /><path d="M20 4v6h-6" /></svg>;
    case "store":
      return <svg aria-hidden="true" className={className} {...commonProps}><path d="M4 10h16l-1-5H5Z" /><path d="M6 10v9h12v-9" /><path d="M9 19v-5h6v5" /></svg>;
    default:
      return null;
  }
}
