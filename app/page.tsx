import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="relative h-screen overflow-hidden">
                <Image
                    src="/imgs/close-up-of a healthcare professional drawing blood from a patient in a medical setting-original.jpg"
                    alt="Healthcare professional drawing blood"
                    fill
                    className="object-cover opacity-65"
                    priority
                />

                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
                        Wake up, samurai. Someone needs{" "}
                        <span className="im-fell-dw-pica-regular uppercase text-blood">
                            blood.
                        </span>
                    </h1>
                </div>
            </section>

            <section className="relative h-screen overflow-hidden">
                <Image
                    src="/imgs/close-up-of a gloved hand holding a test tube with blood sample in a clinical research lab-original.jpg"
                    alt="Healthcare professional drawing blood"
                    fill
                    className="object-cover opacity-65"
                />

                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
                        With{" "}
                        <span className="im-fell-dw-pica-regular uppercase text-blood">
                            great blood{" "}
                        </span>
                        comes{" "}
                        <span className="im-fell-dw-pica-regular uppercase text-blood">
                            great responsibility
                        </span>
                    </h1>
                </div>
            </section>
        </>
    );
}
