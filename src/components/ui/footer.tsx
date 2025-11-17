export default function Footer() {
  return (
    <footer className="flex border-t">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} 开大助手
      </div>
    </footer>
  );
}
