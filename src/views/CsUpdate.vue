<template>
    <div class="bgbg">
        <Header msg="고객문의 수정" />
        <div class="grayBox">
            <div class="loginWrap">
                <div class="login_box">
                    <div class="login_form">
                        <h1>문의글종류</h1>
                        <div class="option">배달</div>
                        <h1>주문번호</h1>
                        <div class="option">ed8956c1</div>
                    </div>
                    <form name="login_form" method="post">
                        <label for="title">제목</label>
                        <input type="text" id="title" name="title" maxlength="30" minlength="5" >{{}} </input>
                        <label for="content">내용</label>
                        <textarea name="content" id="content" cols="50" rows="5">{{}}</textarea>
                    </form>
                    <div class="checkbox">
                        <form name="check" method="post">
                            <input type="checkbox" />개인정보 수집 및 이용 동의<span> (필수)</span>
                            <img src="@/assets/img/cspost_read.png" alt="" />
                        </form>
                    </div>
                    <button class="easy_loginBtn" onclick="check_input()">
                        <span>완료</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    components: {
        Header
    }
};
</script>
<style scoped>
body {
    overflow-y: hidden;
}

.topWrap {
    width: 100%;
    min-width: 333px;
    height: auto;
    min-height: 23px;
    position: relative;
    /*  background-color: red; */
    margin-bottom: 60px;
}

.topWrap .top_wrap h1 {
    position: absolute;
    text-align: left;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 20px;
    color: white;
    font-weight: 700;
    letter-spacing: -1px;
}

.top_wrap .back_left {
    position: absolute;
    top: -3px;
    left: 0;
    background-color: inherit;
    border-radius: none;
    border: none;
    padding-left: 21px;
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
    background-color: white;
}

.grayBox .loginWrap {
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

.grayBox .loginWrap .login_box h1 {
    list-style: none;
    font-size: 15px;
    font-weight: 600;
    color: #181818;
    text-align: left;
    padding-bottom: 0;
    outline: none;
}

.grayBox .loginWrap .login_box .option {
    display: flex;
    align-items: center;
    outline: none;
    width: 100%;
    min-width: 292px;
    height: auto;
    min-height: 50px;
    background-color: #f6f6f6;
    border-radius: 6px;
    border: none;
    color: #636363;
    font-weight: 600;
    font-size: 15px;
    margin-top: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    margin-bottom: 25px;
}

.grayBox .loginWrap .login_box #title {
    display: flex;
    align-items: center;
    padding-left: 15px;
    width: 100%;
    height: auto;
    min-width: 292px;
    background-color: transparent;
    border-radius: 6px;
    border: 2px solid #f6f6f6;
    color: #636363;
    font-size: 15px;
    font-weight: 400;
    box-sizing: border-box;
    margin-top: 15px;
    margin-bottom: 25px;
    min-height: 34px;
}

.grayBox .loginWrap .login_box textarea {
    padding-left: 15px;
    margin-top: 15px;
    width: 100%;
    height: auto;
    min-width: 292px;
    border: 2px solid #f6f6f6;
    border-radius: 6px;
    box-sizing: border-box;
    color: #636363;
    font-size: 15px;
    font-weight: 400;

    padding-top: 15px;
    min-height: 190px;
}

.grayBox .loginWrap .login_box .checkbox {
    margin-top: 34px;
    font-size: 13px;
    font-weight: 600;
    color: #636363;
    cursor: pointer;
}

.grayBox .loginWrap .login_box .checkbox img {
    position: absolute;
    right: 0;
    bottom: 83px;
}

.grayBox .loginWrap .login_box .checkbox span {
    color: #ff0000;
}

.grayBox .loginWrap .login_box .checkbox input {
    width: 22px;
    height: 22px;
    border-radius: 6px;
    vertical-align: bottom;
    margin-right: 5px;
}

.grayBox .loginWrap .login_box .easy_loginBtn {
    width: 100%;
    min-width: 292px;
    height: auto;
    min-height: 50px;
    background-color: #8900c2;
    border-radius: 6px;
    border: none;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    margin-top: 29px;
}

.bgbg {
    padding-top: 20px;
    position: relative;
    width: 100%;
    min-width: 375px;
    height: 100vh;
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

/* 네이버 */
#naverIdLogin .naver-login-button {
    background-image: url('@/assets/img/naver.png') !important;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
