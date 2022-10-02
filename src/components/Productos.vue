<template>
<div class="page_content">

  
    <div class="product-container" id="prod">
        <!-- <h2 v-for="p in producto">{{p.res.nombre}}dsda</h2> -->
        <h2>nombre: kellogs</h2>
        <img src="@/assets/cereal.jpg">
        <h2>precio: $15000</h2>

        <!-- <h2>precio: {{p.precio}}</h2> -->
        <button>Agregar</button>
    </div>



    <div class="product-container">
        <h2>Chocolate Corona</h2>
        <img src="@/assets/chocolate.jpg">
        <h2>$8.000</h2>
        <button>Agregar</button>
    </div>

</div>
</template>

<!-- <script>
    import axios from "../utils/axios"
    export default{
        name: "producto",
        data: function(){
            return{
                producto: {
                }
            }
        },
        methods:{
            processProducto:function(){
                axios.get("producto/", this.producto, {headers: {}})
                .then((res) => {
                    this.producto=res

                })
            }
        }
    }
    
</script> -->

<style>
.page_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 1px solid red;
}


.product-container{
    margin: 15px;
    padding: 2px 16px;
}


.product-container:hover{
    box-shadow: 0 8px 16px 0 #ffa333;
}


.product-container img {
    width: 300px;
}
</style>