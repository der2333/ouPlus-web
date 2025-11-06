import * as React from "react";
import { LayoutDashboard, Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router";
import courseVerify from "@/lib/course-verify";
import buildXLSX from "@/lib/build-xlsx";

export default function CourseVerifyPage() {
  const inputRef1 = React.useRef<HTMLInputElement | null>(null);
  const inputRef2 = React.useRef<HTMLInputElement | null>(null);
  const [file1, setFile1] = React.useState<File | null>(null);
  const [fileName1, setFileName1] = React.useState<string | null>(null);
  const [error1, setError1] = React.useState<string | null>(null);
  const [file2, setFile2] = React.useState<File | null>(null);
  const [fileName2, setFileName2] = React.useState<string | null>(null);
  const [error2, setError2] = React.useState<string | null>(null);

  const acceptRE = /\.(xlsx|xls|csv)$/i;

  const handleFile1 = (f: File | null) => {
    setError1(null);
    if (!f) {
      setFile1(null);
      setFileName1(null);
      return;
    }
    if (!acceptRE.test(f.name)) {
      setError1("不支持的文件类型，请上传 .xlsx/.xls/.csv");
      return;
    }
    setFile1(f);
    setFileName1(f.name);
  };

  const handleFile2 = (f: File | null) => {
    setError2(null);
    if (!f) {
      setFile2(null);
      setFileName2(null);
      return;
    }
    if (!acceptRE.test(f.name)) {
      setError2("不支持的文件类型，请上传 .xlsx/.xls/.csv");
      return;
    }
    setFile2(f);
    setFileName2(f.name);
  };

  const handleFileChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0];
    handleFile1(f ?? null);
  };

  const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0];
    handleFile2(f ?? null);
  };

  const handleDrop1 = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    handleFile1(f ?? null);
  };

  const handleDrop2 = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    handleFile2(f ?? null);
  };

  const handleClear1 = () => {
    handleFile1(null);
    if (inputRef1.current) inputRef1.current.value = "";
  };

  const handleClear2 = () => {
    handleFile2(null);
    if (inputRef2.current) inputRef2.current.value = "";
  };

  const handleProcess = async () => {
    setError1(null);
    setError2(null);
    if (!file1) {
      setError1("请先选择选课名单文件");
      return;
    }
    if (!file2) {
      setError2("请先选择报考确认数据文件");
      return;
    }
    // TODO: 校验逻辑
    const missInVerify = await courseVerify(file1, file2);
    if (missInVerify.length === 0) {
      alert("校验成功，选课数据正确");
    } else {
      buildXLSX(missInVerify, "选课报考校验缺失数据.xlsx");
    }
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
              <NavLink to="/course-verify">选课报考校验</NavLink>
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
            <h2 className="text-2xl font-semibold">选课报考校验</h2>
            <p className="text-sm text-muted-foreground mt-1">
              上传选课名单和报考确认数据进行校验。选择或拖拽文件到下面的区域。
            </p>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-6">
            <div className="group bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">选课名单</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    支持 .xlsx .xls .csv。单次上传一个文件。
                  </p>

                  <div
                    onDrop={handleDrop1}
                    onDragOver={(e) => e.preventDefault()}
                    className="mt-4 rounded-md border-2 border-dashed border-muted/40 p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm">{fileName1 ?? "未选择文件"}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        ref={inputRef1}
                        type="file"
                        accept=".xlsx,.xls,.csv"
                        onChange={handleFileChange1}
                        className="hidden"
                      />
                      <Button
                        onClick={() => inputRef1.current?.click()}
                        variant="secondary"
                        size="sm"
                        className="cursor-pointer"
                      >
                        选择文件
                      </Button>
                      <Button
                        onClick={handleClear1}
                        variant="destructive"
                        size="icon"
                        className="size-8 cursor-pointer"
                      >
                        <Trash2Icon />
                      </Button>
                    </div>
                  </div>

                  {error1 && (
                    <p className="text-sm text-destructive mt-2">{error1}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="group bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">报考确认数据</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    支持 .xlsx .xls .csv。单次上传一个文件。
                  </p>

                  <div
                    onDrop={handleDrop2}
                    onDragOver={(e) => e.preventDefault()}
                    className="mt-4 rounded-md border-2 border-dashed border-muted/40 p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm">{fileName2 ?? "未选择文件"}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        ref={inputRef2}
                        type="file"
                        accept=".xlsx,.xls,.csv"
                        onChange={handleFileChange2}
                        className="hidden"
                      />
                      <Button
                        onClick={() => inputRef2.current?.click()}
                        variant="secondary"
                        size="sm"
                        className="cursor-pointer"
                      >
                        选择文件
                      </Button>
                      <Button
                        onClick={handleClear2}
                        variant="destructive"
                        size="icon"
                        className="size-8 cursor-pointer"
                      >
                        <Trash2Icon />
                      </Button>
                    </div>
                  </div>

                  {error2 && (
                    <p className="text-sm text-destructive mt-2">{error2}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <Button
              onClick={handleProcess}
              variant="outline"
              size="sm"
              className="cursor-pointer"
            >
              开始校验
            </Button>
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
