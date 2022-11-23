import Icon from './UI/Icon';

function ContactItem(props) {
  return (
    <div className=''>
      <Icon iconName={props.icon} />
      <p className='card__title'>{props.title}</p>
    </div>
  );
}
export default ContactItem;
