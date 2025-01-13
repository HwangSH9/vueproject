<template>
    <div class="bgbg">
        <Header msg="로그인" />
        <div class="grayBox">
            <div class="loginWrap">
                <div class="login_box">
                    <form name="login_form" method="post">
                        <ul>
                            <li>
                                <p>아이디</p>
                                <input
                                    class="biginput"
                                    type="email"
                                    name="email"
                                    placeholder="이메일을 입력하세요"
                                    value=""
                                />
                            </li>
                            <li>
                                <p>비밀번호</p>
                                <input
                                    class="biginput last"
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호(영문,숫자를 혼용하여 8자리 이상)"
                                    value=""
                                />
                            </li>
                        </ul>
                        <div class="checkbox">
                            <form name="check" method="post">
                                <input type="checkbox" />자동로그인 <input class="lastcheck" type="checkbox" />아이디
                                저장
                            </form>
                        </div>
                        <router-link to="/logout">
                            <button class="loginBtn">
                                <span>로그인</span>
                            </button>
                        </router-link>
                    </form>
                    <div class="line"></div>
                    <h3>다른 계정으로 로그인</h3>
                    <router-link to="/SocialLogin">
                        <button class="easy_loginBtn">
                            <span>간편 로그인</span>
                        </button>
                    </router-link>
                    <h4>
                        아직 회원이 아니신가요? <router-link to="/signup"><span>회원가입</span></router-link>
                    </h4>
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
}

.grayBox .loginWrap .login_box .biginput {
    width: 100%;
    min-width: 292px;
    height: auto;
    min-height: 50px;
    background-color: #d9d9d9;
    border-radius: 6px;
    border: none;
    margin-bottom: 29px;
    padding-left: 15px;
    outline: none;
}

.grayBox .loginWrap .login_box .last {
    margin-bottom: 10px;
}

.grayBox .loginWrap .login_box .biginput::placeholder {
    font-size: 12px;
    font-weight: 900;
    color: #636363;
}

.grayBox .loginWrap .login_box ul {
    list-style: none;
    font-size: 15px;
    font-weight: 600;
    color: #636363;
    text-align: left;
    padding: 0;
}

.grayBox .loginWrap .login_box ul p {
    margin: 0;
    margin-bottom: 15px;
}

.grayBox .loginWrap .login_box .checkbox {
    display: flex;
    font-size: 13px;
    font-weight: 600;
    color: #484848;
}

.grayBox .loginWrap .login_box .checkbox input {
    width: 22px;
    height: 22px;
    border-radius: 6px;
    vertical-align: bottom;
    margin-right: 5px;
}

.grayBox .loginWrap .login_box .checkbox .lastcheck {
    margin-left: 25px;
}
.grayBox .loginWrap .login_box .loginBtn {
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

.grayBox .loginWrap .login_box .line {
    width: 100%;
    min-width: 250px;
    height: 1px;
    margin-top: 40px;
    background-color: #636363;
}

.grayBox .loginWrap .login_box h3 {
    font-size: 15px;
    font-weight: 900;
    margin-top: 30px;
    letter-spacing: -1px;
    color: #484848;
    margin-bottom: 10px;
}

.grayBox .loginWrap .login_box .easy_wrap {
    width: 35%;
    min-width: 117px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    position: relative;
}

.grayBox .loginWrap .login_box .easy_wrap a {
    display: inline-block;
    cursor: pointer;
    z-index: 10;
}

.grayBox .loginWrap .login_box h4 {
    margin-top: 30px;
    font-size: 14px;
    color: #484848;
    font-weight: 500;
    text-align: center;
}

.grayBox .loginWrap .login_box h4 span {
    font-weight: bold;
    cursor: pointer;
    color: #484848;
}
.grayBox .loginWrap .login_box h4 span:hover {
    text-decoration: underline;
    color: #484848;
}

.grayBox .loginWrap .login_box h4 a {
    color: #484848;
    text-decoration: none;
    font-weight: bold;
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
