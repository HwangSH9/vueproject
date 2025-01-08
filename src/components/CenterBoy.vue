<template>
    <div class="all_box">
        <div class="all_wrap">
            <h1>
                아직<br />
                주문 내역이<br />
                없어요!
            </h1>
            <img class="close" src="@/assets/img/usage_close.png" alt="usage_close" @click="closeCenterBoy" />
            <div class="btns_wrap">
                <div class="leftBox" @click="delivery_page1">
                    <div class="delivery_btn1">배달<br />주문</div>
                </div>

                <div class="rightBox">
                    <div class="delivery_btn2">픽업<br />주문</div>
                </div>
                <div class="center_wrap">
                    <img class="center_btn" src="@/assets/img/usage_center_btn.png" alt="usage_center_btn" />
                    <img class="center_boy" src="@/assets/img/center_boy.png" alt="usage_arrow_top" />
                </div>
            </div>
        </div>
    </div>
    <div class="all_bg"></div>
</template>

<script>
export default {
    name: 'closeCenterBoy',
    methods: {
        // 기존 closeCenterBoy 메서드
        closeCenterBoy() {
            this.$emit('center_close');
        },
        // 새로 추가된 delivery_page1 메서드
        delivery_page1() {
            window.location.href = '/moreview';
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
    margin: 0 auto;
}

.all_box .all_wrap .close {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
}

.all_box .all_wrap h1 {
    width: 100%;
    top: 303px;
    font-size: 20px;
    font-weight: 900;
    line-height: 27px;
    color: #fff;
    position: absolute;
    text-align: center;
    transform: translate(-50%, 0);
    left: 50%;
}

.all_box .all_wrap .btns_wrap {
    position: absolute;
    bottom: 180px;
    width: 100%;
    height: 8%;
    min-width: 293px;
    min-height: 73px;
    /*     background-color: red; */
    text-align: center;
    display: block;
}

.all_box .all_wrap .btns_wrap .leftBox {
    width: 35%;
    height: auto;
    min-height: 159px;
    min-width: 150px;
    /*     background-color: aqua; */
    float: left;
    position: relative;
    z-index: 9;
    cursor: pointer;
}
.all_box .all_wrap .btns_wrap .leftBox .delivery_btn1 {
    position: absolute;
    width: 100%;
    height: auto;
    min-width: 64px;
    min-height: 74px;
    background-color: #d9d9d9;
    border-radius: 60px 60px 0px 60px;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.all_box .all_wrap .btns_wrap .rightBox {
    width: 35%;
    height: auto;
    min-height: 159px;
    min-width: 150px;
    /*     background-color: aqua; */
    float: right;
    position: relative;
    z-index: 9;
    cursor: pointer;
}
.all_box .all_wrap .btns_wrap .rightBox .delivery_btn2 {
    position: absolute;
    width: 100%;
    height: auto;
    min-width: 64px;
    min-height: 74px;
    background-color: #d9d9d9;
    border-radius: 60px 60px 60px 0px;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.all_box .all_wrap .btns_wrap .center_wrap {
    position: absolute;
    /*     top: 206%; */
    bottom: 12px;
    right: 0;
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

.all_box .all_wrap .btns_wrap .center_wrap .center_boy {
    bottom: 60px;
    z-index: -1;
    right: 40%;
    position: absolute;
    position: fixed;
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
    opacity: 0.8;
}
</style>
