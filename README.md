# LangChain Web

LangChain Web 是一个基于 LangChain 框架的 AI 应用项目，目标是构建类似 ChatGPT 的简洁 AI 交互网站，并逐步扩展知识库问答、RAG 检索增强生成、工具调用、工作流编排和数据持久化能力。

## 技术栈

- LangChain：AI 应用编排、模型调用、工具调用与链式流程
- RAG：文档切分、向量检索、上下文增强问答
- Next.js：全栈 Web 框架与 App Router
- TypeScript：类型安全的前后端开发体验
- React：交互式前端界面
- MobX：客户端状态管理
- MySQL：业务数据、会话、用户和知识库元数据存储
- Tailwind CSS：页面样式与响应式布局

## 当前功能

- Next.js App Router 项目结构
- TypeScript 基础配置
- MobX 全局状态示例
- AI 工作流面板原型
- `/api/health` 后端健康检查接口
- 可继续扩展的 LangChain AI 应用基础工程

## 项目方向

这个项目后续会围绕 AI 交互网站继续扩展：

- 极简聊天交互页面
- 多轮对话与上下文记忆
- LangChain 模型接入
- RAG 知识库问答
- 文档上传、解析、切分和检索
- MySQL 数据持久化
- 会话历史记录
- 模型选择与参数配置
- 工具调用和插件能力
- 管理后台与知识库管理

## 快速开始

安装依赖：

```bash
pnpm install
```

启动开发服务：

```bash
pnpm dev
```

打开浏览器访问：

```text
http://localhost:3000
```

检查后端接口：

```text
http://localhost:3000/api/health
```

## 常用命令

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## 目录结构

```text
src/
  app/
    api/health/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    workflow-panel.tsx
  providers/
    store-provider.tsx
  stores/
    root-store.ts
```

## 开发说明

当前版本是 AI 应用的前端与基础工程骨架。后续可以在 `src/app/api` 中增加 LangChain 相关 API，在 `src/components` 中完善聊天、文件上传、知识库和模型配置界面，在 `src/stores` 中管理会话、工作流和用户交互状态。
