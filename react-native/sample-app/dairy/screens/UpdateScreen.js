import React from 'react';
import {View,StyleSheet,TextInput,Button,Alert,TouchableOpacity,Text} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {SQLite} from 'expo';

const db = SQLite.openDatabase('dairy.db');

/**
 * 日記更新画面クラス
 * 日記を更新する画面です。
 */
export default class UpdateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.navigation.state.params.item.id, 
      date : new Date(this.props.navigation.state.params.item.date),
      title : this.props.navigation.state.params.item.title,
      body : this.props.navigation.state.params.item.body,
      isChangeFlg : this.props.title?true:false,
      isDateTimePickerVisible: false,
    }
    this.onChangeTitle = this.onChangeTitle.bind();
    this.onChangeBody = this.onChangeBody.bind();
    this.onClick = this.onClick.bind();
  }

  // タイトルテキストのハンドリング
  onChangeTitle = (title) => {
    this.setState({title : title})
  }

  // ボディのハンドリング
  onChangeBody = (body) => {
    this.setState({body : body})
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    this.setState({date:date});
    console.log('A date has been picked: ', date);
    this.hideDateTimePicker();
  };

  updateDairy = () => {
    // 登録データの生成
    db.transaction(tx => {
      tx.executeSql('update dairies set date = ? , title = ? , body = ? where id = ?',[this.state.date,this.state.title,this.state.body,this.state.id])
    })
  }
  
  // ボタンクリックアクション
  onClick = () => {
    
    // 入力チェック
    if(!this.state.title) {
      Alert.alert(
        'Error',
        'タイトルを入力してください',
        [{text: 'OK', onPress: () => console.log('OK Pressed')},],
        {cancelable: false},
      )
      return;
    }
    if(!this.state.body) {
      Alert.alert(
        'Error',
        '内容を入力してください',
        [{text: 'OK', onPress: () => console.log('OK Pressed')},],
        {cancelable: false},
      )
      return;
    }
    // 登録
    this.updateDairy();

    // 成功のアラート
    Alert.alert(
      'Successes',
      'メッセージの更新が完了しました。',
      [{text: 'OK', onPress: () => console.log('OK Pressed')},],
      {cancelable: false},
    )
  }

  render() {
    return(
      <View style={styles.container} key={this.state.id}>
        <TouchableOpacity onPress={this.showDateTimePicker}>
          <View style={styles.date}>
            <Text>{this.state.date.getFullYear()}/{this.state.date.getMonth() + 1}/{this.state.date.getDate()}</Text>
          </View>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
        <View style={styles.title}>
          <TextInput placeholder='title' onChangeText={this.onChangeTitle} value={this.state.title}/>
        </View>
        <View style={styles.body}>
          <TextInput placeholder='body' multiline={true} onChangeText={this.onChangeBody} value={this.state.body} />
        </View>
        <Button title={'Change'} onPress={this.onClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    flexDirection:'column',
    backgroundColor: "#81d4fa",
  },
  date : {
    height:50,
    padding:5,
    borderBottomWidth : 1,
    borderBottomColor:"#29b6f6",
    justifyContent : 'center',
  },
  title : {
    height:50,
    padding : 5,
    borderBottomWidth : 1,
    borderBottomColor:"#29b6f6",
    justifyContent : 'center',
  },
  body : {
    flex : 1,
    padding : 5,
    borderBottomWidth : 1,
    borderBottomColor:"#29b6f6",
  }
})