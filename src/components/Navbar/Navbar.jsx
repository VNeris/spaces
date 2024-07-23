import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-[99] bg-black/30 backdrop-blur-sm py-4"
      >
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-white font-bold text-2xl ps-20">
              <img src={Logo} alt="" className="w-10" />
              <span>SPACES</span>
            </div>
            <div className="text-white hidden md:block">
              <ul className="flex text-xl md:gap-10 lg:gap-20 xl:gap-32">
                <li>
                  <a className="cursor-pointer" href="#">Sobre</a>
                </li>
                <li>
                  <a className="cursor-pointer" href="#">Tecnologia</a>
                </li>
                <li>
                  <a className="cursor-pointer" href="#">Galáxia</a>
                </li>
                <li>
                  <a className="cursor-pointer" href="#">Satélite</a>
                </li>
              </ul>
            </div>
            <div className="cursor-pointer">
              <button className="text-white border-2 border-white me-10 px-5 py-1 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;