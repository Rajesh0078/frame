import React, { useState } from "react";

const BannerModal = ({ isOpen, onClose, onSubmit, banner }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        id: banner?.id || '',
        title: banner?.title || "",
        image: null,
        type: banner?.type || "main",
        order: banner?.order || "",
        status: banner?.status || "active",
    });

    const [preview, setPreview] = useState('/storage/' + banner?.image || null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-gray-700/50 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-[400px]">
                <h2 className="text-xl font-semibold mb-4">
                    {banner ? "Edit Banner" : "Create Banner"}
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {/* Title */}
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Title"
                        className=""
                    />

                    {/* Image Preview */}
                    {preview && (
                        <img src={preview} alt="Banner Preview" className="w-full h-[150px] object-cover rounded border border-bdr-primary" />
                    )}

                    {/* Image Upload */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="banner-upload"
                    />
                    <label htmlFor="banner-upload" className="border border-bdr-primary w-full !text-[#6F6F6F] cursor-pointer !font-normal flex !text-[14px] !rounded-[5px] !leading-1.5 !min-h-[42px] !bg-white px-3 !py-2" style={{ boxShadow: ' 0px 4px 4px 0px rgba(219, 219, 219, 0.2509803922)' }}>
                        <span className="my-auto">Upload Banner</span>
                    </label>

                    {/* Type Selection */}
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className=""
                    >
                        <option value="main">Main</option>
                        <option value="sub">Sub</option>
                    </select>

                    {/* Order */}
                    <input
                        type="number"
                        name="order"
                        value={formData.order}
                        onChange={handleChange}
                        placeholder="Order"
                        className=""
                    />

                    {/* Status Selection */}
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className=""
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 rounded"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            {banner ? "Update" : "Create"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BannerModal;
