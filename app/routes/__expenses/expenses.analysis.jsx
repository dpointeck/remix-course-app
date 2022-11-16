import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: "First Expense",
        amount: 12.99,
        date: new Date()
    },
    {
        id: 'e2',
        title: "First Expense",
        amount: 142.99,
        date: new Date('2022-02-21')
    },
    {
        id: 'e3',
        title: "First Expense",
        amount: 54.99,
        date: new Date('2022-05-21')
    },
]
export default function AnalyzeExpansesPage() {
    return <main>
        <Chart expenses={DUMMY_EXPENSES}/>
        <ExpenseStatistics expenses={DUMMY_EXPENSES}/>
    </main>
}
