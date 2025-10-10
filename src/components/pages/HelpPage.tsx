import { NavLink } from "react-router";
import { Button } from "../ui/button";
import {
  CheckCircle,
  FileText,
  HelpCircle,
  LayoutDashboard,
} from "lucide-react";

function HelpPage() {
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
            <h2 className="text-2xl font-semibold">使用指南</h2>
            <p className="text-sm text-muted-foreground mt-1">
              了解开大助手所有功能的详细使用方法和常见问题解答。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-medium mb-4">功能说明</h3>
          <div className="space-y-6">
            {/* 选课名单生成 */}
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-md bg-muted/60 p-2">
                  <FileText className="h-6 w-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">选课名单生成</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    自动生成可导入一平台的选课表。
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="text-base font-medium">使用步骤</h5>
                  <ol className="text-sm text-muted-foreground mt-2 space-y-1 ml-4 list-decimal">
                    <li>
                      从一平台导出班级成绩表，在表中将需要选课的单元格内容填上"+"号
                    </li>
                    <li>在生成选课表页面上传文件（支持.xlsx/.xls/.csv）</li>
                    <li>点击"开始解析"，系统将自动下载"选课名单.xlsx"</li>
                  </ol>
                </div>
                <div>
                  <h5 className="text-base font-medium">文件格式要求</h5>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4 list-disc">
                    <li>
                      学生信息位于行中（从第10行开始），第1列姓名，第2列学号
                    </li>
                    <li>
                      课程信息位于列中（从第4列开始），第7行课程名，第9行教师名
                    </li>
                    <li>选课标记："+" 或分数低于60</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 毕业条件自查 */}
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-md bg-muted/60 p-2">
                  <CheckCircle className="h-6 w-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">毕业条件自查</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    毕业前检查学生是否符合毕业条件。
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="text-base font-medium">使用步骤</h5>
                  <ol className="text-sm text-muted-foreground mt-2 space-y-1 ml-4 list-decimal">
                    <li>进入毕业审核页面</li>
                    <li>输入或导入学生的基本信息（学号、姓名、专业等）</li>
                    <li>系统将自动检查毕业要求，包括学分、必修课、选修课等</li>
                    <li>查看审核结果和建议</li>
                  </ol>
                </div>
                <div>
                  <h5 className="text-base font-medium">检查内容</h5>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4 list-disc">
                    <li>总学分要求</li>
                    <li>必修课程完成情况</li>
                    <li>选修课程学分</li>
                    <li>实践环节要求</li>
                    <li>其他毕业条件</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 帮助与文档 */}
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-md bg-muted/60 p-2">
                  <HelpCircle className="h-6 w-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">帮助与文档</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    使用指南、常见问题与反馈入口。
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="text-base font-medium">包含内容</h5>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4 list-disc">
                    <li>各功能详细使用说明</li>
                    <li>常见问题解答</li>
                    <li>文件格式示例</li>
                    <li>技术支持联系方式</li>
                    <li>用户反馈入口</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">常见问题</h3>
          <div className="space-y-4">
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h4 className="text-base font-semibold mb-2">
                选课名单生成失败怎么办？
              </h4>
              <p className="text-sm text-muted-foreground">
                请检查上传的文件是否为正确的Excel格式，确保数据结构符合要求（学生信息在行，课程信息在列）。如果问题持续，请联系技术支持。
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h4 className="text-base font-semibold mb-2">
                毕业审核需要哪些信息？
              </h4>
              <p className="text-sm text-muted-foreground">
                需要学生的学号、姓名、专业、已修课程及成绩等信息。系统会根据学校毕业要求自动审核。
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h4 className="text-base font-semibold mb-2">
                如何反馈问题或建议？
              </h4>
              <p className="text-sm text-muted-foreground">
                在帮助页面底部或各功能页面中找到反馈入口，详细描述您的问题或建议，我们会尽快回复。
              </p>
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

export default HelpPage;
