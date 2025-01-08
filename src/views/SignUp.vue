<template>
    <div class="bgbg">
        <Header msg="회원가입" />
        <div class="signup_bg">
            <div class="form-container">
                <form>
                    <!-- 이메일 입력 -->
                    <div class="input-group">
                        <label for="email">이메일</label>
                        <input type="email" id="email" placeholder="이메일을 입력하세요" required />
                    </div>

                    <!-- 비밀번호 입력 -->
                    <div class="input-group">
                        <label for="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="비밀번호(영문, 숫자를 혼용하여 8자리 이상)"
                            required
                        />
                    </div>

                    <!-- 약관 동의 -->
                    <div class="checkbox-group">
                        <label>
                            <input type="checkbox" required />
                            <span>이용약관 및 개인정보 처리방침에 동의합니다.</span>
                        </label>
                    </div>

                    <!-- 회원가입 버튼 -->
                    <button type="submit" class="signup-btn">회원가입</button>
                </form>
            </div>

            <!-- 하단 로그인 링크 -->
            <footer class="footer">
                <p>이미 회원이신가요? <router-link to="/login">로그인</router-link></p>
            </footer>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'SignUp',
    components: {
        Header
    }
};
</script>

<style scoped>
/* 전체 페이지 스타일 */
.signup-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f6f6f6;
    padding: 20px;
    box-sizing: border-box;
}

/* 헤더 */
.header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    background-color: #000;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    position: relative;
}

.back-btn {
    position: absolute;
    left: 10px;
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

/* 입력 폼 */
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* 수평 중앙 정렬 */
    justify-content: center; /* 수직 중앙 정렬 */
    width: 100%;
    max-width: 360px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-top: 55px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
}

.checkbox-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.checkbox-group input {
    margin-right: 5px;
}

.signup-btn {
    width: 100%;
    padding: 10px;
    background-color: #262626;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.signup-btn:hover {
    background-color: #7a7a7a;
}

/* 하단 링크 */
.footer {
    margin-top: 20px;
}

.footer p {
    font-size: 14px;
    text-align: center;
}

.footer a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
}

.footer a:hover {
    text-decoration: underline;
}

/* 이거하면 클릭안되던거 클릭됨 */
.bgbg,
.grayBox,
.loginWrap,
.login_box {
    pointer-events: auto; /* 모든 부모 요소 클릭 허용 */
    z-index: 10; /* 클릭 가능하도록 보장 */
}

.bgbg {
    padding-top: 20px;
    width: 100%;
    min-width: 375px;
    height: 100vh;
    overflow-y: hidden;
    background-color: #494949;
}

.signup_bg {
    width: 100%;
    height: 90vh;
    border-radius: 50px;
    background: #f6f6f6 !important;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px;
    align-items: center; /* 수직 중앙 정렬 */
    justify-items: center;
}
</style>
