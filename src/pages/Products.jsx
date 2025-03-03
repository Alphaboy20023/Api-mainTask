import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import SearchBar from "../components/buttons";
// import { FaCircleChevronLeft } from "react-icons/fa6";
// import { FaCircleChevronRight } from "react-icons/fa6";
import ConfirmDelete from "../components/confirmdelete";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById, fetchProductsByCategory } from "../redux/productSlice";


function Home(params) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [stores, setStores] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState('');
  const [filteredStores, setFilteredStores] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangePrice(e) {
    setPrice(e.target.value);
  }

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }

  function onChangeCategory(e) {
    setCategory(e.target.value);
  }

  function onChangeImage(e) {
    setImage(e.target.value);
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        setStores(json);
      })
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setStores([...stores, { title, price, description, category }]);
    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('');
    setImage('');
  }

  function handleDelete(index) {
    const UpdatedStores = stores.filter((_, i) => i !== index);
    setStores(UpdatedStores);
  }

  // function handleUpdate(index) {
  //   // const productToUpdate = stores[index];
  //   // setTitle(productToUpdate.title);
  //   // setPrice(productToUpdate.price);
  //   // setDescription(productToUpdate.description);
  //   // setCategory(productToUpdate.category);
  //   // setImage(productToUpdate.image);
  // }

  const dispatch = useDispatch();
  const { items, loading, currentCategory } = useSelector((state) => state.products);


  // Fetch a product by ID when the component mounts (for demonstration)
  useEffect(() => {
    dispatch(fetchProductById(1));
  }, [dispatch]);



  // handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }


  // Fetch products when category changes
  useEffect(() => {
    dispatch(fetchProductsByCategory(currentCategory));
  }, [currentCategory, dispatch]);


  // updates filteredStores whenever page reloads
  useEffect(() => {
    setFilteredStores(items);
  }, [items])


  // selects a criteria/product in the select dropdown
  const handleSelectChange = (e) => {
    setSelectedCriteria(e.target.value)
  }

  const filteredResults = items.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    const matchesCategory = selectedCriteria === "all" || product.category === selectedCriteria;
    return matchesSearch && matchesCategory;
  });
  // filteredResults();


  // sorts  the table by selected criteria
  const handleSortChange = () => {
    if (selectedCriteria === "all") {
      setFilteredStores(items);
    } else {
      const filtered = items.filter(product => product.category === selectedCriteria);
      setFilteredStores(filtered);
    }
  }



  return (
    <div className="productPage">
      <Navbar />
      <div className="wholePage">
        <Sidebar />
        <div className="content">
          <div className=" py-3">
            <div className="pageword">
              <h2>Products</h2>
              <div className="product">
                <button type="submit" className="text-light  border-0 btn valid1 newuser" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Add New Product
                </button>
              </div>
            </div>
            <>
              <div className="modal fade text-dark" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content text-start">
                    <div className="modal-body">
                      <h1 className="modal-title fs-4 fw-semibold text-dark" id="exampleModalLabel">Add Product</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="modal-body">
                        <div className="mb-3">
                          <label className="form-label">Title</label>
                          <input required type="text" onChange={onChangeTitle} value={title} className="form-control" placeholder="Title" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Price</label>
                          <input required type="number" onChange={onChangePrice} value={price} className="form-control" placeholder="Price" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Description</label>
                          <input required type="text" onChange={onChangeDescription} value={description} className="form-control" placeholder="Description" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Category</label>
                          <input required type="text" onChange={onChangeCategory} value={category} className="form-control" placeholder="Category" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Image</label>
                          <input type="text" onChange={onChangeImage} value={image} className="form-control" placeholder="Image URL" />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button className="btn btn-primary" type='submit'>Save changes</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          </div>
          <div className="card bg-light">
            <div className="card-body d-flex d-inline-flex justify-content-between align-items-center">
              <h3 className="bold ">Josh Bakery Ventures</h3>
              <p className="fs-6">62, Bode Thomas, Surulere, Lagos</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center   changerole py-3">
            <div className="d-flex flex-row  w-auto changerole">
              <div className="gaps">
                <select className="form-select d-inline-block w-auto
               "value={selectedCriteria}
                  onChange={handleSelectChange}
                >
                  <option value="all">See All</option>
                  <option value="jewelery">Jewelry</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value="men's clothing">Men's Clothing</option>
                  <option value="electronics">Electronics</option>
                </select>
              </div>
              <button className="btn border-0 valid" onClick={handleSortChange} disabled={loading}>
                Change
              </button>

              <SearchBar className="w-50" value={searchTerm} onChange={handleSearchChange} />
            </div>
            {/* <nav aria-label="Page navigation">
              <ul className="pagination">
                <button className="page-link border-0 bg-transparent" >
                  <FaCircleChevronLeft className="fs-4" />
                </button>
                <button className="page-link border-0 bg-transparent">
                  <FaCircleChevronRight className="fs-4" />
                </button>
              </ul>
            </nav> */}
          </div>

          <div className="">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="table border-radius-2  table-transparent">
                <thead>
                  <tr className="table-rw">
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults && filteredStores.map((product, index) =>
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.title}</td>
                      <td>${product.price}</td>
                      <td>{product.category}</td>
                      <td>{product.description}</td>
                      <td><img src={product.image} alt={product.title} style={{ width: '50px' }} /></td>
                      <td className="d-flex bg-white">
                        <ConfirmDelete
                          handleDelete={handleDelete}
                          index={index}
                        />
                        {/* <UpdateProduct */}
                        {/* // product={selectProduct} */}
                        {/* index={index}  */}
                        {/* handleUpdate = {handleUpdate} */}
                        {/* /> */}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

          </div>
        </div>
      </div>
    </div >
  );
}

export default Home;
