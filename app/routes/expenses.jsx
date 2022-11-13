import { Outlet } from "@remix-run/react";

export default function ExpensesLayout() {
    return <main style={{ background: "red" }}><Outlet /></main>
}