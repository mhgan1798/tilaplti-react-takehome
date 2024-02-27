import { EXPENSES_API_URL } from "../const/apiURLs";

export async function fetchExpenses() {
  const response = await fetch(EXPENSES_API_URL, {
    headers: {
      "Content-Type": "application/json",
      Username: "howard.gan", // <--- Make sure you change this
    },
  });
  const data: IExpensesData[] = await response.json();
  return data;
}
