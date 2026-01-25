import Image from "next/image";

export default function Footer() {
  {
    return (
      <footer className="footer -mb-8 py-4 block justify-center items-center text-center">
        <ul className="flex justify-center mb-2">
          <li>
            <a href="/">
              <img src="/footer/stendear_icon_white.svg" alt="Stendear" width="24" height="24"/>
            </a>
          </li>
          <li className="ml-4">
            <a href="https://www.instagram.com/shunnosukeshunnosukeshunnosuke/" target="_blank">
              <Image src="/footer/Instagram_Glyph_White.svg" alt="Instagram" width="24" height="24"/>
            </a>
          </li>
          {/*
          <li className="ml-4">
            <a href="https://kosennoshun.com/" target="_blank">
              <Image src="/footer/wordpress.svg" alt="wordpress" width="24" height="24"/>
            </a>
          </li>
          */}
        </ul>
        <p>Copyright {new Date().getFullYear()} Stendear <br className="md:hidden"/>all right reserved.</p>
      </footer>
    );
  }
}
