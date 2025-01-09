<template>
    <div class="all_box">
        <div class="all_wrap" @click="closeUsage">
            <div class="btns_wrap">
                <div class="leftBox">
                    <div class="delivery_btn1"></div>
                    <img src="@/assets/img/usage_arrow_top.png" alt="usage_arrow_top" />
                    <h1>원하는 곳으로 배달을<br />주문해보세요!</h1>
                </div>
                <div class="rightBox">
                    <div class="delivery_btn2"></div>
                    <img src="@/assets/img/usage_arrow_top.png" alt="usage_arrow_top" />
                    <h1>근처 매장에서 기다림 없이<br />미리 주문하세요!</h1>
                </div>
                <div class="center_wrap">
                    <h1>주문상황을<br />확인 할 수 있어요!</h1>
                    <img class="arrow_bottom" src="@/assets/img/usage_arrow_bottom.png" alt="usage_arrow_top" />
                    <img class="center_btn" src="@/assets/img/usage_center_btn.png" alt="usage_center_btn" />
                </div>
            </div>
        </div>
    </div>
    <div class="all_bg"></div>
</template>

<script>
export default {
    name: 'Usage',
    methods: {
        closeUsage() {
            this.$emit('close');
        }
    }
};
</script>
<style scoped>
.all_box {
    z-index: 9999999999;
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.all_box .all_wrap {
    position: relative;
    width: 90%;
    height: 97%;
    text-align: center;
    display: block;
    padding-top: 15px;
}

.all_box .all_wrap .close {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
}

.all_box .all_wrap .btns_wrap {
    position: absolute;
    top: 370px;
    width: 100%;
    height: auto;
    min-width: 327px;
    min-height: 159px;
    text-align: center;
    display: block;
}

.all_box .all_wrap .btns_wrap .leftBox img {
    position: absolute;
    bottom: 28px;
    left: 5%;
}
.all_box .all_wrap .btns_wrap .rightBox img {
    position: absolute;
    bottom: 28px;
    left: 1%;
}

.all_box .all_wrap .btns_wrap .leftBox {
    width: 47%;
    height: auto;
    min-height: 159px;
    min-width: 150px;
    /*     background-color: aqua; */
    float: left;
    position: relative;
}

.all_box .all_wrap .btns_wrap .delivery_btn1 {
    position: absolute;
    width: 100%;
    height: auto;
    min-height: 107px;
    background-color: #fff;
}
.all_box .all_wrap .btns_wrap .leftBox h1 {
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    color: #fff;
    position: absolute;
    text-align: center;
    transform: translate(-50%, 0);
    left: 50%;
    bottom: 0;
}

.all_box .all_wrap .btns_wrap .rightBox {
    float: right;
    width: 47%;
    height: auto;
    min-width: 150px;
    min-height: 159px;
    /*     background-color: aqua; */
    position: relative;
}

.all_box .all_wrap .btns_wrap .delivery_btn2 {
    position: absolute;
    width: 100%;
    height: auto;
    min-height: 107px;
    background-color: #fff;
}

.all_box .all_wrap .btns_wrap .rightBox h1 {
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    color: #fff;
    position: absolute;
    text-align: center;
    transform: translate(-50%, 0);
    left: 50%;
    bottom: 0;
}

.all_box .all_wrap .btns_wrap .center_wrap {
    position: absolute;
    /*     top: 206%; */
    bottom: 12px;
    left: 0;
    width: 100%;
    height: 159px;
    min-width: 327px;
    min-height: 159px;
    text-align: center;
    display: block;
    position: fixed;
    /*     background-color: red; */
}

.all_box .all_wrap .btns_wrap .center_wrap .center_btn {
    bottom: 0;
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
}

.all_box .all_wrap .btns_wrap .center_wrap .arrow_bottom {
    bottom: 80px;
    right: 40%;
    position: absolute;
    position: fixed;
}

.all_box .all_wrap .btns_wrap .center_wrap h1 {
    width: 100%;
    top: 33px;
    font-size: 13px;
    font-weight: 500;
    color: #fff;
    position: absolute;
    text-align: center;
    transform: translate(-50%, 0);
    left: 50%;
}

.all_bg {
    z-index: 999999999;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
}
</style>
