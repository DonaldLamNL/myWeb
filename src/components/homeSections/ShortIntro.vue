<template>
    <div id="short-intro">
        <img class="logo" src="../../assets/logo_white.png">
        <div class="container">
            <div class="avatar"></div>
            <div class="content">
                <h1>Hello! I'm Donald.</h1>
                <ul>
                    <div v-for="(i, index) in info" :key="index">
                        <li>{{i.title}}:</li>
                        <li>{{i.content}}</li>
                    </div>
                </ul>
                <div class="account">
                    <a class="account-item" v-for="(a, index) in account" :key="index" :href="a.link">
                        <i :class="a.icon"></i>{{a.title}}
                    </a>
                </div>
                <div class="social-media">
                    <a v-for="(m, index) in media" :key="index" :href="m.link">
                        <i :class="m.icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShortIntro',
    data() {
        return {
            info: [
                {title: 'Phone', content: '(+852) 9638 0916'},
                {title: 'Date of Birth', content: '06/08/2002'},
                {title: 'Address', content: 'Lam Tin, Kowloon'},
            ],
            account: [
                {title: 'E-Mail', icon: 'fas fa-envelope', link: 'mailto: manholam8@gmail.com'},
                {title: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/DonaldLam-WN'},
                {title: 'Music', icon: 'fas fa-music', link: 'https://www.youtube.com/channel/UCSOkJ-npj4-rdeP0B-hBNTQ/playlists'},
                {title: 'Steam', icon: 'fab fa-steam', link: 'https://steamcommunity.com/profiles/76561198892583119'},
            ],
            media: [
                {title: 'Facebook', icon: 'fab fa-instagram', link: 'https://www.instagram.com/lmh_donald/'},
                {title: 'Instagram', icon: 'fab fa-facebook-square', link: 'https://www.facebook.com/profile.php?id=100007801004157'},
                {title: 'WhatSapp', icon: 'fab fa-whatsapp', link: 'https://wa.me/96380916'},
                {title: 'Discord', icon: 'fab fa-discord', link: 'https://discordapp.com/users/775959529863118888'},
                {title: 'Line', icon: 'fab fa-line', link: 'https://line.me/ti/p/OXtDRbxcBi'},
            ],
        }
    },
}
</script>

<style scoped>
#short-intro{
    width: 800px;
    height: 500px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
}
.logo{
    display: block;
    height: 40px;
    margin: 30px auto;
}
.container{
    height: 400px;
    width: 100%;
    background-color: rgba(233, 233, 233, 0.8);
    position: relative;
}
.avatar{
    display: inline-block;
    height: 400px;
    width: 320px;
    background-color: rgba(255, 192, 203, 0.8);
    background-image: url(../../assets/profile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
.content{
    display: inline-block;
    height: 400px;
    width: 480px;
    vertical-align: top;
    position: relative;
}
/* Title */
.content h1{
    font-size: 40px;
    line-height: 80px;
    font-family: "Brush Script MT", "Brush Script Std", "cursive";
    margin-left: 40px;
}
/* Personal Information */
.content ul{
    padding-left: 40px;
}
.content ul li:nth-child(odd){
    font-size: 15px;
    font-family: "Georgia", "serif";
    font-weight: bold;
}
.content ul li:nth-child(even){
    font-size: 15px;
    margin: 10px 0 15px 10px;
    color: #eb472d;
}
/* Accounts */
.account{
    height: 65px;
    padding: 20px 90px;
    text-align: center;
}
.account-item{
    display: inline-block;
    height: 25px;
    width: 110px;
    border-radius: 5px;
    line-height: 25px;
    padding: 0 5px;
    margin-bottom: 10px;
    color: #555555;
    text-decoration: none;
}
.account-item:nth-child(odd){
    margin-right: 50px;
}
.account-item i{
    margin-right: 20px;
}
.account-item:hover{
    background-color: #eee;
    color: #262a30;
}
/* Social Media */
.social-media{
    height: 50px;
    width: 480px;
    background-color: rgba(255, 76, 76, 0.8);
    text-align: center;
}
.social-media i{
    display: inline-block;
    height: 50px;
    width: 30px;
    line-height: 50px;
    font-size: 25px;
    text-align: center;
    color: rgb(224, 224, 224);
    margin: 0 10px;
    top: 0;
    position: relative;
}
.social-media i:hover{
    color: #fff;
}
</style>