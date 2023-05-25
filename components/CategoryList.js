import CategoryCard from "./CategoryCard";

const CategoryList = ( {category}) => {
    return(
        <div style={{
            // display:"grid",
            // gap:"1rem",
            // gridTemplateColumns:"repeat(4,auto)",
            // justifyItems:"center",
            display:"flex",
            justifyContent:"space-around",
            flexWrap:"wrap",
            background:"antiquewhite",

        }}>
            {category?.map ( (user,i) => {
                return (
                    <CategoryCard
                    key={i}
                    image={user.image}/>
                );
            }
            )}
        </div>
    )
}

export default CategoryList;