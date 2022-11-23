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
      <ServiceCard
        title={cardsArr[0].title}
        icon={cardsArr[0].icon}
        link={cardsArr[0].link}
      />
      <ServiceCard
        title={cardsArr[1].title}
        icon={cardsArr[1].icon}
        link={cardsArr[1].link}
      />
      <ServiceCard
        title={cardsArr[2].title}
        icon={cardsArr[2].icon}
        link={cardsArr[2].link}
      />
    </div>
  );
}
export default Grid;
