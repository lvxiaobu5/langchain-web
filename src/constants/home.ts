export type NavItem = {
  label: string;
  icon: string;
  active?: boolean;
  badge?: string;
};

export type RecentItem = {
  title: string;
};

export type QuickAction = {
  label: string;
  icon: string;
};

export const primaryNavItems: NavItem[] = [
  { label: "新聊天", icon: "compose", active: true },
  { label: "图片", icon: "image", badge: "已更新" },
  { label: "资料库", icon: "library" },
  { label: "项目", icon: "folder" },
  { label: "定时任务", icon: "clock" },
  { label: "插件", icon: "plugin" },
  { label: "更多", icon: "more" },
];

export const recentItems: RecentItem[] = [
  { title: "身份介绍" },
  { title: "Mac当前目录打开终端" },
  { title: "解释AI测试提交" },
  { title: "Mac输入法比较" },
  { title: "React插件测试方法" },
  { title: "问候交流" },
  { title: "有效登录方式" },
  { title: "下载Codex CLI" },
  { title: "解释设备代码授权" },
  { title: "登录后仍需手机号" },
  { title: "欢迎使用 ChatGPT" },
];

export const quickActions: QuickAction[] = [
  { label: "创建图像或贴纸", icon: "image" },
  { label: "撰写或编辑", icon: "pen" },
  { label: "搜索网页", icon: "globe" },
];

export const modelOptions = ["即时", "GPT-5.6 Sol", "知识库"];
