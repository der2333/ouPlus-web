import * as React from "react";
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { LayoutDashboard } from "lucide-react";

function CoursePage() {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [file, setFile] = React.useState<File | null>(null);
  const [fileName, setFileName] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const acceptRE = /\.(xlsx|xls|csv)$/i;

  const handleFile = (f: File | null) => {
    setError(null);
    if (!f) {
      setFile(null);
      setFileName(null);
      return;
    }
    if (!acceptRE.test(f.name)) {
      setError("不支持的文件类型，请上传 .xlsx/.xls/.csv");
      return;
    }
    setFile(f);
    setFileName(f.name);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0];
    handleFile(f ?? null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    handleFile(f ?? null);
  };

  const handleClear = () => {
    handleFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleProcess = () => {
    setError(null);
    if (!file) {
      setError("请先选择一个文件再解析");
      return;
    }
    // 生成选课表
  };

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
              <NavLink to="/graduation">毕业审核</NavLink>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-base">
              <NavLink to="/help">帮助</NavLink>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-10">
        <section className="mb-8">
          <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 p-6">
            <h2 className="text-2xl font-semibold">上传选课 Excel</h2>
            <p className="text-sm text-muted-foreground mt-1">
              将学校导出的选课表上传（支持 .xlsx .xls
              .csv）。选择或拖拽文件到下面的区域。
            </p>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-6">
            <div className="group bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">选择或拖拽文件上传</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    支持 .xlsx .xls .csv。单次上传一个文件。
                  </p>

                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="mt-4 rounded-md border-2 border-dashed border-muted/40 p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm">{fileName ?? "未选择文件"}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        ref={inputRef}
                        type="file"
                        accept=".xlsx,.xls,.csv"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Button
                        onClick={() => inputRef.current?.click()}
                        variant="secondary"
                        size="sm"
                      >
                        选择文件
                      </Button>
                      <Button
                        onClick={handleClear}
                        variant="destructive"
                        size="sm"
                      >
                        清除
                      </Button>
                    </div>
                  </div>

                  {error && (
                    <p className="text-sm text-destructive mt-2">{error}</p>
                  )}

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Button
                      onClick={handleProcess}
                      variant="outline"
                      size="sm"
                    >
                      开始解析
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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

export default CoursePage;
