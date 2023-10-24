import { useState } from "react";
import {
    Collapse,
    Button,
    IconButton,
    Input,
    Dialog,
} from "@material-tailwind/react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars3 } from "react-icons/hi2";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const handleSearchOpen = () => setOpenSearch(!openSearch);
    const handleSearch = (event) => {
        event.preventDefault();
        const searchText = event.target.search.value;
        console.log(searchText);
    };

    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Services",
            path: "/services",
        },
        {
            name: "Blog",
            path: "/blog",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];

    return (
        <>
            <header className="max-w-screen-xl mx-auto flex justify-between items-center lg:py-10 py-5 px-8 xl:px-0">
                <Logo />
                <div className="mr-4 hidden lg:block">
                    <ul className="flex gap-6">
                        {navLinks.map((item) => (
                            <Link
                                className="text-base font-semibold text-[var(--link)] hover:text-[var(--primary)] transition"
                                to={item?.path}
                                key={item?.path}
                            >
                                {item?.name}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-2 transition-hidden">
                    <div className=" flex justify-between items-center gap-2">
                        <IconButton variant="text" onClick={() => {}}>
                            <HiOutlineShoppingBag className="text-2xl" />
                        </IconButton>

                        <Dialog handler={handleSearchOpen} open={openSearch}>
                            <form
                                onSubmit={handleSearch}
                                className="relative flex w-full p-4"
                            >
                                <Input
                                    name="search"
                                    error
                                    label="Search Here"
                                    className="pr-20"
                                    containerProps={{
                                        className: "min-w-0",
                                    }}
                                />

                                <Button
                                    type="submit"
                                    size="sm"
                                    className="!absolute right-5 top-5"
                                    color="red"
                                >
                                    Search
                                </Button>
                            </form>
                        </Dialog>

                        <IconButton
                            variant="text"
                            onClick={() => setOpenSearch(!openSearch)}
                        >
                            <HiOutlineSearch className="text-2xl" />
                        </IconButton>

                        <Button
                            className="border-2 text-base font-semibold capitalize hidden lg:block"
                            color="red"
                            variant="outlined"
                        >
                            Appointment
                        </Button>
                    </div>

                    <IconButton
                        variant="text"
                        className="block lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <RxCross2 className="text-2xl" />
                        ) : (
                            <HiMiniBars3 className="text-2xl" />
                        )}
                    </IconButton>
                </div>
            </header>
            <Collapse className="sm:hidden " open={openNav}>
                <ul className="flex flex-col gap-4 p-8 pt-0">
                    {navLinks.map((item) => (
                        <Link
                            className="text-base font-semibold text-[var(--link)]"
                            to={item?.path}
                            key={item?.path}
                        >
                            {item?.name}
                        </Link>
                    ))}
                    <Button
                        className="border-2 text-base font-semibold capitalize "
                        color="red"
                        variant="outlined"
                    >
                        Appointment
                    </Button>
                </ul>
            </Collapse>
        </>
    );
};

export default Header;
