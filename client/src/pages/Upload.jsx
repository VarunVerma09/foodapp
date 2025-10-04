import React, { useState } from "react";
import axios from "axios";

const UploadPost = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
    category: "",
  });
  const [img, setImg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("img", img);
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("desc", formData.desc);
    data.append("category", formData.category);

    try {
      const res = await axios.post("http://localhost:8800/api/v1/auth/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Post uploaded successfully!");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to upload post");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Upload Product
        </h2>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Image</label>
          <input
            type="file"
            name="img"
            onChange={handleFileChange}
            className="w-full border rounded-lg px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            required
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPost;
