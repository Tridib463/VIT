// BlueButton.tsx
import Link from 'next/link';
import './bluebutton.css';

type BlueButtonProps = {
    inside: string;
};


const BlueButton = ({ inside }: BlueButtonProps) => {

    const session: boolean = false;
    return (
        <Link href={session ? "/auth/dashboard" : "auth/Signin"}>
            <button className='btn'>{inside}</button>
        </Link>
    );
};

export default BlueButton;
