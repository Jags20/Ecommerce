import React from "react";
import Image from "next/image";

const CategoryCard = ({image}) => {
    return(
        <div style={{
            margin:"1.5rem",
            borderRadius:"25rem"
        }}>
            <Image src={image} alt="prod" height={220} width={180}/>
        </div>
    )
}

export default CategoryCard;