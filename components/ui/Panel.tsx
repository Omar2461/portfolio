function Panel({ children,className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`border border-gray-500 hover:shadow-xl/30 transition duration-400 text-gray-600 p-2 w-fit rounded-full ${className}`}>
      {children}
    </div>
  );
}

export default Panel;
