import { LoginForm } from "@/features/auth/components/login-form";

export function LoginView() {
  return (
    <section className="flex w-full max-w-md flex-col items-center justify-center px-6 sm:px-0">
      <LoginForm />
    </section>
  );
}
