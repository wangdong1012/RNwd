import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import WebViewPage from '../pages/WebViewPage'

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {navigator} = this.props
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{color: '#333', fontSize: 20, marginBottom: 20, marginTop: 100}}>Unofficial V2EX React-Native App</Text>
        <Text style={{color: '#333', }}>作者: WangDong </Text>
        <View style={{marginVertical: 40}}>
          <Text style={{color: '#333', fontSize: 16}}>RN开发:</Text>
          {
            ['React-Native', 'React', '第三方库']
              .map((i, k) => <Text key={k} style={{color: '#333', fontSize: 16}}>{i}</Text>)
          }
        </View>
        <TouchableOpacity onPress={() => {
            navigator.push({
              name: 'WebView',
              component: WebViewPage,
            })
          }}
        >
        </TouchableOpacity>

      </View>
    )
  }
}
