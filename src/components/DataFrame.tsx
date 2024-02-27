import { useEffect, useMemo, useState } from "react";
import { countValues } from "../utils/math";

export function DataFrame(props: { data?: { [key: string]: any }[] }) {
  const [filteredData, setFilteredData] = useState([]);
  const [valueCounts, setValueCounts] = useState<Record<string, number>[]>();

  // Usememo to load all keys of the data passed in via props
  const columns = useMemo(() => {
    return props.data && Object.keys(props.data[0]);
  }, [props.data]);

  // Effects
  useEffect(() => {
    setValueCounts(
      columns &&
        columns.map((col) =>
          countValues(props.data?.map((data) => data[col]) || [])
        )
    );
  }, [columns]);

  // Return no data if data undefined
  if (!props.data) return <>Data has not loaded yet or there is no data.</>;

  // Return table if data present
  return (
    <div className="flex gap-6">
      {/* Dropdown Filters */}
      <div className="flex flex-col w-1/5 gap-2 p-4 bg-neutral-50 rounded-md h-full">
        <h3>Filters</h3>
        {/* TODO: I would have turned this into a set of horizontal bars representing a histogram. clicking on one of these bars should filter the data in the table only for those groups selected. The filters would also have to dynamically update based on the data selected. */}
        {/* Segment for each column */}
        {/* I would have turned valueCounts into a standalone state and update it in a useEffect whenever a bar is clicked. */}
        {columns?.map((col, idx) => {
          const vc = valueCounts?.[idx];
          return (
            <div className="gap-2" key={idx}>
              {/* Filter segment name */}
              <span className="font-bold">{col}</span>
              {/* Value Counts for each row */}
              <div className="flex flex-col">
                {Object.keys(valueCounts?.[idx] || []).map((key) => {
                  return (
                    <div className="flex items-center gap-2">
                      {/* Key */}
                      <div className="w-36 truncate" title={key}>
                        {key}
                      </div>
                      {/* Horizontal Bar */}
                      <div
                        className="h-3 bg-red-500 rounded-md cursor-pointer hover:bg-red-600"
                        // This is a hacky workaround for bar sizing
                        style={{ width: Math.min((vc?.[key] || 0) * 25, 100) }} 
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Table of Data */}
      <table className="table-auto w-full text-left h-full">
        <thead className="text-lg font-bold">
          <tr>
            {columns?.map((key, idx) => {
              return <th key={idx}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data?.map((row, idx) => {
            return (
              <tr key={idx}>
                {Object.values(row).map((cell, idx) => {
                  return <td key={idx}>{cell}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
