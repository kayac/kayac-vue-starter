import { mount } from '@vue/test-utils';
import RegisterForm from '../components/RegisterForm.vue';

describe("RegisterForm", () => {
  it("submitすると送信用のメソッドに値が入っているかどうかをチェック", () => {
    const wrapper = mount(RegisterForm)

    // wrapper.setData({ name: 'name1' })
    // wrapper.setData({ mail: 'aaa@aa.a' })
    // wrapper.setData({ password: 'aaaa' })
    
    wrapper.find("button").trigger("click")
    expect(wrapper.vm.isValidation).toBe(true)
  })
})