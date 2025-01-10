<template>
    <div class="bgbg">
        <Header msg="원산지 표시판<br>알레르기 유발물질" />
        <div class="grayBox">
            <div class="s_wrap">
                <div class="top">
                    <h1>원산지 표시판</h1>
                    <div class="box1">
                        <ul>
                            <li>{{ product.title }}: {{ product.allergy }}</li>
                        </ul>
                    </div>
                </div>
                <div class="bottom">
                    <h1>알레르기 유발물질</h1>
                    <div class="box2">
                        <ul>
                            <li>치즈버거: 우유, 대두, 밀, 토마토</li>
                            <li>빅맥: 우유, 대두, 밀, 쇠고기</li>
                            <li>슈슈버거: 대두, 계란, 돼지고기</li>
                            <li>더블 불고기버거: 난류,우유,밀,대두,돼지고기,조개,굴</li>
                            <li>더블치즈버거: 우유,대두,밀,토마토,쇠고기</li>
                            <li>행운버거 골드: 난류,굴,돼지고기,대두,토마토,밀</li>
                            <li>핫케익: 난류,우유,대두,밀</li>
                            <li>소시지 에그 맥그리들: 난류,우유,대두,밀,돼지고기</li>
                            <li>후렌치 후라이: 대두</li>
                            <li>맥너겟: 대두,밀,닭고기</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import cartItems from '@/assets/snackside.js';
export default {
    name: 'FoodNotice',
    components: {
        Header
    },
    data() {
        return {
            product: {}
        };
    },
    created() {
        const productId = this.$route.params.id;
        this.product = cartItems.find((item) => item.id === parseInt(productId));
        if (!this.product) {
            console.error('상품을 찾을 수 없습니다.');
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
    padding-top: 30px;
}

.grayBox .s_wrap {
    width: 90%;
    min-width: 340px;
    margin: 0 auto;
    overflow-x: hidden;
    height: 79%;
    min-height: 522px;
    text-align: center;
    -ms-overflow-style: none;
}

.grayBox .s_wrap .top,
.grayBox .s_wrap .bottom {
    width: 100%;
    margin-bottom: 20px;
    padding-top: 15px;
}

.grayBox .s_wrap .top h1,
.grayBox .s_wrap .bottom h1 {
    font-size: 15px;
    font-weight: 600;
    color: #636363;
}

.grayBox .s_wrap .top .box1,
.grayBox .s_wrap .bottom .box2 {
    background-color: white;
    width: 100%;
    overflow-y: auto; /* 개별 박스도 스크롤 가능 */
    height: auto; /* 높이를 내용에 맞게 자동 조정 */
    box-sizing: border-box; /* 패딩 포함 크기 계산 */
    text-align: center;
    margin: 0 auto;
}

.grayBox .s_wrap .box1 ul li,
.grayBox .s_wrap .box2 ul li {
    list-style: none;
    padding: 10px 15px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
}

.grayBox .s_wrap .box1 ul,
.grayBox .s_wrap .box2 ul {
    margin: 0;
    padding: 0;
    width: 100%;
}

.grayBox .s_wrap .box1 ul li:nth-child(odd),
.grayBox .s_wrap .box2 ul li:nth-child(odd) {
    background-color: #e0e0e0; /* 어두운 배경색 */
}
.grayBox .s_wrap .box1 ul li:nth-child(even),
.grayBox .s_wrap .box2 ul li:nth-child(even) {
    background-color: #ffffff; /* 밝은 배경색 */
}
.bgbg {
    padding-top: 20px;
    width: 100%;
    min-width: 375px;
    background-color: #494949;
    height: 100vh;
    overflow: hidden;
}

/* 이거하면 클릭안되던거 클릭됨 */
.bgbg,
.grayBox {
    pointer-events: auto; /* 모든 부모 요소 클릭 허용 */
    z-index: 10; /* 클릭 가능하도록 보장 */
}
</style>
