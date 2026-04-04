function Card({children,className }: {children?: React.ReactNode ; className?: string}) {
  return (
    <div className={`p-1 rounded-xl shadow text-black bg-white flex w-40 md:w-60  transition-all duration-400 ${className}`}>{children}</div>
  );
}

export default Card;
