import Image from "next/image";

import classes from "./ProductDescription.module.css";

function ProductDescription({ title, description, image, imageAlt }) {
  return (
    <section className={classes.section}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="space"></div>
      <Image src={image} alt={imageAlt} />
    </section>
  );
}

export default ProductDescription;
