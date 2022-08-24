<template>
  <div class="col-span-12 px-3.5 md:pl-0">
    <div v-if="getApplications.data.length" class="pt-2 mb-16">
      <LazyApplicationsListCard
        v-for="application in getApplications.data"
        :id="application.id"
        :key="application.id"
        :created-at="application.createdAt"
        :status="application.status"
        :enrollment-borrowers="application.enrollmentBorrowers"
        :property-value="application.creditAmount"
        :object-price="application.objectPrice"
        :payment-down="application.firstPayment"
        :term="application.creditTerm / 12"
        :s="application.s"
        :address="application.address"
        class="border-b"
      />
    </div>
    <div v-else class="leading-normal text-2sm text-black text-opacity-45 my-2">
      Здесь будут отображены ваши заявки после их модерации.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('applications', ['getApplications', 'statusMap'])
  }
}
</script>

<style>

</style>
