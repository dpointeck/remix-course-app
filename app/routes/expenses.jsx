import { Outlet } from "@remix-run/react";

import expensesstyles from "~/styles/expenses.css";

export default function ExpensesLayout() {
    return (
        <main>
            <p>shared element</p>
            <Outlet />
        </main>
    );
}

export function links() {
    return [{ rel: "stylesheet", href: expensesstyles }];
}
