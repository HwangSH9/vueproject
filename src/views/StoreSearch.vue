<template>
    <div class="bgbg">
        <Header msg="매장찾기" />
        <div class="store_serch_wrap">
            <form action="">
                <input type="textarea" placeholder="매장명을 입력하세요" />
                <button class="store_serch_btn" type="button">
                    <img src="@/assets/img/store_serch.png" alt="store_serch_btn" />
                </button>
            </form>
        </div>
        <div class="grayBox">
            <!-- 카카오 지도 렌더링 -->
            <div class="map_wrap">
                <div id="map" style="width: 100%; height: 100%"></div>
            </div>
            <div class="text_wrap">
                <h2>총 {{ stores.length }}개 매장</h2>
                <button>가까운순</button>
            </div>
            <div class="coupons">
                <div class="shape" v-for="(store, index) in stores" :key="index">
                    <div class="left_wrap">
                        <h1>{{ store.name }}</h1>
                        <div class="weather-app">
                            <div v-if="store.weather">
                                <div class="weather-info">
                                    <h2>
                                        현재날씨:
                                        <img
                                            :src="store.weather.weatherIcon"
                                            referrerpolicy="no-referrer"
                                            alt="Weather Icon"
                                        />
                                        {{ store.weather.temp }}℃
                                    </h2>
                                </div>
                            </div>
                            <div v-else>
                                <p>날씨 정보를 불러오는 중...</p>
                            </div>
                        </div>
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
    components: {
        Header
    },
    data() {
        return {
            imageSrc: {
                star: require('@/assets/img/store_star.png'),
                starActive: require('@/assets/img/store_star_click.png')
            },
            stores: [
                {
                    name: '신도림테크노마트점 매장',
                    hours: '운영시간 9:00 ~ 21:00',
                    lat: 37.5069735,
                    lon: 126.8903193,
                    isStarClicked: false
                },
                {
                    name: '춘천후평DT점 매장',
                    hours: '운영시간 10:00 ~ 20:00',
                    lat: 37.8808856,
                    lon: 127.7495263,
                    isStarClicked: false
                },
                {
                    name: '제주도남DT점 매장',
                    hours: '운영시간 10:00 ~ 20:00',
                    lat: 33.4804499,
                    lon: 126.5275515,
                    isStarClicked: false
                },
                {
                    name: '속초DT점 매장',
                    hours: '운영시간 9:00 ~ 21:00',
                    lat: 38.1898497,
                    lon: 128.5839333,
                    isStarClicked: false
                },
                {
                    name: '광주진월DT점 매장',
                    hours: '운영시간 10:00 ~ 20:00',
                    lat: 35.121637,
                    lon: 126.8981948,
                    isStarClicked: false
                }
            ]
        };
    },
    mounted() {
        this.loadKakaoMap();
        this.fetchAllWeatherData(); // 모든 매장의 날씨 정보를 가져오기
    },
    methods: {
        toggleStar(index) {
            this.stores[index].isStarClicked = !this.stores[index].isStarClicked;
        },
        loadKakaoMap() {
            if (!document.querySelector('#kakao-map-script')) {
                const script = document.createElement('script');
                script.src =
                    'https://dapi.kakao.com/v2/maps/sdk.js?appkey=122524454a55bf6e9efc3162d4333516&libraries=services';
                script.async = true;
                script.id = 'kakao-map-script';
                document.head.appendChild(script);
                script.onload = this.initKakaoMap;
            } else {
                this.initKakaoMap();
            }
        },
        initKakaoMap() {
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(37.5665, 126.978),
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
            // 현재 위치 가져오기
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude; // 위도
                    const lng = position.coords.longitude; // 경도
                    const currentLocation = new kakao.maps.LatLng(lat, lng); // 현재 위치 생성
                    map.setCenter(currentLocation); // 지도의 중심을 현재 위치로 설정

                    // 현재 위치 마커 추가
                    const marker = new kakao.maps.Marker({
                        position: currentLocation, // 현재 위치
                        map: map // 지도에 표시
                    });
                },
                (error) => {
                    console.error('위치 정보를 가져올 수 없습니다:', error);
                }
            );
        },
        // 매장별 날씨 데이터를 가져오는 함수
        async fetchWeatherData(lat, lon) {
            try {
                const apiKey = 'b56dd4e9365e5fb5abc59d76db48d6bf';
                const weatherResponse = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=Metric`
                );
                const weatherData = await weatherResponse.json();
                return {
                    temp: weatherData.main.temp,
                    weatherIcon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
                    weatherDescription: weatherData.weather[0].description
                };
            } catch (error) {
                console.error('날씨 데이터를 가져오는 중 오류 발생:', error);
                return null;
            }
        },
        async fetchAllWeatherData() {
            // 모든 매장에 대해 날씨 데이터를 가져옴
            for (const store of this.stores) {
                const weatherInfo = await this.fetchWeatherData(store.lat, store.lon);
                if (weatherInfo) {
                    store.weather = {
                        temp: weatherInfo.temp,
                        weatherIcon: weatherInfo.weatherIcon,
                        weatherDescription: weatherInfo.weatherDescription
                    };
                }
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
    display: block;
    width: 160px;
}

.grayBox .coupons .shape .left_wrap h2 {
    font-size: 15px;
    font-weight: 600;
    bottom: -10px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 155px;
    height: 20px;
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

/* 날씨 */
h2 img {
    width: 40px;
    height: 40px;
}
</style>
