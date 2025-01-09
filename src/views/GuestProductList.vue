<template>
    <div class="bgbg">
        <div class="container">
            <Header :msg0="require('@/assets/img/space.png')" 
            :msg="'주소를 입력해주세요'" 
            :msg2="'스낵&사이드'" :msg3="require('@/assets/img/red_check.png') " 
            :msg4="'아래 이미지는 실제와 다를 수 있습니다.'" />
        </div>


        <div class="cart_bg">
            <div class="cart-page bg-light vh-100">
                <div class="container mt-4">
                    <!-- 장바구니 아이템 -->
                    <div class="cart-list overflow-auto">
                        <div
                            v-for="item in cartItems"
                            :key="item.id"
                            class="cart-item p-3 mb-3 rounded-3 d-flex align-items-center cart-item-bg clickable"
                            @click="goToDetail(item.id)"
                        >
                            <div class="d-flex align-items-center w-100">
                                <div class="flex-grow-1">
                                    <div class="mb-2">
                                        <h5>{{ item.title }}</h5>
                                        <p>{{ item.price.toLocaleString() }}원 부터</p>
                                    </div>
                                </div>
                                <div>
                                    <img :src="item.image" alt="상품 이미지" class="cart-item-img rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import cartItems from '@/assets/snackside.js';

export default {
    name: 'RegisteredProductList',
    components: {
        Header
    },
    data() {
        return {
            cartItems: []
        };
    },
    created() {
        this.cartItems = cartItems; // ham.js에서 가져온 데이터를 컴포넌트에 설정
    },
    methods: {
        goToDetail(itemId) {
            // 선택된 아이템의 ID를 사용하여 Detail.vue로 이동
            this.$router.push({ name: 'Detail', params: { id: itemId } });
        }
    }
};
</script>

<style scoped>
.bgbg {
    position: relative;
    padding-top: 20px;
    width: 100%;
    min-width: 375px;
    height: 100vh;
    overflow-y: hidden;
    background-color: #494949;
}

.bg{
    width: 100%;
}

.container{
    width: 100%;
}

.mt-4{
    margin-top: 50px !important;
}

.icon {
    display: flex;
    align-items: center;
  width: auto;
  height: auto;
}

.main .topWrap .top_wrap {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
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
    max-height: calc(100vh - 255px); /* 화면 높이에서 버튼과 네비게이션 제외 */
    overflow-y: scroll; /* 세로 스크롤 가능 */
    -ms-overflow-style: none; /* IE에서 스크롤바 숨김 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */

}

.cart-list::-webkit-scrollbar {
    display: none; /* Chrome, Safari에서 스크롤바 숨김 */
}





.mb-2 {
    margin-top: 20px;
    margin-left: 10px;
    color: #000;
    font-weight: 600;
}

.mb-2 p{
    color: #636363;
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

.cart-item-bg {
    background-color: #d9d9d9 !important;
    border-radius: 8px;
}

.clickable{
    cursor: pointer;
}
</style>
