import * as XLSX from "xlsx";

export default async function courseSheet(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const sheetData: string[][] = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
  });
  console.log(sheetData);
}
