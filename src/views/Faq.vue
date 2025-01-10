<template>
    <div class="bgbg">
        <Header msg="고객문의" />
        <div class="store_serch_wrap">
            <form action="">
                <input type="textarea" placeholder="키워드를 입력하세요" />
                <button class="store_serch_btn" type="button">
                    <img src="@/assets/img/store_serch.png" alt="store_serch_btn" />
                </button>
            </form>
        </div>
        <div class="grayBox">
            <div class="post_box">
                <div class="shape">
                    [주문]&nbsp;&nbsp;주문이 누락되었어요! <img src="@/assets/img/cs_go.png" alt="" />
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

.store_serch_wrap {
    position: relative;
    top: -20px;
    z-index: 9999999999;
    transform: translate(-50%, 0);
    left: 50%;
    width: 75%;
    min-width: 275px;
    height: auto;
    min-height: 32px;
    /*     background-color: aqua; */
    display: inline-block;
    margin: 0 auto;
}

.store_serch_wrap input {
    width: 100%;
    height: auto;
    min-width: 275px;
    min-height: 32px;
    border-radius: 15px;
    border: none;
    margin-bottom: 18px;
    background-color: #fff;
    text-align: center;
    outline: none;
}

.store_serch_wrap .store_serch_btn {
    border: 0;
    position: absolute;
    right: 5px;
    top: 2px;
    background-color: transparent;
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
