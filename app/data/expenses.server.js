import { prisma } from "~/data/database.server";

export async function addExpense(expenseData) {
    try {
        return await prisma.expense.create({
            data: {
                title: expenseData.title,
                amount: +expenseData.amount,
                date: new Date(expenseData.date),
            },
        });
    } catch (err) {
        console.error(err);
    }
}

export async function getExpenses() {
    try {
        return await prisma.expense.findMany({
            orderBy: [
                {
                    date: "desc",
                },
                {
                    amount: "desc",
                },
            ],
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getExpense(id) {
    try {
        return await prisma.expense.findFirst({
            where: {
                id,
            },
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}
