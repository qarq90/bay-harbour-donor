import Image from "next/image";
import { Text } from "../ui/text";

export const Hero = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            <Image
                src="/imgs/creation-of-adam.png"
                alt="Healthcare professional drawing blood"
                fill
                className="object-cover opacity-90"
                priority
            />

            <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center relative z-10">
                <div className="w-full flex flex-col gap-4 md:gap-8 lg:gap-112 mt-12">
                    <Text className="mr-32 tagesschrift-regular text-6xl text-black font-bold text-right leading-20">
                        "Blessed are the <br />{" "}
                        <span className="text-blood">peacemakers</span> and{" "}
                        <span className="text-blood">donors...</span>
                    </Text>
                    <div className="mx-32 flex justify-between items-end">
                        <Text className="tagesschrift-regular text-6xl text-black font-bold text-left leading-20">
                            ...for they shall be called
                            <br /> the children of{" "}
                            <span className="text-blood">humanity.</span>"
                        </Text>
                        <Text className="text-black dexter-font uppercase text-5xl">
                            — Dexter Morgan
                        </Text>
                    </div>
                </div>
            </div>
        </section>
    );
};
