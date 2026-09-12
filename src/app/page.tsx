import { WorkflowPanel } from "@/components/workflow-panel";

const stackItems = [
  "Next.js App Router",
  "React Server Components",
  "TypeScript",
  "Tailwind CSS",
  "MobX",
  "Route Handlers",
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Full-stack starter
          </p>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
              LangChain Web
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              一个已经准备好继续扩展的 Next.js 全栈项目。你可以从这里接入数据库、
              认证、AI 工作流、后台管理或产品页面。
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stackItems.map((item) => (
            <div
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              key={item}
            >
              <h2 className="text-base font-semibold text-slate-950">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                已经放进项目基础配置，后续可以直接在此基础上继续开发。
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-950">API 检查</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            访问 <code className="rounded bg-slate-100 px-1.5 py-1">/api/health</code>{" "}
            可以确认后端 Route Handler 正常工作。
          </p>
        </div>

        <WorkflowPanel />
      </section>
    </main>
  );
}
