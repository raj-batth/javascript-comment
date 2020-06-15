<template>
  <div>
    <div class="container">
      <img
        :src="commentData.authorImg"
        class="author-img"
        :style="
          `width:${commentData.imgSize}px; height:${commentData.imgSize}px`
        "
      />
      <div class="comment">
        <div class="comment-header">
          <div class="header-data">
            <strong id="author">{{ commentData.author }}</strong>
          </div>
          <div class="badge">
            <strong>AUTHOR</strong>
          </div>
          <div class="light-color-text header-data">
            • <span>{{ commentData.time }}</span>
          </div>
        </div>
        <p>{{ commentData.commentText }}</p>
        <div class="comment-footer light-color-text" v-if="commentData.footer">
          <button @click="replyButtonClick">REPLY</button>
          <button @click="repliesButton">
            {{ commentData.totalReplies }} REPLIES
          </button>
          <button @click="likeComment">{{ commentData.likeCount }}</button>
          <button @click="dislikeComment" class="content">
            {{ commentData.dislikeCount }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentData: Object,
    likeComment: Function,
    dislikeComment: Function,
    repliesButton: Function,
    replyButtonClick: Function,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
  margin: 5px 5%;
  padding: 20px 10px;
}
.comment {
  text-align: justify;
  margin-left: 20px;
}
.author-img {
  border-radius: 50%;
}
.header-data {
  display: inline-block;
  padding: 0.2rem 0.2rem;
  text-align: center;
  border-radius: 20px;
}
.badge {
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.2rem 0.7rem;
  text-align: center;
  margin: 0 0.1rem;
  background: #313131;
  color: #fff;
  border-radius: 20px;
}
.light-color-text {
  color: #c7c7c7;
  font-size: 12px;
}

button:first-child {
  padding: 0;
}
button:last-child:before,
button:nth-last-child(2):before {
  content: '';
  border: solid #c7c7c7;
  border-width: 0 1.5px 1.5px 0;
  margin: 0 6px 0 0;
  display: inline-block;
  width: 7px;
  height: 7px;
  position: relative;
  transform: rotate(45deg);
  bottom: 2px;
}
button:nth-last-child(2):before {
  transform: rotate(225deg);
  top: 2px;
}
.comment:hover .comment-footer.light-color-text {
  color: black;
}
.comment:hover button:last-child:before {
  border-color: black;
}
.comment:hover button:nth-last-child(2):before {
  border-color: black;
}
</style>
