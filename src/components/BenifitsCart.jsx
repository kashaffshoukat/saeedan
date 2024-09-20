
const BenefitsCard = ({ icon, title, description }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md flex items-start space-x-4 h-full">
            <div className="text-3xl text-primary">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-lg text-gray-600 mt-1 font-thin">{description}</p>
            </div>
        </div>
    );
};

export default BenefitsCard;
