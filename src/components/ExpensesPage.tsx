import { useEffect, useState } from "react";
import { fetchExpenses } from "../utils/expenseApiCalls";
import { DataFrame } from "./DataFrame";

export function ExpensesPage() {
  const [expenses, setExpenses] = useState<IExpensesData[]>();

  // Fetch the expenses data
  useEffect(() => {
    fetchExpenses().then((data) => {
      setExpenses(data);
    });
  }, []);

  return (
    <>
      {/* Header Bar */}
      <div className="flex flex-col mb-4">
        <h1 className="px-4">Expenses</h1>
        <hr />
      </div>
      {/* Expenses Data */}
      <DataFrame data={expenses} />
    </>
  );
}
