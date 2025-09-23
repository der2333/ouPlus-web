import * as React from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Book, CheckCircle, HelpCircle, LayoutDashboard } from "lucide-react";

type Feature = {
  id: string;
  title: string;
  description: string;
  to: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
  {
    id: "course",
    title: "生成选课表",
    description: "自动生成可导入一平台的选课表。",
    to: "/course",
    Icon: Book,
  },
  {
    id: "graduation",
    title: "毕业条件自查",
    description: "毕业前检查学生是否",
    to: "/graduation",
    Icon: CheckCircle,
  },
  // {
  //   id: "tools",
  //   title: "工具箱",
  //   description: "成绩预测、课表优化、冲突检测等实用小工具合集。",
  //   to: "/tools",
  //   Icon: Wrench,
  // },
  {
    id: "help",
    title: "帮助与文档",
    description: "使用指南、常见问题与反馈入口。",
    to: "/help",
    Icon: HelpCircle,
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.Icon;
  return (
    <div className="group bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-colors duration-150">
      <div className="flex items-start gap-4">
        <div className="rounded-md bg-muted/60 p-2">
          <Icon className="h-6 w-6 text-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {feature.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button asChild variant="ghost" size="sm">
          <NavLink to={feature.to}>前往</NavLink>
        </Button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LayoutDashboard className="h-6 w-6" />
            <h1 className="text-xl font-bold">开大助手</h1>
          </div>

          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <NavLink to="/">首页</NavLink>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <NavLink to="/course">生成选课表</NavLink>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <NavLink to="/graduation">毕业审核</NavLink>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <NavLink to="/help">帮助</NavLink>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-10">
        <section className="mb-8">
          <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 p-6">
            <h2 className="text-2xl font-semibold">快速开始</h2>
            <p className="text-sm text-muted-foreground mt-1">
              在下面选择你想使用的功能，界面会引导你完成下一步。
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">功能</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => <FeatureCard key={f.id} feature={f} />)}
          </div>
        </section>
      </main>

      <footer className="flex border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} 开大助手
        </div>
      </footer>
    </div>
  );
}

export default App;
