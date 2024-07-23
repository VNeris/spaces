import wave from "../../assets/wave.gif";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";





const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Usado para observações astronômicas, capturando imagens impressionantes do universo.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      "Um satélite artificial habitável que orbita a Terra e serve como laboratório de pesquisa ambiental espacial",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Parte do Sistema de Posicionamento Global (GPS) utilizado para navegação.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <div className="bg-black text-white relative z-50">
        <div className="container">
          <div className="min-h-[400px]">
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10 ">

                {ServiceData.map((data, index) => (
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay}className="cursor-pointer min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px]  mx-auto">
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  ))}

              </div>
              <div>
               <img
                src={wave}
                alt=""
                className="sm:h-[200px] md:h-[200px] lg:h-[300px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services