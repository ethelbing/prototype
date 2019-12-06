<template>
  <div class="about">
    <p><label>用户名：</label>
    <input  :type="text"  v-model="username"  placeholder="input your name" />
    <br>
    <label>密  码: </label>
    <input :type="password" v-model="password" placeholder="input your password" />
    <img :src="this.registration_data.src" @click="changeType()"/>
    </p>
    <kendo-barcode :value="'Mascarpone'"
                   :type="'code128'"
                   :width="280"
                   :height="100">
    </kendo-barcode>
    <h4>QRCode</h4>
    <kendo-qrcode :value="'geo:42.65049,23.37925,100'"
                  :error-collection="'H'"
                  :size="120"
                  :color="'#166a83'">
    </kendo-qrcode>

  </div>
  
</template>

<script>

export default {
  name:'about',
  data() {
        return {
            username:'',
            password: '',
            registration_data:{
                pwdType:"password",
                src:require("../img/close_eyes.png")
               }
        }
    },
    methods: {
        changeType() {
            this.registration_data.pwdType = this.registration_data.pwdType === 'password' ? 'text' : 'password';
            this.registration_data.src = this.registration_data.src == require("../img/close_eyes.png") ? require("../img/open_eyes.png") : require("../img/close_eyes.png");
        }
    }
}
</script>