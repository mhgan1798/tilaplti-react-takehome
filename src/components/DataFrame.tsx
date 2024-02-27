import { useMemo } from "react";
import { valueCounts } from "../utils/math";

export function DataFrame(props: { data?: { [key: string]: any }[] }) {
  // Usememo to load all keys of the data passed in via props
  const columns = useMemo(() => {
    return props.data && Object.keys(props.data[0]);
  }, [props.data]);

  // Return no data if data undefined
  if (!props.data) return <>Data has not loaded yet or there is no data.</>;

  // Return table if data present
  return (
    <div className="flex gap-6">
      {/* Dropdown Filters */}
      <div className="flex flex-col w-1/5 gap-2 p-4 bg-neutral-50 rounded-md h-full">
        <h3>Filters</h3>
        {/* Segment for each column */}
        {columns?.map((col, idx) => {
          return (
            <div className="gap-2" key={idx}>
              {/* Filter segment name */}
              <span className="font-bold">{col}</span>
              {/* Value Counts for each row */}
              <pre className="whitespace-pre-wrap break-all">
                {JSON.stringify(
                  valueCounts(props.data?.map((data) => data[col]) || []),
                  null,
                  2
                )}
              </pre>
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
