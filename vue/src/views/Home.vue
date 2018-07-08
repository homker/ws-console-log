<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-flex xs12 class="width">
           <p class="text-xs-left">1231546</p> 
         </v-flex>
        <v-flex xs12  class="width">
         <v-expansion-panel focusable>
          <v-expansion-panel-content
            v-for="(item,i) in 5"
            :key="i"
          >
            <div slot="header">Item</div>
            <v-divider></v-divider>
            <v-card>
              <v-card-text class="grey lighten-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel> 
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<style scoped>
.width {
  width: 100%;
}
</style>

<script>
import {
  VExpansionPanel,
  VExpansionPanelContent
} from "vuetify/es5/components/VExpansionPanel";
import { VCard, VCardText } from "vuetify/es5/components/VCard";
import { VDivider } from "vuetify";

export default {
  name: "home",
  components: {
    VExpansionPanel,
    VCard,
    VExpansionPanelContent,
    VCardText,
    VDivider
  },
  data() {
    return {};
  }
};
</script>
