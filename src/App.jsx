import './App.css';

function SectionTitle(props) {
  console.log('props ===', props);
  return <h2 className='sectionTitle'>{props.title}</h2>;
}

function Icon(props) {
  return (
    <i
      className={`fa ${props.iconName} fa-3x card__icon`}
      aria-hidden='true'
    ></i>
  );
}

function Grid() {
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
      <ServiceCard
        title='User Monitoring'
        icon='fa-address-book'
        link='/about.html'
      />
    </div>
  );
}
function ServiceCard(props) {
  return (
    <div className='card'>
      <Icon iconName={props.icon} />
      <h3 className='card__title'>{props.title}</h3>
      <p className='card__text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        molestiae! Est soluta sint amet illo delectus nisi sit. Consequatur,
        illo.
      </p>
      <a href={props.link} className='card__link'>
        Learn more
      </a>
    </div>
  );
}

function OurServices() {
  return (
    <div className='servicesSection'>
      <SectionTitle title='Musu paslaugos' size='large' />
      <Grid />
    </div>
  );
}

function App() {
  return (
    <div className='App container'>
      <OurServices />
    </div>
  );
}

export default App;
