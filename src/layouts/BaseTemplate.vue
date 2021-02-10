<template>
  <v-app id="inspire">
    <v-container>
      <v-row class="justify-center align-center">
        <v-col cols="12" sm="4">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
};
</script>