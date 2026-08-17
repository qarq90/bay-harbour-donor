import { LuX } from "react-icons/lu";
import { Input } from "../ui/input";

export default function Search({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) {
    return (
        <>
            {isOpen && (
                <section className="bg-background backdrop-blur-xl px-6 py-4 shadow-lg w-80 h-screen fixed top-0 right-0 z-50">
                    <div className="flex justify-between items-center gap-2 bg-tertairy rounded-full">
                        <Input placeholder="Search..." className="bg-tertairy" />
                        <button
                            className="bg-tertairy p-3 rounded-full hover:bg-blood/80 transition-colors cursor-pointer relative hover:shadow-lg hover:text-white hover:shadow-blood/20"
                            onClick={() => setIsOpen(false)}
                        >
                            <LuX size={20} />
                        </button>
                    </div>
                </section>
            )}
        </>
    );
}
