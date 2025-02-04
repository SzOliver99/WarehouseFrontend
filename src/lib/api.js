export const getAllOrder = () => fetch('/api/Orders').then((response) => response.json());
export const getAllProduct = () => fetch('/api/Products').then((response) => response.json());
export const getAllStock = () => fetch('/api/Stock').then((response) => response.json());
export const getAllSupplier = () => fetch('/api/Suppliers').then((response) => response.json());
