<template>
  <el-dialog :visible.sync="visiable" width="600px" center class="sample-dialog" :show-close="false">
    <div slot="title" class="sample-dialog-title">
      <span>特征样本提交</span>
      <i class="el-icon-close close-btn" @click="close"></i>
    </div>
    <div class="sample-dialog-body">
      <el-form ref="form" :model="form">
        <el-form-item label="域名:">
          <el-input v-model="form.domain" placeholder="请输入域名" @blur="domainBlur"></el-input>
        </el-form-item>
        <el-form-item label="特征内容:">
          <el-input
            type="textarea"
            v-model="form.content"
            placeholder="请输入特征内容"
            maxlength="500"
            show-word-limit
            :autosize="{ minRows: 5, maxRows: 10 }"
            resize="none"
            @blur="contentBlur"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="sample-dialog-footer">
      <el-button class="submit-btn" @click="submit" :disabled="disabled">确定提交</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visiable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        domain: '',
        content: ''
      },
      disabled: true
    };
  },
  methods: {
    close() {
      this.$emit('update:visiable', false);
    },
    domainBlur() {
      if (this.form.domain != '' && this.form.content != '') {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    contentBlur() {
      if (this.form.domain != '' && this.form.content != '') {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    submit() {
      this.close();
    }
  }
};
</script>

<style scoped lang="less">
.sample-dialog {
  /deep/.el-dialog {
    border-radius: 10px;
    .el-dialog__header {
      padding: 40px 20px 10px;
      .sample-dialog-title {
        position: relative;
        color: #000;
        font-size: 22px;
        font-weight: 600;
        color: #333333;
        line-height: 30px;
      }
      .close-btn {
        position: absolute;
        top: -25px;
        right: 0;
        font-size: 28px;
        color: #000;
        cursor: pointer;
      }
    }

    .el-dialog__body {
      padding: 20px 50px 0;
      .sample-dialog-body {
        /deep/.el-form {
          .el-form-item__label {
            font-size: 14px;
            font-weight: 400;
            color: #333333;
            line-height: 20px;
          }
        }
      }
    }
    .el-dialog__footer {
      padding: 10px 20px 50px;
      .sample-dialog-footer {
      }
    }
    .submit-btn {
      color: #ffffff;
      width: 200px;
      border-radius: 20px;
      background: linear-gradient(270deg, #dc3828 0%, #e5552d 100%);
      &.is-disabled {
        background: #faa89a;
        &:hover {
          background: #fba9ab;
        }
      }
    }
  }
}
</style>
