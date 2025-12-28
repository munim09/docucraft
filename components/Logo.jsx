import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="hidden lg:flex">
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    className="h-6 w-auto"
                    width={100}
                    height={24}
                    priority
                />
            </Link>
        </div>
    );
};

export default Logo;
