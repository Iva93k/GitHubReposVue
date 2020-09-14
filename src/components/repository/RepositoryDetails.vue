<template>
  <b-container fluid>
    <div class="form-wrapper">
      <b-form @submit.prevent="updateRepository">
        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Name of the repository:"
                      for="Name">
          <b-col :md="5">
            <b-input id="Name"
                     v-model="formData.Name"
                     maxlength="60"
                     required />
          </b-col>
        </b-form-group>

        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Full name of the repository:"
                      for="Full_Name">
          <b-col cols="8">
            <b-input id="Full_Name"
                     v-model="formData.Full_Name"
                     maxlength="255"
                     required />
          </b-col>
        </b-form-group>

        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Html url:"
                      for="Html_Url">
          <b-col cols="8">
            <b-input id="Html_Url"
                     v-model="formData.Html_Url"
                     maxlength="100"
                     required />
          </b-col>
        </b-form-group>
        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Language:"
                      for="Language">
          <b-col cols="8">
            <b-input id="Language"
                     v-model="formData.Language"
                     maxlength="100"
                     required />
          </b-col>
        </b-form-group>
        <b-form-group :label-cols="2"
                      breakpoint="md"
                      horizontal
                      label="Description:"
                      for="Description">
          <b-col cols="8">
            <b-form-textarea id="Description"
                             v-model="formData.Description">
            </b-form-textarea>
          </b-col>
        </b-form-group>
        <br><br>
        <b-col :md="5"
               offset="4">
          <b-button type="submit"
                    variant="info">Save</b-button>
          <b-button :to="{ name: 'Home' }"
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
        Name: '',
        FullName: '',
        HtmlUrl: '',
        Language: '',
        Description: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessfully: false
    }
  },
  created () {
    ReposService.getRepository().then((response) => {
      this.formData.Name = response.data.repositoryName
      this.formData.Full_Name = response.data.repositoryFullName
      this.formData.Html_Url = response.data.repositoryHtmlUrl
      this.formData.Language = response.data.repositoryLanguage
      this.formData.Description = response.data.repositoryDescription
    })
  },
  methods: {
    updateRepository () {
      ReposService.update(this.formData).then(() => {
        this.isSuccessfully = true
        this.alertModalTitle = 'Successfully'
        this.alertModalContent = 'Successfully updated repository details. JSON successfully downloaded.'
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
        this.$router.push({ name: 'Home' })
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
