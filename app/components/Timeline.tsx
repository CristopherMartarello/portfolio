const Timeline = () => {
  return (
    <>
      {/* Linha horizontal no desktop */}
      <hr className="hidden md:block absolute top-1/2 left-0 w-full border-t-4 border-brand-blue-700 transform -translate-y-1/2 z-0" />
      
      {/* Linha vertical no mobile */}
      <div className="block md:hidden absolute left-10 top-0 h-full border-l-4 border-brand-blue-700 z-0" />
    </>
  );
};

export default Timeline;
