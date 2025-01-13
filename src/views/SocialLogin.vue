<template>
    <div class="bgbg">
        <button class="back_left" @click="goBack">
            <img src="@/assets/img/back_icon.png" alt="" />
        </button>
        <div class="splash-content">
            <h1><img :src="require('@/assets/img/splash.png')" alt="logo" /></h1>
        </div>
        <div class="login_content">
            <div class="easy_login">
                <h3>간편 로그인</h3>
            </div>

            <div class="social-buttons">
                <button class="naver-login">
                    <img src="../assets/img/naver_btn.png" alt="네이버" />
                    <span>네이버로 시작하기</span>
                </button>
                <button class="google-login">
                    <img src="../assets/img/google_btn.png" alt="구글" />
                    <span>Google 계정으로 로그인</span>
                </button>
                <button class="kakao-login">
                    <img src="../assets/img/kakao_btn.png" alt="카카오" />
                </button>
            </div>
            <h4 class="login-links">
                <router-link to="/login"><span>아이디로 로그인</span></router-link> /
                <router-link to="/signup"><span>회원가입</span></router-link>
            </h4>
        </div>
    </div>
</template>

<script>
import { googleSdkLoaded } from 'vue3-google-login';
export default {
    name: 'Login',
    components: {},
    data() {
        return {
            imageSrc: {
                kakao: require('@/assets/img/kakao_btn.png'),
                kakaoActive: require('@/assets/img/kakao_btn.png'),
                naver: require('@/assets/img/naver_btn.png'),
                naverActive: require('@/assets/img/naver_btn.png'),
                google: require('@/assets/img/google_btn.png'),
                googleActive: require('@/assets/img/google_btn.png')
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
        goBack() {
            this.$router.go(-1);
        },
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
.bgbg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #262626;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.back_left {
    position: absolute;
    top: 17px;
    left: 0;
    background-color: inherit;
    border-radius: none;
    border: none;
    padding-left: 21px;
}

.splash-content {
    position: relative;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    width: 204px;
    height: 94px;
    top: 200px;
}

h1 img {
    height: auto;
    width: 120px;
    object-fit: contain;
    margin: 0 auto;
}

.login_content {
    transform: translateY(280px);
}

.login_content h3 {
    font-size: 14px;
    color: #9b9b9b;
    text-align: center;
    margin: 0;
}

.easy_login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; /* 전체 화면 너비 */
    margin-bottom: 27px;
}

.easy_login::before,
.easy_login::after {
    content: '';
    flex: 1; /* 양옆 선을 동일 비율로 확장 */
    height: 1px; /* 선 두께 */
    background-color: #636363; /* 선 색상 */
    margin: 0 10px; /* 텍스트와 선 사이 간격 */
}

.social-buttons {
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    align-items: flex-start; /* 왼쪽 정렬 */
    gap: 10px; /* 버튼 간격 */
    width: 100%;
}

.naver-login,
.google-login,
.kakao-login {
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%; /* 버튼의 고정 너비 설정 */
    max-width: 600px; /* 최대 너비 제한 */
    height: 50px; /* 고정 높이 설정 */
    display: flex;
    justify-content: center; /* 내부 이미지도 왼쪽 정렬 */
    align-items: center;
    position: relative;
}

.naver-login {
    background-color: #03c75a;
}

.naver-login span {
    color: #fff;
    font-size: 16px;
    transform: translateX(-12px);
}

.naver-login img {
    transform: translateX(-80px);
}

.google-login {
    background-color: #fff; /* 배경 투명 */
    border: 1px solid #dadce0;
}

.google-login span {
    color: #757575;
    font-weight: 500;
    transform: translateX(-12px);
}

.google-login img {
    width: 100%;
    border-radius: 5px;
    transform: translateX(-60px);
}

.social-buttons img {
    width: auto; /* 이미지가 버튼 크기에 맞게 조정 */
    height: 100%; /* 이미지 높이를 버튼 높이에 맞춤 */
    object-fit: contain;
    margin: 0;
}

/* 하단 링크 */
.login-links {
    margin-top: 20px;
    font-size: 14px;
    color: #aaa;
    text-align: center;
}

.login-links a {
    color: #aaa;
    text-decoration: none;
}

.login-links a:hover {
    color: #c2c2c2;
    text-decoration: none;
}
</style>
