<template>
    <div class="bgbg">
        <Header :msg="product.title" />
        <div class="grayBox">
            <div class="topimg_wrap">
                <img class="top_img" :src="product.image" alt="Burger Image" />
            </div>
            <router-link :to="{ name: 'FoodNotice', params: { id: product.id } }"
                ><button class="nutrition">알레르기 유발물질 / 영양성분</button></router-link
            >
            <div class="menu_list">
                <div class="product">
                    <img class="ham" :src="product.image" alt="hamburger_list" />
                    <div class="textBox">
                        <h2>단품</h2>
                        <p class="content-text">{{ product.price }}</p>
                    </div>
                    <div class="iconBox">
                        <router-link to="/cartview">
                            <img
                                src="@/assets/img/detail_cart.png"
                                alt="detail_cart"
                                @click="addToCart(product, countValue)"
                            />
                        </router-link>
                        <div class="num">
                            <input class="num_btn" type="button" @click="count('minus')" value="-" />
                            <div class="count">{{ countValue }}</div>
                            <input class="num_btn" type="button" @click="count('plus')" value="+" />
                        </div>
                    </div>
                </div>
                <div class="product" v-if="setData">
                    <img class="ham" :src="setData.image" alt="hamburger_list" />
                    <div class="textBox">
                        <h2>세트</h2>
                        <p>{{ setData.price }}</p>
                    </div>
                    <div class="iconBox">
                        <router-link to="/cartview">
                            <img
                                src="@/assets/img/detail_cart.png"
                                alt="detail_cart"
                                @click="addToCart(setData, countValue2)"
                            />
                        </router-link>
                        <div class="num">
                            <input class="num_btn" type="button" @click="count2('minus')" value="-" />
                            <div class="count">{{ countValue2 }}</div>
                            <input class="num_btn" type="button" @click="count2('plus')" value="+" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ham from '@/assets/ham';
import { set } from '@/assets/set.js';

export default {
    name: 'Detail',
    components: {
        Header
    },
    data() {
        return {
            product: {}, // 선택된 상품 데이터를 저장
            countValue: 0, // 상품의 초기 수량을 1로 설정
            countValue2: 0, // 세트 상품의 초기 수량을 1로 설정
            Set: set
        };
    },
    created() {
        const productId = this.$route.params.id;
        this.product = ham.find((Burger) => Burger.id === parseInt(productId));
        if (!this.product) {
            console.error('상품을 찾을 수 없습니다.');
        }

        // 세트 데이터 찾기
        this.setData = set.find((item) => item.id === parseInt(productId));
        if (!this.setData) {
            console.error('세트를 찾을 수 없습니다.');
        }
    },
    methods: {
        count(type) {
            if (type === 'plus') {
                this.countValue += 1;
            } else if (type === 'minus' && this.countValue > 1) {
                this.countValue -= 1;
            }
        },
        count2(type) {
            if (type === 'plus') {
                this.countValue2 += 1;
            } else if (type === 'minus' && this.countValue2 > 1) {
                this.countValue2 -= 1;
            }
        },
        addToCart(product, quantity) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            const existingProduct = cart.find((item) => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                cart.push({ ...product, quantity });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${product.title}이(가) 장바구니에 추가되었습니다.`);
        }
    }
};
</script>
<style scoped>
* {
    overflow-y: hidden;
}
.content-text {
    white-space: pre-line;
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

.grayBox .topimg_wrap {
    position: relative;
    width: 90%;
    margin: 0 auto;
    height: 300px;
    padding-top: 5%;
}

.grayBox .topimg_wrap .top_img {
    width: 90%;
    max-width: 300px;
    height: auto;
    min-width: 190px;
    position: absolute;
    display: block;
    transform: translate(-50%, 0);
    left: 50%;
}

.grayBox .nutrition {
    width: 70%;
    position: absolute;
    top: 290px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #d9d9d9;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 600;
    color: #636363;
    border: none;
}

.grayBox .menu_list {
    width: 70%;
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate(-50%, 0);
}

.grayBox .menu_list .product {
    position: relative;
    background-color: #d9d9d9;
    border-radius: 6px;
    margin-bottom: 15px;
    padding: 10px;
}

.grayBox .menu_list .product .ham {
    width: 87px;
    height: 87px;
}

.grayBox .menu_list .product .textBox {
    padding-top: 5%;
    height: 90%;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    left: 100px;
}

.grayBox .menu_list .product .textBox h2 {
    font-size: 15px;
    font-weight: 700;
}
.grayBox .menu_list .product .textBox p {
    font-size: 10px;
    font-weight: 400;
}

.grayBox .menu_list .product .iconBox {
    position: absolute;
    width: 23%;
    height: 80%;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
}

.grayBox .menu_list .product .iconBox img {
    cursor: pointer;
    position: absolute;
    right: 0;
}

.grayBox .menu_list .product .iconBox .num {
    cursor: pointer;
    width: 100%;
    height: 50%;
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    box-sizing: border-box;
}

.grayBox .menu_list .product .iconBox .num .num_btn {
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: none;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    padding: 0;
    background-color: #fff;
    color: #494949;
    font-weight: 900;
}

.grayBox .menu_list .product .iconBox .num .count {
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: none;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    font-weight: 700;
}

.bgbg {
    padding-top: 20px;
    width: 100%;
    min-width: 375px;
    height: 100vh;
    background-color: #494949;
}
</style>
