export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <header>
        <h1 className="text-2xl font-bold">Autenticación con Next Auth</h1>
      </header>
      {children}
    </main>
  );
}
