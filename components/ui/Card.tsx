function Card({children,className }: {children?: React.ReactNode ; className?: string}) {
  return (
    <div className={`p-2  rounded-xl shadow text-black bg-white flex w-40 h-13 md:w-60 md:h-15 transition-all duration-400 ${className}`}>{children}</div>
  );
}

export default Card;
