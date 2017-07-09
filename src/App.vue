<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-4 col-xs-offset-4">
          <h3>Form</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-4 col-xs-offset-4" v-if="!isSubmitted">
          <form >
            <div class="form-group">
              <label>Mail</label>
              <input type="email" class="form-control" v-model="user.email">
            </div>

            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="user.password">
            </div>

            <div class="form-group">
              <label>Age</label>
              <input type="text" class="form-control" v-model.number="user.age">
            </div>

            <div class="form-group">
              <label>Message</label>
              <textarea  rows="3" class="form-control" v-model="message"></textarea>
            </div>

            <div class="form-group">
              <label>
                <input type="checkbox" value="send1" v-model="sendMails"> Send me mail
              </label>
              <br>
              <label>
                <input type="checkbox" value="sendInfoMail" v-model="sendMails"> Send me info mail
              </label>
            </div>

            <div class="form-group">
              <label>
                <input type="radio" value="Male" v-model="gender"> Male
              </label>&nbsp;&nbsp;&nbsp;
              <label>
                <input type="radio" value="Female" v-model="gender"> Female
              </label>
            </div>

            <div class="form-group">
              <label>Priority</label>
              <select class="form-control" v-model="priority">
                <option v-for="item in priorities">{{item}}</option>
              </select>
            </div>

            <app-switch v-model="switched"></app-switch>

            <div class="text-center">
              <button @click.prevent="isSubmitted = true" class="btn btn-primary">Send</button>
            </div>
          </form>
        </div>

        <div class="col-xs-4 col-xs-offset-4" v-if="isSubmitted">
          <div class="panel panel-default">
           <div class="panel-heading">Your data</div>
           <div class="panel-body">
             <p>Mail: {{ user.email }}</p>
             <p>Age: {{ user.age }}</p>
             <p>Password: {{ user.password }}</p>
             <pre>Message: {{ message }}</pre>
             <p>Mail: <span v-if="!sendMails.length">-</span></p>
             <ul v-if="sendMails.length">
               <li v-for="item in sendMails">{{item}}</li>
             </ul>
             <p>Gender: {{ gender }}</p>
             <p>Priority: {{ priority }}</p>
             <p>Switched: {{ switched }}</p>
           </div>
         </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './components/Switch.vue'

export default {
  data: function() {
    return {
      user: {
        email: '',
        age: 32,
        password: ''
      },
      message: '',
      sendMails: ['send1'],
      gender: 'Male',
      priorities: ['High', 'Medium', 'Low'],
      priority: 'Low',
      switched: true,
      isSubmitted : false
    }
  },
  components: {
    appSwitch: Switch
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
