<template>
    <div class="bgbg">
        <Header msg="매장찾기" />
        <div class="store_serch_wrap">
            <form action="">
                <input type="textarea" />
                <button class="store_serch_btn" type="button">
                    <img src="@/assets/img/store_serch.png" alt="store_serch_btn" />
                </button>
            </form>
        </div>
        <div class="grayBox">
            <!-- "지도 퍼가기" HTML 코드 삽입 -->
            <div class="map_wrap">
                <div
                    id="daumRoughmapContainer1736222859270"
                    class="root_daum_roughmap root_daum_roughmap_landing"
                ></div>
            </div>
            <div class="text_wrap">
                <h2>총 {{ stores.length }}개 매장</h2>
                <button>가까운순</button>
            </div>
            <div class="coupons">
                <div class="shape" v-for="(store, index) in stores" :key="index">
                    <div class="left_wrap">
                        <h1>{{ store.name }}</h1>
                        <h2>현재날씨:</h2>
                    </div>
                    <div class="right_wrap">
                        <button class="star_button" @click="toggleStar(index)">
                            <img :src="store.isStarClicked ? imageSrc.starActive : imageSrc.star" alt="store_star" />
                        </button>
                        <h3>{{ store.hours }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'StoreSerch',
    data() {
        return {
            imageSrc: {
                star: require('@/assets/img/store_star.png'),
                starActive: require('@/assets/img/store_star_click.png')
            },
            stores: [
                { name: 'ABC점 매장', hours: '운영시간 9:00 ~ 21:00', isStarClicked: false },
                { name: 'DEF점 매장', hours: '운영시간 10:00 ~ 20:00', isStarClicked: false },
                { name: 'SF점 매장', hours: '운영시간 9:00 ~ 21:00', isStarClicked: false },
                { name: 'Dfe점 매장', hours: '운영시간 10:00 ~ 20:00', isStarClicked: false },
                { name: 'weffe점 매장', hours: '운영시간 10:00 ~ 20:00', isStarClicked: false },
                { name: '123점 매장', hours: '운영시간 10:00 ~ 20:00', isStarClicked: false },
                { name: '56563점 매장', hours: '운영시간 10:00 ~ 20:00', isStarClicked: false },
                { name: '00점 매장', hours: '운영시간 10:00 ~ 20:00', isStarClicked: false }
            ]
        };
    },
    components: {
        Header
    },
    methods: {
        toggleStar(index) {
            this.stores[index].isStarClicked = !this.stores[index].isStarClicked;
        }
    },
    mounted() {
        this.loadKakaoMap();
    },
    methods: {
        loadKakaoMap() {
            // 스크립트 중복 로드 방지
            if (!document.querySelector('.daum_roughmap_loader_script')) {
                const script = document.createElement('script');
                script.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js';
                script.charset = 'UTF-8';
                script.className = 'daum_roughmap_loader_script';
                document.head.appendChild(script);

                script.onload = this.initKakaoMap;
            } else {
                this.initKakaoMap();
            }
        },
        initKakaoMap() {
            try {
                // 카카오맵 초기화
                new daum.roughmap.Lander({
                    timestamp: '1736222859270',
                    key: '2mppk', // 사용자가 제공한 Key
                    mapWidth: '390',
                    mapHeight: '230'
                }).render();
            } catch (error) {
                console.error('카카오맵 초기화 중 오류 발생:', error);
            }
        }
    }
};
</script>

<style scoped>
body {
    overflow-y: hidden;
}
.store_serch_wrap {
    position: relative;
    top: -20px;
    z-index: 9999999999;
    transform: translate(-50%, 0);
    left: 50%;
    width: 75%;
    min-width: 275px;
    height: auto;
    min-height: 32px;
    /*     background-color: aqua; */
    display: inline-block;
    margin: 0 auto;
}

