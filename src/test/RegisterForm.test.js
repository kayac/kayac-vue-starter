import { mount } from '@vue/test-utils';
import RegisterForm from '../components/RegisterForm.vue';

describe("RegisterForm", () => {
  it("submitすると送信用のメソッドに値が入っているかどうかをチェック", () => {
    const wrapper = mount(RegisterForm)

    wrapper.setData({ 
      formData: {
        name: 'name1',
        email: "email@g.m",
        password: '444'
      }
     })
    
    wrapper.find("button").trigger("click")
    expect(wrapper.vm.isValidation).toBe(true)
  })
})