<template>
  <div class="pt-2 mb-16">
    <ApplicationsCard
      v-for="application in applications.data"
      :id="application.id"
      :key="application.id"
      :created-at="application.createdAt"
      :status-map="application.statusMap"
      :status="application.status"
      :enrollment-borrowers="application.enrollmentBorrowers"
      :property-value="application.creditAmount"
      :object-price="application.objectPrice"
      :payment-down="application.firstPayment"
      :term="application.creditTerm / 12"
      class="border-b"
    />
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>
