

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <h2 className="text-yellow-600 mb-2">{subHeading}</h2>
            <p className="text-4xl uppercase border-y-2 py-4">{heading}</p>
            
        </div>
    );
};

export default SectionTitle;