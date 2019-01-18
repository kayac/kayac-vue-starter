import { mount } from '@vue/test-utils';
import RegisterForm from '../components/RegisterForm.vue';

describe("RegisterForm", () => {
  // success check
  it("submitすると送信用のメソッドに値が入っているかどうかをチェック", () => {
    const wrapper = mount(RegisterForm),
      testData = {
        formData: {
          name: 'name1',
          mail: 'email@g.m',
          password: '444'
        }
      }
    
    wrapper.setData(testData)
    wrapper.find("button").trigger("click")

    expect(wrapper.vm.isValidation).toBe(true)
    expect(wrapper.vm.formData).toMatchObject(testData.formData)
  })

  // failure check
  it("名前が空白の場合適切なエラーが出ているかチェック", () => {
    const wrapper = mount(RegisterForm),
    testData = {
      formData: {
        name: '',
        mail: 'email@g.m',
        password: '444'
      }
    }
  
    wrapper.setData(testData)
    wrapper.find("button").trigger("click")

    expect(wrapper.vm.isValidation).toBe(false)
    expect(wrapper.find(".form-warning").text()).toEqual("名前を入力してください")
  })

  it("メールが空白の場合適切なエラーが出ているかチェック", () => {
    const wrapper = mount(RegisterForm),
    testData = {
      formData: {
        name: 'aaaaa',
        mail: '',
        password: '444'
      }
    }
  
    wrapper.setData(testData)
    wrapper.find("button").trigger("click")

    expect(wrapper.vm.isValidation).toBe(false)
    expect(wrapper.find(".form-warning").text()).toEqual("メールを入力してください")
  })

  it("パスワードが空白の場合適切なエラーが出ているかチェック", () => {
    const wrapper = mount(RegisterForm),
    testData = {
      formData: {
        name: 'aaaaa',
        mail: 'email@g.m',
        password: ''
      }
    }
  
    wrapper.setData(testData)
    wrapper.find("button").trigger("click")

    expect(wrapper.vm.isValidation).toBe(false)
    expect(wrapper.find(".form-warning").text()).toEqual("パスワードを入力してください")
  })

  it("名前が５文字以下の場合適切なエラーが出ているかチェック", () => {
    const wrapper = mount(RegisterForm),
    testData = {
      formData: {
        name: 'aa',
        mail: 'email@g.m',
        password: 'a'
      }
    }
  
    wrapper.setData(testData)
    wrapper.find("button").trigger("click")

    expect(wrapper.vm.isValidation).toBe(false)
    expect(wrapper.find(".form-warning").text()).toEqual("名前は５文字以上にしてください")
  })

  it("メールに@が含まれない場合適切なエラーが出ているかチェック", () => {
    const wrapper = mount(RegisterForm),
    testData = {
      formData: {
        name: 'aaaaa',
        mail: 'email.com',
        password: 'a'
      }
    }
  
    wrapper.setData(testData)
    wrapper.find("button").trigger("click")

    expect(wrapper.vm.isValidation).toBe(false)
    expect(wrapper.find(".form-warning").text()).toEqual("正しいメールの形式にしてください")
  })

  it("メールに.が含まれない場合適切なエラーが出ているかチェック", () => {
    const wrapper = mount(RegisterForm),
    testData = {
      formData: {
        name: 'aaaaa',
        mail: 'email@es',
        password: 'a'
      }
    }
  
    wrapper.setData(testData)
    wrapper.find("button").trigger("click")

    expect(wrapper.vm.isValidation).toBe(false)
    expect(wrapper.find(".form-warning").text()).toEqual("正しいメールの形式にしてください")
  })
})