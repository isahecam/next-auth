export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-y-6">
      <header>
        <h1 className="text-2xl font-bold">Autenticación con Next Auth</h1>
      </header>
      {children}
      <footer>
        <p className="text-sm text-gray-500">
          © 2025 Autenticación con Next Auth by{" "}
          <a href="https://github.com/isahecam" rel="noopener noreferrer" target="_blank">
            Brandon Hernández
          </a>
        </p>
      </footer>
    </main>
  );
}
