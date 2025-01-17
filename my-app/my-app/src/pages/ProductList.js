import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page
  const [selectedProduct, setSelectedProduct] = useState(null); // For storing the selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open status

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      if (data) setProducts(data);
    };
    getProducts();
  }, []);

  // Calculate the items displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page changes
  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Open the modal
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Registered Products List</h2>
      {currentItems.length > 0 ? (
        <>
          <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.brand}</td>
                  <td>{p.price}</td>
                  <td>
                    <button onClick={() => openModal(p)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Buttons */}
          <div style={{ marginTop: 10, textAlign: 'center' }}>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              style={{ marginRight: 5 }}
            >
              Previous
            </button>
            <span>Page {currentPage} of {Math.ceil(products.length / itemsPerPage)}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
              style={{ marginLeft: 5 }}
            >
              Next
            </button>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                border: '1px solid #ccc',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                padding: 20,
                width: '300px',
                borderRadius: '8px',
              }}
            >
              <h3>Description</h3>
              <p>{selectedProduct?.description}</p>
              <button
                onClick={closeModal}
                style={{
                  marginTop: 10,
                  padding: '5px 10px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          )}

          {/* Dark Overlay */}
          {isModalOpen && (
            <div
              onClick={closeModal}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
              }}
            />
          )}
        </>
      ) : (
        <p>No products have been registered yet.</p>
      )}
    </div>
  );
}

export default ProductList;