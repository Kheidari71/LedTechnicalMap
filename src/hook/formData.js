import { useState, useEffect } from "react";
import * as XLSX from "xlsx";


const useExcelData = (filePath) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExcelData = async () => {
      try {
        setLoading(true);
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Failed to fetch the Excel file.");
        }
        const blob = await response.blob();

        const fileReader = new FileReader();
        fileReader.onload = (event) => {
          try {
            const arrayBuffer = event.target.result;
            const workbook = XLSX.read(arrayBuffer, { type: "array" });
            const sheetName = workbook.SheetNames[0]; // انتخاب اولین شیت
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setData(jsonData);
          } catch (err) {
            setError("Error parsing Excel file.");
          } finally {
            setLoading(false);
          }
        };

        fileReader.readAsArrayBuffer(blob);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchExcelData();
  }, [filePath]);

  return { data, loading, error };
};

export default useExcelData;