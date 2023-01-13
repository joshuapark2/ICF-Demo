import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
    return (
        <header>
            <div>
                <div className='topNav'>
                    <Image alt="logo" src={'/images/ICF-Logo.png'} width={50} height={50} />
                    <nav>
                        <ul>
                            <li>
                                <Link href="/"> 
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us"> 
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/events"> 
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p className="title"> Lorem ipsum dolor sit amet </p>
            </div>
      </header>
    )
}