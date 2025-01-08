<template>
    <div class="bgbg">
        <Header msg="쿠폰페이지" />
        <div class="grayBox">
            <button class="coupon_btn" type="button">+&nbsp;쿠폰등록</button>
            <div class="coupons">
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    name: 'Login',
    components: {
        Header
    }
};
</script>
<style scoped>
body {
    overflow-y: hidden;
}

.grayBox {
    position: relative;
    margin: 0 auto;
    display: block;
    width: 100%;
    min-width: 375px;
    min-height: 648px;
    height: 100vh;
    border-radius: 40px 40px 0 0;
    background-color: #f6f6f6;
    padding-top: 30px;
}

.grayBox .coupon_btn {
    display: block;
    margin: 0 auto;
    width: 330px;
    height: 47px;
    border-radius: 40px;
    outline: none;
    border: none;
    background-color: #d9d9d9;
    margin-bottom: 41px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -1px;
    z-index: 9999999;
}

.grayBox .coupons {
    width: 70%;
    min-width: 340px;
    margin: 0 auto;
    overflow-x: hidden;
    height: 70%;
    min-height: 522px;
    -ms-overflow-style: none;
}

.grayBox .coupons::-webkit-scrollbar {
    display: none;
}

.grayBox .coupons .shape {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 70%;
    min-width: 340px;
    height: 150px;
    background-color: white;
    position: relative;
    border-radius: 12px; /* 직사각형의 모서리 살짝 둥글게 */
}

.grayBox .coupons .shape::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%);
    width: 75px;
    height: 75px;
    background-color: #f6f6f6; /* 배경색과 같은 색으로 설정 */
    border-radius: 50%;
}

.bgbg {
    padding-top: 20px;
    width: 100%;
    min-width: 375px;
    background-color: #494949;
    height: 100vh;
    overflow: hidden;
}

/* 이거하면 클릭안되던거 클릭됨 */
.bgbg,
.grayBox {
    pointer-events: auto; /* 모든 부모 요소 클릭 허용 */
    z-index: 10; /* 클릭 가능하도록 보장 */
}
</style>
