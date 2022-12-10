import { redirect } from "@remix-run/node";
import { useTransition as useNavigation } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { updateExpense, deleteExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";

export default function ExpensesDetailsPage() {
    const navigate = useNavigation();

    function closeHandler() {
        navigate("..");
    }
    return (
        <Modal onClose={closeHandler}>
            <ExpenseForm />
        </Modal>
    );
}

export async function action({ params, request }) {
    const expenseId = params.id;
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);
    console.log(request.method)
    switch (request.method) {
        case "PATCH":
            await handleUpdate(expenseId, expenseData);
            return redirect("/expenses");
        case "DELETE":
            await deleteExpense(expenseId);
            return redirect("/expenses");
        default:
            return redirect("/expenses");
    }

    
}

async function handleUpdate(expenseId, expenseData) {
    try {
        validateExpenseInput(expenseData);
    } catch (error) {
        throw error;
    }

    await updateExpense(expenseId, expenseData);
}
