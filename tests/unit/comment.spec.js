import Comment from '../../src/components/Comment.vue';
import { mount } from '@vue/test-utils';

describe('Comment.vue', () => {
  const wrapper = mount(Comment, {
    propsData: {
      commentData: {
        author: 'Brad',
        time: '2',
        authorImg: './assets/logo.png',
        commentText: 'test',
        likeCount: 123,
        dislikeCount: 0,
        totalReplies: 0,
        imgSize: 50,
        footer: true,
      },
    },
  });

  it('Testing props', () => {
    expect(wrapper.find('#author').text()).toBe('Brad');
    expect(wrapper.find('span').text()).toBe('2');
    expect(wrapper.find('img').attributes('src')).toEqual('./assets/logo.png');
    expect(wrapper.find('p').text()).toBe('test');
    expect(wrapper.props().commentData.likeCount).toBe(123);
    expect(wrapper.props().commentData.dislikeCount).toBe(0);
    expect(wrapper.props().commentData.totalReplies).toBe(0);
    expect(wrapper.props().commentData.imgSize).toBe(50);
    expect(wrapper.props().commentData.footer).toBe(true);
  });
});
