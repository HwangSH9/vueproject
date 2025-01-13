<template>
    <div class="bgbg">
        <Header msg="MY 로그인" />
        <div class="grayBox">
            <div class="conbox-wrap">
                <div class="conbox1">
                    <p>주문내역</p>
                    <a href="">자세히 보기</a>
                </div>
                <div class="conbox2-wrap">
                    <ul class="conbox2">
                        <li>
                            <a href="">간편주문</a>
                        </li>
                        <li>
                            <a href="">카드관리</a>
                        </li>
                        <li>
                            <a href="">배달지</a>
                        </li>
                        <li>
                            <a href="">고객문의</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
    name: 'MyPage',
    components: {
        Header
    }
};
</script>

<style>
/* 기본배경 시작 */
.grayBox {
    position: relative;
    margin: 0 auto;
    width: 100%;
    min-width: 375px;
    min-height: 648px;
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
    position: relative;
    top: 30px;
    left: 0;
    width: 100%;
}
.conbox1 {
    width: 330px;
    height: 200px;
    margin: 0 auto;
    background-color: #d9d9d9;
    border-radius: 20px;
    position: relative;
}

.conbox1 p {
    position: absolute;
    top: 15px;
    left: 19px;
    font-size: 15px;
    font-weight: 900;
}

.conbox1 a {
    display: block;
    font-size: 13px;
    text-decoration: none;
    color: #fff;
    width: 76px;
    height: 25px;
    background-color: #262626;
    border-radius: 5px;
    position: absolute;
    bottom: 17px;
    right: 17px;
    text-align: center;
    line-height: 25px;
}

.conbox2-wrap {
    height: 275px;
    margin: 0 auto;
    max-width: 340px;
    padding-top: 21px;
}

.conbox2-wrap .conbox2 {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    margin: 0;
}

.conbox2-wrap .conbox2 li {
    width: 159px;
    height: 122px;
    background-color: #d9d9d9;
    border-radius: 20px;
    font-weight: 900;
    font-size: 15px;
    position: relative;
}

.conbox2-wrap .conbox2 li a {
    text-decoration: none;
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
