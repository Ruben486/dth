import MotionPromo1 from "./MotionPromo1"

const Promo1 = () => {
  return (
    <>
      <div className="promo1 w-full flex flex-row gap-2 justify-around my-4">
        <MotionPromo1 imagen="/img1_promo1.jpg" />
        <MotionPromo1 imagen="/img2_promo1.jpg" /> 
        <MotionPromo1 imagen="/img3_promo1.jpg" /> 
        <MotionPromo1 imagen="/img4_promo1.jpg" /> 
        <MotionPromo1 imagen="/img5_promo1.jpg" /> 
        
        {/* <img className="rounded-lg w-[20%]" src="/img3_promo1.jpg" alt="" />
        <img className="rounded-lg w-[20%]" src="/img4_promo1.jpg" alt="" />
  <img className="rounded-lg w-[20%]" src="img5_promo1.jpg" alt="" }>/ */}
      </div>
    </>
  );
};

export default Promo1;
