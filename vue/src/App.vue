<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon @click="jump2(item.route)" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title  @click="jump2(item.route)" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title @click="jump2('/')" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  
    <v-footer :fixed="fixed" app>
       <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        lighten-2
        py-3
        text-xs-center
        xs12
      >
        &copy;{{(new Date()).getFullYear()}} — <strong>Power by homker</strong>
      </v-flex>
    </v-layout>
    </v-footer>
  </v-app>
</template>

<style>
.center {
  margin: auto;
}
</style>


<script>
export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "关于",
          route: "about"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "企鹅电竞日志校验"
    };
  },
  methods: {
    jump2(router) {
      this.$router.push(router);
    }
  }
};
</script>
