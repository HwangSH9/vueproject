<template>
    <div class="bgbg">
        <Header msg="고객문의" />
        <div class="grayBox">
            <button class="coupon_btn" type="button">+&nbsp;고객 문의하기</button>
            <!-- <div class="post_box">
                <div class="shape">
                    [주문]&nbsp;&nbsp;주문이 누락되었어요! <img src="@/assets/img/cs_go.png" alt="" />
                </div>
            </div> -->
            <div class="null_box">
                <div class="null_text">
                    <h3>문의 내용이 아직 없습니다.</h3>
                </div>
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

.grayBox .post_box {
    width: 70%;
    min-width: 340px;
    margin: 0 auto;
    overflow-x: hidden;
    height: 70%;
    min-height: 522px;
    -ms-overflow-style: none;
}

.grayBox .post_box::-webkit-scrollbar {
    display: none;
}

.grayBox .post_box .shape {
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 23px;
    width: 70%;
    min-width: 340px;
    height: 47px;
    background-color: #d9d9d9;
    position: relative;
    border-radius: 30px; /* 직사각형의 모서리 살짝 둥글게 */
    font-size: 15px;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding-top: 2px;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    color: #636363;
}

.grayBox .null_box {
    margin: 0 auto;
    width: 100%;
    height: 100vh;
}

.grayBox .null_box .null_text h3 {
    font-size: 15px;
    padding-top: 60%;
    text-align: center;
    font-weight: 500;
    color: #636363;
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
