import { useEffect, useState } from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import "./MainSlider.css";

function ItemCarousel({ slidesImages }) {
  console.log(slidesImages)
  const [image, setImage] = useState(0);
  let id;
  useEffect(() => {
    id = setInterval(() => {
      if (image === slidesImages.length-1) {
        setImage(0);
      } else {
        setImage((prev) => prev + 1);
      }
    }, 5000);
    return () => clearInterval(id);
  }, [image]);

  return (
    <Box w="100%" pos="relative" className="mainSlider">
      <Box>
        <Image
          className="mainSliderimg"
          w="100%"
          src={slidesImages[image]}
        />
      </Box>
    </Box>
  );
}

export default ItemCarousel;
