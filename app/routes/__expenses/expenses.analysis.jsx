import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import { getExpenses } from "~/data/expenses.server";
import { useCatch, useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import Error from "~/components/util/Error";

export default function AnalyzeExpansesPage() {
    const expenses = useLoaderData();

    return (
        <main>
            <Chart expenses={expenses} />
            <ExpenseStatistics expenses={expenses} />
        </main>
    );
}

export async function loader() {
    const expenses = await getExpenses();

    if (!expenses || expenses.length === 0) {
        throw json(
            { message: "Could not load expenses" },
            {
                status: 404,
                statusText: "Expenses not found",
            }
        );
    }

    return expenses;
}

export function CatchBoundary() {
    const caughtResponse = useCatch();
    return <main>
        <Error title={caughtResponse.statusText}>
            <p>{caughtResponse.data.message || 'Something went wrong.'}</p>
            <p>Go and <Link to="/expenses/add">add</Link> some</p>
        </Error>
    </main>;
}
