<template>
    <div class="bg">
        <div class="main">
            <div class="topWrap">
                <div class="top_wrap">
                    <h1 v-html="msg"></h1>
                    <button class="back_left" @click="goBack">
                        <img src="@/assets/img/back_icon.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        msg: String
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>
<style scoped>
* {
    font-family: 'Pretendard';
}
body {
    overflow-y: hidden;
}
.main .topWrap {
    width: 100%;
    min-width: 333px;
    height: auto;
    min-height: 23px;
    position: relative;
    /*  background-color: red; */
    margin-bottom: 60px;
}

.main .topWrap .top_wrap h1 {
    position: absolute;
    text-align: center;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 20px;
    color: white;
    font-weight: 700;
    letter-spacing: -1px;
}

.main .top_wrap .back_left {
    position: absolute;
    top: -3px;
    left: 0;
    background-color: inherit;
    border-radius: none;
    border: none;
    padding-left: 21px;
}

.main .grayBox {
    position: relative;
    margin: 0 auto;
    display: block;
    width: 100%;
    min-width: 375px;
    min-height: 648px;
    height: 100vh;
    border-radius: 40px 40px 0 0;
    background-color: #f6f6f6;
}

.main .grayBox .loginWrap {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 80%;
    min-width: 292px;
    height: auto;
    min-height: 314.2px;
    margin-top: 45px;
    /*     background-color: blueviolet; */
}

.main .grayBox .loginWrap .login_box input {
    width: 100%;
    min-width: 292px;
    height: auto;
    min-height: 50px;
    background-color: #d9d9d9;
    border-radius: 6px;
    border: none;
    margin-bottom: 29px;
}

.main .grayBox .loginWrap .login_box ul {
    list-style: none;
    font-size: 15px;
    font-weight: 600;
    color: #636363;
    text-align: left;
    padding: 0;
}

.main .grayBox .loginWrap .login_box ul p {
    margin: 0;
    margin-bottom: 15px;
}
</style>
