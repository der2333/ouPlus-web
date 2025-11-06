import * as XLSX from "xlsx";

export default function buildXLSX(data: string[][], fileName: string) {
  const sheet = XLSX.utils.aoa_to_sheet(data);

  // 将新工作表添加到工作簿
  const book = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(book, sheet, "Sheet1");

  // 将工作簿转换为二进制数据
  const wbout: ArrayBuffer = XLSX.write(book, {
    bookType: "xlsx",
    type: "array",
  });
  // 创建 Blob 并触发下载
  const blob = new Blob([wbout], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName; // 设置下载文件名
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
