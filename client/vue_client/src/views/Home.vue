<template>
  <div class="home">
    <h1>FreeCycle Client</h1>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-toolbar>
              <v-toolbar-title>Enter new item</v-toolbar-title>
              <div></div>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field label="User ID" name="user_id" type="text">g</v-text-field>
                <v-text-field label="Keywords" name="keywords" type="text"></v-text-field>
                <v-text-field label="Description" name="desc" type="text"></v-text-field>
                <v-text-field label="Image" name="imglink" type="text"></v-text-field>
                <v-text-field label="Latitude" name="lat" type="int"></v-text-field>
                <v-text-field label="Longitude" name="lon" type="int"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div></div>
              <v-btn>Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
}
</script>
