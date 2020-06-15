import App from '../../src/App.vue';
import { shallowMount } from '@vue/test-utils';

describe('App.vue', () => {
  const wrapper = shallowMount(App);
  it('Like button increment', () => {
    wrapper.vm.comment.likeCount = 5;
    wrapper.vm.likeComment();
    expect(wrapper.vm.comment.likeCount).toBe(6);
  });
  it('Dislike button increment', () => {
    wrapper.vm.comment.dislikeCount = 0;
    wrapper.vm.dislikeComment();
    expect(wrapper.vm.comment.dislikeCount).toBe(1);
  });
  it('Testing replies button', () => {
    wrapper.vm.repliesButton();
    expect(wrapper.vm.repliesClicked).toBe(true);
    expect(wrapper.vm.replyForm).toBe(false);
  });
  it('Testing reply button', () => {
    wrapper.vm.replyButtonClick();
    expect(wrapper.vm.replyForm).toBe(true);
    expect(wrapper.vm.repliesClicked).toBe(false);
  });
});
