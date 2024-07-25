const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-[100px] bg-white m-[10px] shadow-md border flex items-center justify-center">
      {children}
    </div>
  );
};

export default Card;
