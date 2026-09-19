import '@/components/Preloader/Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
    <i className="circle-preloader"></i>
    <p className="preloader__text">Procurando notícias...</p>
    </div>
  );
}

export default Preloader;