<template>
  <section>
    <div
      v-if="cartItems.length > 0"
      class="
        flex
        flex-col
        items-end
        px-5
        tablet:px-[15%]
        pt-20
        pb-10
      "
    >
      <div
        class="
        w-full
        h-full"
      >
        <div
          class="
            h-auto
            flex
            w-full
            bg-interface-3
            text-white
            font-light
            text-14
          "
        >
          <div
            class="
              leading-22
              w-[50%]
              px-3
              py-1
            "
          >Name:</div>
          <div
            class="
            text-center
            w-[35%]
            px-3
            py-1"
          >Amount:</div>
          <div class="w-[15%]"></div>
        </div>
        <div
          class="
            h-auto
            overflow-x-hidden
            overflow-y-auto
            max-h-[62vh]
          "
        >
          <div
            class="
              h-auto
              flex
              flex-nowrap
              flex-col"
          >
            <div
              v-for="(item, index) in cartItems"
              :key="index"
              class="
              bg-interface-1
                w-full
                h-14
                flex
                items-center
                justify-[justify]
                text-white
                even:bg-interface-4
              "
            >
              <div
              class="
                w-[50%]
                font-extralight
                pl-3"
              >{{ item.name }}</div>
              <div
              class="
                flex
                flex-col
                justify-center
                items-center
                w-[35%]"
              >
                <div
                  class="
                    flex
                    justify-around
                    items-end
                    text-white
                    h-7
                    w-full
                    max-w-[200px]"
                >
                  <div 
                    class="
                      border
                      border-white-200
                      w-5
                      h-5
                      relative
                      cursor-pointer
                    "
                    @click="removeCartItem(item)"
                  >
                    <span class="absolute top-[-4px] left-[5px]">-</span>
                  </div>
                  <span class="total-amount">{{ item.amount }}</span>
                  <div
                    class="
                      border
                      border-white-200
                      w-5
                      h-5
                      relative
                      cursor-pointer
                    "
                    @click="addCartItem(item)"
                  >
                    <span class="absolute top-[-4px] left-[4px]">+</span>
                  </div>
                </div>
                <div
                  class="
                  text-white
                  font-light"
                >
                  ${{ item.amount * item.cost }}
                </div>
              </div>
              <div
              class="
                flex
                justify-center
                items-center
                w-[15%]"
              >
                <div
                  class="
                    w-5
                    h-5
                    cursor-pointer"
                  @click="deleteCartItemsGroup(item.id)"
                >
                  <i class="material-symbols-rounded text-icon-small">delete</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            h-auto
            flex
            w-full
            bg-interface-3
            text-white
            font-light
            text-14"
        >
          <div
            class="
            w-[85%]
            text-right
            px-3
            py-1
            leading-26"
          >Cart total price:</div>
          <div
            class="
            w-[15%]
            text-18
            text-center
            px-3
            py-1"
          >${{ getTotalPrice }}</div>
        </div>
      </div>
      <button
          class="
          text-white
            bg-interface-2
            px-4
            py-2
            font-light
            text-4
            mt-3"
          @click="buyItems"
        >Make Purchase</button>
    </div>
    <EmptyFolderMessageComponent
      v-if="getTotalPrice === 0"
      message="Your cart is empty now!"
    />
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useCartDataStore } from '@/stores/cart';

const router = useRouter();

const {
  addCartItem,
  removeCartItem,
  deleteCartItemsGroup,
  clearCartData
} = useCartDataStore();

const cartData = useCartDataStore();

const { cartItems, getTotalPrice } = storeToRefs(cartData);

const buyItems = () => {
  alert('Items sold! Total price: ' + '$' + getTotalPrice.value);
  clearCartData();
  router.push('/')
}

</script>
