<template>
    <div class="bgbg">
        <Header msg="결제완료" />
        <div class="pay_bg">
            <div class="cart-center">
                <div class="cart-content">
                    <img src="../assets/img/order_complete.png" alt="주문완료 이미지" class="order_complete_img" />
                    <div class="cart-info">
                        <h2>주문이 완료되었어요!</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    name: 'PaymentCompleted',
    components: {
        Header
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
.pay_bg {
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
    margin-top: 100px;
}

.cart-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    padding: 20px;
}

.cart-content .cart_bin_img {
    position: absolute;
    display: block;
    z-index: 1; /* 이미지 아래 표시 */
    transform: translateX(-10px);
}
.cart-info {
    position: absolute;
    text-align: center;
    transform: translateX(0);
    transform: translateY(80px);
    padding-top: 130px;
}

.cart-info h2 {
    color: rgba(0, 0, 0, 50%);
    font-size: 15px;
    font-weight: 600;
    padding: 10px;
    margin-top: 20px;
}

/* 이거하면 클릭안되던거 클릭됨 */
.bgbg,
.grayBox,
.loginWrap,
.login_box {
    pointer-events: auto; /* 모든 부모 요소 클릭 허용 */
    z-index: 10; /* 클릭 가능하도록 보장 */
}
</style>
