<template>
  <b-container fluid>
    <div class="form-wrapper">
      <b-form @submit.prevent="updateRepository">
        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Name of the repository:"
                      for="name">
          <b-col :md="5">
            <b-input id="name"
                     v-model="formData.name"
                     maxlength="60"
                     required />
          </b-col>
        </b-form-group>

        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Full name of the repository:"
                      for="fullName">
          <b-col :md="5">
            <b-input id="fullName"
                     v-model="formData.fullName"
                     maxlength="255"
                     required />
          </b-col>
        </b-form-group>

        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Html url:"
                      for="htmlUrl">
          <b-col :md="5">
            <b-input id="htmlUrl"
                     v-model="formData.htmlUrl"
                     maxlength="100"
                     required />
          </b-col>
        </b-form-group>
        <br><br>

        <b-col :md="5"
               offset="4">
          <b-button type="submit"
                    variant="info">Save</b-button>
          <b-button :to="{ name: 'RepositoryDetails' }"
                    variant="danger">Cancel</b-button>
        </b-col>
      </b-form>
    </div>
    <b-modal ref="alertModal"
             :title="alertModalTitle"
             :ok-only="true"
             @ok="onAlertModalOkClick">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </b-container>
</template>
<script>
import ReposService from '@/api-services/repos.service'

export default {
  name: 'RepositoryDetails',
  data () {
    return {
      formData: {
        name: '',
        fullName: '',
        htmlUrl: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessfully: false
    }
  },
  created () {
    ReposService.getRepository().then((response) => {
      this.formData.name = response.data.repositoryName
      this.formData.fullName = response.data.repositoryFullName
      this.formData.htmlUrl = response.data.repositoryHtmlUrl
    })
  },
  methods: {
    updateRepository () {
      ReposService.update(this.formData).then(() => {
        this.isSuccessfully = true
        this.alertModalTitle = 'Successfully'
        this.alertModalContent = 'Successfully updated Account Owner'
        this.$refs.alertModal.show()
      }).catch((error) => {
        this.isSuccessfully = false
        this.alertModalTitle = 'Error'
        this.alertModalContent = error.response.data
        this.$refs.alertModal.show()
      })
    },
    onAlertModalOkClick () {
      if (this.isSuccessfully) {
        this.$router.push({ name: 'RepositoryDetails' })
      }
    }
  }
}
</script>
<style>
  .form-wrapper {
    margin-top: 20px;
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  }
</style>
