import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Hero } from "@/components/home/hero";
import { Button } from "@/components/ui/button";

export default function Client() {
    return (
        <>
            <Hero />

            <section className="relative min-h-screen overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
                    <div className="relative h-screen w-full md:col-span-3">
                        <Image
                            src="/imgs/dexter-and-masuka.png"
                            alt="Dexter Morgan and Vince Masuka analyzing blood samples in Miami Metro lab"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    <div className="md:col-span-2 flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 xl:px-24 py-12 bg-background">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="dexter-font text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground leading-tight">
                                "We analyze blood for a living.
                                <br />
                                <span className="text-blood drop-shadow-lg">
                                    You donate it to save one.
                                </span>
                                "
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative h-screen overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
                    <div className="md:col-span-3 flex flex-col justify-center items-start gap-6 md:gap-8 px-4 md:px-8 lg:px-16 xl:px-48 py-12 bg-background">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground dexter-font leading-tight">
                            Know Your <br />
                            <span className="text-blood">Blood Type</span>
                        </h1>

                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
                            Not sure about your blood type? Book a checkup with
                            us and we will help you find out your blood type and
                            provide you with a detailed report of your health
                            status.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4">
                            <Button size="lg" className="text-xl">
                                Donate Blood
                            </Button>
                            <Button size="lg" className="text-xl">
                                Request Blood
                            </Button>
                            <Button size="lg" className="text-xl">
                                Book Checkup
                            </Button>
                        </div>
                    </div>

                    <div className="relative h-screen w-full md:col-span-2">
                        <Image
                            src="/imgs/dexter-guessing.png"
                            alt="Dexter Morgan guessing blood type in Miami Metro lab"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
