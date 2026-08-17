"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    if (pathname.includes("/sign-in") || pathname.includes("/sign-up")) {
        return null;
    }

    return (
        <footer className="w-full mx-auto backdrop-blur-sm border-t border-blood/10 mt-auto">
            
        </footer>
    );
}
