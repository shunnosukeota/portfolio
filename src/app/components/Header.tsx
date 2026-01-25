'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './TextWithLine.module.css';

const MENU_ITEMS = ['About', 'Works', 'Skills', 'Contact'];

type Props = {
  threshold: number
}

export default function Header({ threshold }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      style={{ position: isSticky || pathname !== '/' ? 'fixed' : 'absolute', display: isSticky || pathname !== '/' ? '' : 'none' }}
      className='flex py-6 text-xl bg-opacity-10 animate-fade-in animation-delay-0' id='header'>
      <div className='w-[80vw] m-auto flex justify-between items-center'>
        <a href='/' className='header-logo z-[51] text-xl'><span className="inline-block"><img src="/logo.svg" alt="Stendear" className="mr-0.5" /></span></a>

        {/* ナビゲーションメニュー */}
        <ul className='hidden md:flex space-x-10 text-lg'>
          {MENU_ITEMS.map((item) => (
            <li key={item} className='relative'>
              <Link
                href={`/${item.toLowerCase()}`}
                className={`${styles.text} ${(active === item || pathname === '/' + item.toLowerCase()) ? styles.clicked : ''} px-3 py-1`}
                onClick={() => setActive(item)}>
                {item}
                <span className={styles.line}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* ハンバーガーメニュー（SP用） */}
        <div className='md:hidden humberger z-30'>
          <button onClick={toggleMenu} className='flex flex-col space-y-[4px]'>
            {isMenuOpen
              ? <span className='close relative'></span>
              : ([...Array(3)].map((_, i) => (
                  <span key={i} className='block w-5 h-0.5 bg-black'></span>
                )))
            }
          </button>

          {/* メニュー（アニメーション付き） */}
          <div
            className={`fixed top-0 left-0 w-[100%] h-[100%] opacity-90 bg-white text-black text-center pt-24 p-4 space-y-10 transition-transform duration-500 ease-in-out z-50 
              ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}`}
          >
            <button onClick={toggleMenu} className='w-10 h-10 flex items-center justify-center'>
              <svg className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} viewBox='0 0 100 100'>
                <path d='M 34,32 L 66,68' />
                <path d='M 66,32 L 34,68' />
              </svg>
            </button>
            {['Home', ...MENU_ITEMS].map((item) => (
              <a key={item} href={`${item === 'Home' ? '/': item.toLowerCase()}`} className='block text-xl' onClick={toggleMenu}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
