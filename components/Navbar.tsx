"use client";

import Link from "next/link";
import Image from "next/image";
import {
    MoonIcon,
    SunIcon
} from "@radix-ui/react-icons";
import { useState } from "react";

const Navbar = () => {
    const [mode, setMode] = useState<"light" | "dark">("light");

    const toggleMode = () => {
        if (mode === "light") {
            document.body.classList.add("dark");
            setMode("dark");
        } else {
            document.body.classList.remove("dark");
            setMode("light");
        }
    };

    return (
        <nav className="px-3 sm:px-5 py-3">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-1.5">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        height={35}
                        width={35}
                    />
                    <h1 className="font-bold hidden sm:block">
                        CryptoTracker
                    </h1>
                </Link>
                <div
                    onClick={toggleMode}
                    className="p-1.5 sm:p-2 rounded-full text-primary hover:bg-primary-foreground cursor-pointer"
                >
                    <MoonIcon className="h-5 sm:h-6 w-5 sm:w-6 stroke-2 dark:hidden" />
                    <SunIcon className="hidden h-5 sm:h-6 w-5 sm:w-6 stroke-2 dark:block" />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;