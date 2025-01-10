<template>
    <div class="bgbg">
        <Header msg="고객문의" />
        <div class="grayBox">
            <div class="loginWrap">
                <div class="login_box">
                    <form name="login_form" method="post">
                        <label for="">문의글종류</label>
                        <select name="" id="">
                            <option value="문의글 종류 선택">문의글 종류 선택</option>
                            <option value="배달">배달</option>
                            <option value="주문">주문</option>
                            <option value="앱">앱</option>
                        </select>
                        <label for="">주문번호</label>
                        <select name="" id="">
                            <option value="주문번호 선택">주문번호 선택</option>
                            <option value="a12v3456">a12v3456</option>
                            <option value="ed8956c1">ed8956c1</option>
                        </select>
                        <label for="title">제목</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            maxlength="30"
                            minlength="5"
                            placeholder="제목 입력 (5~30자 이내)"
                        />
                        <label for="content">내용</label>
                        <textarea
                            name="content"
                            id="content"
                            cols="50"
                            rows="5"
                            placeholder="문의 내용을 자세히 입력해 주세요."
                        ></textarea>
                    </form>
                    <div class="checkbox">
                        <form name="check" method="post">
                            <input type="checkbox" />개인정보 수집 및 이용 동의<span> (필수)</span>
                            <img src="@/assets/img/cspost_read.png" alt="" />
                        </form>
                    </div>
                    <button class="easy_loginBtn" onclick="check_input()">
                        <span>고객 문의 등록</span>
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
    background-color: #f6f6f6;
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

.grayBox .loginWrap .login_box label {
    list-style: none;
    font-size: 15px;
    font-weight: 600;
    color: #636363;
    text-align: left;
    padding-bottom: 0;
    outline: none;
}

.grayBox .loginWrap .login_box select {
    outline: none;
    width: 100%;
    min-width: 292px;
    height: auto;
    min-height: 50px;
    background-color: #d9d9d9;
    border-radius: 6px;
    border: none;
    color: #636363;
    font-weight: 600;
    font-size: 15px;
    margin-top: 15px;
    padding-left: 15px;
    margin-bottom: 25px;
}

.grayBox .loginWrap .login_box #title {
    width: 100%;
    height: auto;
    min-width: 292px;
    background-color: #d9d9d9;
    border-radius: 6px;
    border: none;
    color: #636363;
    font-size: 15px;
    font-weight: 400;
    padding-left: 15px;
    margin-top: 15px;
    margin-bottom: 25px;
    min-height: 34px;
}

.grayBox .loginWrap .login_box textarea {
    margin-top: 15px;
    width: 100%;
    height: auto;
    min-width: 292px;
    background-color: #d9d9d9;
    border-radius: 6px;
    border: none;
    color: #636363;
    font-size: 15px;
    font-weight: 400;
    padding-left: 15px;
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
    background-color: #7a7a7a;
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
