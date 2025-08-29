// This acts as a temporary "database"
let vendors = [
  { id: 1, name: "ABC Traders", email: "abc@gmail.com", phone: "9876543210", contactPersons: ["John Doe"] },
  { id: 2, name: "XYZ Supplies", email: "xyz@gmail.com", phone: "9123456780", contactPersons: ["Jane Smith"] },
];

export const getVendors = () => vendors;

export const addVendor = (vendor) => {
  const newVendor = { ...vendor, id: vendors.length + 1 };
  vendors.push(newVendor);
};

export const updateVendor = (id, updatedVendor) => {
  vendors = vendors.map(v => v.id === id ? { ...v, ...updatedVendor } : v);
};

export const getVendorById = (id) => vendors.find(v => v.id === id);
