import { Button, Carousel } from "@material-tailwind/react";
import PropTypes from "prop-types";

const Banner = () => {
    const Slide = ({ img }) => (
        <div
            style={{ backgroundImage: `url('/images/banner/${img}.jpg')` }}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
        >
            <div className="bg-gradient-to-r from-[#151515] to-transparent w-full h-full flex items-center p-8 lg:p-28">
                <div className="w-full sm:w-1/2 flex flex-col gap-8">
                    <h1 className="xl:text-6xl text-4xl text-[var(--white)] font-bold leading-tight">
                        Affordable Price For Car Servicing
                    </h1>
                    <p className="xl:text-lg text-base text-[var(--white)] font-normal">
                        There are many variations of passages of available, but the
                        majority have suffered alteration in some form
                    </p>
                    <div className="flex gap-5">
                        <Button
                            className="text-base font-semibold capitalize"
                            color="red"
                        >
                            Discover More
                        </Button>
                        <Button
                            className="border-2 text-base font-semibold capitalize"
                            color="white"
                            variant="outlined"
                        >
                            Latest Project
                        </Button>{" "}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Carousel
            loop={true}
            className="xl:rounded-xl rounded-none max-h-[600px] max-w-screen-xl mx-auto px-0"
        >
            <Slide img={1} />
            <Slide img={2} />
            <Slide img={3} />
            <Slide img={4} />
            <Slide img={5} />
            <Slide img={6} />
        </Carousel>
    );
};
Banner.propTypes = {
    img: PropTypes.string,
};
export default Banner;
