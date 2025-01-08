<template>
    <div>
        <!-- CenterBoy 컴포넌트를 showCenterBoy 상태로 제어 -->
        <CenterBoy v-if="showCenterBoy" @center_close="closeCenterBoy" />

        <!-- 다른 컴포넌트들 -->
        <Splash v-if="showSplash" />
        <Usage v-if="!showSplash && showUsage" @close="closeUsage" />
        <router-view />
        <Footer @open-center-boy="openCenterBoy" />
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Splash from './components/Splash.vue';
import Footer from './components/Footer.vue';
import Usage from './components/Usage.vue';
import CenterBoy from './components/CenterBoy.vue';

export default {
    components: {
        Footer,
        Splash,
        Usage,
        CenterBoy
    },
    setup() {
        const route = useRoute(); // 현재 경로를 가져오기
        const showSplash = ref(false); // 스플래시 화면 상태
        const showUsage = ref(false); // Usage 화면 상태
        const showCenterBoy = ref(false); // CenterBoy 화면 상태

        // 스플래시 및 Usage 화면 제어
        const updatePageState = () => {
            // 처음 앱에 들어갔을 때만 스플래시 화면을 표시 (새로 고침 시에도 보이게)
            if (route.path === '/' && !sessionStorage.getItem('splashShown')) {
                showSplash.value = true; // 스플래시 화면 표시
                sessionStorage.setItem('splashShown', 'true'); // 스플래시 화면을 본 것으로 설정
                setTimeout(() => {
                    showSplash.value = false; // 3초 후 스플래시 화면 숨기기
                    showUsage.value = true; // Usage 화면 표시
                }, 3000);
            } else if (route.path !== '/') {
                // 다른 경로에서는 스플래시 숨기기
                showSplash.value = false;
                showUsage.value = false;
            }
        };

        // 초기 설정
        onMounted(() => {
            updatePageState(); // 경로에 따라 상태 초기화
        });

        // 경로 변경 감지
        watch(route, () => {
            updatePageState(); // 경로 변경 시 상태 업데이트
        });

        // Usage 닫기 메서드
        const closeUsage = () => {
            showUsage.value = false; // Usage 화면 숨기기
        };

        // CenterBoy 닫기 메서드
        const closeCenterBoy = () => {
            showCenterBoy.value = false; // CenterBoy 화면 숨기기
        };

        // Footer에서 CenterBoy 열기
        const openCenterBoy = () => {
            showCenterBoy.value = true; // CenterBoy 화면 보이기
        };

        return {
            showSplash,
            showUsage,
            showCenterBoy,
            closeUsage,
            closeCenterBoy,
            openCenterBoy
        };
    }
};
</script>

<style>
* {
    font-family: 'Pretendard';
}
</style>
