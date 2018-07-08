<template>
  <v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">企鹅电竞日志校验</h3>
          <span class="subheading">通过web socket服务可以把一部分日志投影到网页上，方便分析。</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">好了，废话少说，开始吧。在下面的输入框中，填入你的uid：</div>
          <v-form v-model="valid">
            <v-text-field
              v-model="uid"
              label="uid"
              required
              :error-messages="errorMessage"
            >
            </v-text-field>
          </v-form>
          <v-btn
            class="mx-0"
            color="primary"
            large
            @click="jump2Detail"
          >
            查询一发
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
import { VJumbotron, VDivider, VForm, VTextField } from "vuetify";
export default {
  name: "about",
  data() {
    return {
      valid: false,
      uid: null,
      errorMessage: null
    };
  },
  components: {
    VJumbotron,
    VDivider,
    VForm,
    VTextField
  },
  watch: {
    uid(val) { 
      if(val){
        this.valid = false
        this.errorMessage = null
      }
    }
  },
  methods: {
    jump2Detail() {
      if (this.uid) {
        //TODO jump2 detail
      } else {
        this.valid = true;
        this.errorMessage = "uid不得为空";
      }
    }
  }
};
</script>
