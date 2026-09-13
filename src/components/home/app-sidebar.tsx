import { primaryNavItems, recentItems } from "@/constants/home";
import { UiIcon } from "./ui-icon";

export function AppSidebar() {
  return (
    <aside className="hidden h-screen w-[260px] shrink-0 border-r border-neutral-200 bg-neutral-50 px-2 py-3 lg:flex lg:flex-col">
      <div className="flex h-10 items-center justify-between px-4">
        <h1 className="text-lg font-semibold text-black">ChatGPT</h1>
        <div className="flex items-center gap-3 text-neutral-600">
          <button aria-label="搜索" className="grid size-8 place-items-center rounded-full hover:bg-neutral-200" type="button">
            <UiIcon className="size-5" name="search" />
          </button>
          <button aria-label="收起侧边栏" className="grid size-8 place-items-center rounded-full hover:bg-neutral-200" type="button">
            <UiIcon className="size-5" name="sidebar" />
          </button>
        </div>
      </div>

      <nav className="mt-4 space-y-1">
        {primaryNavItems.map((item) => (
          <button
            className={`flex h-9 w-full items-center gap-2 rounded-lg px-3 text-left text-sm text-black transition ${
              item.active ? "bg-neutral-200" : "hover:bg-neutral-200/70"
            }`}
            key={item.label}
            type="button"
          >
            <UiIcon className="size-5 shrink-0" name={item.icon} />
            <span className="truncate">{item.label}</span>
            {item.badge ? <span className="rounded-full border border-neutral-300 px-1.5 text-[10px] text-neutral-500">{item.badge}</span> : null}
          </button>
        ))}
      </nav>

      <div className="mt-8 min-h-0 flex-1 overflow-hidden px-2">
        <p className="mb-3 px-2 text-sm text-neutral-400">最近</p>
        <div className="space-y-1 overflow-y-auto pr-1">
          {recentItems.map((item) => (
            <button className="block h-9 w-full truncate rounded-lg px-2 text-left text-sm text-black hover:bg-neutral-200/70" key={item.title} type="button">
              {item.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="grid size-6 shrink-0 place-items-center rounded-full bg-purple-500 text-xs font-semibold text-white">ME</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-black">merlin</p>
            <p className="text-xs text-neutral-500">Plus</p>
          </div>
        </div>
        <button aria-label="商店" className="grid size-8 place-items-center rounded-full text-neutral-600 hover:bg-neutral-200" type="button">
          <UiIcon className="size-5" name="store" />
        </button>
      </div>
    </aside>
  );
}
