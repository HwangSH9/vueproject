<template>
    <div class="bgbg">
        <Header msg="주소를 입력해주세요" />
        <div class="times">
            <div class="left_time">
                <h1>맥모닝 메뉴 시간대</h1>
                <p>3:50AM<br />~ 10:20AM</p>
            </div>
            <div class="right_time">
                <h1>일반 메뉴 시간대</h1>
                <p>10:20AM<br />~ 3:50AM</p>
            </div>
        </div>
        <div class="grayBox">
            <h2><span>※</span>&nbsp;판매되는 상품은 매장마다 상이합니다.</h2>
            <div class="product_wrap">
                <router-link to="/guestproductlist"><div class="product best_btn">추천메뉴</div></router-link>
                <div class="product">버거&세트</div>
                <div class="product">스낵&사이드</div>
                <div class="product">음료</div>
                <div class="product">디저트</div>
                <div class="product">해피밀</div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    name: 'Category',
    components: {
        Header
    }
};
</script>
<style scoped>
body {
    overflow-y: hidden;
}
* {
    font-family: 'Pretendard';
}

.times {
    position: absolute;
    top: 68px;
    transform: translate(-50%, 0);
    left: 50%;
    width: 40%;
    min-width: 250px;
    height: auto;
    min-height: 63px;
    /*     background-color: aqua; */
    display: inline-block;
    margin: 0 auto;
    padding: 0;
    margin-bottom: 20px;
}

.times .left_time {
    float: left;
}

.times .right_time {
    float: right;
}

.times .left_time h1,
.times .right_time h1 {
    font-size: 15px;
    color: #fff;
    font-weight: 700;
    letter-spacing: -1px;
}

.times .left_time p,
.times .right_time p {
    font-size: 15px;
    color: #f6c244;
    line-height: 18px;
    font-weight: 900;
    text-align: center;
    letter-spacing: -1px;
}

.grayBox {
    position: relative;
    margin: 0 auto;
    display: block;
    width: 100%;
    min-width: 375px;
    min-height: 648px;
    height: 100vh;
    margin-top: 110px;
    border-radius: 40px 40px 0 0;
    background-color: #f6f6f6;
    padding-top: 33px;
}

.grayBox h2 {
    font-size: 15px;
    color: #636363;
    font-weight: 700;
    padding-bottom: 20px;
    text-align: center;
}

.grayBox h2 span {
    font-size: 18px;
    color: #636363;
    font-weight: 700;
    text-align: center;
    line-height: 0;
}

.grayBox .product_wrap {
    width: 90%;
    min-width: 343px;
    height: auto;
    min-height: 412px;
    /*     background-color: #f6c244; */
    margin: 0 auto;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: space-between;
}
.grayBox .product_wrap .product {
    width: 48%;
    min-width: 164px;
    height: 35%;
    min-height: 133px;
    margin-bottom: 15px;
    border-radius: 20px;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #494949;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
}
.grayBox .product_wrap a {
    text-decoration: none;
}

.grayBox .product_wrap .a:hover {
    background-color: #7100a0;
    color: white;
}

.grayBox .product_wrap .product:hover {
    background-color: #7100a0;
    color: white;
}

.grayBox .product_wrap .best_btn {
    width: 48%;
    min-width: 164px;
    height: 35%;
    min-height: 133px;
    margin-bottom: 15px;
    border-radius: 20px;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #494949;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    cursor: pointer;
}

.grayBox .product_wrap .best_btn:hover {
    background-color: #7100a0;
    color: white;
}

.bgbg {
    padding-top: 20px;
    position: relative;
    width: 100%;
    min-width: 375px;
    height: 100vh;
    overflow-y: hidden;
    background-color: #494949;
    z-index: -111;
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
