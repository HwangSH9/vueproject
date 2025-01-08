<template>
    <div class="bgbg">
        <Header msg="주문하기" />
        <div class="grayBox">
            <div class="conbox-wrap">
                <div class="Dbox">
                    <p>배송지 정보</p>
                    <ul class="userinfo">
                        <li>홍길동</li>
                        <li>010-1234-4567</li>
                    </ul>
                    <ul class="userad">
                        <li>서울특별시 구로구 구로제5동 3-25 6층 그린신도림컴퓨터아트학원</li>
                    </ul>
                    <div class="btn-wrap">
                        <button type="button" class="btn1">학원</button>
                        <button type="button" class="btn2">수정</button>
                    </div>
                </div>

                <div class="Pbox">
                    <p>간편결제</p>
                    <form>
                        <label for="Checkbox01" class="pbox01">
                            <p><span>pay</span>머니</p>
                            <ul>
                                <li>0원</li>
                                <li>부족금액 자동충전</li>
                            </ul>
                            <input type="radio" id="Checkbox01" name="checkboxG" value="option" />
                        </label>

                        <label for="Checkbox02" class="pbox02">
                            <p><span>IBK</span>기업은행</p>
                            <ul>
                                <li>IBK비씨카드</li>
                                <li>1234-00**</li>
                            </ul>
                            <input type="radio" id="Checkbox02" name="checkboxG" value="option" />
                            <label for="op"></label>
                            <select name="op" id="op">
                                <option value="all">일시불</option>
                                <option value="2">2개월</option>
                                <option value="3">3개월</option>
                                <option value="4">4개월</option>
                                <option value="5">5개월</option>
                            </select>
                        </label>
                    </form>
                </div>
            </div>
            <div class="payment">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                결제수단: {{ selectedPayment || '선택해주세요' }}
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <ul class="accordion-body">
                                <li @click="selectPayment('카카오페이')"><a href="#">카카오페이</a></li>
                                <li @click="selectPayment('네이버페이')"><a href="#">네이버페이</a></li>
                                <li @click="selectPayment('토스페이')"><a href="#">토스페이</a></li>
                                <li @click="selectPayment('직접결제')"><a href="#">직접결제</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <router-link to="/paymentcompleted">
                <div class="pay">
                    <button type="button" method="post" class="paybtn">결제하기</button>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
    name: 'MyPage',
    components: {
        Header
    },
    data() {
        return {
            selectedPayment: null
        };
    },
    methods: {
        // 결제수단을 선택하는 메소드
        selectPayment(paymentMethod) {
            this.selectedPayment = paymentMethod; // 선택된 결제수단 업데이트
        }
    }
};
</script>

<style scoped>
* {
    /*     overflow-y: hidden;
    overflow-x: hidden; */
}
/* 기본배경 시작 */
.grayBox {
    position: relative;
    margin: 0 auto;
    width: 100%;
    min-width: 375px;
    min-height: 648px;
    height: 100vh;
    border-radius: 40px 40px 0 0;
    background-color: #f6f6f6;
}

.bgbg {
    padding-top: 20px;
    width: 100%;
    min-width: 375px;
    height: 100vh;
    background-color: #494949;
}

/* 기본배경 끝 */

.conbox-wrap {
    padding-top: 26px;
}

.conbox-wrap .Dbox {
    width: 330px;
    height: 200px;
    background: #d9d9d9;
    margin: 0 auto;
    font-size: 13px;
    border-radius: 10px;
    padding-left: 19px;
    padding-right: 17px;
    padding-top: 15px;
}

.conbox-wrap .Dbox p {
    font-weight: 900;
    font-size: 15px;
}

.conbox-wrap .Dbox .userinfo li:nth-child(1) {
    font-size: 15px;
    font-weight: 700;
}
.conbox-wrap .Dbox .userinfo li:nth-child(2) {
    font-weight: 600;
}

.conbox-wrap .Dbox ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.conbox-wrap .Dbox .userad li {
    width: 175px;
    height: 42px;
    padding-top: 7px;
    font-size: 11px;
}

.conbox-wrap .Dbox .btn-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.conbox-wrap .Dbox button {
    margin-top: 11px;
    border: none;
}

.conbox-wrap .Dbox .btn1 {
    border-radius: 10px;
    width: 47px;
    height: 25px;
    font-size: 11px;
    font-weight: 900;
}

.conbox-wrap .Dbox .btn2 {
    border-radius: 5px;
    width: 76px;
    height: 25px;
    background: #000;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
}

.conbox-wrap .Pbox {
    width: 330px;
    height: 188px;
    margin: 0 auto;
    padding-top: 25px;
}

.conbox-wrap .Pbox span {
    font-weight: 900;
}

.conbox-wrap .Pbox > p {
    padding-left: 19px;
    font-weight: 900;
    font-size: 15px;
}

.conbox-wrap .Pbox form {
    width: 330px;
    height: 157px;
}

.conbox-wrap .Pbox .pbox01,
.conbox-wrap .Pbox .pbox02 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    line-height: 15px;
}

.conbox-wrap .Pbox .pbox01 {
    background: #bfbfbf;
    border-radius: 12px;
    width: 330px;
    height: 50px;
    position: relative;
}

.conbox-wrap .Pbox .pbox01 p {
    position: absolute;
    top: 16px;
    left: 19px;
}

.conbox-wrap .Pbox .pbox01 ul {
    position: absolute;
    top: 8px;
    right: 42px;
}

.conbox-wrap .Pbox .pbox01 ul li {
    line-height: 16px;
}

.conbox-wrap .Pbox .pbox01 #Checkbox01 {
    position: absolute;
    top: 16px;
    right: 15px;
}

.conbox-wrap .Pbox .pbox02 {
    background: #7c7c7c;
    border-radius: 12px;
    width: 330px;
    height: 96px;
    position: relative;
    top: 11px;
}

.conbox-wrap .Pbox .pbox02 #op {
    position: absolute;
    top: 56px;
    width: 314px;
    height: 32px;
}

.conbox-wrap .Pbox .pbox02 p {
    position: absolute;
    top: 9px;
    left: 19px;
}

.conbox-wrap .Pbox .pbox02 #Checkbox02 {
    position: absolute;
    top: 9px;
    right: 15px;
}

.conbox-wrap .Pbox .pbox02 ul li:nth-child(1) {
    font-size: 15px;
    position: absolute;
    top: 9px;
    right: 42px;
}
.conbox-wrap .Pbox .pbox02 ul li:nth-child(2) {
    font-size: 13px;
    position: absolute;
    top: 29px;
    right: 42px;
}

.conbox-wrap .Pbox .pbox01 ul,
.conbox-wrap .Pbox .pbox02 ul {
    text-align: right;
    list-style: none;
}

.payment {
    padding-top: 57px;
    width: 330px;
    margin: 0 auto;
}

.accordion-body {
    list-style: none;
    text-decoration: underline solid 1px #000;
    line-height: 30px;
}
.pay {
    width: 334px;
    margin: 0 auto;
    padding-top: 44px;
}
.pay .paybtn {
    width: 334px;
    height: 47px;
    border: none;
    background: #d9d9d9;
    border-radius: 15px;
    font-size: 20px;
    font-weight: 900;
}
</style>
