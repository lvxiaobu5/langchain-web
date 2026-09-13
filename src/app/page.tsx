import { AppSidebar } from "@/components/home/app-sidebar";
import { ChatHome } from "@/components/home/chat-home";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white text-neutral-950">
      <AppSidebar />
      <ChatHome />
    </main>
  );
}
