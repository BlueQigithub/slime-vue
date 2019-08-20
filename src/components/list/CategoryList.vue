<template>
    <div>
        <div class="list-index">
            <div class="listContent">
                <img src="../../assets/images/list.png" alt="">
                <p>课程推荐</p>
            </div>
            <div class="listContent">
                <img src="../../assets/images/list.png" alt="">
                <p>课程推荐</p>
            </div>
            <div class="listContent">
                <img src="../../assets/images/list.png" alt="">
                <p>课程推荐</p>
            </div>
            <div class="listContent">
                <img src="../../assets/images/list.png" alt="">
                <p>课程推荐</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style lang="less" scoped>
.list-index{
    margin: 25px 0;
    background: #ffffff;
    display: flex;
    justify-content:space-between;
    padding: 40px 0;
    .listContent{
        width: 25%;
        text-align: center;
        padding: 0 10px;
        img{
            width: 160px;
            height: 160px;
            border-radius: 50px;
        }
        p{
            font-size: 30px;
            margin-top:20px;
        }
    }
}
</style>