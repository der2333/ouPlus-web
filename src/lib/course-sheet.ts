import { read, utils } from "xlsx";

async function courseSheet(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = read(arrayBuffer);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const sheet_data: string[][] = utils.sheet_to_json(worksheet, { header: 1 });
  console.log(sheet_data);
}

export default courseSheet;
