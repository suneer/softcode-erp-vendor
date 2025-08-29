// This acts as a temporary "database"
let vendors = [
  { id: 1, name: "vendor", email: "vendor@gmail.com", phone: "98888888810", contactPersons: ["Suneer"] },
  { id: 2, name: "Supplies", email: "abc@gmail.com", phone: "966666666660", contactPersons: ["Jasheel"] },
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
