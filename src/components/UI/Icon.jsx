function Icon(props) {
  return (
    <i
      className={`fa ${props.iconName ? props.iconName : ''} fa-3x card__icon`}
      aria-hidden='true'
    ></i>
  );
}
export default Icon;