.store_serch_wrap input {
    width: 100%;
    height: auto;
    min-width: 275px;
    min-height: 32px;
    border-radius: 15px;
    border: none;
    margin-bottom: 18px;
    background-color: #fff;
}

.store_serch_wrap .store_serch_btn {
    border: 0;
    position: absolute;
    right: 5px;
    top: 2px;
    background-color: transparent;
}
.grayBox {
    position: relative;
    margin: 0 auto;
    display: block;
    width: 100%;
    min-width: 375px;
    min-height: 650px;
    height: 100vh;
    border-radius: 40px 40px 0 0;
    background-color: #f6f6f6;
    padding-top: 30px;
    overflow: hidden;
}

.grayBox .map_wrap {
    position: absolute;
    width: 100%;
    min-width: 375px;
    margin: 0 auto;
    overflow-x: hidden;
    height: 30%;
    min-height: 217px;
    -ms-overflow-style: none;
    transform: translate(-50%, 0);
    left: 50%;
    top: 0;
    background-color: red;
}

.grayBox .map_wrap .root_daum_roughmap {
    position: absolute;
    bottom: 0;
    left: 0;
}

.grayBox .text_wrap {
    position: absolute;
    width: 70%;
    min-width: 340px;
    max-width: 340px;
    margin: 0 auto;
    overflow-x: hidden;
    height: 3%;
    min-height: 25px;
    -ms-overflow-style: none;
    transform: translate(-50%, 0);
    left: 50%;
    top: 283px;
    /*     background-color: green; */
}

.grayBox .text_wrap h2 {
    font-size: 15px;
    font-weight: 600;
    position: absolute;
    display: inline-block;
    line-height: 26px;
}

.grayBox .text_wrap button {
    width: 72px;
    height: 25px;
    border: none;
    background-color: #262626;
    color: #fff;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    right: 0;
}
.grayBox .coupons {
    position: absolute;
    width: 70%;
    min-width: 340px;
    margin: 0 auto;
    overflow-x: hidden;
    height: 30%;
    min-height: 320px;
    -ms-overflow-style: none;
    transform: translate(-50%, 0);
    left: 50%;
    bottom: 220px;
}

.grayBox .coupons::-webkit-scrollbar {
    display: none;
}

.grayBox .coupons .shape {
    margin: 0 auto;
    cursor: pointer;
    margin-bottom: 12px;
    width: 70%;
    min-width: 340px;
    height: 95px;
    background-color: #d9d9d9;
    position: relative;
    padding: 20px;
    border-radius: 12px; /* 직사각형의 모서리 살짝 둥글게 */
}

.grayBox .coupons .shape .left_wrap {
    position: absolute;
    /*   background-color: violet; */
    width: 30%;
    height: 70%;
    transform: translate(0, -50%);
    top: 50%;
}

.grayBox .coupons .shape .left_wrap h1 {
    font-size: 15px;
    font-weight: 600;
}

.grayBox .coupons .shape .left_wrap h2 {
    font-size: 15px;
    font-weight: 600;
    bottom: -10px;
    position: absolute;
}

.grayBox .coupons .shape .right_wrap {
    position: absolute;
    /*     background-color: violet; */
    width: 60%;
    height: 70%;
    transform: translate(0, -50%);
    top: 50%;
    right: 20px;
}

.grayBox .coupons .shape .right_wrap button {
    float: right;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    margin: 0;
}

.grayBox .coupons .shape .right_wrap h3 {
    display: inline-block;
    position: absolute;
    font-size: 13px;
    font-weight: 700;
    right: 0;
    bottom: -10px;
}
.bgbg {
    padding-top: 20px;
    width: 100%;
    min-width: 375px;
    background-color: #494949;
    height: 100vh;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
}

/* 이거하면 클릭안되던거 클릭됨 */
.bgbg,
.grayBox {
    pointer-events: auto; /* 모든 부모 요소 클릭 허용 */
    z-index: 10; /* 클릭 가능하도록 보장 */
}
</style>
