import React from 'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import {SQLite} from 'expo';

const db = SQLite.openDatabase('dairy.db');
/**
 * ホーム画面クラス
 * ホーム画面は日記の一覧を表示します。
 */
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : null,
    }
  }

  componentDidMount = () => {
    // タブ押下ごとにイベント発生させる
    this.props.navigation.addListener('didFocus', () => this._didFocus());
  }

  /**
   * タブ押下時のイベント定義
   */
  _didFocus = () => {
    this.selectAllDaireies()
  }

  // 日記の件数を全件取得
  selectAllDaireies = () => {
    db.transaction(
      tx => {
        tx.executeSql('select * from dairies order by date desc;', [], (_, { rows }) => {
          this.setState({list:rows._array})
        });
      }
    )
  }

  flatListRenderItem = (item) => {
    return(
      <FlatListRenderItem id={item.id} item={item} navigation={this.props.navigation}/>
    )
  }

  
  render() {
    return(
      <View style={style.container}>
        <FlatList data={this.state.list}
          style={style.flatList}
          keyExtractor={(item,index) => String(item.id)}
          renderItem={({item}) => this.flatListRenderItem(item)}/>
      </View>
    )
  }
}

class FlatListRenderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item : this.props.item
    }
  }
  render() {
    const item = this.state.item
    const date = new Date(item.date);
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Update',{item})}>
        <View style={style.line}>
          <View style={style.date}>
            <Text style={style.text}>{date.getFullYear()}</Text>
            <Text style={style.text}>{date.getMonth()+1}/{date.getDate()}</Text>
          </View>
          <View style={style.title}>
            <Text style={style.titileText}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const style = StyleSheet.create({
  container : {
    flex:1,
    flexDirection:'column',
    backgroundColor: "#81d4fa",
  },
  flatList: {
    flex : 1,
  },
  line : {
    flex:1,
    flexDirection:'row',
    height : 50,
    borderBottomWidth : 1,
    borderBottomColor:"#29b6f6",
    padding:5,
    alignItems : 'center'
  },
  date : {
    flex :1,
  },
  title : {
    flex : 5,
  },
  text : {
    fontSize : 14,
  },
  titileText : {
    fontSize : 14,
    fontWeight: 'bold'
  },
})