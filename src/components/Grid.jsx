import ServiceCard from './ServiceCard';

const cardsArr = [
  {
    title: 'Business Consulting',
    icon: 'fa-address-book',
    link: '/about.html',
  },
  {
    title: 'Business Consulting',
    icon: 'fa-address-book',
    link: '/about.html',
  },
  {
    title: 'Business Consulting',
    icon: 'fa-address-book',
    link: '/about.html',
  },
];

function Grid() {
  return (
    <div className='grid'>
      {cardsArr.map((cObj) => (
        <ServiceCard title={cObj.title} icon={cObj.icon} link={cObj.link} />
      ))}
    </div>
  );
}
export default Grid;
