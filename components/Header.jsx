import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";

const Header = ({ docs }) => {
    return (
        <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
            <Logo />
            <div
                className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80"
                style={{
                    "--bg-opacity-light": 0.5,
                    "--bg-opacity-dark": 0.2,
                }}
            >
                <div className="container flex h-14 items-center justify-between gap-12">
                    <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>
                    <Search docs={docs} />

                    {/* <div class="relative hidden lg:block lg:max-w-md lg:flex-auto">
                        <button
                            type="button"
                            class="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
                        >
                            <img
                                src="./assets/icons/search.svg"
                                class="h-5 w-5"
                            />
                            <input
                                type="text"
                                placeholder="Search..."
                                class="flex-1 focus:border-none focus:outline-none"
                            />
                            <kbd class="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
                                <kbd class="font-sans">Ctrl </kbd>
                                <kbd class="font-sans">K</kbd>
                            </kbd>
                        </button>
                        <div class="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
                            <p class="!text-lg">
                                Showing results for
                                <span class="font-semibold">"keyword":</span>
                            </p>
                            <ul
                                role="list"
                                class="divide-y divide-gray-100 [&>*]:py-2"
                            >
                                <li class="">
                                    <a
                                        class="transition-all hover:text-emerald-600"
                                        href="#"
                                    >
                                        How to create a new component in Vue.js
                                    </a>
                                </li>
                                <li class="">
                                    <a
                                        class="transition-all hover:text-emerald-600"
                                        href="#"
                                    >
                                        How to create a new component in
                                        React.js
                                    </a>
                                </li>
                                <li class="">
                                    <a
                                        class="transition-all hover:text-emerald-600"
                                        href="#"
                                    >
                                        Next.js Routing
                                    </a>
                                </li>
                                <li class="">
                                    <a
                                        class="transition-all hover:text-emerald-600"
                                        href="#"
                                    >
                                        SSR - What is it?
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> */}

                    {/* <div class="flex items-center gap-5 lg:hidden">
                        <button
                            type="button"
                            class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                            aria-label="Toggle navigation"
                        >
                            <img
                                src="./assets/icons/hamburger.svg"
                                alt="Menu"
                                class="w-2.5 stroke-zinc-900 dark:stroke-white"
                            />
                        </button>
                        <a aria-label="Home" href="/">
                            <img
                                src="./assets/icons/logo.svg"
                                alt="Protocol"
                                class="h-6"
                            />
                        </a>
                    </div> */}

                    {/* <div class="flex items-center gap-5">
                        <div class="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
                        <div class="flex gap-4">
                            <div class="contents lg:hidden">
                                <button
                                    type="button"
                                    class="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                                    aria-label="Find something..."
                                >
                                    <img
                                        src="./assets/icons/search.svg"
                                        alt="Search"
                                        class="h-5 w-5"
                                    />
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <Sidebar docs={docs} />
        </header>
    );
};

export default Header;
