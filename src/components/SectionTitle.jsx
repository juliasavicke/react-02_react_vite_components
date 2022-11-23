function SectionTitle(props) {
  console.log('props ===', props);
  return (
    <div>
      <h2 className='sectionTitle'>{props.title}</h2>
      {props.subTitle ? <p className='subTitle'>{props.subTitle}</p> : ''}
    </div>
  );
}
export default SectionTitle;
