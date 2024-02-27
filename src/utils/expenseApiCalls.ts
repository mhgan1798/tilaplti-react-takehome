export async function fetchExpenses() {
  const response = await fetch(
    "https://expenses-backend-mu.vercel.app/expenses",
    {
      headers: {
        "Content-Type": "application/json",
        Username: "howard.gan", // <--- Make sure you change this
      },
    }
  );
  const data: IExpensesData[] = await response.json();
  return data;
}
