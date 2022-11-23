import ContactItem from './ContactItem';
function ContactGrid() {
  return (
    <div className='grid'>
      <ContactItem title='Business Consulting' icon='fa-address-book' />
      <ContactItem title='Market Analysis' icon='fa-address-book' />
      <ContactItem title='User Monitoring' icon='fa-address-book' />
    </div>
  );
}
export default ContactGrid;
