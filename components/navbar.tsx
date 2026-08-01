"use client";

import Link from "next/link";
import { Text } from "./ui/text";
import { MdBloodtype } from "react-icons/md";
import { BiMoon, BiSearch, BiSun } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navbar";
import Notifications from "./navbar/notifications";
import { useState, useEffect } from "react";
import Search from "./navbar/search";

export default function Navbar() {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const applyTheme = (dark: boolean) => {
        const root = document.documentElement;
        if (dark) {
            root.style.setProperty("--background", "#191919");
            root.style.setProperty("--foreground", "#efefef");
            root.style.setProperty("--tertairy", "#242424");
            root.classList.add("dark");
        } else {
            root.style.setProperty("--background", "#efefef");
            root.style.setProperty("--foreground", "#191919");
            root.style.setProperty("--tertairy", "#c2c2c2");
            root.classList.remove("dark");
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        const initialDarkMode = savedTheme
            ? savedTheme === "dark"
            : systemPrefersDark;

        setIsDarkMode(initialDarkMode);
        applyTheme(initialDarkMode);
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem("theme", newDarkMode ? "dark" : "light");
        applyTheme(newDarkMode);
    };

    const pathname = usePathname();

    if (pathname.includes("/sign-in") || pathname.includes("/sign-up")) {
        return null;
    }

    const toggleNotifications = () => {
        setIsSearchOpen(false);
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    const toggleSearch = () => {
        setIsNotificationsOpen(false);
        setIsSearchOpen(!isSearchOpen);
    };

    const isActive = (href: string) => {
        return pathname === href;
    };

    return (
        <>
            <nav className="backdrop-blur-md z-50 fixed top-0 left-0 right-0 flex justify-around items-center px-86 py-4 bg-transparent w-full mx-auto">
                <Link className="flex flex-row gap-3 items-center min-w-[200px]" href="/">
                    <MdBloodtype
                        size={32}
                        className="text-blood flex-shrink-0"
                    />
                    <Text className="uppercase tracking-widest text-2xl im-fell-dw-pica-regular whitespace-nowrap">
                        Bloodbourne
                    </Text>
                </Link>

                <section className="flex flex-row gap-2 items-center justify-center flex-1 px-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "px-4 pt-1 pb-2 rounded-full transition-all flex items-center justify-center min-w-[80px] text-xl",
                                isActive(link.href)
                                    ? "bg-blood text-white shadow-lg shadow-blood/20"
                                    : "text-foreground hover:bg-blood/80 hover:text-white",
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </section>

                <section className="flex flex-row gap-3 items-center min-w-[160px] justify-end">
                    <button
                        className="bg-neutral-900/10 backdrop-blur-md p-3 rounded-full hover:bg-blood/80 transition-colors cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-blood/20 hover:text-white"
                        onClick={toggleTheme}
                    >
                        {isDarkMode ? (
                            <BiSun size={20} />
                        ) : (
                            <BiMoon size={20} />
                        )}
                    </button>
                    <button
                        className="bg-neutral-900/10 backdrop-blur-md p-3 rounded-full hover:bg-blood/80 transition-colors cursor-pointer flex-shrink-0 hover:shadow-lg hover:shadow-blood/20 hover:text-white"
                        onClick={toggleSearch}
                    >
                        <BiSearch size={20} />
                    </button>
                    <button
                        className="bg-neutral-900/10 backdrop-blur-md p-3 rounded-full hover:bg-blood/80 transition-colors cursor-pointer flex-shrink-0 relative hover:shadow-lg hover:shadow-blood/20 hover:text-white"
                        onClick={toggleNotifications}
                    >
                        <LuMail size={20} />
                    </button>
                    <div className="bg-white rounded-full h-9 w-9 flex-shrink-0"></div>
                </section>
            </nav>
            <Notifications
                isOpen={isNotificationsOpen}
                setIsOpen={setIsNotificationsOpen}
            />
            <Search isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
        </>
    );
}
