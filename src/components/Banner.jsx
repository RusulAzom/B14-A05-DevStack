import bannerImg from '../assets/banner-stack.png';

export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/*Heor Area Banner> Left Side Content */}
        <div className="flex-1 text-center lg:text-left">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Craft Your Ultimate <br className="hidden sm:inline" />
            <span className="brand-gradient-text">Engineering Stack</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Discover modern frameworks, database engines, and developer tools. Compare performance metrics, evaluate community adoption, and curate the precise tech stack for your next production build.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#technologies" 
              className="w-full sm:w-auto text-center brand-gradient text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-orange-200 transition-all transform hover:-translate-y-0.5"
            >
              Explore Technologies
            </a>
            <button 
              className="w-full sm:w-auto text-center border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img 
            src={bannerImg} 
            alt="Developer Stack Diagram" 
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}