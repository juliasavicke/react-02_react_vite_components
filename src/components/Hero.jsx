function Hero({ title, subtitle, color }) {
  return (
    <div className={`hero_${color} hero`}>
      <div className='container'>
        <h1 className='title'>{title}</h1>
        <h2 className='subtitle'>{subtitle}</h2>
      </div>
    </div>
  );
}
export default Hero;
