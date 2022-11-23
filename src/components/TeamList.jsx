import TeamMember from './TeamMember';
import GridNew from './UI/GridNew';

const teamArr = [
  {
    title: 'Kaiara Spencer',
    img: '/img/person_5.jpg.webp',
    desc: 'PRODUCT MANAGER',
  },
  {
    title: 'Dave Simpson',
    img: '/img/person_6.jpg.webp',
    desc: 'PRODUCT MANAGER',
  },
  {
    title: 'Ben Thompson',
    img: '/img/person_7.jpg.webp',
    desc: 'PRODUCT MANAGER',
  },
  {
    title: 'Kyla Stewart',
    img: '/img/person_8.jpg.webp',
    desc: 'PRODUCT MANAGER',
  },
];

function TeamList() {
  return (
    <GridNew>
      <TeamMember
        title={teamArr[0].title}
        img={teamArr[0].img}
        desc={teamArr[0].desc}
      />
      <TeamMember
        title={teamArr[1].title}
        img={teamArr[1].img}
        desc={teamArr[1].desc}
      />
      <TeamMember
        title={teamArr[2].title}
        img={teamArr[2].img}
        desc={teamArr[2].desc}
      />
      <TeamMember
        title={teamArr[3].title}
        img={teamArr[3].img}
        desc={teamArr[3].desc}
      />
    </GridNew>
  );
}
export default TeamList;
