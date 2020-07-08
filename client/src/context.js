import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopContext = React.createContext();

class ShopProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productCategory: [],
      productFromCategory: [],
      searchedProduct: [],
      featuredProduct: [],
      productFromSearch: {},
      users: [],
      registerUser: {},
      loginUser: {},
      activeUser: {},
      newProduct: {},
      productIsEdit: false,
      addProductToCart: false,
      editProduct: {},
      cart: [],
      orders: [],
      totalCartPrice: 0,
      singleProduct: {},
    };
    toast.configure();
  }
  componentDidMount() {
    this.setProductsFromMySQL();
    this.setProductCategoryFromMySQL();
    this.setFeaturedProductsFromMySQL();
    this.setStartedProductFromCategory();
    this.setUsersFromMySQL();
  }

  /* PRODUCTS */
  setProductsFromMySQL = () => {
    fetch("http://localhost:5000/getAllProducts")
      .then((res) => res.json())
      .then((data) =>
        this.setState((prevState) => {
          return {
            products: data.map((p) => ({ ...p, inCart: false })),
          };
        })
      )
      .catch((err) => console.error(err));
  };
  /* PRODUCTS CATEGORY */
  setProductCategoryFromMySQL = () => {
    fetch("http://localhost:5000/getAllProductCategory")
      .then((res) => res.json())
      .then((data) =>
        this.setState((prevState) => {
          return { productCategory: data };
        })
      )
      .catch((err) => console.error(err));
  };
  /* FEATURED PRODUCT*/
  setFeaturedProductsFromMySQL = () => {
    fetch("http://localhost:5000/getFeaturedProducts")
      .then((res) => res.json())
      .then((data) => this.setState({ featuredProduct: data }))
      .catch((err) => console.error(err));
  };
  /* SEARCH PRODUCT */
  searchProduct = () => {
    fetch(
      `http://localhost:5000/searchProduct?name=${this.state.productFromSearch.name}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState((prevState) => {
          if (this.state.productFromSearch.name.length === 0) {
            this.setProductCategoryFromMySQL();
          } else {
            return {
              searchedProduct: data.map((p) => ({ ...p, inCart: false })),
            };
          }
        })
      )
      .then(() => {
        this.checkIsSearchProductInCart();
        this.checkIsSearchProductBought();
      })
      .catch((err) => console.error(err));
  };
  searchProductByName = (name) => {
    this.setState(
      (prevState) => {
        return { productFromSearch: name };
      },
      () => {
        this.searchProduct();
      }
    );
  };
  /* GET PRODUCT FROM PRODUCT CATEGORY */
  setProductFromProductCategory = (id) => {
    fetch(
      `http://localhost:5000/getProductFromProductCategory?productCategoryId=${id}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState((prevState) => {
          return {
            productFromCategory: data.map((p) => ({
              ...p,
              inCart: false,
              bought: false,
            })),
          };
        })
      )
      .then(() => {
        this.checkIsProductInCart();
      })
      .then(() => {
        this.checkIsProductBought();
      })
      .catch((err) => console.error(err));
  };
  setStartedProductFromCategory = () => {
    fetch("http://localhost:5000/getStartedProductFromCategory")
      .then((res) => res.json())
      .then((data) => this.setState({ productFromCategory: data }))
      .catch((err) => console.error(err));
  };
  /* USERS */
  setUsersFromMySQL = () => {
    fetch("http://localhost:5000/getAllUser")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }))
      .catch((err) => console.error(err));
  };
  /* REGISTER NEW USER */
  registerUser = (newUser) => {
    this.setState(
      (prevState) => {
        return { registerUser: newUser };
      },
      () => {
        this.registerNewUserInMySQL();
      }
    );
  };
  registerNewUserInMySQL = () => {
    fetch("http://localhost:5000/registerNewUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.registerUser),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ activeUser: data }))
      .then(() => {
        this.messageForUser();
      })
      .then(() => {
        this.setUsersFromMySQL();
      });
  };
  /* LOG IN USER */
  loginUser = (newUser) => {
    this.setState(
      (prevState) => {
        return { loginUser: newUser };
      },
      () => {
        this.checkLoginUserInMySQL();
      }
    );
  };
  checkLoginUserInMySQL = () => {
    var email = this.state.loginUser.email;
    var password = this.state.loginUser.password;
    fetch(`http://localhost:5000/login/${email}/${password}`)
      .then((res) => res.json())
      .then((data) => this.setState({ activeUser: data }))
      .then(() => {
        this.messageForUser();
      })
      .then(() => {
        this.getCartForUser();
      })
      .then(() => {
        this.getOrdersForProfileUser();
      })
      .catch((err) => console.error(err));
  };
  messageForUser = () => {
    if (this.state.activeUser.status) {
      console.log(this.state.activeUser);
    } else {
      toast(this.state.activeUser.message);
    }
  };
  /*  LOG OUT USER */
  logOut = () => {
    this.setState(
      (prevState) => {
        return { activeUser: {} };
      },
      () => {
        this.setProductsFromMySQL();
      }
    );
  };
  /* DELETE CUSTOMER */
  deleteCustomer = (user) => {
    fetch("http://localhost:5000/deleteCustomer", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
      })
      .then(() => {
        this.setUsersFromMySQL();
      });
  };
  /* ADD NEW PRODUCT */
  addNewProduct = (newProductFromUI) => {
    this.setState(
      (prevState) => {
        return { newProduct: newProductFromUI };
      },
      () => {
        this.addNewProductInMySQL();
      }
    );
  };
  addNewProductInMySQL = () => {
    fetch("http://localhost:5000/addNewProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.newProduct),
    })
      .then((response) => response.json())
      .then(() => {
        this.setProductsFromMySQL();
        this.setFeaturedProductsFromMySQL();
      });
  };
  /* DELETE PRODUCT */
  deleteProduct = (product) => {
    fetch("http://localhost:5000/deleteProduct", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then(() => {
        this.setProductsFromMySQL();
        this.setFeaturedProductsFromMySQL();
      });
  };
  /*  EDIT PRODUCT */
  openEditProductModal = () => {
    this.setState({ productIsEdit: true });
  };
  closeEditProductModal = () => {
    this.setState({ productIsEdit: false });
  };
  getEditProduct = (id) => {
    return this.state.products.find((item) => item.id === id);
  };
  setEditProduct = (id) => {
    const newItem = this.getEditProduct(id);
    this.setState({ editProduct: newItem });
  };
  updateProduct = (
    id,
    newName,
    newPrice,
    newDescription,
    newImage,
    newInfo,
    newProductCategoryId
  ) => {
    this.setState(
      (prevState) => {
        return {
          products: prevState.products.map((item) => {
            if (item.id === id) {
              let tempItem = item;
              tempItem.name = newName;
              tempItem.price = newPrice;
              tempItem.description = newDescription;
              tempItem.image = newImage;
              tempItem.info = newInfo;
              tempItem.productCategoryId = newProductCategoryId;
              return tempItem;
            } else {
              return item;
            }
          }),
        };
      },
      () => {
        this.updateProductInMySQL();
      }
    );
  };

  updateProductInMySQL = () => {
    fetch("http://localhost:5000/editProduct", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state.editProduct),
    })
      .then((response) => response.json())
      .then(() => {
        this.setProductsFromMySQL();
        this.setFeaturedProductsFromMySQL();
      });
  };
  /* ADD NEW PRODUCT IN CART */
  getCartForUser = () => {
    var userId = this.state.activeUser.data.id;
    fetch(`http://localhost:5000/getCartForUser?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => this.setState({ cart: data }))
      .then(() => {
        this.setTotalCartPrice();
      })
      .then(() => {
        this.checkIsProductInCart();
      })
      .then(() => {
        this.checkIsSearchProductInCart();
      })
      .catch((err) => console.error(err));
  };
  addNewProductInMySQLCart = (prodId) => {
    fetch("http://localhost:5000/addProductToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: this.state.activeUser.data.id,
        productId: prodId,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        this.getCartForUser();
      });
  };
  /* BUY PRODUCT AND ADD TO ORDERS */
  getOrdersForProfileUser = () => {
    var userId = this.state.activeUser.data.id;
    fetch(`http://localhost:5000/getOrdersForUserProfile?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => this.setState({ orders: data }))
      .then(() => {
        this.checkIsProductBought();
        this.checkIsSearchProductBought();
      })
      .catch((err) => console.error(err));
  };
  addNewProductInOrders = (prodId) => {
    fetch("http://localhost:5000/addProductToOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: this.state.activeUser.data.id,
        productId: prodId,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        this.getOrdersForProfileUser();
      })
      .then(() => {
        this.getCartForUser();
      });
  };
  /*  DELETE PRODUCT FROM CART */
  deleteProductFromCart = (productId) => {
    var userId = this.state.activeUser.data.id;
    fetch("http://localhost:5000/deleteProductFromCart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId, productId: productId }),
    })
      .then((response) => response.json())
      .then(() => {
        this.getCartForUser();
      })
      .catch((err) => console.error(err));
  };
  /*  CLEAR ALL PRODUCT FROM CART */
  clearProductFromCart = () => {
    var userId = this.state.activeUser.data.id;
    fetch("http://localhost:5000/clearProductFromCart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    })
      .then((response) => response.json())
      .then(() => {
        this.getCartForUser();
      })
      .catch((err) => console.error(err));
  };
  /*  COUNT TOTAL PRICE IN CART */
  setTotalCartPrice = () => {
    let tempTotal = 0;
    this.state.cart.forEach((item) => (tempTotal += item.price));
    tempTotal = tempTotal.toFixed(2);
    this.setState(() => {
      return { totalCartPrice: tempTotal };
    });
  };
  /*  CHECK IS PRODUCT IN CART */
  checkIsSearchProductInCart = () => {
    let Products = this.state.searchedProduct;
    let Cart = this.state.cart;
    for (var i = 0; i < Products.length; i++) {
      for (var k = 0; k < Cart.length; k++) {
        if (Products[i].id === Cart[k].id) {
          Products[i].inCart = true;
        }
      }
    }
    this.setState(() => {
      return {
        searchedProduct: Products,
      };
    });
  };
  checkIsProductInCart = () => {
    let Products = this.state.productFromCategory;
    let Cart = this.state.cart;
    for (var i = 0; i < Products.length; i++) {
      for (var k = 0; k < Cart.length; k++) {
        if (Products[i].id === Cart[k].id) {
          Products[i].inCart = true;
        }
      }
    }
    this.setState(() => {
      return {
        productFromCategory: Products,
      };
    });
  };
  /*  CHECK IS PRODUCT IN CART */
  checkIsProductBought = () => {
    let Products = this.state.productFromCategory;
    let Orders = this.state.orders;
    for (var i = 0; i < Products.length; i++) {
      for (var k = 0; k < Orders.length; k++) {
        if (Products[i].id === Orders[k].id) {
          Products[i].bought = true;
        }
      }
    }
    this.setState(() => {
      return {
        productFromCategory: Products,
      };
    });
  };
  checkIsSearchProductBought = () => {
    let Products = this.state.searchedProduct;
    let Orders = this.state.orders;
    for (var i = 0; i < Products.length; i++) {
      for (var k = 0; k < Orders.length; k++) {
        if (Products[i].id === Orders[k].id) {
          Products[i].bought = true;
        }
      }
    }
    this.setState(() => {
      return {
        searchedProduct: Products,
      };
    });
  };
  /*  ADD TO CART MODAL */
  openAddToCartModal = () => {
    this.setState({ addProductToCart: true });
  };
  closeAddToCartModal = () => {
    this.setState({ addProductToCart: false });
  };
  getSingleProduct = (id) => {
    if (this.state.searchedProduct.length > 0) {
      return this.state.searchedProduct.find((item) => item.id === id);
    } else {
      return this.state.productFromCategory.find((item) => item.id === id);
    }
  };
  setSingleProductFromShop = (id) => {
    const newItem = this.getSingleProduct(id);
    this.setState({ singleProduct: newItem });
  };
  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          searchProductByName: this.searchProductByName,
          setProductFromProductCategory: this.setProductFromProductCategory,
          registerUser: this.registerUser,
          deleteCustomer: this.deleteCustomer,
          addNewProduct: this.addNewProduct,
          deleteProduct: this.deleteProduct,
          loginUser: this.loginUser,
          logOut: this.logOut,
          openEditProductModal: this.openEditProductModal,
          closeEditProductModal: this.closeEditProductModal,
          updateProduct: this.updateProduct,
          setEditProduct: this.setEditProduct,
          addNewProductInMySQLCart: this.addNewProductInMySQLCart,
          deleteProductFromCart: this.deleteProductFromCart,
          clearProductFromCart: this.clearProductFromCart,
          openAddToCartModal: this.openAddToCartModal,
          closeAddToCartModal: this.closeAddToCartModal,
          setSingleProductFromShop: this.setSingleProductFromShop,
          addNewProductInOrders: this.addNewProductInOrders,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopProvider, ShopConsumer };
