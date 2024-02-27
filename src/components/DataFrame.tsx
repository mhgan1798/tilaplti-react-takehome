export function DataFrame(props: { data?: { [key: string]: any }[] }) {
  // Return no data if data undefined
  if (!props.data) return <>Data has not loaded yet or there is no data.</>;

  // Return table if data present
  return (
    <>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            {Object.keys(props.data[0]).map((key) => {
              return <th>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data?.map((row) => {
            return (
              <tr>
                {Object.values(row).map((cell) => {
                  return <td>{cell}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
