<template>
    <header class="header__main">
        <nav class="header__nav">
            <ul class="nav__wrapper">
                <li class="nav__item">
                    <NuxtLink to="/" class="nav__link">
                        Home
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/eshop" class="nav__link">
                        Eshop
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/about" class="nav__link">
                        About
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/account" class="nav__link">
                        Mon compte
                    </NuxtLink>
                </li>
                <li class="nav__item">
                    <NuxtLink to="/login" class="nav__link">
                        Login
                    </NuxtLink>
                </li>
            </ul>
        </nav> 
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .nav__wrapper {
        display:flex;
        align-items:center;
        justify-content:center;
        margin: 20px 0px;
    }
    .nav__wrapper li {
        margin: 0px 20px;
    }
</style>