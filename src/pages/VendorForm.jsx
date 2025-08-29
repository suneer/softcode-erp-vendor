import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addVendor, updateVendor, getVendorById } from "../data/vendors";

export default function VendorForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [vendor, setVendor] = useState({ name: "", email: "", phone: "", contactPersons: [""] });

  useEffect(() => {
    if (isEdit) {
      const existingVendor = getVendorById(Number(id));
      if (existingVendor) setVendor(existingVendor);
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateVendor(Number(id), vendor);
    } else {
      addVendor(vendor);
    }
    navigate("/"); // Go back to list
  };

  const addContactPerson = () => {
    setVendor({ ...vendor, contactPersons: [...vendor.contactPersons, ""] });
  };

  const handleContactChange = (index, value) => {
    const updated = [...vendor.contactPersons];
    updated[index] = value;
    setVendor({ ...vendor, contactPersons: updated });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? "Edit Vendor" : "Add Vendor"}</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={vendor.name} onChange={handleChange} placeholder="Vendor Name" className="border p-2 w-full" required />
        <input type="email" name="email" value={vendor.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full" required />
        <input type="text" name="phone" value={vendor.phone} onChange={handleChange} placeholder="Phone" className="border p-2 w-full" required />

        <div>
          <h2 className="font-semibold mb-2">Contact Persons</h2>
          {vendor.contactPersons.map((cp, index) => (
            <input key={index} type="text" value={cp} onChange={(e) => handleContactChange(index, e.target.value)} placeholder="Contact Person Name" className="border p-2 w-full mb-2" />
          ))}
          <button type="button" onClick={addContactPerson} className="px-3 py-1 bg-green-600 text-white rounded">
            + Add Contact Person
          </button>
        </div>

        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg">
          {isEdit ? "Update Vendor" : "Save Vendor"}
        </button>
      </form>
    </div>
  );
}
