import { useEffect, useMemo, useState } from "react";
import { commands } from "./assets/src/data/commands"
import { ReactTable } from "./assets/src/data/components/ReactTable";

function App() {

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return 'dark';
        }
        return 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector("html").classList.add('dark');
        } else {
            document.querySelector("html").classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const columns = useMemo(
        () => [
            {
                header: "Nombre",
                accessorKey: "name",
            },
            {
                header: "Descripción",
                accessorKey: "description",
            },
        ],
        []
    );

    return (
        <div className="bg-gradient-to-r from-slate-100 via-indigo-100 to-purple-100 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900">
            <nav className="w-full bg-slate-50 dark:bg-slate-900 p-3">
                <button
                    className="text-slate-900 dark:text-white"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    {theme === 'dark' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    )}
                </button>
            </nav>
            <div className="container min-h-screen mx-auto">
                <h1 className="text-6xl text-center text-slate-900 dark:text-white my-10 font-bold">Comandos Linux</h1>
                {
                    commands.length > 0 && (
                        <ReactTable data={commands} columns={columns} />
                    )
                }
            </div>
        </div>
    )
}

export default App
