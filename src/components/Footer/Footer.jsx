import React from "react";
import LogoLight from "../Logo/LogoLight";
import { FaGoogle, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = () => {
    const icons = [FaGoogle, FaXTwitter, FaInstagram, FaLinkedinIn];

    const FooterBlock = ({ title, link1, link2, link3 }) => (
        <div className="flex flex-col lg:gap-10 gap-4">
            <h3 className="text-xl font-semibold text-[var(--white)]">{title}</h3>

            <span className="text-[var(--footer-text)] text-base flex flex-col gap-2">
                <Link to="/">{link1}</Link>
                <Link to="/">{link2}</Link>
                {link3 ? <Link to="/">{link3}</Link> : ""}
            </span>
        </div>
    );

    return (
        <footer className=" bg-[var(--black-bg)] lg:py-28 py-10 px-8 xl:px-0">
            <div className="max-w-screen-xl mx-auto gap-8 grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <div className="flex flex-col gap-4 justify-center items-start">
                    <LogoLight />

                    <p className="text-base text-[var(--footer-text)]">
                        Edwin Diaz is a software and web technologies engineer, a life
                        coach trainer who is also a serial .
                    </p>

                    <span className="flex gap-2">
                        {icons.map((icon) => (
                            <Link
                                to="#"
                                className="text-sm rounded-full box-content transition text-white hover:bg-[var(--primary)] bg-[var(--link)] p-3"
                                key={icon}
                            >
                                {React.createElement(icon, {})}
                            </Link>
                        ))}
                    </span>
                </div>

                <FooterBlock
                    title="About"
                    link1="Home"
                    link2="Services"
                    link3="Contact"
                />
                <FooterBlock title="Company" link1="Wht Car Doctor" link2="About" />
                <FooterBlock
                    title="Support"
                    link1="Support Center"
                    link2="Feedback"
                    link3="Accesbility"
                />
            </div>
        </footer>
    );
};
Footer.propTypes = {
    title: PropTypes.string,
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string,
};
export default Footer;
