import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="bg-teal-100 min-h-screen">
      <div className="text-lg bg-teal-500 text-teal-100 flex px-6 py-4 justify-between">
        <h1>开大助手</h1>
        <nav className="flex gap-4">
          <NavLink to="">首页</NavLink>
          <NavLink to="">生成选课表</NavLink>
          <NavLink to="">毕业审核</NavLink>
        </nav>
        <Button>Click me</Button>
      </div>
      <div>core</div>
      <div>footer</div>
    </div>
  );
}

export default App;
