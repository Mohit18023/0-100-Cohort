
export default function({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div className="p-1 border-b text-center">50% off for next 3days</div>
        {children}
    </div>
        
  );
}