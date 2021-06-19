<template>
    <div id="navbar">
        <img src="../../assets/images/icon.png" alt="">
        <input type="text" placeholder="搜索">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#navbar {
    height: 8vh;
    display: flex;
    align-items: center;
    background-color: rgb(35,35,35);
    padding: 0 40px;
    justify-content: space-around;
}

input {
    width: 180px;
    border-radius: 5px;
    padding: 5px;
    outline: none;
    border: none;
    background-color: rgb(44,44,44);
}
</style>