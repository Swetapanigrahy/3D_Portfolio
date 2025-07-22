const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
        <p className="text-white/80">{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
