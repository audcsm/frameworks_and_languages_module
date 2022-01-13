<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" >
      <v-col cols="12" sm="8" md="4" >
        <v-card class="elevation-12">
          <v-toolbar dark flat >
            <v-toolbar-title>Login form</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-tooltip bottom>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="User ID" name="user_id" type="text" ></v-text-field>
              <v-text-field label="Keyword" name="keywords" type="text" ></v-text-field>
              <v-text-field label="Description" name="desc" type="text" ></v-text-field>
              <v-text-field label="Image URL" name="imgurl" type="text" ></v-text-field>
              <v-text-field label="Latitude" name="lat" type="number" ></v-text-field>
              <v-text-field label="Longitude" name="lon" type="number" ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
}
</script>
