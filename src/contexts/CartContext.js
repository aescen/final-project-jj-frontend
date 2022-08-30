import { memo, useContext, useReducer, createContext, useEffect } from 'react';
import {
  AUTHENTICATED,
  CURRENT_USER,
  CART,
  ADD_CART,
  ADD_NEW_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCT_COUNT,
  DELETE_CART,
  DELETE_CART_LOCAL,
} from './ContextConsts';
import * as Helper from './../helpers/CartHelper';

const CartContext = createContext();

/* id: '', // id cart
  idUser: '', // id user pemilik cart
  data: [
    // data produk di cart
    {
      productId: '', // id produk
      productName: '', // nama produk
      product: '', // url gambar
      harga: '', // harga produk
      tipe: '', // tipe produk, buket / tanamanhias
    },
  ], */
const cartInitialState = {
  id: '',
  idUser: '',
  data: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...action.payload,
      };
    case ADD_NEW_PRODUCT:
      const productFound = state.data.filter(
        (item) =>
          item.idProduk === action.payload.idProduk &&
          item.tipe === action.payload.tipe,
      );

      if (productFound.length === 0) {
        const user = JSON.parse(localStorage.getItem(CURRENT_USER));
        const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));

        const newCart = {
          ...state,
          data: [
            ...state.data,
            {
              ...action.payload,
              jumlah: 1,
            },
          ],
        };

        if (isAuthenticated) {
          newCart.idUser = user.id;
        }

        localStorage.setItem(CART, JSON.stringify(newCart));
        return { ...newCart };
      }

      return {
        ...state,
      };
    case SET_PRODUCT_COUNT:
      return {
        ...(() => {
          const newProductData = state.data.map((item) => {
            if (
              item.idProduk === action.payload.idProduk &&
              item.tipe === action.payload.tipe
            ) {
              if (
                action.payload.jumlah > 0 &&
                item.jumlah !== action.payload.jumlah
              ) {
                return {
                  ...item,
                  jumlah: action.payload.jumlah,
                };
              }
            }
            return item;
          });
          const newCart = {
            ...state,
            data: newProductData,
          };

          Helper.putCartById(newCart.id, newCart)
            .then((data) => {
              localStorage.setItem(CART, JSON.stringify(data));
            })
            .catch((err) => {
              // cart tidak ditemukan
              console.error(err);
            });

          return newCart;
        })(),
      };
    case DELETE_PRODUCT:
      return {
        ...(() => {
          const filteredProductData = state.data.filter(
            (item) => item.idProduk !== action.payload.idProduk,
          );

          if (filteredProductData.length > 0) {
            const newCart = {
              ...state,
              data: filteredProductData,
            };

            Helper.putCartById(newCart.id, newCart)
              .then((data) => {
                localStorage.setItem(CART, JSON.stringify(data));
              })
              .catch((err) => {
                // cart tidak ditemukan
                console.error(err);
              });

            localStorage.setItem(CART, JSON.stringify(newCart));
            return newCart;
          }
          return { ...state, data: [] };
        })(),
      };
    case DELETE_CART:
      return {
        ...(() => {
          Helper.deleteCartById(state.id)
            .then(() => {
              localStorage.removeItem(CART);
            })
            .catch((err) => {
              // cart tidak ditemukan
              console.error(err);
            });
          return { ...state, data: [] };
        })(),
      };
    case DELETE_CART_LOCAL:
      return {
        ...(() => {
          localStorage.removeItem(CART);
          return { ...state, data: [] };
        })(),
      };
    default:
      return state;
  }
};

export const validateCartAPIByUserId = (id, dispatch, cart = null) => {
  Helper.getCartByUserId(id)
    .then((data) => {
      const cartFromApi = data;
      localStorage.setItem(CART, JSON.stringify(cartFromApi));
      dispatch({
        type: ADD_CART,
        payload: cartFromApi,
      });
    })
    .catch((err) => {
      // cart tidak ditemukan
      const cartLocalToApi = JSON.parse(localStorage.getItem(CART));

      if (cartLocalToApi !== null) {
        cartLocalToApi.idUser = id;
        Helper.postCart(cartLocalToApi).then((data) => {
          localStorage.setItem(CART, JSON.stringify(data));
          dispatch({
            type: ADD_CART,
            payload: data,
          });
        });
        return;
      }
      if (cartLocalToApi === null && cart !== null) {
        Helper.postCart(cart).then((data) => {
          localStorage.setItem(CART, JSON.stringify(data));
          dispatch({
            type: ADD_CART,
            payload: data,
          });
        });
        return;
      }
      localStorage.removeItem(CART);
    });
};

const CartContextProvider = memo((props) => {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState);

  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));
    if (isAuthenticated) {
      const user = JSON.parse(localStorage.getItem(CURRENT_USER));
      validateCartAPIByUserId(user.id, dispatch);
    } else {
      const cartLocal = JSON.parse(localStorage.getItem(CART));
      if (cartLocal !== null) {
        dispatch({
          type: ADD_CART,
          payload: cartLocal,
        });
      }
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
});

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartContextProvider');
  }

  return context;
};

export default CartContextProvider;
