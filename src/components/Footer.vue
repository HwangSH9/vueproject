<template>
    <div class="contain">
        <nav class="footer-nav fix-bottom">
            <div class="container-wrap">
                <router-link to="/">
                    <button
                        class="center"
                        :class="{ active: activeButton === 'home' }"
                        @click="selectButton('home')"
                        :style="{ color: activeButton === 'home' ? '#7100a0' : '#484848' }"
                    >
                        <img :src="activeButton === 'home' ? imageSrc.homeActive : imageSrc.home" alt="홈" />
                        홈
                    </button>
                </router-link>
                <router-link to="/coupon">
                    <button
                        class="center"
                        :class="{ active: activeButton === 'coupon' }"
                        @click="selectButton('coupon')"
                        :style="{ color: activeButton === 'coupon' ? '#7100a0' : '#484848' }"
                    >
                        <img :src="activeButton === 'coupon' ? imageSrc.couponActive : imageSrc.coupon" alt="쿠폰" />
                        쿠폰
                    </button>
                </router-link>
                <div class="footer_center_btn">
                    <!-- 클릭 시 부모 컴포넌트로 'open-center-boy' 이벤트 전송 -->
                    <button @click="openCenterBoy">
                        <img src="../assets/img/footer_button.png" alt="Footer Button" width="79" height="79" />
                    </button>
                </div>
                <router-link to="/category">
                    <button
                        class="center"
                        :class="{ active: activeButton === 'menu' }"
                        @click="selectButton('menu')"
                        :style="{ color: activeButton === 'menu' ? '#7100a0' : '#484848' }"
                    >
                        <img :src="activeButton === 'menu' ? imageSrc.menuActive : imageSrc.menu" alt="메뉴" />
                        메뉴
                    </button>
                </router-link>
                <router-link to="/moreview">
                    <button
                        class="last"
                        :class="{ active: activeButton === 'more' }"
                        @click="selectButton('more')"
                        :style="{ color: activeButton === 'more' ? '#7100a0' : '#484848' }"
                    >
                        <img :src="activeButton === 'more' ? imageSrc.moreActive : imageSrc.more" alt="더보기" />
                        더보기
                    </button>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            imageSrc: {
                home: require('../assets/img/home.svg'),
                homeActive: require('../assets/img/home_h.svg'),
                coupon: require('../assets/img/coupon.svg'),
                couponActive: require('../assets/img/coupon_h.svg'),
                menu: require('../assets/img/hamburger.svg'),
                menuActive: require('../assets/img/hamburger_h.svg'),
                more: require('../assets/img/more.svg'),
                moreActive: require('../assets/img/more_h.svg')
            },
            activeButton: null
        };
    },
    methods: {
        selectButton(button) {
            this.activeButton = button;
        },

        // Footer에서 CenterBoy 열기
        openCenterBoy() {
            this.$emit('open-center-boy'); // 부모로 이벤트 전달
        }
    }
};
</script>

<style scoped>
* {
    font-family: 'Pretendard';
}

.active a {
    color: #7100a0;
}

.contain {
    width: 100%;
    margin: 0 auto;
    background-color: #484848;
}

.fix-bottom {
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    z-index: 1030;
    width: 100%;
}

.footer-nav {
    padding-left: 30px;
    background: #fff;
    height: 65px;
}

.footer-nav > .container-wrap {
    flex-wrap: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
}

.footer-nav > .container-wrap .center {
    display: inline-block;
    width: 25.94px;
}

.footer-nav > .container-wrap .last {
    display: inline-block;
    width: 29px;
}

.footer-nav > .container-wrap button img:first-child {
    padding-left: 1px;
}

.container-wrap button {
    font-size: 10px;
    font-weight: 900;
    border: 0;
    margin: 0;
    background-color: inherit;
    padding: 0;
    color: #484848;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container-wrap button img {
    position: static;
    margin-bottom: 2px;
}

.container-wrap button a {
    text-decoration: none;
    color: #484848;
}

.footer_center_btn {
    position: relative;
}

.footer_center_btn > button img {
    position: absolute;
    right: -40px;
    top: -60px;
}

nav {
    padding: 13px 30px 0 30px;
}

@media (max-width: 375px) {
    .contain {
        max-width: 375px;
        overflow: hidden;
    }

    .footer-nav {
        padding-left: 30px;
        width: 100%;
        box-sizing: border-box;
    }

    .footer-nav > .container-wrap {
        max-width: 375px;
    }
}
</style>
