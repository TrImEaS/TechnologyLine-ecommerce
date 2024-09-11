import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function BannerCarousel() {
  const [desktopBanners, setDesktopBanners] = useState([]);
  const [mobileBanners, setMobileBanners] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBanners();
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchBanners = () => {
    fetch('https://technologyline.com.ar/api/page/getBanners')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error fetching banners');
        }
        return res.json();
      })
      .then(data => {
        // Filtrar banners según el nombre para móvil y escritorio
        const mobile = data.filter(banner => banner.name.includes('mobile') && banner.path);
        const desktop = data.filter(banner => banner.name.includes('desktop') && banner.path);

        setMobileBanners(mobile);
        setDesktopBanners(desktop);
      })
      .catch(error => console.error(error));
  };

  // Determinar qué banners mostrar basado en la resolución
  const bannersToShow = isMobile ? mobileBanners : desktopBanners;
  const shouldShowCarousel = bannersToShow.length > 0;

  console.log(bannersToShow)

  const handleClick = (index) => {
    const banner = bannersToShow[index];
    if (banner.path_to) {
      navigate(banner.path_to); // Navegar a la ruta especificada
    }
  };

  return (
    <div className='flex flex-col w-full items-center gap-3 sm:pb-3'>
      {shouldShowCarousel ? (
        <Carousel
          autoPlay
          interval={5000}
          showStatus={false}
          infiniteLoop
          transitionTime={500}
          showThumbs={false}
          stopOnHover
          swipeable
          emulateTouch
          onClickItem={handleClick}
        >
          {bannersToShow.map((banner, index) => (
            <div key={index + new Date()} className="w-full h-full min-h-[200px] max-h-[550px]">
              <img
                src={banner.path}
                className="h-full w-full object-fill select-none"
                loading="eager"
                alt={`banner ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      ) : ''}
    </div>
  );
}

{/* <div>No banners available</div> */}