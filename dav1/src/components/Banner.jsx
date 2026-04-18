function Banner() {
  const handleClick = () => {
    window.open("https://www.imdb.com", "_blank");
  };

  return (
    <div className="banner">
      <h1>🎬 ფილმების სამყარო</h1>
      <p>აღმოაჩინე საუკეთესო ფილმები მთელი მსოფლიოდან</p>
      <button onClick={handleClick} className="banner-btn">
        🌟 IMDB-ზე გადასვლა
      </button>
    </div>
  );
}

export default Banner;