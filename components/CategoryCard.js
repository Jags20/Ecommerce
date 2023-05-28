import React from "react";
import Image from "next/image";
import styles from "@/styles/categorycard.module.css";

const CategoryCard = ({image}) => {
    return(
        <div className={styles.category_main}>
            <Image src={image} alt="prod" height={250} width={220} className={styles.picture}/>
        </div>
    )
}

export default CategoryCard;