// Navbar.tsx
import Link from "next/link";
import BlueButton from "../Blue_button/Bluebutton";
import './navbar.css';

const Navbar = () => {
    const session: boolean = false;

    return (
            <header className="header1">
                <Link href="#home" className="logo"><span>VIT</span></Link>
                <ul className="header_menu">
                    <li>
                        <Link href="#home" className="header_link">Home</Link>
                    </li>
                    <li>
                        <Link href="#services" className="header_link">Services</Link>
                    </li>
                    <li>
                        <Link href="#contribute" className="header_link">Contribute</Link>
                    </li>
                    <li>
                        <Link href="#contact" className="header_link">Contact</Link>
                    </li>
                    <li>
                        {session ? (
                            <BlueButton inside="Dashboard"/>
                        ) : (
                            <BlueButton inside="Sign In"/>
                        )}
                    </li>
                </ul>
            </header>

            
        
    );
};

export default Navbar;
