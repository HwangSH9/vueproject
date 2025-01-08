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
                        <button class="loginBtn">
                            <router-link to="/logout"><span>로그인</span></router-link>
                        </button>
                    </form>
                    <div class="line"></div>
                    <h3>간편 로그인</h3>
                    <div class="easy_wrap">
                        <a
                            href="#"
                            :class="{ active: activeButton === 'kakao' }"
                            v-if="!isLoggedIn.kakao"
                            @click="kakaoLogin"
                        >
                            <img :src="activeButton === 'kakao' ? imageSrc.kakaoActive : imageSrc.kakao" alt="카카오" />
                        </a>
                        <a
                            href="#"
                            :class="{ active: activeButton === 'naver' }"
                            id="naverIdLogin"
                            v-if="!isLoggedIn.naver"
                        >
                            <img :src="activeButton === 'naver' ? imageSrc.naverActive : imageSrc.naver" alt="네이버" />
                        </a>
                        <a
                            v-if="!isLoggedIn.google"
                            @click="googleLogin"
                            :class="{ active: activeButton === 'google' }"
                        >
                            <img
                                :src="activeButton === 'google' ? imageSrc.googleActive : imageSrc.google"
                                alt="구글"
                            />
                        </a>
                    </div>
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
import { googleSdkLoaded } from 'vue3-google-login';
export default {
    name: 'Login',
    components: {
        Header
    },
    data() {
        return {
            imageSrc: {
                kakao: require('@/assets/img/kakao.png'),
                kakaoActive: require('@/assets/img/kakao_h.png'),
                naver: require('@/assets/img/naver.png'),
                naverActive: require('@/assets/img/naver_h.png'),
                google: require('@/assets/img/google.png'),
                googleActive: require('@/assets/img/google_h.png')
            },
            activeButton: null,
            isLoggedIn: {
                google: false,
                kakao: false,
                naver: false
            },
            naverLogin: null,
            naverAccessToken: null
        };
    },
    mounted() {
        // 카카오 SDK 초기화
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init('8e11bcc192e20363d465210f81ef3846');
        }

        // 네이버 로그인 버튼 초기화
        this.initializeNaverLoginButton();
    },
    methods: {
        /** 구글 로그인 */
        googleLogin() {
            if (this.isLoggedIn.kakao || this.isLoggedIn.naver) {
                alert('다른 계정으로 이미 로그인되어 있습니다. 먼저 로그아웃하세요.');
                return;
            }
            googleSdkLoaded((google) => {
                google.accounts.oauth2
                    .initCodeClient({
                        client_id: process.env.VUE_APP_OAUTH_CLIENT,
                        scope: 'email profile openid',
                        callback: (response) => {
                            console.log('Google Login Response:', response);
                            this.isLoggedIn.google = true;
                        }
                    })
                    .requestCode();
            });
        },
        googleLogout() {
            console.log('Google Logout');
            this.isLoggedIn.google = false;
        },

        /** 카카오 로그인 */
        kakaoLogin() {
            if (this.isLoggedIn.google || this.isLoggedIn.naver) {
                alert('다른 계정으로 이미 로그인되어 있습니다. 먼저 로그아웃하세요.');
                return;
            }
            window.Kakao.Auth.login({
                scope: 'profile_image, profile_nickname',
                success: this.getKakaoAccount
            });
        },
        getKakaoAccount() {
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: (res) => {
                    console.log('Kakao Login Response:', res);
                    this.isLoggedIn.kakao = true;
                },
                fail: (error) => {
                    alert('카카오 로그인 실패');
                    console.error(error);
                }
            });
        },
        kakaoLogout() {
            window.Kakao.Auth.logout(() => {
                console.log('Kakao Logout');
                this.isLoggedIn.kakao = false;
            });
        },

        /** 네이버 로그인 */
        initializeNaverLoginButton() {
            if (this.isLoggedIn.google || this.isLoggedIn.kakao) {
                alert('다른 계정으로 이미 로그인되어 있습니다. 먼저 로그아웃하세요.');
                return;
            }
            this.naverLogin = new window.naver.LoginWithNaverId({
                clientId: '3PhyCfpiTkqtOTMRweKL',
                callbackUrl: 'http://localhost:8080/naverlogin',
                isPopup: false,
                loginButton: { color: 'green', type: 1, height: 35 }
            });
            this.naverLogin.init(); // 네이버 SDK 초기화

            // 로그인 상태 확인
            this.naverLogin.getLoginStatus((status) => {
                if (status) {
                    this.checkNaverLoginStatus();
                }
            });
        },
        checkNaverLoginStatus() {
            // 네이버 로그인 상태 확인
            this.naverLogin.getLoginStatus((status) => {
                if (status) {
                    // 로그인 성공 시 사용자 정보 및 상태 업데이트
                    this.naverAccessToken = this.naverLogin.accessToken.accessToken;
                    console.log('Naver Login Success:', this.naverLogin.user); // 사용자 정보 출력 (디버깅용)
                    this.isLoggedIn.naver = true;
                } else {
                    console.log('Naver Login Failed');
                }
            });
        },
        naverLogout() {
            if (!this.naverAccessToken) {
                console.log('로그인 상태가 아닙니다.');
                return;
            }
            // 네이버 로그아웃 URL
            const logoutUrl = `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=q004iXc7eDC4DCkq6QnH&client_secret=Zw5Rcxe9Y9&access_token=${this.naverAccessToken}&service_provider=NAVER`;

            // iframe을 사용하여 로그아웃 요청
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = logoutUrl;
            document.body.appendChild(iframe);

            // 로그아웃 처리 후 상태 초기화
            this.naverAccessToken = null;
            this.isLoggedIn.naver = false;

            // DOM 업데이트 후 로그인 버튼 재초기화
            this.$nextTick(() => {
                this.initializeNaverLoginButton();
            });
            console.log('네이버 로그아웃 완료');
        }
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

.grayBox .loginWrap .login_box .loginBtn span[data-v-26084dc2] {
    color: #fff;
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
    z-index: 10; /* 클릭 가능하도록 보장 */
    position: relative;
}

.grayBox .loginWrap .login_box .easy_wrap a {
    display: inline-block;
    cursor: pointer;
    z-index: 10;
}

.grayBox .loginWrap .login_box .easy_wrap img {
    cursor: pointer;
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
    color: black;
}
.grayBox .loginWrap .login_box h4 span:hover {
    text-decoration: underline;
    color: black;
}

.grayBox .loginWrap .login_box h4 a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
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
