import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="grid min-h-[60vh] place-items-center px-6 py-20 text-center">
      <div>
        <p className="font-numbers text-7xl font-black text-kashmir-gold">404</p>
        <h1 className="mt-3 font-serif text-5xl text-kashmir-blue">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl font-semibold leading-7 text-kashmir-slate">The page you opened is not available. Return home or start a travel enquiry.</p>
        <Link className="focus-ring mt-7 inline-flex rounded-[10px] bg-kashmir-bright px-5 py-3 font-black text-white" to="/">
          Back to home
        </Link>
      </div>
    </main>
  );
}
