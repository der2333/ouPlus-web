import { read } from "xlsx";

async function courseSheet(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const sheet = read(arrayBuffer);
  console.log(sheet);
}

export default courseSheet;
