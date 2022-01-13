<template>
  <div>
    <v-toolbar dark>
        <v-toolbar-title
          @click="redirectNewItem">New Item
        </v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn text>New Item</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    redirectNewItem () {
      this.$router.push('/')
    }
  }
}
</script>