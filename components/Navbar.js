// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/" passHref>
          NTUAflix
        </Link>
      </div>
      <ul>  
        <li>
          <Link href="/movies" passHref>
            Movies
          </Link>
        </li>
        <li>
          <Link href="/actors" passHref>
            Actors
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
