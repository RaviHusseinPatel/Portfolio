import CV from '../../assets/CV.pdf'

const CTA = () => {
    return (
      <div className="cta">
       <a href={CV} target="_blank" className='btn'> View CV </a>
       <a href="#contact" className='btn btn-primary'> Connect</a>
      </div>
    )
  };
  
  export default CTA;