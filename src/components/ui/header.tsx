import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router";
import { Button } from "./button";

export default function Header() {
  return (
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
            <NavLink to="/course-verify">选课报考校验</NavLink>
          </Button>
          <Button asChild variant="ghost" size="sm" className="text-base">
            <NavLink to="/help">帮助</NavLink>
          </Button>
        </nav>
      </div>
    </header>
  );
}
