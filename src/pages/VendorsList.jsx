import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function VendorsList() {
  const [vendors, setVendors] = useState([]);

  const fetchVendors = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/vendors`);
    const data = await res.json();
    setVendors(data);
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vendors</h1>
      <Link to="/add" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        + Add Vendor
      </Link>

      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Contact Persons</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td className="p-2 border">{vendor.name}</td>
              <td className="p-2 border">{vendor.email}</td>
              <td className="p-2 border">{vendor.phone}</td>
              <td className="p-2 border">
                {vendor.contactPersons && vendor.contactPersons.join(", ")}
              </td>
              <td className="p-2 border">
                <Link to={`/edit/${vendor.id}`} className="text-blue-600">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
