<template>
 <div class="container">
   <h2> {{ message }} </h2>
   <hr>
   <form>
     <div class="row">
       <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
         <div class="form-group">
           <label for="name">Name</label>
           <input type="text" id="name" class="form-control" placeholder="Enter first and last name" v-model="visitor.name" required>
         </div>
         <div class="form-group">
           <label for="email">Email</label>
           <input type="email" id="email" class="form-control" placeholder="Enter email" v-model="visitor.email" required>
         </div>
         <div class="form-group">
           <label for="phone">Phone Number</label>
           <input type="text" id="phone" class="form-control" placeholder="Format: ###-###-####" v-model="visitor.phone" required>
         </div>
         <div class="form-group">
           <label for="company">Company</label>
           <input type="text" id="company" class="form-control" placeholder="The name of the company you represent" v-model="visitor.company">
         </div>
         <div class="form-group">
           <input type="checkbox" name="officialVisit" class="form-control" v-model="visitor.officialVisit">Check here if this is an official visit
         </div>
         <div class="form-group">
           <input type="checkbox" name="escortRequired" class="form-control" v-model="visitor.escortRequired">Check here if an escort is required
         </div>
         <div class="form-group" v-if="escortRequired">
           <label for="escortName">Escort Name</label>
           <input type="text" name="escortName" class="form-control" v-model="visitor.escortName" placeholder="Enter the name of your escort">
         </div>
         <button @click="signIn">Sign in</button>
       </div>
     </div>
   </form>
 </div>
</template>

<script>
 export default {
  name: 'SignIn',
  data() {
   return {
     message: 'Welcome! Please sign in.',
     visitor: {
       name: '',
       email: '',
       phone: '',
       company: '',
       officialVisit: false,
       escortRequired: false,
       escortName: '',
     }
    }
   },
   methods: {
     signIn() {
       this.message = 'Thank you! Someone will be with you soon.';
       const newVisitor = {
        name: this.visitor.name,
        email: this.visitor.email,
        phone: this.visitor.phone,
        company: this.visitor.company,
        officialVisit: this.visitor.officialVisit,
        escortRequired: this.visitor.escortRequired,
        escortName: this.visitor.escortName
       }
       this.$store.dispatch('signIn', newVisitor);
       setTimeout(this.refresh, 5000);
     },
     refresh() {
       this.message = 'Welcome! Please sign in.';
       this.visitor.name = '';
       this.visitor.email = '';
       this.visitor.phone = '';
       this.visitor.company = '';
       this.officialVisit = false;
       this.escortRequired = false;
       this.escortName = '';
     }
   }
 }
</script>

<style>
 h2 {
   text-align: center;
 }
</style>
