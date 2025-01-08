<template>
    <div class="splash-container" :class="{ 'fade-out': fadeOut }">
        <div class="splash-content">
            <h1><img :src="require('@/assets/img/splash.png')" alt="logo" /></h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Splash',
    props: {
        fadeOut: {
            // Boolean은 참과 거짓이라는 뜻
            type: Boolean,
            default: false
        }
    }
};
</script>
<style scoped>
.splash-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2e2e2e;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999999999999999999;
    opacity: 1;
    transition: opacity 1s ease-in-out;
}

.splash-container.fadeOut {
    opacity: 0;
}

.splash-content {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

h1 img {
    width: 101px;
    height: auto;
}
</style>
