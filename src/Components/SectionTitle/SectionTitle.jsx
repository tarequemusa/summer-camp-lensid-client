

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="grid mx-auto text-center w-full my-14 px-10">
            <h3 className="text-3xl font-bold uppercase py-8 divider">{heading}</h3>
            <p className="text-sky-600 uppercase text-sm"><span className="outline p-2 rounded-lg font-light">{subHeading}</span></p>
        </div>
    );
};

export default SectionTitle;