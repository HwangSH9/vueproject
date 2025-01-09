<template>
    <div class="bg">
        <div class="main">
            <div class="topWrap">
                <img src="@/assets/img/main_boy.png" alt="main boy" />
                <div class="right_wrap">
                    <h1>안녕하세요!</h1>
                    <router-link to="/login"><button>로그인</button></router-link>
                </div>
            </div>
            <div class="top_left_wrap">
                <router-link to="/mypage">
                    <div class="mypage_left">
                        <a href="#"><img src="@/assets/img/mypage.png" alt="mypage" /></a>
                    </div>
                </router-link>
                <router-link to="/cartempty">
                    <div class="cart_right">
                        <a href="#"><img src="@/assets/img/cart.png" alt="cart" /></a>
                    </div>
                </router-link>
            </div>
            <div class="grayBox">
                <div class="banner">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="@/assets/img/banner1.png" class="d-block w-100" alt="banner1" />
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/img/banner2.png" class="d-block w-100" alt="banner2" />
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/img/banner3.png" class="d-block w-100" alt="banner3" />
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="delivery_btns">
                    <router-link to="#"
                        ><div class="delivery_btn1">
                            <h2>배달주문</h2>
                            <img src="@/assets/img/b_btn_1.png" alt="b_btn_1" /></div
                    ></router-link>
                    <div class="delivery_btn2">
                        <h2>매장픽업</h2>
                        <img src="@/assets/img/b_btn_2.png" alt="b_btn_1" />
                    </div>
                </div>
                <div class="best_menu_wrap">
                    <h2>메뉴추천</h2>
                    <div class="best_menu_boxs">
                        <swiper :slides-per-view="4">
                            <SwiperSlide v-for="(Burgers, i) in Burger" :key="i" @click="goDetail(Burgers.id)">
                                <div class="menuBoxWrap">
                                    <div class="menuBox_img">
                                        <img :src="Burgers.image" alt="menu" />
                                        <a href="#">{{ Burgers.title }}</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ham from '@/assets/ham.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
export default {
    name: 'MainComponent',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            choice: 0,
            Burger: ham
        };
    },
    methods: {
        goDetail(Burgers) {
            this.$router.push({
                name: 'Detail',
                params: {
                    id: Burgers,
                    image: Burgers.image,
                    title: Burgers.title,
                    content: Burgers.content,
                    price: Burgers.price
                }
            });
        }
    }
};
</script>

<style scoped>
/* 배경 스타일 */
.bg {
    padding-top: 35px;
    position: relative;
    width: 100%;
    min-width: 375px;
    height: 100vh;
    background-color: #494949;
    overflow-y: hidden;
    z-index: 1;
}

/* 메인 래퍼 */
.main .topWrap {
    margin-left: 28px;
    width: 55%;
    min-width: 210px;
    position: relative;
    height: auto;
    min-height: 82px;
    z-index: 10;
}

/* 메인 이미지 */
.main .topWrap img {
    position: absolute;
    left: 0;
    z-index: 1;
    pointer-events: none;
}

/* 버튼 및 텍스트 */
.main .topWrap .right_wrap {
    position: absolute;
    right: 0;
    max-width: 102px;
    z-index: 10;
}

.main .topWrap .right_wrap h1 {
    text-align: left;
    font-size: 20px;
    color: white;
    font-weight: 700;
    letter-spacing: -1px;
}

.main .topWrap .right_wrap button {
    float: left;
    width: 80%;
    min-width: 72px;
    height: auto;
    min-height: 25px;
    border-radius: 6px;
    border: none;
    outline: none;
    background-color: #d3d3d3;
    color: #454545;
    font-size: 13px;
    cursor: pointer;
    font-weight: 600;
    z-index: 20;
    position: relative;
    pointer-events: auto;
}

/* 상단 좌우 요소 */
.main .top_left_wrap {
    position: absolute;
    right: 16px;
    top: 16px;
    min-width: 49.2px;
    width: 15%;
    height: auto;
}

.main .top_left_wrap .mypage_left {
    float: left;
}

.main .top_left_wrap .cart_right {
    float: right;
}

/* 그레이 박스 */
.main .grayBox {
    position: relative;
    margin: 0 auto;
    display: block;
    width: 100%;
    min-width: 375px;
    min-height: 648px;
    height: 100vh;
    z-index: 11;
    border-radius: 40px 40px 0 0;
    background-color: #fcfcfc;
}

.main .grayBox .banner {
    position: absolute;
    top: 23px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90%;
    min-width: 333px;
    height: 209px;
    border-radius: 30px;
    background-color: beige;
    overflow: hidden;
}

.carousel-item {
    height: 209px;
}

.main .grayBox .delivery_btns {
    position: relative;
    width: 90%;
    min-width: 333px;
    height: 106px;
    left: 50%;
    top: 270px;
    transform: translate(-50%, 0);
    margin-bottom: 40px;
}

.main .grayBox .delivery_btns .delivery_btn1 {
    position: absolute;
    left: 0;
    width: 47%;
    height: 106px;
    /*     box-shadow: 2px 3px 4px 0px;
    color: #ececec; */
    border-radius: 15px;
    background-color: #d3d3d3;
}

.main .grayBox .delivery_btns .delivery_btn1 img,
.main .grayBox .delivery_btns .delivery_btn2 img {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
}

.main .grayBox .delivery_btns .delivery_btn1 h2,
.main .grayBox .delivery_btns .delivery_btn2 h2 {
    padding-top: 15px;
    text-align: center;
    color: #454545;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
}

.main .grayBox .delivery_btns .delivery_btn2 {
    position: absolute;
    right: 0;
    border-radius: 15px;
    width: 47%;
    /*     box-shadow: 2px 3px 4px 0px;
    color: #c7b673; */
    height: 106px;
    background-color: #d3d3d3;
}

.main .grayBox .best_menu_wrap {
    position: relative;
    transform: translate(-50%, 0);
    left: 50%;
    height: 150px;
    min-width: 333px;
    width: 90%;
    top: 270px;
}

.main .grayBox .best_menu_wrap h2 {
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
}

.main .grayBox .best_menu_wrap .best_menu_boxs {
    position: absolute;
    width: 100%;
    height: 90px;
    overflow: hidden;
    bottom: 30;
    /*     background-color: aquamarine; */
    display: flex;
}

.main .grayBox .best_menu_wrap .best_menu_boxs .menuBoxWrap {
    min-width: 67.4px;
    width: 95%;
    height: 90px;
}

.main .grayBox .best_menu_wrap .best_menu_boxs .menuBoxWrap .menuBox_img {
    width: 100%;
    height: 100%;
    min-height: 62px;
    float: left;
}

.main .grayBox .best_menu_wrap .best_menu_boxs .menuBoxWrap .menuBox_img img {
    width: 100%;
    height: auto;
    padding-top: 10%;
}

.main .grayBox .best_menu_wrap .best_menu_boxs .menuBoxWrap a {
    position: absolute;
    width: 100%;
    bottom: 0;
    transform: translate(-50%, 0);
    left: 50%;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    color: #000;
    letter-spacing: -1px;
    text-align: center;
}

.w-100 {
    height: 100% !important;
}
</style>
