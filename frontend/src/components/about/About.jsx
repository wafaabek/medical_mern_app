
import aboutImg from '../../assets/images/pngtree-young-afro-professional-doctor-png-image_10148632.png';
import aboutCardImg from '../../assets/images/image.png';
import { Link } from'react-router-dom';

const About = () => {
  return (
    <section className="container">
  <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
    {/* about img */}
    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
      <img src={aboutImg} alt="" />
      
    </div>
    {/* about content */}
    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
      <h2 className='heading'>Proud to be one of the nations best</h2>
      <p className="text_para">
      For 30 years in a row, U.S. News & World Report has recognized us as one of the best public hospitals in the Nation and #1 in Texas.   
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, nemo?
      </p>
      <Link to='/'> <button className='btn'>Learn more</button></Link>
    </div>
  </div>
</section>




  );
}

export default About;
