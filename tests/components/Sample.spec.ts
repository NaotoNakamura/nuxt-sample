import { mount } from '@vue/test-utils'
import Target from '../../components/Sample.vue'

describe('Sample.vue', () => {
  test('タイトル文字列の表示確認', () => {
    const wrapper = mount(Target)
    expect(wrapper.text()).toContain('サンプルコンポーネント')
  })
})
