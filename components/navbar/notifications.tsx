import { LuX } from "react-icons/lu";
import { Text } from "../ui/text";

export default function Notifications({
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
                    <div className="flex justify-between items-center">
                        <Text size="xl">Notifications</Text>
                        <button
                        className="bg-tertairy backdrop-blur-md p-3 rounded-full hover:bg-blood/80 transition-colors cursor-pointer flex-shrink-0 relative hover:shadow-lg hover:shadow-blood/20 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <LuX size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </section>
            )}
        </>
    );
}
