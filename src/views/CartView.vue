<template>
    <div class="bgbg">
        <Header msg="장바구니" />
        <div class="cart_bg">
            <div class="cart-page bg-light vh-100">
                <div class="container mt-4">
                    <!-- 장바구니 아이템 -->
                    <div class="cart-list overflow-auto">
                        <div
                            v-for="item in cartItems"
                            :key="item.id"
                            class="cart-item p-3 mb-3 rounded-3 d-flex align-items-center"
                        >
                            <div class="d-flex align-items-center w-100">
                                <div class="flex-grow-1">
                                    <div class="mb-2">
                                        <h5>{{ item.title }}</h5>
                                        <p>{{ item.price.toLocaleString() }}원</p>
                                    </div>

                                    <div class="quantity-controls d-flex align-items-center">
                                        <button class="num" @click="decreaseQuantity(item)">-</button>
                                        <span class="mx-2">{{ item.quantity }}</span>
                                        <button class="num" @click="increaseQuantity(item)">+</button>
                                    </div>
                                </div>
                                <div>
                                    <img :src="item.image" alt="상품 이미지" class="cart-item-img rounded" />
                                </div>
                                <button class="delete-btn" @click="confirmDelete(index)"><span>X</span></button>
                            </div>
                            <!-- +담기 버튼 -->
                            <div class="w-100 text-end mt-2">
                                <button class="add-to-cart-btn" @click="addToCart(item)">+ 담기</button>
                            </div>
                        </div>
                        <!-- 메뉴 추가하기 버튼 -->
                        <div class="text-center mt-2">
                            <button class="btn btn-secondary" @click="goToAddMenu">메뉴 추가하기</button>
                        </div>
                    </div>

                    <!-- 주문하기 버튼 -->
                    <router-link to="/oderpage">
                        <div class="text-center mt-4">
                            <button class="btn btn-secondary btn-lg w-100">
                                총 {{ totalPrice.toLocaleString() }}원 주문하기
                            </button>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'CartView',
    components: {
        Header
    },
    data() {
        return {
            cartItems: []
        };
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.priceNum * item.quantity, 0);
        }
    },
    created() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            this.cartItems = cart;
        }
    },
    methods: {
        increaseQuantity(item) {
            item.quantity += 1;
        },
        decreaseQuantity(item) {
            if (item.quantity > 1) item.quantity -= 1;
        },
        confirmDelete(index) {
            if (confirm('정말 삭제하시겠습니까?')) {
                this.deleteItem(index);
            }
        },
        deleteItem(index) {
            this.cartItems.splice(index, 1);
        },
        goToAddMenu() {
            this.$router.push({ name: 'Category' });
        },
        addItemToCart(item) {
            this.cartItems.push(item);
        }
    }
};
</script>

<style scoped>
.bgbg {
    padding-top: 20px;
    width: 100%;
    min-width: 375px;
    height: 100vh;
    overflow-y: hidden;
    background-color: #494949;
}
.cart_bg {
    width: 100%;
    height: 90vh;
    border-radius: 50px;
    background: #f6f6f6 !important;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px;
}

.cart-center {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 50px;
}

.cart-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    padding: 20px;
}

.cart-item-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.cart-list {
    max-height: calc(100vh - 300px); /* 화면 높이에서 버튼과 네비게이션 제외 */
    overflow-y: scroll; /* 세로 스크롤 가능 */
    -ms-overflow-style: none; /* IE에서 스크롤바 숨김 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */
}

.cart-list::-webkit-scrollbar {
    display: none; /* Chrome, Safari에서 스크롤바 숨김 */
}

.cart-item[data-v-49b49cc2] {
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column; /* 수직 정렬 */
    justify-content: space-between; /* 위쪽 내용과 버튼 사이 여유 공간 확보 */
    height: auto !important;
}

.add-to-cart-btn {
    display: inline-block; /* 버튼을 인라인 블록으로 설정 */
    background-color: #494949;
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
    border: none; /* 테두리 없애기 */
    border-radius: 5px;
    cursor: pointer;
    text-align: center; /* 텍스트 중앙 정렬 */
    width: 100%; /* 전체 너비 사용 */
}
.add-to-cart-btn:hover {
    background-color: #6c757d; /* 호버시 색상 변경 */
}

.num {
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: none;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    padding: 0;
    background-color: #fff;
    color: #494949;
    font-weight: 900;
}

.quantity-controls {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center; /* 수평 정렬 */
    gap: 10px; /* 가격과 버튼 간의 간격 */
}

.quantity-controls .mx-2 span {
    flex-shrink: 0;
}

.mb-2 {
    margin-top: 20px;
    margin-left: 10px;
    color: #000;
    font-weight: 600;
}

.mx-2 {
    font-weight: 600;
    font-size: 18px;
}

.mb-2 h5 {
    font-weight: 600;
    font-size: 18px;
}

.flex-grow-1 {
    display: flex;
    flex-direction: row; /* 세로로 요소 정렬 */
    justify-content: space-between; /* 세로 공간을 균등하게 배치 */
}

.delete-btn {
    position: relative;
    width: 20px;
    height: 20px;
    background: #6c757d;
    border: none;
    padding: 5px 5px;
    margin-top: -95px;
    border-radius: 4px;
    cursor: pointer;
    transform: translateX(8px);
}

.delete-btn span {
    color: white;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    transform: translateY(-7px); /* 위로 2px 이동 */
}

.btn {
    background-color: #494949;
}
</style>
