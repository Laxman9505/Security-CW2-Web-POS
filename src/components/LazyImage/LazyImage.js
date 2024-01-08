/** @format */

import React, { useEffect, useRef, useState } from "react";

function LazyImage({ src, alt, placeholder, className, style }) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 50px 0px" } // adjust this to your liking
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      onError={() => {
        setImageSrc("assets/images/imagePlaceholder.png");
      }}
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      style={style}
      className={className}
    />
  );
}

export default LazyImage;
