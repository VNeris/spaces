import moon from "../../assets/moon-surface-hd.png"

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
        <div className="h-full flex justify-center items-center p-4">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <div className="space-y-5 lg:pr-36 sm:ps-5">
                    <h1 data-aos="fade-up" className="text-5xl font-bold">Orbite a<span className="block mt-1"> Terra </span></h1>
                    <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eveniet quod et provident animi non consequuntur in expedita reprehenderit perferendis! Impedit est ullam quae quia rem vitae alias itaque asperiores!</p>
                    <button data-aos="fade-up" data-aos-delay="500" className="primary-button">Ler mais</button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
        <img src={moon} alt="" className="absolute right-0 bottom-0 w-full brightness-50 z-10 opacity-75"/>
        <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent to-black to-100% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  )
}

export default Hero