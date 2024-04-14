import { motion } from "framer-motion";

const MotionPromo1 = ({imagen}) => {
  return (
    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
        //   animate={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="caja-img rounded-lg">
            <img className="img-promo1 rounded-lg w-full" src={imagen} alt="promo1" />
          </div>
        </motion.div>
  )
}

export default MotionPromo1;
