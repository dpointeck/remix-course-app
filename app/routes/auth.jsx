import AuthForm from "~/components/auth/AuthForm";
import authStyles from "~/styles/auth.css";
import { validateCredentials } from "~/data/validation.server";
import { useActionData } from "@remix-run/react";

export default function LoginPage() {
    return <AuthForm />;
}

export async function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const authMode = searchParams.get('mode') || 'login';
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    

    try {
        validateCredentials(credentials);
    } catch (error) {
        return error
    }

    switch (authMode) {
        case 'login':
            // TODO login logic
            break;
        case 'signup':
            // TODO signup logic
            break;
    }
}

export function links() {
    return [{ rel: "stylesheet", href: authStyles }];
}
