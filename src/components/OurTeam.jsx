import SectionTitle from './SectionTitle';
import TeamList from './TeamList';

function OurTeam() {
  return (
    <div className='teamSection container'>
      <SectionTitle
        title='Musu komanda'
        subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.'
      />
      <TeamList />
    </div>
  );
}
export default OurTeam;
