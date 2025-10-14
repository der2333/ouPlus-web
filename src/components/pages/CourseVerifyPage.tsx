import { LayoutDashboard } from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router";

export default function CourseVerifyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LayoutDashboard className="h-6 w-6" />
            <h1 className="text-xl font-bold">开大助手</h1>
          </div>

          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="text-base">
              <NavLink to="/">首页</NavLink>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-base">
              <NavLink to="/course">生成选课表</NavLink>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-base">
              <NavLink to="/CourseVerify">选课报考校验</NavLink>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-base">
              <NavLink to="/help">帮助</NavLink>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-10"></main>

      <footer className="flex border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} 开大助手
        </div>
      </footer>
    </div>
  );
}
