<template>
  <div id="app">
    <h1>Test</h1>
    <div style="color:red;marginBottom:10px;">
      <!-- <button @click="loadFromYoutube">Load Data From Youtube</button> -->
      <a class="button" @click="getCommentsAndReplies"
        >Load data from YouTube</a
      >
    </div>
    <Comment
      :commentData="comment"
      :likeComment="likeComment"
      :dislikeComment="dislikeComment"
      :repliesButton="repliesButton"
      :replyButtonClick="replyButtonClick"
    />
    <div class="replies">
      <template v-if="isReplies && repliesClicked">
        <Comment
          v-for="(reply, index) in replies"
          :key="index"
          :commentData="reply"
          :likeComment="likeComment"
          :dislikeComment="dislikeComment"
          :repliesButton="repliesButton"
          :replyButtonClick="replyButtonClick"
        />
      </template>
      <template v-else-if="!isReplies && repliesClicked">
        There are no replies here, for Demo please click on "Load data from
        YouTube."
      </template>
      <ReplyForm v-if="replyForm" :replyForm="replyForm" />
    </div>
  </div>
</template>

<script>
import Comment from './components/Comment';
import ReplyForm from './components/ReplyForm';
import axios from 'axios';
import moment from 'moment';

const commentId = 'UgxrZLl6zVD4pcd1UNJ4AaABAg';

export default {
  name: 'App',
  components: { Comment, ReplyForm },
  data() {
    return {
      comment: {
        author: 'Brad',
        time: '2 MINUTES AGO',
        authorImg: require('./assets/logo.png'),
        commentText:
          'So what the german automaker is likely to focus today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.',
        likeCount: 123,
        dislikeCount: 0,
        totalReplies: 0,
        imgSize: 50,
        footer: true,
      },
      isReplies: false,
      repliesClicked: false,
      replies: null,

      // Reply form
      replyForm: false,
    };
  },
  methods: {
    likeComment() {
      this.comment.likeCount += 1;
    },
    dislikeComment() {
      this.comment.dislikeCount += 1;
    },
    repliesButton() {
      this.repliesClicked = !this.repliesClicked;
      this.replyForm = false;
    },
    replyButtonClick() {
      this.repliesClicked = false;
      this.replyForm = !this.replyForm;
    },

    async apiCall(params) {
      try {
        let apiKey =
          process.env.NODE_ENV !== 'production'
            ? process.env.VUE_APP_API_KEY
            : process.env.API_KEY;

        return await axios.get(`/comments?part=snippet&key=${apiKey}`, {
          params,
        });
      } catch (error) {
        return 'error';
      }
    },

    async getCommentsAndReplies() {
      const params = {
        id: commentId,
      };

      const response = await this.apiCall(params);

      if (response === 'error') {
        this.$toasted.show('ERROR: Fetching the comment.');
        return false;
      }

      this.comment.commentText = response.data.items[0].snippet.textDisplay;
      this.comment.likeCount = response.data.items[0].snippet.likeCount;
      this.comment.author = response.data.items[0].snippet.authorDisplayName;
      this.comment.authorImg =
        response.data.items[0].snippet.authorProfileImageUrl;
      this.comment.time = moment(response.data.items[0].snippet.updatedAt)
        .fromNow()
        .toUpperCase();

      await this.getReplies();
    },

    async getReplies() {
      const params = {
        parentId: commentId,
      };

      const response = await this.apiCall(params);

      if (response === 'error') {
        this.$toasted.show('ERROR: Fetching the replies.');
        return false;
      }

      this.isReplies = true;
      this.replies = response.data.items.map((reply, i) => ({
        commentText: response.data.items[i].snippet.textDisplay,
        author: response.data.items[i].snippet.authorDisplayName,
        authorImg: response.data.items[i].snippet.authorProfileImageUrl,
        time: moment(response.data.items[i].snippet.updatedAt)
          .fromNow()
          .toUpperCase(),
        imgSize: 25,
        footer: false,
      }));
      this.comment.totalReplies = this.replies.length;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  box-sizing: border-box;
}
.replies {
  width: 85%;
  margin: 0 10%;
  padding: 5px;
}
button {
  /* all: unset; */
  padding: 0 15px;
  cursor: pointer;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
}
a.button {
  display: inline-block;
  padding: 0.46em 1.6em;
  border: 0.1em solid #f14e4e;
  border-radius: 0.12em;
  text-decoration: none;
  color: #f14e4e;
  text-shadow: 0 0.04em 0.04em rgb(236, 202, 209);
  text-align: center;
}
</style>
