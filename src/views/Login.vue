<template>
    <div class="bgbg">
        <Header msg="로그인" />
        <div class="grayBox">
            <div class="loginWrap">
                <div class="login_box">
                    <form v-if="!isLoggedIn" @submit.prevent="login">
                        <ul>
                            <li>
                                <p>아이디</p>
                                <input
                                    v-model="username"
                                    class="biginput"
                                    type="email"
                                    name="email"
                                    placeholder="이메일을 입력하세요"
                                    required
                                    :disabled="loading"
                                />
                            </li>
                            <li>
                                <p>비밀번호</p>
                                <input
                                    v-model="password"
                                    class="biginput last"
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호(영문,숫자를 혼용하여 8자리 이상)"
                                    required
                                />
                            </li>
                        </ul>
                        <div class="checkbox">
                            <input type="checkbox" />자동로그인 <input class="lastcheck" type="checkbox" />아이디 저장
                        </div>
                        <button class="loginBtn" type="submit" :disabled="loading" @click.prevent="login">
                            {{ loading ? 'Logging in...' : 'Login' }}
                        </button>
                    </form>
                    <div class="line"></div>
                    <h3>간편 로그인</h3>
                    <h4>
                        아직 회원이 아니신가요? <router-link to="/signup"><span>회원가입</span></router-link>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
export default {
    name: 'Login',
    components: {
        Header
    },
    data() {
        return {
            username: '',
            password: '',
            error: '',
            loading: false, // 로딩 상태 추가
            isLoggedIn: false // 로그인 상태 추가
        };
    },
    created() {
        // 컴포넌트가 로드될 때 localStorage에서 로그인 상태를 확인
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    },
    methods: {
        async login() {
            this.error = ''; // 이전 에러 초기화
            this.loading = true; // 로딩 시작

            try {
                // 로그인 요청
                const response = await axios.post('/api/auth/login.php', {
                    username: this.username,
                    password: this.password
                });

                if (response.data.success) {
                    this.isLoggedIn = true; // 로그인 상태 설정
                    localStorage.setItem('isLoggedIn', 'true'); // 로그인 상태를 localStorage에 저장
                    // 로그인 성공 시 메인 페이지로 이동
                    this.$router.push('/');
                    this.username = ''; // 입력 필드 초기화
                    this.password = '';
                } else {
                    // 서버에서 반환된 에러 메시지 표시
                    this.error = response.data.message || 'Login failed';
                }
            } catch (err) {
                console.error(err); // 디버깅을 위한 콘솔 출력
                this.error = err.response?.data?.message || 'An unexpected error occurred';
            } finally {
                this.loading = false; // 로딩 종료
            }
        },
        logout() {
            this.isLoggedIn = false; // 로그아웃 상태 설정
            localStorage.removeItem('isLoggedIn'); // localStorage에서 로그인 상태 제거
            this.$router.push('/'); // 로그아웃 후 메인 페이지로 이동
        }
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
</style>
