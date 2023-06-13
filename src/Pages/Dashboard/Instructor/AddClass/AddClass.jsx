import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import {useForm} from "react-hook-form";
import React, {useContext} from "react";
import {AuthContext} from "../../../../providers/AuthProvider";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {register, handleSubmit, reset, setValue} = useForm(
        {
            defaultValues: {
                email: user.email,
                displayName: user.displayName,
            }
        }
    );
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${ img_hosting_token }`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if(imgResponse.success) {
                    const image = imgResponse.data.display_url;
                    const {course_name, course_fee, category, email, instructor, seats_available, course_intro, student_capacity, duration} = data;
                    const newItem = {course_name, course_fee: parseFloat(course_fee), category, email, instructor, seats_available, image: image, course_intro, student_capacity, duration}
                    console.log(newItem);
                    axiosSecure.post('/class', newItem)
                        .then(data => {
                            console.log('After Added New Classes by Instructor', data.data);
                            if(data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };

    React.useEffect(() => {
        setValue('status', 'pending');
    }, [setValue]);
    console.log(img_hosting_token);
    return (
        <div className="w-full px-10">
            <div>
                <Helmet>
                    <title>Add Class | LensID An Institute of Photography</title>
                </Helmet>
                <div className="w-full">
                    <SectionTitle
                        subHeading="Add Photography Classes"
                        heading="Add A Class"
                    ></SectionTitle>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-evenly gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="text" placeholder="Class Name"
                            {...register("course_name", {required: true, maxLength: 120})}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue="Select One" {...register("category", {required: true})} className="select select-bordered">
                            <option disabled>Select one</option>
                            <option>Family Photography</option>
                            <option>Photo Editing</option>
                            <option>Mobile Photography</option>
                        </select>
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" {...register("image", {required: true})} className="file-input file-input-bordered file-input-info w-full" />
                </div>
                <div className="flex justify-evenly gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" {...register('instructor')} readOnly defaultValue={user.displayName} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" {...register("email", {required: true})} readOnly defaultValue={user?.email} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex justify-evenly gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Student Capacity*</span>
                        </label>
                        <input type="number" {...register("student_capacity", {required: true})} placeholder="Student Capacity" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Duration (Week)*</span>
                        </label>
                        <input type="text" {...register("duration", {required: true})} placeholder="Course duration" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex justify-evenly gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats*</span>
                        </label>
                        <input type="number" {...register("seats_available", {required: true})} placeholder="Number of Seats" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("course_fee", {required: true})} placeholder="Course Fee" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Intro</span>
                    </label>
                    <textarea {...register("course_intro", {required: true})} className="textarea textarea-bordered h-24" placeholder="Short Intro"></textarea>
                </div>
                <input type="hidden" {...register('status')} value="pending" />
                <button className="btn btn-sm mt-4 btn-primary mb-12"><input type="submit" value="Create A Class" /></button>
            </form>
        </div >
    );
};

export default AddClass;


