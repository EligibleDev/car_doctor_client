import { Button } from "@material-tailwind/react";

const About = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-8 lg:px-0 py-8 lg:py-28 flex flex-col lg:flex-row justify-start items-center gap-14">
            <div className="relative w-full lg:w-1/2 pb-16 pr-20">
                <div
                    style={{ backgroundImage: `url('/images/about_us/person.jpg')` }}
                    className="w-full h-80 sm:h-[30rem] bg-left rounded-lg bg-cover bg-no-repeat"
                ></div>
                <div
                    style={{ backgroundImage: `url('/images/about_us/parts.jpg')` }}
                    className="absolute bottom-0 right-0 h-52 sm:h-64 w-64 bg-center bg-cover bg-no-repeat border-8 border-white rounded-lg"
                >
                    <div className="bg-black bg-opacity-30 w-full h-full"></div>
                </div>
            </div>

            <div className="flex flex-col gap-5 w-full lg:w-1/2">
                <h5 className="text-lg font-bold text-[var(--primary)]">About Us</h5>
                <h1 className="text-5xl font-bold text-[var(--black-bg)] w-9/12">We are qualified & of experience in this field</h1>
                <p className="text-lg text-[var(--body-text)]">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomized words which do not look even slightly
                    believable.{" "}
                </p>
                <p className="text-lg text-[var(--body-text)]">
                    the majority have suffered alteration in some form, by injected
                    humour, or randomized words which do not look even slightly
                    believable.{" "}
                </p>
                <Button className="text-base font-semibold capitalize w-fit" color="red">
                    Get More Info
                </Button>
            </div>
        </section>
    );
};

export default About;
