import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
//import { getExpense } from "~/data/expenses.server";

export default function ExpensesDetailsPage() {
    const navigate = useNavigate();

    function closeHandler() {
        navigate("..");
    }
    return (
        <Modal onClose={closeHandler}>
            <ExpenseForm />
        </Modal>
    );
}

// export function loader({ params }) {
//     const expenseId = params.id;

//     return getExpense(expenseId);
// }
