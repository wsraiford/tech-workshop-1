import Link from "next/link";
import { JSX } from "react";


const Navbar: () => Element = (): React.JSX.Element => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href=" /about "></Link>
            <Link href=" /projects"></Link>
            <Link href="/contact"></Link>
        </nav>
    );
}
