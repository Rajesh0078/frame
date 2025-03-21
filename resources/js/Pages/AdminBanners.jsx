import React, { useState } from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import { GoSearch } from 'react-icons/go'
import { MdVisibility } from 'react-icons/md'
import { FiPlusCircle } from 'react-icons/fi'
import { usePage, Link, router } from '@inertiajs/react'
import BannerModal from '../components/Dashboard/BannerModel'

const AdminBanners = () => {
    const { props: { banners = [] } } = usePage()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editBanner, setEditBanner] = useState(null);

    const openCreateModal = () => {
        setEditBanner(null);
        setIsModalOpen(true);
    };

    const openEditModal = (banner) => {
        setEditBanner(banner);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (obj) => {
        const formData = new FormData();

        Object.keys(obj).forEach((key) => {
            if (key === "image" && obj[key] && obj[key] instanceof File) {
                formData.append(key, obj[key]);
            } else if (key !== "image") {
                formData.append(key, obj[key]);
            }
        });

        console.log(formData.get('image'))

        if (formData.get('id')) {
            router.put(`/api/banners/${formData.get('id')}`, formData, {
                onSuccess: (status) => {
                    console.log(status)
                },
                onError: (status) => {
                    console.log(status)
                }
            })
        } else {
            router.post('/api/banners', formData, {
                onSuccess: (status) => {
                    console.log(status)
                },
                onError: (status) => {
                    console.log(status)
                }
            })
        }
        closeModal();
    };

    return (
        <AdminLayout>
            <h2 className="text-xl font-semibold mb-4">Banners</h2>

            {/* Search & Actions */}
            <div className='flex justify-between items-center bg-white h-[70px] rounded-lg mt-5 px-4 w-full'>
                <div className='relative flex-1 max-w-[400px]'>
                    <input type="text" className='w-full pl-4 pr-10 py-2 border rounded-lg focus:ring focus:ring-primary' placeholder='Search' />
                    <GoSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-dark' />
                </div>
                <div className='flex gap-4'>
                    <button className='btn-secondary flex items-center gap-2 min-h-[42px] whitespace-nowrap px-4 shadow'>
                        <MdVisibility className="text-lg" /> Preview
                    </button>
                    <button className='btn-primary flex items-center gap-2 min-h-[42px] whitespace-nowrap px-4 shadow' onClick={openCreateModal}>
                        <FiPlusCircle className="text-lg" /> Create a Banner
                    </button>
                </div>
            </div>

            {/* Banners Table */}
            <div className="mt-6 shadow">
                {banners.length > 0 ? (
                    <table className="w-full border-collapse border border-white rounded-[8px] overflow-hidden">
                        <thead>
                            <tr className="bg-white">
                                <th className="border border-primary-border p-3 text-left">#</th>
                                <th className="border border-primary-border p-3 text-left">Title</th>
                                <th className="border border-primary-border p-3 text-left">Image</th>
                                <th className="border border-primary-border p-3 text-left">Type</th>
                                <th className="border border-primary-border p-3 text-left">Status</th>
                                <th className="border border-primary-border p-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {banners.map((banner, index) => (
                                <tr key={banner.id} className="border-b border-primary-border">
                                    <td className="border border-primary-border p-3">{index + 1}</td>
                                    <td className="border border-primary-border p-3">{banner.title || 'N/A'}</td>
                                    <td className="border border-primary-border p-3">
                                        <img src={`/storage/${banner.image}`} alt="Banner" className="h-10 rounded-md" />
                                    </td>
                                    <td className="border border-primary-border p-3 capitalize">{banner.type}</td>
                                    <td className="border border-primary-border p-3">
                                        <span className={`px-6 py-2 capitalize rounded-full text-sm ${banner.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {banner.status}
                                        </span>
                                    </td>
                                    <td className=" p-3 flex gap-2">
                                        <button onClick={() => openEditModal(banner)} className="btn-secondary px-3 py-1 text-sm">Edit</button>
                                        <button className="btn-primary !bg-red-600 px-3 py-1 text-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="">No banners found.</p>
                )}
            </div>
            <BannerModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={handleSubmit}
                banner={editBanner}
            />
        </AdminLayout>
    )
}

export default AdminBanners
