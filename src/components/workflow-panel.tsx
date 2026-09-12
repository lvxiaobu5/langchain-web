"use client";

import { observer } from "mobx-react-lite";
import { useRootStore } from "@/providers/store-provider";

const workflows = ["知识库问答", "文档总结", "工具调用"];

export const WorkflowPanel = observer(function WorkflowPanel() {
  const store = useRootStore();

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">MobX 状态面板</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            当前工作流：{store.selectedWorkflow}，请求次数：{store.requestCount}
          </p>
        </div>
        <button
          className="h-10 rounded-md bg-slate-950 px-4 text-sm font-medium text-white transition hover:bg-slate-800"
          onClick={() => store.incrementRequestCount()}
          type="button"
        >
          模拟请求
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {workflows.map((workflow) => (
          <button
            className={`h-9 rounded-md border px-3 text-sm transition ${
              store.selectedWorkflow === workflow
                ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
            }`}
            key={workflow}
            onClick={() => store.selectWorkflow(workflow)}
            type="button"
          >
            {workflow}
          </button>
        ))}
      </div>

      <label className="mt-5 flex items-center gap-3 text-sm text-slate-700">
        <input
          checked={store.streamingEnabled}
          className="size-4 accent-emerald-600"
          onChange={() => store.toggleStreaming()}
          type="checkbox"
        />
        启用流式响应
      </label>
    </div>
  );
});

