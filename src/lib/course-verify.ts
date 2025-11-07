import * as XLSX from "xlsx";

// 校验选课名单数据是否存在于报考确认表中, 返回缺失数据
export default async function courseVerify(courseFile: File, verifyFile: File) {
  const courseArrayBuffer = await courseFile.arrayBuffer();
  const courseWorkBook = XLSX.read(courseArrayBuffer);
  const courseWorkSheet = courseWorkBook.Sheets[courseWorkBook.SheetNames[0]];
  let courseData: string[][] = XLSX.utils.sheet_to_json(courseWorkSheet, {
    header: 1,
  });

  const verifyArrayBuffer = await verifyFile.arrayBuffer();
  const verifyWorkBook = XLSX.read(verifyArrayBuffer);
  const verifyWorkSheet = verifyWorkBook.Sheets[verifyWorkBook.SheetNames[0]];
  let verifyData: string[][] = XLSX.utils.sheet_to_json(verifyWorkSheet, {
    header: 1,
  });

  let courseHead = courseData.slice(0, 3); // 保存表头
  courseData = courseData.slice(3); // 移除表头
  verifyData = verifyData.slice(1); // 移除表头

  const verifyDataSet = new Set(
    verifyData.map((row) => `${row[0]}-${row[2]}`),
  );

  const missInVerify = courseData.filter((row) => {
    const key = `${row[0]}-${row[2]}`;
    return !verifyDataSet.has(key);
  });
  return courseHead.concat(missInVerify);
}
