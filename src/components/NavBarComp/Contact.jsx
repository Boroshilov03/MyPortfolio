
import './Contact.css';

const Contact = () => {
  const headingStyle = {
    background: 'linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0))',
    WebkitBackgroundClip: 'text', // For Webkit browsers like Chrome and Safari
    color: 'transparent',
    // fontSize: '14rem',
    // fontWeight: '600',
    opacity: '0.2'
  };

  
  return (
    <>
    <div className="lg:ml-3">
      <h1 className="font-semibold lg:text-9xl text-5xl" style={headingStyle}>CONTACT ME</h1>
    </div>
    <h1 className="lg:ml-5 lg:text-[40px] text-[35px] font-bold">Get in Touch</h1>
    <div className="lg:flex lg:ml-5">
      <div className="w-1/2">
        <p className="lg:text-[40px] text-[35px] font-light">Contact</p>
        <div className="flex flex-col items-start mt-5 gap-2">
          <a href="mailto:mirlan.boroshilov@gmail.com" className="font-light">mirlan.boroshilov@gmail.com</a>
          <a href="tel:+15627533089" className="font-light">+1 562 753 3089</a>
        </div>

      </div>
      <div className="w-1/2">
        <p className="lg:text-[40px] text-[35px] font-light">Social</p>
        <div className="flex flex-col items-start mt-5 gap-2">
          <a href="https://www.linkedin.com/in/mirlan-boroshilov/" className="font-light">LinkedIn</a>
          <a href="https://www.instagram.com/mirlan_bb/" className="font-light">Instagram</a>
        </div>
      </div>
    </div>

    </>
  );
}

export default Contact;
