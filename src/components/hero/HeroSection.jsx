import {
  FaHandshake,
  FaCheckCircle,
  FaHeadset,
  FaSearch,
  FaTag,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBuilding,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="lg:max-w-[80%] mx-auto  flex flex-col md:flex-row items-center justify-between gap-x-10  py-12 bg-white">
      {/* Left Content */}
      <div className="md:w-1/2 text-right">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex flex-col leading-snug">
          <span className="hr"> خرید آسان و مطمئن از</span>
          <span className="text-primary">مارکیت حسین زاده</span>
          <span className="text-primary"> Hussain Zada City Center </span>
        </h1>
        <p className="text-gray-600 mt-4 font-semibold text-lg">
          از مارکیت حسین زاده، هر آنچه نیاز دارید را با تنوع بالا، کیفیت عالی و
          خدماتی مطمئن تهیه کنید.
        </p>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="flex flex-col items-center">
            <img src="/home.png" alt="home" className="h-24" />
            <span className="text-sm font-semibold"> بلاگ های رهایشی </span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/company.png" alt="home" className="h-24" />
            <span className="text-sm font-semibold"> شرکت های تجارتی </span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Jewelry.png" alt="home" className="h-24" />
            <span className="text-sm font-semibold"> جواهر فروشی </span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/shop.png" alt="home" className="h-24" />
            <span className="text-sm font-semibold"> دوکان های تجاری </span>
          </div>
        </div>

        {/* Search */}
        <div className="mt-8 flex items-center border border-gray-500 bg-white rounded-full shadow-md px-4 py-1 max-w-md">
          <FaSearch className="text-gray-500 ml-2" />
          <input
            type="text"
            className="flex-grow outline-none text-sm placeholder-gray-400 text-right"
            placeholder="نام محصول، دسته‌بندی یا برند را جستجو کنید"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
            جستجو
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-12 md:mt-0 relative">
        <div className="rounded-tl-[80px] overflow-hidden flex justify-center items-center">
          <img
            src="/hero.webp" // Replace this with actual image path
            alt="Modern Building"
            className="w-[500px] rounded-t-full h-[70vh] object-cover"
          />
        </div>

        {/* Floating Tags */}
        <div className="absolute top-10 left-36 bg-primary text-white px-3 py-3 animate-bounce transition-all duration-500 rounded-md text-sm shadow-md">
          <FaTag className="inline mr-1" /> پیشنهاد ویژه
        </div>
        <div className="absolute top-48 left-5 flex flex-col gap-3 px-2">
          <FloatingLabel icon={<FaHandshake />} label="بهترین  خدمات" />
          <FloatingLabel icon={<FaMapMarkerAlt />} label="بهترین موقعیت" />
          <FloatingLabel icon={<FaMoneyBillWave />} label="بهترین قیمت‌ها" />
          <FloatingLabel
            icon={<FaBuilding />}
            label="بزرگ‌ ترین دوکان های تجاری"
          />
        </div>
      </div>
    </div>
  );
};

const FloatingLabel = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white shadow-md rounded-md px-3 py-2 text-sm text-gray-700">
    <span className="text-blue-600">{icon}</span>
    <span>{label}</span>
  </div>
);

export default HeroSection;
