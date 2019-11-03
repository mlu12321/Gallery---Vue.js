<template>
  <div class="dropper">
    <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*" />
    <span>Drag files here</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UploadForm",
  methods: mapActions(["uploadImages"])
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.dropper:hover {
  background-color: #eee;
}
input {
  width: 100%;
  height: 30vh;
  /* 大小与父元素一样，不为元素预留空间，
  通过相对于最近非 static 定位祖先元素的偏移确定位置 */
  position: absolute;
  opacity: 0;
}
</style>