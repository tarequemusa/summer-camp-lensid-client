import {FaCamera} from "react-icons/fa";

const Categories = () => {
    return (
        <>
            <h3 className="text-4xl text-center divider font-bold">Categories</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 p-10 mx-auto">
                <div className="card w-full">
                    <div className="card-body">
                        <figure><img className="w-2/5 rounded-full" src="https://startertemplatecloud.com/g34/wp-content/uploads/sites/58/2022/01/pexels-vlada-karpovich-4609072.jpg" alt="car!" /></figure>
                        <div className="card-actions flex items-center justify-center">
                            <button className="btn btn-outline btn-primary flex items-center">
                                <div className="outline rounded-full p-2">
                                    <span className="text-4xl"><FaCamera /></span>
                                </div>
                                <div className="flex justify-center items-center gap-2 flex-col px-6">
                                    <div>
                                        FAMILY PHOTOGRAPHY
                                    </div>
                                    <div className="text-gray-500">
                                        24 hours
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-full">
                    <div className="card-body">
                        <figure><img className="w-2/5 rounded-full" src="https://startertemplatecloud.com/g34/wp-content/uploads/sites/58/2022/01/retouching.jpg" alt="car!" /></figure>
                        <div className="card-actions flex items-center justify-center">
                            <button className="btn btn-outline btn-secondary flex items-center">
                                <div className="outline rounded-full p-2">
                                    <span className="text-4xl"><FaCamera /></span>
                                </div>
                                <div className="flex justify-center items-center gap-2 flex-col px-6">
                                    <div>
                                        PHOTO EDITING
                                    </div>
                                    <div className="text-gray-500">
                                        12 hours
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-full">
                    <div className="card-body">
                        <figure><img className="w-2/5 rounded-full" src="https://startertemplatecloud.com/g34/wp-content/uploads/sites/58/2022/01/mobile.jpg" alt="car!" /></figure>
                        <div className="card-actions flex items-center justify-center">
                            <button className="btn btn-outline btn-info">
                                <div className="outline rounded-full p-2">
                                    <span className="text-4xl"><FaCamera /></span>
                                </div>
                                <div className="flex justify-center items-center gap-2 flex-col px-6">
                                    <div>
                                        MOBILE PHOTOGRAPHY
                                    </div>
                                    <div className="text-gray-500">
                                        31 hours
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div></>
    );
};

export default Categories;