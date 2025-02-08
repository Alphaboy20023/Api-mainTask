import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import SearchBar from "../components/buttons";
import { FaCircleChevronLeft} from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import ConfirmDelete from "../components/confirmdelete";

function Home(params) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [stores, setStores] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('');
  const [sortedStores, setSortedStores] = useState([]);
  const [visibleColumn, setVisibleColumn] = useState([]);

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
        setStores(json); // Store fetched users in state
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
  //   const productToUpdate = stores[index];
  //   setTitle(productToUpdate.title);
  //   setPrice(productToUpdate.price);
  //   setDescription(productToUpdate.description);
  //   setCategory(productToUpdate.category);
  //   setImage(productToUpdate.image);
  // }

  const handleSortChange = async (e) => {
    const criteria = e.target.value;
    setSortCriteria(criteria);
    setVisibleColumn(criteria);

    if (criteria && stores.length > 0) {

      const sortedData = [...stores].sort((a, b) => {
        if (criteria === 'title') return a.title.localeCompare(b.title);
        if (criteria === 'category') return a.category.localeCompare(b.title)
        if (criteria === 'price') return a.price - b.price;
        return 0;
      });

      console.log("Sorted Data:", sortedData)

      setStores(sortedData);
    } else {
      setSortedStores([]);
    }
  }

  return (
    <div>
      <Navbar style={{width:"160vh"}} />
      <Sidebar />
      <div className="content">
        <div className="d-flex px-3 py-3 justify-content-between stubborn">
          <h2>Products</h2>
          <>
            <button type="button" className="text-light border-0 btn valid newuser fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add New Product
            </button>
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
            <h3 className="bold">Josh Bakery Ventures</h3>
            <p className="fs-6">62, Bode Thomas, Surulere, Lagos</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between changerole py-3">
          <div className="d-flex flex-row w-75 changerole">
            <div className="gaps">
              <select className="form-select d-inline-block w-auto
               "value={sortCriteria}
                onChange={handleSortChange}
              >
                <option value="" >Change</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
              </select>
            </div>
            <button className="btn border-0 valid" onChange={handleSortChange} >Change</button>
            <SearchBar className="w-100" />
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <button className="page-link border-0 bg-transparent" >
                <FaCircleChevronLeft className="fs-4" />
              </button>
              <button className="page-link border-0 bg-transparent">
                <FaCircleChevronRight className="fs-4" />
              </button>
            </ul>
          </nav>
        </div>

        <div className="w-100">
          {stores.length > 0 && (
            <table className="table border-radius-2 table-transparent w-100">
              <thead>
                <tr className="table-rw">
                  {visibleColumn === "" && (
                    <>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Price</th>
                      <th scope="col">Category</th>
                      <th scope="col">Description</th>
                      <th scope="col">Image</th>
                      <th scope="col">Action</th>
                    </>
                  )}
                  {visibleColumn === "title" && <th scope="col">Title</th>}
                  {visibleColumn === "price" && <th scope="col">Price</th>}
                  {visibleColumn === "category" && <th scope="col">Category</th>}
                </tr>
              </thead>
              <tbody>
                {(sortedStores.length > 0 ? sortedStores : stores).map((product, index) =>
                  <tr key={product.id}>
                   {visibleColumn === "" && (
                    <>
                       <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                    <td>{product.image}</td>
                    <td className="d-flex bg-white">
                      <ConfirmDelete
                        handleDelete={handleDelete}
                        index={index}
                      />
                      <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Update Product
                      </button>
                    </td>
                    </>
                   )}
                   {visibleColumn === "title" && <td>{product.title}</td>}
                   {visibleColumn === "price" && <td>${product.price}</td>}
                   {visibleColumn === "category" && <td>${product.category}</td>}
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
