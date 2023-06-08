import ClassItems from "../Shared/ClassItems/ClassItems";


const ClassCategory = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    items.map(item => <ClassItems
                        key={item._id}
                        item={item}
                    ></ClassItems>)
                }
            </div>
        </div>
    );
};

export default ClassCategory;