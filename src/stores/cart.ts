import { defineStore } from 'pinia'
import type { ICartItem } from '@/utils/interfaces';

export const useCartDataStore = defineStore({
  id: 'CartData',
  state: () => ({
    cartItems: [] as ICartItem[]
  }),
  getters: {
    getProductsCount(state) {
      return state.cartItems.reduce((total, element) => {
        return (total += element.amount)
      }, 0)
    },
    getTotalPrice: (state) => {
      return state.cartItems.reduce((total, element) => {
        return (total += element.amount * element.cost)
      }, 0)
    },
    getCurrItemAmount: (state) => (id: string) => {
      const item = state.cartItems.find((elem) => elem.id === id)
      return item ? item.amount : 0
    }
  },
  actions: {
    addCartItem(payload: ICartItem) {
      const itemIndex = this.cartItems.findIndex((item) => {
        return item.id === payload.id;
      })
      if (itemIndex >= 0) {
        this.cartItems[itemIndex].amount = this.cartItems[itemIndex].amount + 1
      } else {
        this.cartItems.push(payload);
      }
    },
    removeCartItem(payload: ICartItem) {
      const itemIndex = this.cartItems.findIndex((item) => {
        return item.id === payload.id;
      })
      if (itemIndex >= 0) {
        if (this.cartItems[itemIndex].amount > 0) {
          this.cartItems[itemIndex].amount = this.cartItems[itemIndex].amount - 1
        }
        if (this.cartItems[itemIndex].amount === 0) {
          this.cartItems.splice(itemIndex, 1);
        }
      }
    },
    deleteCartItemsGroup(payload: string) {
      const itemIndex = this.cartItems.findIndex((item) => {
        return item.id === payload;
      })
      this.cartItems.splice(itemIndex, 1);
    },
    clearCartData() {
      this.cartItems = [];
    }
  }
});
