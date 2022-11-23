import ServiceCard from './ServiceCard';
function WorkGrid() {
  return (
    <div className='grid'>
      <ServiceCard
        title='Business Consulting'
        icon='fa-address-book'
        link='/about.html'
      />
      <ServiceCard
        title='Market Analysis'
        icon='fa-address-book'
        link='/about.html'
      />
      <img src='/img/person_5.jpg.webp' alt='' />
    </div>
  );
}
export default WorkGrid;
