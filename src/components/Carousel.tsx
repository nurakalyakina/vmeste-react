import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import image1 from "../../public/img/contacts_carousel/1.png";
import image2 from "../../public/img/contacts_carousel/2.png";
import image3 from "../../public/img/contacts_carousel/3.png";
import image4 from "../../public/img/contacts_carousel/4.png";
import image5 from "../../public/img/contacts_carousel/5.png";
import image6 from "../../public/img/contacts_carousel/6.png";
import image7 from "../../public/img/contacts_carousel/7.png";
import image8 from "../../public/img/contacts_carousel/8.png";
import image9 from "../../public/img/contacts_carousel/9.png";

const items = [
  {
    id: "1",
    imgSrc: image1,
  },
  {
    id: "2",
    imgSrc: image2,
  },
  {
    id: "3",
    imgSrc: image3,
  },
  {
    id: "4",
    imgSrc: image4,
  },
  {
    id: "5",
    imgSrc: image5,
  },
  {
    id: "6",
    imgSrc: image6,
  },
  {
    id: "7",
    imgSrc: image7,
  },
  {
    id: "8",
    imgSrc: image8,
  },
  {
    id: "9",
    imgSrc: image9,
  },
];

function Carousel() {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [width, setWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); // New state for modal
  const carousel = useRef(null);

  useEffect(() => {
    // @ts-ignore
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);

  return (
    <>
      {/* Existing carousel structure */}
      <div className="w-full overflow-hidden">
        <div className="w-full overflow-hidden">
          <motion.div
            ref={carousel}
            drag="x"
            whileDrag={{ scale: 0.95 }}
            dragElastic={0.2}
            dragConstraints={{ right: 0, left: -width }}
            dragTransition={{ bounceDamping: 30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex will-change-transform cursor-grab active:cursor-grabbing"
          >
            <>
              {items.slice(0, 8)?.map((itemData, index) => (
                <motion.div
                  key={itemData.id}
                  className="min-w-[20rem] min-h-[13rem] p-2"
                  onTap={() =>
                    setSelectedImage(
                      // @ts-ignore
                      itemData.imgSrc,
                    )
                  } // Add click handler [[7]]
                  whileTap={{ scale: 0.95 }} // Optional tap feedback
                >
                  <img
                    src={
                      // @ts-ignore
                      itemData?.imgSrc
                    }
                    alt="img"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </motion.div>
              ))}
            </>
          </motion.div>
        </div>
      </div>

      {/* New modal component */}
      <AnimatePresence>
        <>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)} // Close on backdrop click
            >
              <div className="relative">
                <motion.img
                  src={selectedImage}
                  alt="Expanded view"
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                />
                <button
                  className="absolute -top-2 -right-6 text-white text-3xl z-[999]"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
              </div>
            </motion.div>
          )}
        </>
      </AnimatePresence>
    </>
  );
}

export default Carousel;
