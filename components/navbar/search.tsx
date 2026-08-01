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
                <section className="bg-neutral-900/10 backdrop-blur-md px-6 py-4 shadow-lg w-80 h-screen fixed top-0 right-0 z-50">
                    <div className="flex justify-between items-center gap-2 bg-background rounded-full">
                        <Input placeholder="Search..." />
                        <button
                            className="bg-background p-3 rounded-full hover:bg-blood/80 hover:text-white transition-colors cursor-pointer relative"
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
