import * as XLSX from "xlsx";
import buildXLSX from "./build-xlsx";

export default async function courseSheet(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const sheetData: string[][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
  });

  // 读取导入模板文件，作为表头
  const templResponse = await fetch(
    "../学生选课名单导入模板.xlsx",
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

  buildXLSX(newSheetData, "选课名单.xlsx", "学生选课名单导入");
}
