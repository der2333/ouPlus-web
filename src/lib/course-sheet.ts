import * as XLSX from "xlsx";

export default async function courseSheet(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const sheetData: string[][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
  });

  // 读取导入模板文件，作为表头
  const templResponse = await fetch(
    "/src/assets/学生选课名单导入模板.xlsx",
  );
  if (!templResponse.ok) {
    throw new Error(`error:${templResponse.status}`);
  }
  const templArrayBuffer = await templResponse.arrayBuffer();
  const templWorkBook = XLSX.read(templArrayBuffer);
  const templWorkSheet = templWorkBook.Sheets[templWorkBook.SheetNames[0]];
  const newSheetData: string[][] = XLSX.utils.sheet_to_json(templWorkSheet, {
    header: 1,
  });

  sheetData.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (rowIndex >= 9 && colIndex >= 3) {
        if (cell === "+") {
          // 收集数据
          newSheetData.push([
            sheetData[rowIndex][1],
            sheetData[rowIndex][0],
            sheetData[6][colIndex],
            sheetData[8][colIndex],
          ]);
        }

        if (cell !== "" && Number(cell) < 60 && sheetData[6][colIndex]) {
          newSheetData.push([
            sheetData[rowIndex][1],
            sheetData[rowIndex][0],
            sheetData[6][colIndex],
            sheetData[8][colIndex],
          ]);
        }
      }
    });
  });

  // 创建新的工作表
  const xuankeSheet = XLSX.utils.aoa_to_sheet(newSheetData);

  // 将新工作表添加到工作簿
  const xuankeBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(xuankeBook, xuankeSheet, "学生选课名单导入");

  // 将工作簿转换为二进制数据
  const wbout: ArrayBuffer = XLSX.write(xuankeBook, {
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
  a.download = "选课名单.xlsx"; // 设置下载文件名
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
