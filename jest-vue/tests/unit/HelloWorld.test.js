import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
// import Vue from 'vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    // const root = document.createElement('div');
    // root.className = 'root'
    // document.body.appendChild(root);
    // new Vue({
    //   render: h => h(HelloWorld, {
    //     props: {
    //       msg: 'lsqy'
    //     }
    //   })
    // }).$mount('.root')
    // console.log(document.body.innerHTML)
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
