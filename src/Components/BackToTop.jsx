const BackToTop = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleScroll}
      className="w-full bg-[#37475A] text-center p-5 text-white cursor-pointer"
    >
      <p>Back To Top</p>
    </div>
  );
};

export default BackToTop;
