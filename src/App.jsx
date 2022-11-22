import './App.css';

function SectionTitle(props) {
  console.log('props ===', props);
  return <h2 className='sectionTitle'>{props.title}</h2>;
}

function Icon(props) {
  return <i className={`fa ${props.iconName}`} aria-hidden='true'></i>;
}

function Grid() {
  return (
    <div className='grid'>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
}
function ServiceCard() {
  return (
    <div className='card'>
      <Icon iconName='fa-address-book' />
      <h3 className='card__title'>title</h3>
      <p className='card__text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        molestiae! Est soluta sint amet illo delectus nisi sit. Consequatur,
        illo.
      </p>
      <a href='#' className='card__link'>
        Learn more
      </a>
    </div>
  );
}

function App() {
  return (
    <div className='App container'>
      <SectionTitle title='Musu paslaugos' size='large' />
      <Grid />
    </div>
  );
}

export default App;
