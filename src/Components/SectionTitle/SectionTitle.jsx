

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center w-full my-8 px-10">
            <h3 className="text-4xl font-bold uppercase py-4 divider">{heading}</h3>
            <p className="text-sky-600 mb-2 uppercase text-lg">----( {subHeading} )----</p>
        </div>
    );
};

export default SectionTitle;