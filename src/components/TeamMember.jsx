import person_8 from '../assets/person_8.jpg.webp';
function TeamMember({ img, title, desc }) {
  // const { img, title, desc } = props;
  return (
    <div className='card'>
      <img src={img} alt='' />
      <h3 className='card__title'>{title}</h3>
      <p className='card__text'>{desc}</p>
    </div>
  );
}
export default TeamMember;
