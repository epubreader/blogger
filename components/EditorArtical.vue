<template>
  <div class="editor-artical-root">
    <p class="title">{{ $t('editor.editArtical') }}</p>
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="80px">
      <el-form-item :label="$t('editor.title')" prop="title" style="width: 600px;" >
        <el-input type="text" v-model="form.title" autocomplete="off" max="30"></el-input>
      </el-form-item>
      <el-form-item :label="$t('editor.illustration')" style="width: 600px;">
        <upload-file></upload-file>
      </el-form-item>
      <quill-editor></quill-editor>
      <el-form-item size="large">
        <el-button size="large"  type="primary" @click="onPublic('form')">{{ $t('common.public') }}</el-button>
        <el-button size="large" type="primary" @click="onSave('form')">{{ $t('common.save') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import UploadFile from '~/components/UploadFile.vue'
import QuillEditor from '~/components/QuillEditor.vue'

export default {
  components: {
    UploadFile,
    QuillEditor
  },
  data() {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('editor.titleTip')));
      } else {
        callback();
      }
    };
    return {
      form: {
        title: ''
      },
      rules: {
        title: [
          { validator: validateName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onPublic(formName) {
      console.log('formName', formName);
      this.$refs[formName].validate((valid) => {
        console.log('valid',valid);
        if (valid) {
          // let loading = this.$utils.loading(this)
          // this.$utils.doLogin(this, this.form, () => {
          //   loading.close()
          // })
        }
      });
    },
    onSave(formName) {
      this.$refs[formName].validate((valid) => {
        console.log('valid',valid);
        if (valid) {
          // let loading = this.$utils.loading(this)
          // this.$utils.doLogin(this, this.form, () => {
          //   loading.close()
          // })
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/common';

.editor-artical-root {
  width: 900px;
}
.title {
  font-size: $--extra-large;
  color: $--color-base-black-2;
  padding-bottom: $--px12;
  border-bottom: 1px solid $--color-main-light-8;
  margin-block-start: $--px30;
  margin-block-end: $--px30;
}
</style>
