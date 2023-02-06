import Image from "next/image";

import classes from "./ProductDescription.module.css";

function ProductDescription({ title, description, image, imageAlt, mobImage }) {
  return (
    <section className={classes.section}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="space"></div>
      <Image src={mobImage} alt="" className={classes["img-1"]} />
      <Image src={image} alt={imageAlt} className={classes["img-2"]} />
    </section>
  );
}

export default ProductDescription;
