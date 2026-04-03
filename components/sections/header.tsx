import Link from "next/link";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../app/fonts/VeganStylePersonalUse-5Y58.ttf",
});

function Header() {
  const headerItems = [
    { title: "Services", link: "#ServicesSection" },
    { title: "Experience", link: "#ExperiencesSection" },
    { title: "Projects", link: "#projects" },
  ];

  const renderHeaderItems = () => {
    return headerItems.map(({ title, link }, idx) => (
      <Link
        className="relative mr-6 lg:px-6 lg:py-2 font-semibold rounded-full text-sm
        hover:border-r hover:border-l hover:border-[#8bbab3] hover:text-[#8bbab3] hover:transition-all hover:duration-500 "
        key={idx}
        href={link}
      >
        {title}
      </Link>
    ));
  };

  return (
    <header className="flex items-center justify-between px-3" id="header">
      <h1
        className={`text-2xl mb-2 lg:text-3xl font-bold ${myFont.className} text-gray-600 transition-all duration-400`}
      >
        Omar
      </h1>
      <nav className="flex lg:space-x-6 text-gray-600 font-medium">
        {renderHeaderItems()}
      </nav>
      <div className="text-sm font-semibold text-gray-600 hidden md:block">01142563801</div>
    </header>
  );
}

export default Header;
