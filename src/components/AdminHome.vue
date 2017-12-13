<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Company</th>
      <th>Official Visit</th>
      <th>Escort Required</th>
      <th>Escort Name</th>
    </tr>
    <tr v-for="visitor in visitors">
      <td>{{ visitor.name }}</td>
      <td>{{ visitor.email }}</td>
      <td>{{ visitor.phone }}</td>
      <td>{{ visitor.company }}</td>
      <td>{{ visitor.officialVisit }}</td>
      <td>{{ visitor.escortRequired }}</td>
      <td>{{ visitor.escortName }}</td>
    </tr>
  </table>
</template>
