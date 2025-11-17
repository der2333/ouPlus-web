import * as React from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Book, CheckCircle, ChevronRightIcon, HelpCircle } from "lucide-react";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";

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
    title: "选课名单生成",
    description: "自动生成可导入一平台的选课表。",
    to: "/course",
    Icon: Book,
  },
  {
    id: "graduation",
    title: "选课报考校验",
    description: "对选课、报考数据进行校验，找出没有成功报考的课程。",
    to: "/course-verify",
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
    <div className="group bg-card border rounded-lg p-6 shadow-sm transition-colors duration-150">
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
        <Button asChild variant="secondary" size="icon" className="size-8">
          <NavLink to={feature.to}>
            <ChevronRightIcon />
          </NavLink>
        </Button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

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

      <Footer />
    </div>
  );
}

export default App;
