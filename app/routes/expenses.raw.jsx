import { json } from "@remix-run/node"

export function loader() {
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

    return json(DUMMY_EXPENSES)
}