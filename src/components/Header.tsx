
import logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-6">
        <img src={logo} alt="Weather Logo" className="h-10 w-10" />

        <h1 className="text-2xl font-bold text-slate-800">
            هواشناسی☀️
        </h1>
      </div>
    </header>
  );
}