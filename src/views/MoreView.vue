<template>
    <div class="bgbg">
        <Header msg="더보기" />
        <div class="morebg">
            <div class="customer-center">
                <div class="customer-content">
                    <img src="@/assets/img/customer-service.png" alt="고객센터 이미지" class="customer-img" />
                    <div class="customer-info">
                        <h2>고객센터</h2>
                        <button type="button" class="btn">
                            <img src="@/assets/img/coun_button.png" alt="고객센터 이미지" class="counr-img" />
                        </button>
                        <p class="time-info">주말·공휴일 휴무<br /><span>09:00~17:00</span></p>
                    </div>
                </div>
            </div>
            <div class="container text-center scroll-container">
                <div class="row_list">
                    <div class="d-flex flex-column align-items-start">
                        <div class="btn-group">
                            <button
                                class="btn btn-secondary no-radius"
                                type="button"
                                data-bs-auto-close="inside"
                                aria-expanded="false"
                            >
                                <span>공지사항</span>
                            </button>
                        </div>
                        <div class="btn-group">
                            <button
                                class="btn btn-secondary no-radius"
                                type="button"
                                data-bs-auto-close="inside"
                                aria-expanded="false"
                            >
                                <span>고객문의</span>
                            </button>
                        </div>
                        <div class="btn-group">
                            <button
                                class="btn btn-secondary no-radius"
                                type="button"
                                data-bs-auto-close="inside"
                                aria-expanded="false"
                            >
                                <span>환경설정</span>
                            </button>
                        </div>
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <div class="accordion-header no-radius">
                                    <button
                                        class="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne"
                                    >
                                        <span>사업자 정보</span>
                                    </button>
                                </div>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                    <ul class="accordion-body">
                                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header no-radius">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                        <span>가맹사업 안내</span>
                                    </button>
                                </div>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                    <ul class="accordion-body">
                                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <div class="accordion-header no-radius">
                                    <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree"
                                    >
                                        <span>약관 및 정책</span>
                                    </button>
                                </div>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                    <ul class="accordion-body">
                                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';

export default {
    name: 'MoreView',
    components: {
        Header
    },

    mounted() {
        // Bootstrap 확인
        if (typeof bootstrap === 'undefined') {
            console.error('Bootstrap is not loaded. Make sure Bootstrap JS is included.');
        }
    }
};
</script>

<style scoped>
/* * {
    font-family: 'Pretendard';
} */
.morebg {
    position: relative;
    margin: 0 auto;
    display: block;
    width: 100%;
    min-width: 375px;
    min-height: 687px;
    height: 100vh;
    border-radius: 40px 40px 0 0;
    padding-top: 40px;
    background-color: #f6f6f6;
}

.customer-center {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 50px;
}

.customer-content {
    position: relative; /* 자식 요소가 겹칠 수 있도록 설정 */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px; /* 기본 여백 설정 */
}

.customer-img {
    position: relative; /* 기준이 되는 이미지 */
    height: auto;
    margin: 0 auto;
    display: block;
    z-index: 1; /* 이미지 아래 표시 */
}

.row_list {
    flex-direction: column;
}

.customer-info {
    position: relative;
    text-align: center;
    margin-top: -140px;
    transform: translateX(-15px);
}

.customer-info h2 {
    position: absolute;
    margin-top: -30px;
    margin-left: -160px;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    z-index: 102;
}

.customer-info .btn {
    transform: translate(-50px, -30px);
}

.consult-btn {
    background-color: #e5e5e5;
    border: none;
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
    margin: 5px 0;
}

.time-info {
    font-size: 15px;
    color: #6b6b6b;
    margin-top: 5px;
    font-weight: 800;
}

.time-info span {
    font-size: 20px;
    font-weight: 800;
    color: #000;
}

.no-radius {
    border-radius: 0 !important;
    background-color: #d9d9d9 !important;
    border-style: none;
}

.scroll-container {
    max-height: 58vh;
    overflow-y: auto;
    padding: 10px;
}

.menu-item {
    padding: 15px 20px;
    font-size: 16px;
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;
}

.menu-item:hover {
    background: #f0f0f0;
}

.btn-group {
    width: 100%;
    height: 65px;
    text-align: left;
}

.btn-group .btn span {
    text-align: left;
    display: inline-block;
    width: 100%;
    padding: 0 20px;
    color: #000;
    font-weight: 700;
    font-size: 17px;
}

.container.text-center.scroll-container {
    width: 100%;
    z-index: 100;
    position: absolute;
    top: 246px;
    left: 0;
    padding: 0;
}

.scroll-container .row_list {
    flex-direction: column;
    z-index: 101;
    width: 100% !important;
}

.col-6 {
    font-weight: 600;
}

.bgbg {
    overflow-y: hidden;
    padding-top: 20px;
    width: 100%;
    min-width: 375px;
    height: 100vh;
    background-color: #494949;
}
/* 아코디언 */
.accordion {
    width: 100%;
}

.accordion-item {
    border: none;
}

.accordion-button {
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    background: #d9d9d9;
    padding: 0 33px;
}

.accordion-button span {
    font-size: 17px;
    font-weight: 700;
    color: #000;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 0 33px;
}

li a {
    font-size: 17px;
    font-weight: 700;
    color: #000;
    text-align: left;
}

.no-radius {
    border-radius: 0;
}
</style>
