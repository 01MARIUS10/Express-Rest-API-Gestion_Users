var FONCTIONS  = [
    'Administrateur',
    'Communication',
    'President',
    'Coordonnateur',
    'Logistique',
    'Archive',
    'Sport',
    'Secretaire'
]

const USERS=[
{
    id:1,
    name:"Dadilove",
    email:"dadilove@gmail.com",
    picture:"https://i0.wp.com/www.midi-madagasikara.mg/wp-content/uploads/2021/09/dadilove.jpg?ssl=1",
    password:"12345678",
    function:"Communication",
    createDate: new Date()
},
{
    id:2,
    name:"Mathman",
    email:"mathman@gmail.com",
    picture:"https://toomkygames.com/wp-content/uploads/default/games/small/Math-Man-320x240.jpg",
    password:"123456789",
    function:"President",
    createDate: new Date()
},
{
    id:3,
    name:"Vorona",
    email:"vorona@gmail.com",
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSdvlObyhfYVCrYDuXD3KsyDhQsKyZkGQtg&usqp=CAU",
    password:"0123456789",
    function:"Coordonnateur",
    createDate: new Date()
},
{
    id:4,
    name:"Miora",
    email:"miora@gmail.com",
    picture:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUV5zNFPehlmTJJgTy2k/Kq+dSUfcyNN9hI+9SnJgX/wCBTn2+VMz/Hb93a3T/AHSrr/EfKu0CP//Z",
    password:"1234567890",
    function:"Secretaire",
    createDate: new Date()
},
{
    id:5,
    name:"Jao",
    email:"jao@gmail.com",
    picture:"data:image/jpeg;base64,/9j/4AAAD/+hv8Ay6/oxRS6KGJtL/Jb9S/OY1OKKd/wvyM5Ou8yM1/81++dDzRp/KjcbT2Sqr+xiiD//2Q==",
    password:"123456789",
    function:"Logistique",
    createDate: new Date()
},
{
    id:6,
    name:"Jangory",
    email:"jangory@gmail.com",
    picture:"https://fr.unbilgi.com/wp-content/uploads/2020/06/5bb.jpg",
    password:"123456789",
    function:"Administrateur",
    createDate: new Date()
},
{
    id:7,
    name:"One piece",
    email:"piece@gmail.com",
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoI0Imv8rgBeAKzosN1dCF2yxcdt19FIdkuA&usqp=CAU",
    password:"123456789",
    function:"Administrateur",
    createDate: new Date()
},
{
    id:8,
    name:"FQ",
    email:"tendry@gmail.com",
    picture:"https://t3.ftcdn.net/jpg/03/97/28/62/360_F_397286229_P9TfCN3cA24iWKmmJbawaAzkgQynFE8V.jpg",
    password:"123456789",
    function:"Administrateur",
    createDate: new Date()
}
]

module.exports = { FONCTIONS , USERS}