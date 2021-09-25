import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>Hellowell</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>Code</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
