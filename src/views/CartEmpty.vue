<template>
    <div class="bgbg">
        <Header msg="장바구니" />
        <div class="cart_bg">
            <div class="cart-center">
                <div class="cart-content">
                    <img src="../assets/img/cart_bin.png" alt="빈카트 이미지" class="cart_bin_img" />
                    <div class="cart-info">
                        <h2>장바구니가 아직 비어있어요</h2>
                    </div>
                </div>
                <div class="best_menu_wrap">
                    <h2>메뉴추천</h2>
                    <div class="best_menu_boxs">
                        <Swiper :slides-per-view="4">
                            <SwiperSlide v-for="(Burgers, i) in Burger" :key="i" @click="goDetail(Burgers.id)">
                                <div class="menuBoxWrap">
                                    <div class="menuBox_img">
                                        <img :src="Burgers.image" alt="menu" />
                                        <a href="#">{{ Burgers.title }}</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ham from '@/assets/ham.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
    name: 'MoreView',
    components: {
        Header,
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
.bgbg {
    padding-top: 20px;
    width: 100%;
    min-width: 375px;
    height: 100vh;
    overflow-y: hidden;
    background-color: #494949;
}
.cart_bg {
    position: relative;
    margin: 0 auto;
    display: block;
    width: 100%;
    min-width: 375px;
    min-height: 648px;
    height: 100vh;
    border-radius: 40px 40px 0 0;
    background-color: #f6f6f6;
    padding-top: 30px;
}

.cart-center {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 50px;
}

.cart-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    padding: 20px;
}

.cart-content .cart_bin_img {
    position: absolute;
    display: block;
    z-index: 1; /* 이미지 아래 표시 */
    transform: translateX(-10px);
}
.cart-info {
    position: absolute;
    text-align: center;
    transform: translateX(0);
    transform: translateY(80px);
    padding-top: 50px;
}

.cart-info h2 {
    color: rgba(0, 0, 0, 50%);
    font-size: 15px;
    font-weight: 600;
    padding: 10px;
    margin-top: 20px;
}

.cart-center .menu-content {
    width: 350px;
    position: relative;
    height: 200px;
    padding-bottom: 20px;
}

/* 추천메뉴 */

.best_menu_wrap {
    position: relative;
    transform: translate(-50%, 0);
    left: 50%;
    height: 150px;
    min-width: 333px;
    width: 90%;
    top: 0;
}

.best_menu_wrap h2 {
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
}

.best_menu_wrap .best_menu_boxs {
    position: absolute;
    width: 100%;
    height: 90px;
    overflow: hidden;
    bottom: 30;
    /*     background-color: aquamarine; */
    display: flex;
}

.best_menu_wrap .best_menu_boxs .menuBoxWrap {
    min-width: 67.4px;
    width: 95%;
    height: 90px;
}

.best_menu_wrap .best_menu_boxs .menuBoxWrap .menuBox_img {
    width: 100%;
    height: 100%;
    min-height: 62px;
    float: left;
}

.best_menu_wrap .best_menu_boxs .menuBoxWrap .menuBox_img img {
    width: 100%;
    height: auto;
    padding-top: 10%;
}

.best_menu_wrap .best_menu_boxs .menuBoxWrap a {
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
</style>
