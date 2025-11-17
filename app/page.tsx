import { redirect } from "next/navigation";

export default function Home() {
  const handleRedirect = () => {
    redirect("/dashboard/posts");
  };

  handleRedirect();
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Prueba de Frontend ePayco</h1>
          <p className="text-gray-700">
            Este proyecto utiliza <span className="font-semibold">Next.js 16</span>, <span className="font-semibold">React 19</span>, <span className="font-semibold">TypeScript 5</span>, <span className="font-semibold">TailwindCSS 4</span> y <span className="font-semibold">Zod</span> para validación de formularios.
          </p>
        </div>
      </main>
    </div>
  );
}
