import { modelOptions, quickActions } from "@/constants/home";
import { UiIcon } from "./ui-icon";

export function ChatHome() {
  return (
    <section className="flex min-h-screen flex-1 flex-col bg-white">
      <header className="relative flex h-14 items-center justify-center px-4">
        <div className="grid h-9 w-[216px] grid-cols-2 rounded-full bg-neutral-100 p-0.5 text-sm text-neutral-700">
          <button className="rounded-full bg-white font-medium text-black shadow-sm" type="button">聊天</button>
          <button className="rounded-full" type="button">工作</button>
        </div>
        <button aria-label="刷新" className="absolute right-5 top-3 grid size-8 place-items-center rounded-full text-neutral-700 hover:bg-neutral-100" type="button">
          <UiIcon className="size-5" name="refresh" />
        </button>
      </header>

      <div className="flex flex-1 items-center justify-center px-5 pb-32 pt-10">
        <div className="w-full max-w-[770px]">
          <h2 className="mb-8 text-center text-[28px] font-medium tracking-normal text-black sm:text-[30px]">今天有什么计划?</h2>

          <div className="flex min-h-14 items-center gap-3 rounded-[28px] border border-neutral-200 bg-white px-4 shadow-[0_12px_34px_rgba(0,0,0,0.08)]">
            <button aria-label="添加附件" className="grid size-8 shrink-0 place-items-center rounded-full text-neutral-800 hover:bg-neutral-100" type="button">
              <UiIcon className="size-5" name="plus" />
            </button>
            <input
              aria-label="聊天输入框"
              className="h-12 min-w-0 flex-1 bg-transparent text-base text-neutral-900 outline-none placeholder:text-neutral-400"
              placeholder="问问 ChatGPT"
              type="text"
            />
            <select aria-label="模型选择" className="hidden h-9 rounded-full bg-transparent text-sm text-neutral-500 outline-none sm:block" defaultValue={modelOptions[0]}>
              {modelOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
            <button aria-label="语音输入" className="grid size-8 shrink-0 place-items-center rounded-full text-black hover:bg-neutral-100" type="button">
              <UiIcon className="size-5" name="mic" />
            </button>
            <button aria-label="发送" className="grid size-9 shrink-0 place-items-center rounded-full bg-blue-500 text-white hover:bg-blue-600" type="button">
              <UiIcon className="size-5" name="wave" />
            </button>
          </div>

          <div className="mt-8 space-y-5 pl-4 text-neutral-500 sm:pl-5">
            {quickActions.map((action) => (
              <button className="flex items-center gap-4 text-base hover:text-neutral-800" key={action.label} type="button">
                <UiIcon className="size-5" name={action.icon} />
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button aria-label="AI 助手" className="fixed bottom-5 right-5 grid size-8 place-items-center rounded-full bg-pink-400 text-xs font-bold text-white shadow-lg" type="button">AI</button>
    </section>
  );
}
